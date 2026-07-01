import { useState, useCallback, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  AlertTriangle, Loader2, Check, ArrowLeft,
  Send, Play, X, RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import NavBar from '@/components/common/NavBar';
import AuthModal from '@/components/auth/AuthModal';
import { getRecipeBySlug } from '@/data/recipes';
import { useGroq } from '@/contexts/GroqContext';
import { useAuth } from '@/contexts/AuthContext';
import { saveRecipe, isRecipeSaved, upsertCustomisedRecipe, getPrompt, getExperience, upsertExperience, deleteExperience } from '@/api/shack';
import type { AdaptedRecipe, SelectedFilters, RecipeTab } from '@/types/index';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

// ─── Filter Options ───────────────────────────────────────────────────────────
const HEALTH_GOALS = ['Low Sugar', 'High Protein', 'Low Carb', 'Gluten-Free', 'Vegan', 'Low Fat', 'High Fibre', 'Heart Healthy'];
const DIETARY_RESTRICTIONS = ['Dairy-Free', 'Egg-Free', 'Nut-Free', 'Soy-Free', 'Alcohol-Free', 'Lard-Free', 'Low FODMAP'];
const CUISINE_FUSION = ['Asian', 'European', 'North America', 'South America', 'Middle East', 'African', 'Oceania', 'Antarctica'];

// ─── Types ────────────────────────────────────────────────────────────────────
interface ChatMessage {
  role: 'user' | 'character';
  content: string;
}

interface ConvMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// ─── Groq API helpers ─────────────────────────────────────────────────────────
async function callGroq(messages: { role: string; content: string }[], groqKey: string, maxTokens = 650): Promise<string> {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${groqKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages, temperature: 0.88, max_tokens: maxTokens }),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  return data.choices?.[0]?.message?.content || '';
}

async function generateStory(
  recipe: { name: string; country: string; continent: string; cultural_authenticity: string },
  groqKey: string,
  characterPrompt: string,
  memorySummary: string
): Promise<{ segments: string[]; fullText: string; systemCtx: string }> {
  const memoryPart = memorySummary ? `\n\nPrevious memory of this user: ${memorySummary}` : '';
  const userMsg = `Tell the story of "${recipe.name}" from ${recipe.country} (${recipe.continent}). Cultural note: ${recipe.cultural_authenticity}${memoryPart}`;
  const raw = await callGroq([
    { role: 'system', content: characterPrompt },
    { role: 'user', content: userMsg },
  ], groqKey, 650);
  let parsed: { character: string; monologue: string };
  try { parsed = JSON.parse(raw); }
  catch {
    const m = raw.match(/\{[\s\S]*\}/);
    if (!m) throw new Error('Could not parse Groq response');
    parsed = JSON.parse(m[0]);
  }
  const segments = parsed.monologue.split('[pause]').map((s: string) => s.trim()).filter(Boolean);
  return {
    segments,
    fullText: segments.join(' '),
    systemCtx: `You are continuing a conversation as the same character: ${parsed.character}. 
You are ALWAYS FEMALE. Maintain the exact same personality, tone, and emotional state from the original monologue about "${recipe.name}" from ${recipe.country}.
The user is an eager, curious learner who wants to understand your tradition. Respond warmly, in character, as if you are still in that moment.
Keep responses 80–150 words. Insert [pause] 2–3 times. Sound completely human.`,
  };
}

async function continueConversation(history: ConvMessage[], userMessage: string, groqKey: string): Promise<string> {
  return callGroq([...history, { role: 'user', content: userMessage }], groqKey, 400);
}

async function customiseRecipe(
  recipeName: string, country: string, original: AdaptedRecipe,
  filters: SelectedFilters, customText: string,
  groqKey: string, customPrompt: string
): Promise<{ recipe: AdaptedRecipe; notes: string }> {
  const outputFormat = `\nReturn ONLY a JSON object:
{"recipe":{"name":"string","servings":"string","time":"string","difficulty":"string","ingredients":{"Section":["item"]},"steps":["step"],"making_tips":["tip"],"notes":"what changed"}}
No markdown, no backticks.`;
  const filtersText = [
    filters.healthGoals.length ? `Health Goals: ${filters.healthGoals.join(', ')}` : '',
    filters.dietaryRestrictions.length ? `Dietary Restrictions: ${filters.dietaryRestrictions.join(', ')}` : '',
    filters.cuisineFusion.length ? `Cuisine Fusion: ${filters.cuisineFusion.join(', ')}` : '',
    customText.trim() ? `Special request: "${customText.trim()}"` : '',
  ].filter(Boolean).join('\n');

  const userMsg = `Recipe: "${recipeName}" from ${country}\n\nCustomisation requests:\n${filtersText}\n\nCurrent recipe:\n${JSON.stringify(original, null, 2)}${outputFormat}`;
  const raw = await callGroq([
    { role: 'system', content: customPrompt },
    { role: 'user', content: userMsg },
  ], groqKey, 1400);
  try {
    const parsed = JSON.parse(raw);
    return { recipe: parsed.recipe ?? parsed, notes: parsed.recipe?.notes ?? '' };
  } catch {
    const m = raw.match(/\{[\s\S]*\}/);
    if (!m) throw new Error('Parse error');
    const parsed = JSON.parse(m[0]);
    return { recipe: parsed.recipe ?? parsed, notes: parsed.recipe?.notes ?? '' };
  }
}

function buildMemorySummary(recipeName: string, country: string, chatLog: ChatMessage[]): string {
  if (chatLog.length === 0) return '';
  const lines = chatLog.slice(-10).map(m => `${m.role === 'user' ? 'User' : 'Character'}: ${m.content.slice(0, 120)}`);
  return `Character told story of "${recipeName}" (${country}). Recent exchange:\n${lines.join('\n')}`;
}

// ─── Speaking Waves ────────────────────────────────────────────────────────────
function SpeakingWaves({ active }: { active: boolean }) {
  const heights = [0.4, 0.75, 1, 0.75, 0.55, 0.85, 0.6, 0.9, 0.5, 0.7, 1, 0.65, 0.8, 0.45, 0.7];
  return (
    <div className="flex items-center justify-center gap-[3px] h-14">
      {heights.map((h, i) => (
        <div key={i} className={cn('w-[3px] rounded-full transition-all', active ? 'bg-sky-blue' : 'bg-sky-blue/25')}
          style={{
            height: active ? `${h * 48}px` : '6px',
            animation: active ? `wave-bar 0.9s ease-in-out ${(i * 0.06).toFixed(2)}s infinite alternate` : 'none',
          }}
        />
      ))}
      <style>{`@keyframes wave-bar{from{transform:scaleY(0.3);opacity:0.6}to{transform:scaleY(1);opacity:1}}`}</style>
    </div>
  );
}

// ─── Bookmark icons ───────────────────────────────────────────────────────────
function BookmarkPlusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      <line x1="12" y1="8" x2="12" y2="14" /><line x1="9" y1="11" x2="15" y2="11" />
    </svg>
  );
}
function BookmarkCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      <polyline points="9 11 12 14 16 9" />
    </svg>
  );
}

// ─── Filter Chip ──────────────────────────────────────────────────────────────
function FilterChip({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} className={cn(
      'px-3 py-1 rounded-full text-xs font-medium border transition-all',
      active ? 'bg-sky-blue/20 border-sky-blue/60 text-sky-blue' : 'bg-white/5 border-white/15 text-frost/60 hover:border-white/30 hover:text-frost/80'
    )}>
      {active && <Check className="w-3 h-3 inline mr-1" />}{label}
    </button>
  );
}

// ─── Recipe card (read-only, no collapse) ────────────────────────────────────
function RecipeCard({ recipe }: { recipe: AdaptedRecipe }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span>⏱ {recipe.time}</span>
        <span>👥 {recipe.servings}</span>
        <span>📊 {recipe.difficulty}</span>
      </div>
      <div>
        <p className="text-xs font-semibold text-frost/60 uppercase tracking-wider mb-2">Ingredients</p>
        {Object.entries(recipe.ingredients).map(([section, items]) => (
          <div key={section} className="mb-3">
            {Object.keys(recipe.ingredients).length > 1 && (
              <p className="text-xs font-medium text-sky-blue mb-1">{section}</p>
            )}
            <ul className="space-y-0.5">
              {(items as string[]).map((item, i) => (
                <li key={i} className="text-sm text-frost/80 flex items-start gap-2">
                  <span className="text-sky-blue mt-1 shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <p className="text-xs font-semibold text-frost/60 uppercase tracking-wider mb-2">Steps</p>
        <ol className="space-y-2">
          {recipe.steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-sm text-frost/80">
              <span className="text-sky-blue font-bold shrink-0 w-5 text-right">{i + 1}.</span>
              <span className="text-pretty">{step}</span>
            </li>
          ))}
        </ol>
      </div>
      {recipe.making_tips?.length ? (
        <div>
          <p className="text-xs font-semibold text-frost/60 uppercase tracking-wider mb-2">Tips</p>
          <ul className="space-y-1">
            {recipe.making_tips.map((tip, i) => (
              <li key={i} className="text-xs text-frost/60 flex items-start gap-2 text-pretty">
                <span className="text-gold shrink-0">✦</span>{tip}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function UncoverPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const recipe = slug ? getRecipeBySlug(slug) : undefined;
  const { groqApiKey } = useGroq();
  const { user } = useAuth();

  const originalRecipe: AdaptedRecipe | null = recipe ? {
    name: recipe.name, servings: recipe.servings, time: recipe.time,
    difficulty: recipe.difficulty, ingredients: recipe.ingredients,
    steps: recipe.steps, making_tips: recipe.making_tips,
  } : null;

  // ── Story/voice state ──
  type StoryStatus = 'idle' | 'loading' | 'speaking' | 'done' | 'error' | 'listening';
  const [storyStatus, setStoryStatus] = useState<StoryStatus>('idle');
  const [storyError, setStoryError] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [convHistory, setConvHistory] = useState<ConvMessage[]>([]);
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [sendingReply, setSendingReply] = useState(false);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // ── Experience memory ──
  const [hasExperience, setHasExperience] = useState(false);
  const [memorySummary, setMemorySummary] = useState('');
  const [loadingExperience, setLoadingExperience] = useState(true);

  // ── DB prompts ──
  const [characterPrompt, setCharacterPrompt] = useState('');
  const [customisePrompt, setCustomisePrompt] = useState('');

  // ── Recipe/craft state ──
  const [filters, setFilters] = useState<SelectedFilters>({ healthGoals: [], dietaryRestrictions: [], cuisineFusion: [] });
  const [customisedRecipe, setCustomisedRecipe] = useState<AdaptedRecipe | null>(null);
  const [activeTab, setActiveTab] = useState<RecipeTab>('original');
  const [customText, setCustomText] = useState('');
  const [loadingCustomise, setLoadingCustomise] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMsg, setAuthMsg] = useState('');
  const [editNote, setEditNote] = useState<string | null>(null);

  // ── Save state ──
  const [isSaved, setIsSaved] = useState(false);
  const [checkingSaved, setCheckingSaved] = useState(true);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    synthRef.current = window.speechSynthesis;
    return () => synthRef.current?.cancel();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatLog]);

  // Load DB prompts + experience + saved status on mount
  useEffect(() => {
    (async () => {
      const [cp, rp] = await Promise.all([
        getPrompt('character_experience'),
        getPrompt('recipe_customisation'),
      ]);
      setCharacterPrompt(cp);
      setCustomisePrompt(rp);
    })();
  }, []);

  useEffect(() => {
    if (!user || !slug) { setLoadingExperience(false); setCheckingSaved(false); return; }
    (async () => {
      const [exp, saved] = await Promise.all([
        getExperience(slug),
        isRecipeSaved(slug),
      ]);
      setHasExperience(exp.exists);
      setMemorySummary(exp.summary);
      setIsSaved(saved);
      setLoadingExperience(false);
      setCheckingSaved(false);
    })();
  }, [user, slug]);

  // ── Speech helpers ──
  const speakText = useCallback((text: string, onEnd?: () => void) => {
    if (!synthRef.current) return;
    synthRef.current.cancel();
    const cleanText = text.replace(/\[pause\]/g, '...');
    const utter = new SpeechSynthesisUtterance(cleanText);
    const voices = synthRef.current.getVoices();
    const femVoice = voices.find(v =>
      v.name.includes('Samantha') || v.name.includes('Victoria') ||
      v.name.includes('Karen') || v.name.includes('Moira') ||
      v.name.toLowerCase().includes('female') || v.name.includes('Fiona')
    ) || voices.find(v => v.lang.startsWith('en')) || voices[0];
    utter.voice = femVoice || null;
    utter.rate = 0.87; utter.pitch = 1.1; utter.volume = 1;
    setIsSpeaking(true);
    utter.onend = () => { setIsSpeaking(false); onEnd?.(); };
    utter.onerror = () => { setIsSpeaking(false); onEnd?.(); };
    synthRef.current.speak(utter);
  }, []);

  const startStory = useCallback(async () => {
    if (!recipe) return;
    synthRef.current?.cancel();
    setStoryStatus('loading');
    setStoryError('');
    setChatLog([]);
    setConvHistory([]);
    try {
      const { segments, fullText, systemCtx } = await generateStory(
        recipe, groqApiKey, characterPrompt, memorySummary
      );
      const initHistory: ConvMessage[] = [
        { role: 'system', content: systemCtx },
        { role: 'assistant', content: fullText },
      ];
      setConvHistory(initHistory);
      setStoryStatus('speaking');
      const doSpeak = () => {
        speakText(segments.join(' ... '), () => setStoryStatus('done'));
      };
      if (window.speechSynthesis.getVoices().length) { doSpeak(); }
      else {
        window.speechSynthesis.onvoiceschanged = () => {
          window.speechSynthesis.onvoiceschanged = null;
          doSpeak();
        };
        setTimeout(doSpeak, 800);
      }
      // Mark as experienced in Supabase
      if (user && slug) {
        setHasExperience(true);
        await upsertExperience(slug, memorySummary || `Started experience for "${recipe.name}"`);
      }
    } catch (e) {
      setStoryStatus('error');
      setStoryError((e as Error).message || 'Failed to generate story');
      toast.error('The tradition remains buried awaiting your arrival.');
    }
  }, [recipe, groqApiKey, speakText, characterPrompt, memorySummary, user, slug]);

  const handleSendReply = useCallback(async () => {
    if (!userInput.trim() || sendingReply) return;
    const msg = userInput.trim();
    setUserInput('');
    setSendingReply(true);
    const newChatLog: ChatMessage[] = [...chatLog, { role: 'user', content: msg }];
    setChatLog(newChatLog);
    try {
      const reply = await continueConversation(convHistory, msg, groqApiKey);
      const cleanReply = reply.replace(/\[pause\]/g, '...');
      const updatedLog: ChatMessage[] = [...newChatLog, { role: 'character', content: cleanReply }];
      setChatLog(updatedLog);
      const newHistory: ConvMessage[] = [
        ...convHistory,
        { role: 'user', content: msg },
        { role: 'assistant', content: reply },
      ];
      setConvHistory(newHistory);
      setStoryStatus('listening');
      speakText(reply, () => setStoryStatus('done'));
      // Update memory summary in Supabase
      if (user && slug && recipe) {
        const summary = buildMemorySummary(recipe.name, recipe.country, updatedLog);
        setMemorySummary(summary);
        await upsertExperience(slug, summary);
      }
    } catch {
      toast.error('Could not send reply.');
    } finally {
      setSendingReply(false);
    }
  }, [userInput, sendingReply, convHistory, chatLog, groqApiKey, speakText, user, slug, recipe]);

  const handleStartNew = useCallback(async () => {
    if (!slug) return;
    synthRef.current?.cancel();
    setStoryStatus('idle');
    setChatLog([]);
    setConvHistory([]);
    setMemorySummary('');
    setHasExperience(false);
    if (user) await deleteExperience(slug);
    toast.success('Experience reset. Start fresh!');
  }, [slug, user]);

  // ── Filter helpers ──
  const toggleFilter = (key: keyof SelectedFilters, val: string) => {
    setFilters(f => {
      const arr = f[key] as string[];
      return { ...f, [key]: arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val] };
    });
  };
  const hasFilters = filters.healthGoals.length + filters.dietaryRestrictions.length + filters.cuisineFusion.length > 0;
  const canCustomise = hasFilters || customText.trim().length > 0;

  const handleCustomise = async () => {
    if (!recipe || !originalRecipe || !canCustomise) return;
    setLoadingCustomise(true);
    try {
      const { recipe: adapted } = await customiseRecipe(
        recipe.name, recipe.country, originalRecipe,
        filters, customText, groqApiKey, customisePrompt
      );
      setCustomisedRecipe(adapted);
      setEditNote(adapted.notes ?? null);
      setActiveTab('customised');
      toast.success('Recipe customised!');
      // Auto-save to Shack
      if (user) {
        await saveRecipeToShack(adapted);
        // Persist customised recipe in saved_recipes
        await upsertCustomisedRecipe(recipe.slug, adapted);
      }
    } catch { toast.error('Failed to customise recipe.'); }
    finally { setLoadingCustomise(false); }
  };

  const saveRecipeToShack = async (customised?: AdaptedRecipe) => {
    if (!recipe || !originalRecipe) return;
    if (!user) { setAuthMsg('Sign in to save recipes to your Shack!'); setAuthOpen(true); return; }
    try {
      await saveRecipe({
        food_slug: recipe.slug, food_name: recipe.name, country: recipe.country,
        continent: recipe.continent, category: recipe.category,
        original_recipe: originalRecipe,
        final_recipe: customised ?? customisedRecipe ?? null,
      });
      setIsSaved(true);
      toast.success(`${recipe.name} saved to your Shack!`);
    } catch { toast.error('Could not save. Try again.'); }
  };

  if (!recipe || !originalRecipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 pt-14">
          <AlertTriangle className="w-10 h-10 text-coral" />
          <p className="text-frost text-lg font-medium">Recipe not found</p>
          <Button variant="ghost" onClick={() => navigate('/')} className="border border-white/20 text-frost/70 hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Map
          </Button>
        </div>
      </div>
    );
  }

  const displayedRecipe = activeTab === 'customised' && customisedRecipe ? customisedRecipe : originalRecipe;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 pt-14 flex flex-col">

        {/* ── Top bar ── */}
        <div className="px-4 md:px-8 pt-5 pb-3 flex items-center gap-4 border-b border-white/10">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="border border-white/20 text-frost/70 hover:bg-white/10 shrink-0">
            <ArrowLeft className="w-4 h-4 mr-1.5" />Back
          </Button>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-sky-blue/80 truncate">{recipe.continent} · {recipe.country}</p>
            <h1 className="text-lg md:text-xl font-bold text-frost truncate text-balance">{recipe.name}</h1>
          </div>

          {/* Experience / Continue button */}
          {!loadingExperience && storyStatus === 'idle' && (
            <div className="flex items-center gap-2 shrink-0">
              {hasExperience && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleStartNew}
                  className="border border-white/20 text-frost/50 hover:bg-white/10 h-9 text-xs"
                  title="Erase memory and start a new experience"
                >
                  <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
                  Start New
                </Button>
              )}
              <Button onClick={startStory} className="glass-button-primary font-medium h-9 px-5">
                <Play className="w-4 h-4 mr-1.5" />
                {hasExperience ? 'Continue' : 'Experience'}
              </Button>
            </div>
          )}
          {storyStatus === 'loading' && (
            <div className="flex items-center gap-2 text-sky-blue shrink-0">
              <Loader2 className="w-4 h-4 animate-spin" /><span className="text-xs">Summoning…</span>
            </div>
          )}
          {storyStatus === 'error' && (
            <Button onClick={startStory} variant="ghost" size="sm" className="border border-coral/40 text-coral hover:bg-coral/10 shrink-0">Retry</Button>
          )}
        </div>

        {/* ── Speaking waves ── */}
        {(storyStatus === 'loading' || storyStatus === 'speaking' || storyStatus === 'listening') && (
          <div className="flex flex-col items-center py-4 border-b border-white/10">
            <SpeakingWaves active={isSpeaking || storyStatus === 'loading'} />
          </div>
        )}

        {/* ── Chat continuation box ── */}
        {(storyStatus === 'done' || storyStatus === 'listening') && (
          <div className="px-4 md:px-8 py-3 border-b border-white/10">
            {chatLog.length > 0 && (
              <div ref={chatContainerRef} className="mb-3 max-h-48 overflow-y-auto flex flex-col gap-2">
                {chatLog.map((m, i) => (
                  <div key={i} className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}>
                    <div className={cn(
                      'px-3 py-2 rounded-2xl text-xs max-w-[80%] text-pretty',
                      m.role === 'user'
                        ? 'bg-sky-blue/20 border border-sky-blue/30 text-sky-blue/90'
                        : 'bg-white/5 border border-white/10 text-frost/80'
                    )}>
                      {m.content}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex gap-2 items-end">
              <Input
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendReply(); } }}
                placeholder="Talk anything with the character…"
                className="flex-1 bg-white/5 border-white/15 text-frost placeholder:text-frost/30 text-sm"
                disabled={sendingReply || isSpeaking}
              />
              <Button onClick={handleSendReply} disabled={!userInput.trim() || sendingReply || isSpeaking} className="glass-button-primary h-9 px-3 shrink-0">
                {sendingReply ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        )}

        {storyStatus === 'error' && (
          <div className="mx-4 md:mx-8 mt-3 glass-card rounded-xl p-4 border border-coral/30 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-coral shrink-0 mt-0.5" />
            <p className="text-xs text-frost/60 text-pretty">{storyError}</p>
          </div>
        )}

        {/* ── Main content: recipe left + customise right ── */}
        <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 md:px-8 py-6 gap-6">

          {/* LEFT — Recipe Preview */}
          <div className="w-full md:w-[55%] flex flex-col gap-4">
            {/* Original | Customised toggle — above recipe title */}
            {customisedRecipe && (
              <div className="flex gap-1 bg-white/5 rounded-xl p-1 w-fit">
                {(['original', 'customised'] as RecipeTab[]).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      'px-4 py-1.5 rounded-lg text-xs font-medium transition-all capitalize',
                      activeTab === tab
                        ? 'bg-sky-blue/20 text-sky-blue border border-sky-blue/40'
                        : 'text-frost/50 hover:text-frost/80'
                    )}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            )}

            {/* Recipe name + content */}
            <div className="glass-card rounded-2xl border border-white/10 p-5">
              <h2 className="text-lg font-bold text-frost mb-4 text-balance">{displayedRecipe.name}</h2>
              {displayedRecipe.notes && activeTab === 'customised' && (
                <></>
              )}
              <RecipeCard recipe={displayedRecipe} />
            </div>

            {/* Save to Shack button */}
            {!checkingSaved && (
              <Button
                onClick={() => saveRecipeToShack()}
                disabled={isSaved}
                className={cn(
                  'font-medium w-fit flex items-center gap-2 transition-all',
                  isSaved
                    ? 'bg-gold/15 border border-gold/50 text-gold cursor-default'
                    : 'glass-button-primary'
                )}
              >
                {isSaved
                  ? <><BookmarkCheckIcon className="w-4 h-4" />Saved to Shack</>
                  : <><BookmarkPlusIcon className="w-4 h-4" />Save to Shack</>
                }
              </Button>
            )}
          </div>

          {/* RIGHT — Customise */}
          <div className="w-full md:w-[45%] flex flex-col gap-4">
            {/* Edit note with X button */}
            {editNote && activeTab === 'customised' && (
              <div className="bg-mint/10 border border-mint/30 rounded-xl px-3 py-2 flex items-start gap-2">
                <p className="text-xs text-mint text-pretty flex-1">{editNote}</p>
                <button
                  onClick={() => setEditNote(null)}
                  className="text-mint/60 hover:text-coral transition-colors shrink-0 mt-0.5"
                  aria-label="Dismiss note"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="glass-card rounded-2xl border border-white/10 p-5 space-y-4">
              <div>
                <p className="text-sm font-semibold text-frost">Customise</p>
                <p className="text-xs text-muted-foreground mt-0.5">Apply filters and/or add a personal note</p>
              </div>

              {/* Health Goals */}
              <div>
                <p className="text-xs font-semibold text-frost/50 uppercase tracking-wider mb-2">Health Goals</p>
                <div className="flex flex-wrap gap-2">
                  {HEALTH_GOALS.map(g => <FilterChip key={g} label={g} active={filters.healthGoals.includes(g)} onToggle={() => toggleFilter('healthGoals', g)} />)}
                </div>
              </div>

              {/* Dietary Restrictions */}
              <div>
                <p className="text-xs font-semibold text-frost/50 uppercase tracking-wider mb-2">Dietary Restrictions</p>
                <div className="flex flex-wrap gap-2">
                  {DIETARY_RESTRICTIONS.map(r => <FilterChip key={r} label={r} active={filters.dietaryRestrictions.includes(r)} onToggle={() => toggleFilter('dietaryRestrictions', r)} />)}
                </div>
              </div>

              {/* Cuisine Fusion */}
              <div>
                <p className="text-xs font-semibold text-frost/50 uppercase tracking-wider mb-2">Cuisine Fusion</p>
                <div className="flex flex-wrap gap-2">
                  {CUISINE_FUSION.map(c => <FilterChip key={c} label={c} active={filters.cuisineFusion.includes(c)} onToggle={() => toggleFilter('cuisineFusion', c)} />)}
                </div>
              </div>

              {/* Quick buttons */}
              <div className="flex flex-wrap gap-2">
                {["I'm missing…", "I would like…", "Can I…"].map(btn => (
                  <button
                    key={btn}
                    onClick={() => setCustomText(t => t ? t : btn.replace('…', ' '))}
                    className="px-3 py-1 rounded-full text-xs border border-white/15 text-frost/60 hover:border-sky-blue/40 hover:text-sky-blue/80 bg-white/5 transition-all"
                  >
                    {btn}
                  </button>
                ))}
              </div>

              {/* Text area */}
              <Textarea
                value={customText}
                onChange={e => setCustomText(e.target.value)}
                placeholder="Tell me what you need and I'll make it work…"
                rows={3}
                className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 text-sm resize-none"
              />

              {/* Customise button */}
              <Button
                onClick={handleCustomise}
                disabled={!canCustomise || loadingCustomise}
                className="glass-button-primary font-medium h-9 w-full"
              >
                {loadingCustomise ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Check className="w-4 h-4 mr-2" />}
                Customise
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AuthModal
        open={authOpen}
        onOpenChange={setAuthOpen}
        message={authMsg}
        onSuccess={() => { setAuthMsg(''); saveRecipeToShack(); }}
      />
    </div>
  );
}
