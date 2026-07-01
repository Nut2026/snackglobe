import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronDown, ChevronRight, Plus, Trash2, Save,
  ArrowLeft, Loader2, Search, X, Pencil, Check,
  Upload
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import NavBar from '@/components/common/NavBar';
import { useAuth } from '@/contexts/AuthContext';
// @ts-ignore
import { supabase } from '@/db/supabase';
import { ALL_RECIPES } from '@/data/recipes';
import type { Recipe } from '@/data/recipes';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const CONTINENTS = ['Asia', 'Africa', 'Europe', 'Middle East', 'North America', 'South America', 'Oceania', 'Antarctica'];
const DIFFICULTIES = ['Easy', 'Easy-Medium', 'Medium', 'Medium-Hard', 'Hard'];

// Recipe state keyed by slug, lives in Supabase recipe_overrides
type RecipeData = Record<string, string | string[] | Record<string, string[]>>;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function buildTree(recipes: Recipe[]): Record<string, Record<string, Recipe[]>> {
  const tree: Record<string, Record<string, Recipe[]>> = {};
  for (const r of recipes) {
    if (!tree[r.continent]) tree[r.continent] = {};
    if (!tree[r.continent][r.country]) tree[r.continent][r.country] = [];
    tree[r.continent][r.country].push(r);
  }
  return tree;
}

// ─── Field row ────────────────────────────────────────────────────────────────
function FieldRow({ label, value, onChange, multiline = false }: {
  label: string; value: string; onChange: (v: string) => void; multiline?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="text-xs font-normal text-frost/60 uppercase tracking-wider">{label}</Label>
      {multiline
        ? <Textarea value={value} onChange={e => onChange(e.target.value)} rows={3} className="bg-white/5 border-white/15 text-frost text-sm resize-none" />
        : <Input value={value} onChange={e => onChange(e.target.value)} className="bg-white/5 border-white/15 text-frost text-sm" />
      }
    </div>
  );
}

// ─── Recipe form (shared by edit and create) ──────────────────────────────────
function RecipeForm({
  initial,
  onSave,
  onCancel,
  saveLabel = 'Save',
}: {
  initial: Partial<Recipe>;
  onSave: (r: Partial<Recipe>) => Promise<void>;
  onCancel: () => void;
  saveLabel?: string;
}) {
  const blank: Partial<Recipe> = {
    name: '', category: 'Snack', time: '', servings: '',
    difficulty: 'Medium', cultural_authenticity: '',
    better_than_store_bought: '', hidden_nutrients: '',
    steps: [], making_tips: [], ingredients: {},
  };
  const [draft, setDraft] = useState<Partial<Recipe>>({ ...blank, ...initial });
  const [saving, setSaving] = useState(false);

  const set = <K extends keyof Recipe>(key: K, val: Recipe[K]) =>
    setDraft(d => ({ ...d, [key]: val }));

  const handle = async () => {
    if (!draft.name?.trim()) { toast.error('Name is required'); return; }
    setSaving(true);
    await onSave(draft);
    setSaving(false);
  };

  return (
    <div className="space-y-3">
      {/* Name */}
      <FieldRow label="Name" value={draft.name ?? ''} onChange={v => set('name', v)} />

      {/* Category — pill selector */}
      <div>
        <Label className="text-xs font-normal text-frost/60 uppercase tracking-wider">Category</Label>
        <div className="flex gap-2 mt-1.5">
          {(['Snack', 'Beverage'] as const).map(c => (
            <button
              key={c}
              onClick={() => set('category', c)}
              className={cn(
                'px-4 py-1.5 rounded-full text-xs font-medium border transition-all',
                draft.category === c
                  ? 'bg-sky-blue/20 border-sky-blue/60 text-sky-blue'
                  : 'bg-white/5 border-white/15 text-frost/60 hover:border-white/30'
              )}
            >{c}</button>
          ))}
        </div>
      </div>

      {/* Time, Servings */}
      <div className="grid grid-cols-2 gap-3">
        <FieldRow label="Time" value={draft.time ?? ''} onChange={v => set('time', v)} />
        <FieldRow label="Servings" value={draft.servings ?? ''} onChange={v => set('servings', v)} />
      </div>

      {/* Difficulty — select */}
      <div>
        <Label className="text-xs font-normal text-frost/60 uppercase tracking-wider">Difficulty</Label>
        <div className="flex flex-wrap gap-2 mt-1.5">
          {DIFFICULTIES.map(d => (
            <button
              key={d}
              onClick={() => set('difficulty', d)}
              className={cn(
                'px-3 py-1 rounded-full text-xs border transition-all',
                draft.difficulty === d
                  ? 'bg-sky-blue/20 border-sky-blue/60 text-sky-blue'
                  : 'bg-white/5 border-white/15 text-frost/60 hover:border-white/30'
              )}
            >{d}</button>
          ))}
        </div>
      </div>

      <FieldRow label="Cultural Authenticity" value={draft.cultural_authenticity ?? ''} onChange={v => set('cultural_authenticity', v)} multiline />
      <FieldRow label="Better Than Store Bought" value={draft.better_than_store_bought ?? ''} onChange={v => set('better_than_store_bought', v)} multiline />
      <FieldRow label="Hidden Nutrients" value={draft.hidden_nutrients ?? ''} onChange={v => set('hidden_nutrients', v)} multiline />

      <div>
        <Label className="text-xs font-normal text-frost/60 uppercase tracking-wider">Steps (one per line)</Label>
        <Textarea
          value={(draft.steps ?? []).join('\n')}
          onChange={e => set('steps', e.target.value.split('\n'))}
          rows={5}
          className="bg-white/5 border-white/15 text-frost text-sm resize-none mt-1"
        />
      </div>

      <div>
        <Label className="text-xs font-normal text-frost/60 uppercase tracking-wider">Making Tips (one per line)</Label>
        <Textarea
          value={(draft.making_tips ?? []).join('\n')}
          onChange={e => set('making_tips', e.target.value.split('\n').filter(Boolean))}
          rows={3}
          className="bg-white/5 border-white/15 text-frost text-sm resize-none mt-1"
        />
      </div>

      <div className="flex gap-2 pt-2">
        <Button onClick={handle} disabled={saving} className="glass-button-primary font-medium h-8 text-xs">
          {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin mr-1.5" /> : <Save className="w-3.5 h-3.5 mr-1.5" />}
          {saveLabel}
        </Button>
        <Button variant="ghost" onClick={onCancel} className="h-8 text-xs border border-white/15 text-frost/50 hover:bg-white/5">
          Cancel
        </Button>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ManageRecipesPage() {
  const { profile, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && profile?.role !== 'admin') navigate('/', { replace: true });
  }, [authLoading, profile, navigate]);

  // All recipes in state (ALL_RECIPES + extras from supabase)
  const [recipes, setRecipes] = useState<Recipe[]>([...ALL_RECIPES]);
  const [loadingData, setLoadingData] = useState(true);
  const [expandedContinents, setExpandedContinents] = useState<Set<string>>(new Set(CONTINENTS));
  const [expandedCountries, setExpandedCountries] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  // Edit country name state
  const [editingCountry, setEditingCountry] = useState<{ key: string; value: string } | null>(null);

  // Delete confirmation
  const [deleteTarget, setDeleteTarget] = useState<{ type: 'recipe'; slug: string; name: string } | { type: 'country'; key: string; name: string } | null>(null);
  const [deletedSnapshot, setDeletedSnapshot] = useState<Recipe[] | null>(null);

  // New recipe / country form
  const [addingRecipeTo, setAddingRecipeTo] = useState<string | null>(null); // "continent::country"
  const [addingCountryTo, setAddingCountryTo] = useState<string | null>(null); // continent

  // Inline edit
  const [editingSlug, setEditingSlug] = useState<string | null>(null);

  // Load extras from Supabase (recipes not in ALL_RECIPES)
  useEffect(() => {
    if (profile?.role !== 'admin') return;
    (async () => {
      setLoadingData(true);
      const { data } = await supabase.from('recipe_overrides').select('food_slug, override_data');
      if (data) {
        const baseSlugs = new Set(ALL_RECIPES.map(r => r.slug));
        const extras: Recipe[] = data
          .filter((row: { food_slug: string }) => !baseSlugs.has(row.food_slug))
          .map((row: { override_data: Recipe }) => row.override_data);
        setRecipes([...ALL_RECIPES, ...extras]);
      }
      setLoadingData(false);
    })();
  }, [profile]);

  // Persist a recipe to Supabase (upsert)
  const persistRecipe = useCallback(async (recipe: Recipe) => {
    const { error } = await supabase.from('recipe_overrides').upsert({
      food_slug: recipe.slug,
      override_data: recipe,
    }, { onConflict: 'food_slug' });
    if (error) throw error;
  }, []);

  // Delete a recipe from Supabase
  const removeRecipe = useCallback(async (slug: string) => {
    await supabase.from('recipe_overrides').delete().eq('food_slug', slug);
  }, []);

  // ── Save inline edit ──
  const handleSaveEdit = useCallback(async (slug: string, updated: Partial<Recipe>) => {
    const base = recipes.find(r => r.slug === slug);
    if (!base) return;
    const merged = { ...base, ...updated } as Recipe;
    try {
      await persistRecipe(merged);
      setRecipes(rs => rs.map(r => r.slug === slug ? merged : r));
      setEditingSlug(null);
      toast.success('Saved!');
    } catch { toast.error('Save failed'); }
  }, [recipes, persistRecipe]);

  // ── Create new recipe ──
  const handleCreateRecipe = useCallback(async (ck: string, draft: Partial<Recipe>) => {
    const [continent, country] = ck.split('::');
    const slug = `${(draft.name ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`;
    const newR: Recipe = {
      id: Date.now(),
      name: draft.name ?? 'New Recipe',
      slug,
      continent,
      country,
      category: (draft.category ?? 'Snack') as Recipe['category'],
      time: draft.time ?? '',
      servings: draft.servings ?? '',
      difficulty: draft.difficulty ?? 'Medium',
      cultural_authenticity: draft.cultural_authenticity ?? '',
      better_than_store_bought: draft.better_than_store_bought ?? '',
      hidden_nutrients: draft.hidden_nutrients ?? '',
      steps: draft.steps ?? [],
      making_tips: draft.making_tips ?? [],
      ingredients: (draft.ingredients as Record<string, string[]>) ?? {},
      health_rating: 50,
    };
    try {
      await persistRecipe(newR);
      setRecipes(rs => [...rs, newR]);
      setAddingRecipeTo(null);
      setExpandedCountries(s => new Set([...s, ck]));
      toast.success(`"${newR.name}" added!`);
    } catch { toast.error('Could not create recipe'); }
  }, [persistRecipe]);

  // ── Create new country ──
  const handleCreateCountry = useCallback((continent: string, countryName: string) => {
    if (!countryName.trim()) return;
    const ck = `${continent}::${countryName.trim()}`;
    // A country is just a placeholder — no recipe to save yet
    setAddingCountryTo(null);
    setExpandedCountries(s => new Set([...s, ck]));
    toast.success(`Country "${countryName.trim()}" added! Add recipes to it.`);
  }, []);

  // ── Rename country ──
  const handleRenameCountry = useCallback(async (continent: string, oldName: string, newName: string) => {
    if (!newName.trim() || newName === oldName) { setEditingCountry(null); return; }
    // Update all recipes with this country
    const toUpdate = recipes.filter(r => r.continent === continent && r.country === oldName);
    try {
      await Promise.all(toUpdate.map(r => persistRecipe({ ...r, country: newName.trim() })));
      setRecipes(rs => rs.map(r =>
        r.continent === continent && r.country === oldName ? { ...r, country: newName.trim() } : r
      ));
      const oldCk = `${continent}::${oldName}`;
      const newCk = `${continent}::${newName.trim()}`;
      setExpandedCountries(s => {
        const next = new Set(s);
        if (next.has(oldCk)) { next.delete(oldCk); next.add(newCk); }
        return next;
      });
      setEditingCountry(null);
      toast.success('Country renamed');
    } catch { toast.error('Rename failed'); }
  }, [recipes, persistRecipe]);

  // ── Delete recipe ──
  const confirmDelete = useCallback(async () => {
    if (!deleteTarget) return;
    if (deleteTarget.type === 'recipe') {
      const snapshot = [...recipes];
      setRecipes(rs => rs.filter(r => r.slug !== deleteTarget.slug));
      setDeletedSnapshot(snapshot);
      try {
        await removeRecipe(deleteTarget.slug);
        toast.custom(t => (
          <div className="glass-panel rounded-xl border border-white/15 px-4 py-3 flex items-center gap-3 text-sm text-frost">
            <Trash2 className="w-4 h-4 text-coral shrink-0" />
            <span className="flex-1">"{deleteTarget.name}" deleted</span>
            <button
              onClick={() => {
                setRecipes(snapshot);
                toast.dismiss(t);
              }}
              className="text-sky-blue hover:text-mint font-medium"
            >Undo</button>
          </div>
        ), { duration: 6000 });
      } catch {
        setRecipes(snapshot);
        toast.error('Delete failed');
      }
    } else if (deleteTarget.type === 'country') {
      const [continent, country] = deleteTarget.key.split('::');
      const snapshot = [...recipes];
      const toDelete = recipes.filter(r => r.continent === continent && r.country === country);
      setRecipes(rs => rs.filter(r => !(r.continent === continent && r.country === country)));
      setDeletedSnapshot(snapshot);
      try {
        await Promise.all(toDelete.map(r => removeRecipe(r.slug)));
        toast.custom(t => (
          <div className="glass-panel rounded-xl border border-white/15 px-4 py-3 flex items-center gap-3 text-sm text-frost">
            <Trash2 className="w-4 h-4 text-coral shrink-0" />
            <span className="flex-1">"{country}" and its recipes deleted</span>
            <button
              onClick={() => {
                setRecipes(snapshot);
                toast.dismiss(t);
              }}
              className="text-sky-blue hover:text-mint font-medium"
            >Undo</button>
          </div>
        ), { duration: 6000 });
      } catch {
        setRecipes(snapshot);
        toast.error('Delete failed');
      }
    }
    setDeleteTarget(null);
  }, [deleteTarget, recipes, removeRecipe]);

  // ── Add By JSON ──
  const jsonInputRef = useRef<HTMLInputElement>(null);
  const [jsonForContinent, setJsonForContinent] = useState<string | null>(null);

  const handleJsonUpload = useCallback(async (continent: string, file: File) => {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const arr: Recipe[] = Array.isArray(parsed) ? parsed : [parsed];
      const required = ['name', 'slug', 'category', 'time', 'servings', 'difficulty', 'steps', 'ingredients'];
      const invalid = arr.filter(r => required.some(k => !(k in r)));
      if (invalid.length) {
        toast.error(`Missing required fields in ${invalid.length} recipe(s). Required: ${required.join(', ')}`);
        return;
      }
      const withContinent = arr.map(r => ({ ...r, continent }));
      await Promise.all(withContinent.map(persistRecipe));
      setRecipes(rs => {
        const slugs = new Set(rs.map(r => r.slug));
        return [...rs, ...withContinent.filter(r => !slugs.has(r.slug))];
      });
      toast.success(`${arr.length} recipe(s) added via JSON`);
    } catch (e) {
      toast.error('Invalid JSON file: ' + (e as Error).message);
    }
  }, [persistRecipe]);

  // ── Search filter ──
  const searchLower = search.toLowerCase();
  const filteredRecipes = search.trim()
    ? recipes.filter(r =>
        r.name.toLowerCase().includes(searchLower) ||
        r.country.toLowerCase().includes(searchLower) ||
        r.continent.toLowerCase().includes(searchLower)
      )
    : recipes;

  const tree = buildTree(filteredRecipes);

  // Get all countries that appear in filteredRecipes for a continent,
  // plus any countries that exist only in current recipes (empty after filter)
  const getCountries = (continent: string): Record<string, Recipe[]> => {
    // All unique countries for this continent in full recipes list
    const allCountries = [...new Set(recipes.filter(r => r.continent === continent).map(r => r.country))];
    const result: Record<string, Recipe[]> = {};
    for (const c of allCountries) {
      result[c] = (tree[continent]?.[c]) ?? [];
    }
    return result;
  };

  const toggleContinent = (c: string) =>
    setExpandedContinents(s => { const n = new Set(s); n.has(c) ? n.delete(c) : n.add(c); return n; });
  const toggleCountry = (ck: string) =>
    setExpandedCountries(s => { const n = new Set(s); n.has(ck) ? n.delete(ck) : n.add(ck); return n; });

  if (authLoading || loadingData) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-sky-blue animate-spin" />
    </div>
  );
  if (profile?.role !== 'admin') return null;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {/* Hidden JSON file input */}
      <input
        ref={jsonInputRef}
        type="file"
        accept=".json"
        className="hidden"
        onChange={e => {
          const f = e.target.files?.[0];
          if (f && jsonForContinent) handleJsonUpload(jsonForContinent, f);
          e.target.value = '';
        }}
      />

      <div className="flex-1 pt-20 px-4 md:px-8 pb-12 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="mb-6 flex items-start gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="border border-white/20 text-frost/70 hover:bg-white/10 shrink-0 mt-1">
            <ArrowLeft className="w-4 h-4 mr-1.5" />Back
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-3xl font-bold text-frost text-balance">Manage Recipes</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {recipes.length} recipes · Changes are saved directly to the database.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-frost/40 pointer-events-none" />
          <Input
            ref={searchRef}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search recipes, countries, continents…"
            className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 pl-9 pr-9"
          />
          {search && (
            <button
              onClick={() => { setSearch(''); searchRef.current?.focus(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-frost/40 hover:text-frost/70 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="space-y-3">
          {CONTINENTS.map(continent => {
            const countries = getCountries(continent);
            const countryEntries = Object.entries(countries);
            const totalInContinent = countryEntries.reduce((s, [, arr]) => s + arr.length, 0);
            const isExpanded = expandedContinents.has(continent);

            return (
              <div key={continent} className="glass-card rounded-2xl border border-white/10 overflow-hidden">
                {/* Continent header */}
                <div className="flex items-center gap-2 px-5 py-3 hover:bg-white/5 transition-colors">
                  <button
                    onClick={() => toggleContinent(continent)}
                    className="flex items-center gap-2 flex-1 min-w-0"
                  >
                    {isExpanded ? <ChevronDown className="w-4 h-4 text-sky-blue shrink-0" /> : <ChevronRight className="w-4 h-4 text-sky-blue shrink-0" />}
                    <span className="font-bold text-frost text-sm flex-1 text-left">{continent}</span>
                  </button>
                  {/* Region count badge — number only */}
                  <Badge variant="outline" className="text-xs border-white/20 text-muted-foreground shrink-0">
                    {totalInContinent}
                  </Badge>
                  {/* Add By JSON */}
                  <button
                    onClick={() => { setJsonForContinent(continent); jsonInputRef.current?.click(); }}
                    className="flex items-center gap-1 text-xs text-frost/50 hover:text-sky-blue transition-colors border border-white/10 hover:border-sky-blue/30 rounded-lg px-2 py-1 shrink-0"
                    title="Add recipes via JSON file"
                  >
                    <Upload className="w-3 h-3" />JSON
                  </button>
                  {/* Add Country */}
                  {isExpanded && (
                    <button
                      onClick={() => setAddingCountryTo(continent)}
                      className="flex items-center gap-1 text-xs text-frost/50 hover:text-sky-blue transition-colors border border-white/10 hover:border-sky-blue/30 rounded-lg px-2 py-1 shrink-0"
                    >
                      <Plus className="w-3 h-3" />Country
                    </button>
                  )}
                </div>

                {/* Add country inline form */}
                {addingCountryTo === continent && (
                  <div className="border-t border-white/10 px-5 py-3">
                    <AddCountryForm
                      onAdd={name => handleCreateCountry(continent, name)}
                      onCancel={() => setAddingCountryTo(null)}
                    />
                  </div>
                )}

                {isExpanded && countryEntries.length > 0 && (
                  <div className="border-t border-white/10">
                    {countryEntries.map(([country, cRecipes]) => {
                      const ck = `${continent}::${country}`;
                      const isCountryExpanded = expandedCountries.has(ck);
                      const isEditingThis = editingCountry?.key === ck;

                      return (
                        <div key={country} className="border-b border-white/5 last:border-0">
                          {/* Country header */}
                          <div className="flex items-center gap-2 px-6 py-2.5 hover:bg-white/5 transition-colors">
                            <button onClick={() => toggleCountry(ck)} className="flex items-center gap-2 flex-1 min-w-0">
                              {isCountryExpanded ? <ChevronDown className="w-3.5 h-3.5 text-frost/40 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 text-frost/40 shrink-0" />}
                              {isEditingThis ? (
                                <Input
                                  autoFocus
                                  value={editingCountry.value}
                                  onChange={e => setEditingCountry({ key: ck, value: e.target.value })}
                                  onKeyDown={e => {
                                    if (e.key === 'Enter') handleRenameCountry(continent, country, editingCountry.value);
                                    if (e.key === 'Escape') setEditingCountry(null);
                                  }}
                                  onClick={e => e.stopPropagation()}
                                  className="bg-white/5 border-sky-blue/40 text-frost text-sm h-6 py-0 flex-1"
                                />
                              ) : (
                                <span className="text-sm text-frost/80 flex-1 text-left truncate">{country}</span>
                              )}
                            </button>
                            {/* Country recipe count — number only, same tag style as continent */}
                            <Badge variant="outline" className="text-xs border-white/15 text-muted-foreground shrink-0">
                              {cRecipes.length}
                            </Badge>
                            {/* Edit country name */}
                            {isEditingThis ? (
                              <button
                                onClick={() => handleRenameCountry(continent, country, editingCountry.value)}
                                className="p-1 text-mint/60 hover:text-mint transition-colors shrink-0"
                                title="Save name"
                              ><Check className="w-3.5 h-3.5" /></button>
                            ) : (
                              <button
                                onClick={() => setEditingCountry({ key: ck, value: country })}
                                className="p-1 text-frost/30 hover:text-sky-blue transition-colors shrink-0"
                                title="Edit country name"
                              ><Pencil className="w-3.5 h-3.5" /></button>
                            )}
                            {/* Delete country */}
                            <button
                              onClick={() => setDeleteTarget({ type: 'country', key: ck, name: country })}
                              className="p-1 text-frost/30 hover:text-coral transition-colors shrink-0"
                              title="Delete country"
                            ><Trash2 className="w-3.5 h-3.5" /></button>
                            {/* Add Recipe — only when expanded */}
                            {isCountryExpanded && (
                              <button
                                onClick={() => setAddingRecipeTo(ck)}
                                className="flex items-center gap-1 text-xs text-frost/40 hover:text-sky-blue transition-colors border border-white/10 hover:border-sky-blue/30 rounded-md px-1.5 py-0.5 shrink-0"
                              >
                                <Plus className="w-3 h-3" />Recipe
                              </button>
                            )}
                          </div>

                          {isCountryExpanded && (
                            <div className="px-7 pb-3 space-y-2 pt-1">
                              {cRecipes.map(r => (
                                <RecipeRow
                                  key={r.slug}
                                  recipe={r}
                                  isEditing={editingSlug === r.slug}
                                  onEdit={() => setEditingSlug(r.slug)}
                                  onCancelEdit={() => setEditingSlug(null)}
                                  onSave={updated => handleSaveEdit(r.slug, updated)}
                                  onDelete={() => setDeleteTarget({ type: 'recipe', slug: r.slug, name: r.name })}
                                />
                              ))}

                              {/* Inline add recipe form */}
                              {addingRecipeTo === ck ? (
                                <div className="glass-card rounded-xl border border-sky-blue/20 px-4 py-3 space-y-3">
                                  <p className="text-xs font-semibold text-sky-blue uppercase tracking-wider">New Recipe in {country}</p>
                                  <RecipeForm
                                    initial={{ continent, country }}
                                    onSave={draft => handleCreateRecipe(ck, draft)}
                                    onCancel={() => setAddingRecipeTo(null)}
                                    saveLabel="Create Recipe"
                                  />
                                </div>
                              ) : null}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Delete confirmation */}
      <AlertDialog open={!!deleteTarget} onOpenChange={o => { if (!o) setDeleteTarget(null); }}>
        <AlertDialogContent className="max-w-[calc(100%-2rem)] md:max-w-md glass-panel border border-white/15">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-frost flex items-center gap-2 text-balance">
              <Trash2 className="w-4 h-4 text-coral shrink-0" />
              Delete "{deleteTarget?.name}"?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground text-pretty">
              {deleteTarget?.type === 'country'
                ? 'This will delete the country and all its recipes. You can undo immediately after.'
                : 'This will permanently delete this recipe. You can undo immediately after.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border border-white/20 text-frost/70 hover:bg-white/10 bg-transparent">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-coral/80 hover:bg-coral text-white border-none">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// ─── Recipe row (collapsed + expandable edit) ─────────────────────────────────
function RecipeRow({ recipe, isEditing, onEdit, onCancelEdit, onSave, onDelete }: {
  recipe: Recipe;
  isEditing: boolean;
  onEdit: () => void;
  onCancelEdit: () => void;
  onSave: (r: Partial<Recipe>) => Promise<void>;
  onDelete: () => void;
}) {
  return (
    <div className={cn('glass-card rounded-xl border', isEditing ? 'border-sky-blue/30' : 'border-white/8')}>
      {/* Row header */}
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="text-sm text-frost flex-1 truncate">{recipe.name}</span>
        <span className={cn(
          'text-xs px-2 py-0.5 rounded-full border shrink-0',
          recipe.category === 'Beverage' ? 'border-mint/40 text-mint bg-mint/10' : 'border-sunshine/40 text-sunshine bg-sunshine/10'
        )}>{recipe.category}</span>
        <button onClick={onEdit} className="p-1 text-frost/30 hover:text-sky-blue transition-colors shrink-0" title="Edit">
          <Pencil className="w-3.5 h-3.5" />
        </button>
        <button onClick={onDelete} className="p-1 text-frost/30 hover:text-coral transition-colors shrink-0" title="Delete">
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {isEditing && (
        <div className="border-t border-white/10 px-4 pb-4 pt-3">
          <RecipeForm
            initial={recipe}
            onSave={onSave}
            onCancel={onCancelEdit}
            saveLabel="Save"
          />
        </div>
      )}
    </div>
  );
}

// ─── Add Country Form ─────────────────────────────────────────────────────────
function AddCountryForm({ onAdd, onCancel }: { onAdd: (name: string) => void; onCancel: () => void }) {
  const [name, setName] = useState('');
  return (
    <div className="flex items-center gap-2">
      <Input
        autoFocus
        value={name}
        onChange={e => setName(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') onAdd(name); if (e.key === 'Escape') onCancel(); }}
        placeholder="Country name…"
        className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 text-sm flex-1 h-8"
      />
      <Button onClick={() => onAdd(name)} disabled={!name.trim()} className="glass-button-primary h-8 text-xs px-3">
        <Plus className="w-3 h-3 mr-1" />Add
      </Button>
      <Button variant="ghost" onClick={onCancel} className="h-8 text-xs border border-white/15 text-frost/50 hover:bg-white/5 px-3">
        Cancel
      </Button>
    </div>
  );
}
