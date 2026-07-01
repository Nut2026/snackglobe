import { useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ChefHat, Compass, AlertTriangle, Loader2, Check, ArrowLeft,
  Filter, Wand2, BookmarkPlus, ChevronDown, ChevronUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import NavBar from '@/components/common/NavBar';
import AuthModal from '@/components/auth/AuthModal';
import { getRecipeBySlug } from '@/data/recipes';
import { useGroq } from '@/contexts/GroqContext';
import { useAuth } from '@/contexts/AuthContext';
import { saveRecipe } from '@/api/shack';
import type { AdaptedRecipe, SelectedFilters, RecipeTab } from '@/types/index';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

// ─── Filter Options ───────────────────────────────────────────────────────────
const HEALTH_GOALS = ['Low Sugar', 'High Protein', 'Low Carb', 'Gluten-Free', 'Vegan', 'Low Fat', 'High Fibre', 'Heart Healthy'];
const DIETARY_RESTRICTIONS = ['Dairy-Free', 'Egg-Free', 'Nut-Free', 'Soy-Free', 'Alcohol-Free', 'Lard-Free', 'Low FODMAP'];
const CUISINE_FUSION = ['Asian', 'European', 'North America', 'South America', 'Middle East', 'African', 'Oceania'];

// ─── Groq Helpers ─────────────────────────────────────────────────────────────
async function adaptRecipe(
  recipeName: string,
  country: string,
  original: AdaptedRecipe,
  filters: SelectedFilters,
  groqKey: string
): Promise<AdaptedRecipe> {
  const prompt = `You are a seasoned culinary expert specialising in "${recipeName}" from ${country}.
Adapt the following recipe to meet these requirements:
- Health Goals: ${filters.healthGoals.join(', ') || 'none'}
- Dietary Restrictions: ${filters.dietaryRestrictions.join(', ') || 'none'}
- Cuisine Fusion Style: ${filters.cuisineFusion.join(', ') || 'none'}

Original recipe:
${JSON.stringify(original, null, 2)}

Return ONLY a valid JSON object with exactly these fields:
{
  "name": "string (same dish name, may add descriptor)",
  "servings": "string",
  "time": "string",
  "difficulty": "string",
  "ingredients": { "Section": ["ingredient line", ...] },
  "steps": ["step 1", "step 2", ...],
  "making_tips": ["tip 1", ...],
  "notes": "brief note about what was changed and why"
}
No markdown, no backticks, only JSON.`;

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${groqKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 1200,
    }),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content || '';
  try {
    return JSON.parse(raw);
  } catch {
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Could not parse Groq response');
    return JSON.parse(match[0]);
  }
}

async function finaliseRecipe(
  recipeName: string,
  country: string,
  currentRecipe: AdaptedRecipe,
  customisation: string,
  groqKey: string
): Promise<AdaptedRecipe> {
  const prompt = `You are a seasoned culinary expert specialising in "${recipeName}" from ${country}.
The user has a customisation request: "${customisation}"
Apply it to this recipe:
${JSON.stringify(currentRecipe, null, 2)}

Return ONLY a valid JSON object with exactly these fields:
{
  "name": "string",
  "servings": "string",
  "time": "string",
  "difficulty": "string",
  "ingredients": { "Section": ["ingredient line", ...] },
  "steps": ["step 1", ...],
  "making_tips": ["tip 1", ...],
  "notes": "what changed"
}
No markdown, no backticks, only JSON.`;

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${groqKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 1200,
    }),
  });
  if (!res.ok) throw new Error(await res.text());
  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content || '';
  try {
    return JSON.parse(raw);
  } catch {
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Could not parse Groq response');
    return JSON.parse(match[0]);
  }
}

// ─── Recipe Card ─────────────────────────────────────────────────────────────
function RecipeCard({ recipe, label }: { recipe: AdaptedRecipe; label: string }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setExpanded(e => !e)}
        className="w-full flex items-center justify-between px-5 py-3 hover:bg-white/5 transition-colors"
      >
        <span className="text-sm font-semibold text-frost">{label}</span>
        {expanded ? <ChevronUp className="w-4 h-4 text-frost/40" /> : <ChevronDown className="w-4 h-4 text-frost/40" />}
      </button>

      {expanded && (
        <div className="px-5 pb-5 space-y-4 border-t border-white/10">
          <div className="mt-3">
            <h3 className="font-bold text-frost text-lg text-balance">{recipe.name}</h3>
            <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
              <span>⏱ {recipe.time}</span>
              <span>👥 {recipe.servings}</span>
              <span>📊 {recipe.difficulty}</span>
            </div>
          </div>

          {recipe.notes && (
            <div className="bg-mint/10 border border-mint/30 rounded-xl px-3 py-2">
              <p className="text-xs text-mint text-pretty">{recipe.notes}</p>
            </div>
          )}

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
                      <span className="text-sky-blue mt-1 shrink-0">·</span>
                      {item}
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
      )}
    </div>
  );
}

// ─── Filter Chip ─────────────────────────────────────────────────────────────
function FilterChip({ label, active, onToggle }: { label: string; active: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'px-3 py-1 rounded-full text-xs font-medium border transition-all',
        active
          ? 'bg-sky-blue/20 border-sky-blue/60 text-sky-blue'
          : 'bg-white/5 border-white/15 text-frost/60 hover:border-white/30 hover:text-frost/80'
      )}
    >
      {active && <Check className="w-3 h-3 inline mr-1" />}
      {label}
    </button>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function CraftPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const recipe = slug ? getRecipeBySlug(slug) : undefined;
  const { groqApiKey, hasGroqKey } = useGroq();
  const { user } = useAuth();

  const originalRecipe: AdaptedRecipe | null = recipe ? {
    name: recipe.name,
    servings: recipe.servings,
    time: recipe.time,
    difficulty: recipe.difficulty,
    ingredients: recipe.ingredients,
    steps: recipe.steps,
    making_tips: recipe.making_tips,
  } : null;

  const [filters, setFilters] = useState<SelectedFilters>({ healthGoals: [], dietaryRestrictions: [], cuisineFusion: [] });
  const [filteredRecipe, setFilteredRecipe] = useState<AdaptedRecipe | null>(null);
  const [finalRecipe, setFinalRecipe] = useState<AdaptedRecipe | null>(null);
  const [activeTab, setActiveTab] = useState<RecipeTab>('original');
  const [filterOpen, setFilterOpen] = useState(true);
  const [finaliseOpen, setFinaliseOpen] = useState(false);
  const [customText, setCustomText] = useState('');
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [loadingFinalise, setLoadingFinalise] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMsg, setAuthMsg] = useState('');

  const toggleFilter = (key: keyof SelectedFilters, val: string) => {
    setFilters(f => {
      const arr = f[key] as string[];
      return { ...f, [key]: arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val] };
    });
  };

  const hasFilters = filters.healthGoals.length + filters.dietaryRestrictions.length + filters.cuisineFusion.length > 0;

  const handleApplyFilters = async () => {
    if (!recipe || !originalRecipe || !hasGroqKey) return;
    setLoadingFilter(true);
    try {
      const adapted = await adaptRecipe(recipe.name, recipe.country, originalRecipe, filters, groqApiKey);
      setActiveTab('customised');
      setFinaliseOpen(true);
      toast.success('Recipe adapted to your filters!');
    } catch (e) {
      toast.error('Failed to adapt recipe. Check your Groq API key in Settings.');
    } finally {
      setLoadingFilter(false);
    }
  };

  const handleFinalise = async () => {
    if (!recipe || !customText.trim() || !hasGroqKey) return;
    setLoadingFinalise(true);
    const base = finalRecipe || filteredRecipe || originalRecipe!;
    try {
      const updated = await finaliseRecipe(recipe.name, recipe.country, base, customText, groqApiKey);
      setFinalRecipe(updated);
      setActiveTab('customised');
      toast.success('Recipe updated!');
    } catch (e) {
      toast.error('Failed to update recipe. Check your Groq API key in Settings.');
    } finally {
      setLoadingFinalise(false);
    }
  };

  const handleSaveToShack = useCallback(async () => {
    if (!recipe || !originalRecipe) return;
    if (!user) {
      setAuthMsg('Sign in to save recipes to your Shack!');
      setAuthOpen(true);
      return;
    }
    try {
      await saveRecipe({
        food_slug: recipe.slug,
        food_name: recipe.name,
        country: recipe.country,
        continent: recipe.continent,
        category: recipe.category,
        original_recipe: originalRecipe,
        filtered_recipe: filteredRecipe,
        final_recipe: finalRecipe,
        applied_filters: hasFilters ? filters : null,
      });
      toast.success('Recipe saved to your Shack!');
    } catch {
      toast.error('Could not save. Try again.');
    }
  }, [recipe, originalRecipe, filteredRecipe, finalRecipe, filters, hasFilters, user]);

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

  const displayedRecipe = activeTab === 'customised' ? (finalRecipe || filteredRecipe) : originalRecipe;

  const tabs: { key: RecipeTab; label: string; visible: boolean }[] = [
    { key: 'original', label: 'Original', visible: true },
    { key: 'customised', label: 'Customised', visible: !!(filteredRecipe || finalRecipe) },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 pt-14 flex flex-col">

        {/* Tabs */}
        <div className="border-b border-white/10 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex gap-0 pt-4">
            <Link to={`/${slug}/explore`} className="px-5 py-2.5 text-sm font-medium border-b-2 border-transparent text-frost/50 hover:text-frost/80 transition-colors">
              <Compass className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Explore
            </Link>
            <Link to={`/${slug}/craft`} className="px-5 py-2.5 text-sm font-medium border-b-2 border-sky-blue text-sky-blue">
              <ChefHat className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Craft
            </Link>
          </div>
        </div>

        {/* Page body */}
        <div className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-4 md:px-8 py-6 gap-6">

          {/* LEFT — Recipe Preview */}
          <div className="w-full md:w-[55%] flex flex-col gap-4">
            {/* Header */}
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-frost text-balance">{recipe.name}</h1>
              <div className="text-xs text-muted-foreground mt-1">
                {recipe.continent} · {recipe.country} · {recipe.category}
              </div>
            </div>

            {/* Recipe tabs */}
            <div className="flex gap-1 bg-white/5 rounded-xl p-1 w-fit">
              {tabs.filter(t => t.visible).map(t => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={cn(
                    'px-4 py-1.5 rounded-lg text-xs font-medium transition-all',
                    activeTab === t.key
                      ? 'bg-sky-blue/20 text-sky-blue border border-sky-blue/40'
                      : 'text-frost/50 hover:text-frost/80'
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Recipe card */}
            {displayedRecipe && (
              <RecipeCard recipe={displayedRecipe} label={tabs.find(t => t.key === activeTab)?.label || ''} />
            )}

            {/* Save */}
            <Button
              onClick={handleSaveToShack}
              className="glass-button-primary font-medium w-fit"
            >
              <BookmarkPlus className="w-4 h-4 mr-2" />
              Save to Shack
            </Button>
          </div>

          {/* RIGHT — Filters + Finalise */}
          <div className="w-full md:w-[45%] flex flex-col gap-4">

            {/* Groq warning */}
            {!hasGroqKey && (
              <div className="glass-card border border-sunshine/30 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-sunshine shrink-0 mt-0.5" />
                <p className="text-xs text-frost/70 text-pretty">
                  Add your Groq API key in <strong className="text-sunshine">Settings</strong> to unlock AI recipe adaptation.
                </p>
              </div>
            )}

            {/* Filters Section */}
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setFilterOpen(o => !o)}
                className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-sky-blue" />
                  <span className="text-sm font-semibold text-frost">Filters</span>
                  {hasFilters && (
                    <Badge variant="outline" className="text-xs border-sky-blue/40 text-sky-blue bg-sky-blue/10">
                      {filters.healthGoals.length + filters.dietaryRestrictions.length + filters.cuisineFusion.length}
                    </Badge>
                  )}
                </div>
                {filterOpen ? <ChevronUp className="w-4 h-4 text-frost/40" /> : <ChevronDown className="w-4 h-4 text-frost/40" />}
              </button>

              {filterOpen && (
                <div className="px-5 pb-5 border-t border-white/10 space-y-4 mt-3">
                  <div>
                    <p className="text-xs font-semibold text-frost/50 uppercase tracking-wider mb-2">Health Goals</p>
                    <div className="flex flex-wrap gap-2">
                      {HEALTH_GOALS.map(g => (
                        <FilterChip key={g} label={g} active={filters.healthGoals.includes(g)} onToggle={() => toggleFilter('healthGoals', g)} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-frost/50 uppercase tracking-wider mb-2">Dietary Restrictions</p>
                    <div className="flex flex-wrap gap-2">
                      {DIETARY_RESTRICTIONS.map(r => (
                        <FilterChip key={r} label={r} active={filters.dietaryRestrictions.includes(r)} onToggle={() => toggleFilter('dietaryRestrictions', r)} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-frost/50 uppercase tracking-wider mb-2">Cuisine Fusion</p>
                    <div className="flex flex-wrap gap-2">
                      {CUISINE_FUSION.map(c => (
                        <FilterChip key={c} label={c} active={filters.cuisineFusion.includes(c)} onToggle={() => toggleFilter('cuisineFusion', c)} />
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <Button
                      onClick={handleApplyFilters}
                      disabled={!hasFilters || !hasGroqKey || loadingFilter}
                      className="flex-1 glass-button-primary font-medium h-9"
                    >
                      {loadingFilter ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Check className="w-4 h-4 mr-2" />}
                      Apply Filters
                    </Button>
                    {hasFilters && (
                      <Button
                        variant="ghost"
                        onClick={() => setFilters({ healthGoals: [], dietaryRestrictions: [], cuisineFusion: [] })}
                        className="border border-white/20 text-frost/60 hover:bg-white/10 h-9 text-xs"
                      >
                        Clear
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Finalise Section */}
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setFinaliseOpen(o => !o)}
                className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Wand2 className="w-4 h-4 text-mint" />
                  <span className="text-sm font-semibold text-frost">Finalise</span>
                </div>
                {finaliseOpen ? <ChevronUp className="w-4 h-4 text-frost/40" /> : <ChevronDown className="w-4 h-4 text-frost/40" />}
              </button>

              {finaliseOpen && (
                <div className="px-5 pb-5 border-t border-white/10 space-y-3 mt-3">
                  <p className="text-xs text-muted-foreground text-pretty">
                    Use natural language to further customise your recipe. Hit a hot button to start:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["I'm missing ", "I would like ", "Can I "].map(phrase => (
                      <button
                        key={phrase}
                        onClick={() => setCustomText(phrase)}
                        className="px-3 py-1.5 rounded-lg text-xs border border-sunshine/40 bg-sunshine/10 text-sunshine hover:bg-sunshine/20 transition-all font-medium"
                      >
                        {phrase.trim()}…
                      </button>
                    ))}
                  </div>

                  <Textarea
                    value={customText}
                    onChange={e => setCustomText(e.target.value)}
                    placeholder="Describe your customisation here…"
                    rows={3}
                    className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 text-sm resize-none"
                  />

                  <Button
                    onClick={handleFinalise}
                    disabled={!customText.trim() || !hasGroqKey || loadingFinalise}
                    className="w-full glass-button-primary font-medium h-9"
                  >
                    {loadingFinalise ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Wand2 className="w-4 h-4 mr-2" />}
                    Update Recipe
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        open={authOpen}
        onOpenChange={setAuthOpen}
        message={authMsg}
        onSuccess={() => { setAuthMsg(''); handleSaveToShack(); }}
      />
    </div>
  );
}
