import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2, Save, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import NavBar from '@/components/common/NavBar';
import { useAuth } from '@/contexts/AuthContext';
// @ts-ignore
import { supabase } from '@/db/supabase';
import { toast } from 'sonner';

interface PromptSection {
  type: 'character_experience' | 'recipe_customisation';
  label: string;
  description: string;
}

const SECTIONS: PromptSection[] = [
  {
    type: 'character_experience',
    label: 'Character Experience',
    description: 'Controls how Groq creates the storytelling character and responds in conversations. The memory summary and user message are appended automatically.',
  },
  {
    type: 'recipe_customisation',
    label: 'Recipe Customisation',
    description: 'Controls how Groq adapts recipes. Selected filters, custom text, and the required output format are appended automatically.',
  },
];

export default function ManagePromptsPage() {
  const { profile, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [prompts, setPrompts] = useState<Record<string, string>>({
    character_experience: '',
    recipe_customisation: '',
  });
  const [originals, setOriginals] = useState<Record<string, string>>({
    character_experience: '',
    recipe_customisation: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!authLoading && profile?.role !== 'admin') navigate('/', { replace: true });
  }, [authLoading, profile, navigate]);

  useEffect(() => {
    if (profile?.role !== 'admin') return;
    (async () => {
      setLoading(true);
      const { data } = await supabase.from('prompts').select('type, content');
      if (data) {
        const map: Record<string, string> = {};
        for (const row of data) map[row.type] = row.content;
        setPrompts(p => ({ ...p, ...map }));
        setOriginals(p => ({ ...p, ...map }));
      }
      setLoading(false);
    })();
  }, [profile]);

  const handleSave = async (type: 'character_experience' | 'recipe_customisation') => {
    setSaving(s => ({ ...s, [type]: true }));
    const { error } = await supabase
      .from('prompts')
      .update({ content: prompts[type], updated_at: new Date().toISOString() })
      .eq('type', type);
    setSaving(s => ({ ...s, [type]: false }));
    if (error) { toast.error('Failed to save prompt'); return; }
    setOriginals(o => ({ ...o, [type]: prompts[type] }));
    toast.success('Prompt saved!');
  };

  const handleReset = (type: string) => {
    setPrompts(p => ({ ...p, [type]: originals[type] }));
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-sky-blue animate-spin" />
      </div>
    );
  }

  if (profile?.role !== 'admin') return null;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 pt-20 px-4 md:px-8 pb-12 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8 flex items-start gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="border border-white/20 text-frost/70 hover:bg-white/10 shrink-0 mt-1"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />Back
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-frost text-balance">Manage Prompts</h1>
            <p className="text-sm text-muted-foreground mt-1 text-pretty">
              Configure the AI system prompts that power SnackGlobe's experiences.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {SECTIONS.map(section => {
            const isDirty = prompts[section.type] !== originals[section.type];
            return (
              <div key={section.type} className="glass-card rounded-2xl border border-white/10 p-6 space-y-4">
                <div>
                  <h2 className="text-lg font-bold text-frost text-balance">{section.label}</h2>
                  <p className="text-sm text-muted-foreground mt-1 text-pretty">{section.description}</p>
                </div>

                <Textarea
                  value={prompts[section.type]}
                  onChange={e => setPrompts(p => ({ ...p, [section.type]: e.target.value }))}
                  rows={14}
                  className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 text-sm resize-y font-mono"
                  placeholder="Enter prompt content…"
                />

                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => handleSave(section.type)}
                    disabled={saving[section.type] || !isDirty}
                    className="glass-button-primary font-medium h-9"
                  >
                    {saving[section.type]
                      ? <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      : <Save className="w-4 h-4 mr-2" />}
                    Save
                  </Button>
                  {isDirty && (
                    <Button
                      variant="ghost"
                      onClick={() => handleReset(section.type)}
                      className="border border-white/20 text-frost/60 hover:bg-white/10 h-9 text-sm"
                    >
                      <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                      Discard
                    </Button>
                  )}
                  {isDirty && (
                    <span className="text-xs text-sunshine/80 ml-1">Unsaved changes</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
