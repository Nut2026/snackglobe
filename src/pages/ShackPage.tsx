import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Star, Trash2, X, ChefHat, Award, BookmarkX,
  Loader2, AlertTriangle, ArrowLeft, RotateCcw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import NavBar from '@/components/common/NavBar';
import AuthModal from '@/components/auth/AuthModal';
import { useAuth } from '@/contexts/AuthContext';
import { getSavedRecipes, toggleStar, deleteRecipe, restoreRecipe, incrementCraftCount } from '@/api/shack';
import type { SavedRecipe, AdaptedRecipe } from '@/types/index';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

// ─── Recipe Detail Overlay ────────────────────────────────────────────────────
function RecipeOverlay({ recipe, savedItem, onClose, onCrafted }: {
  recipe: AdaptedRecipe;
  savedItem: SavedRecipe;
  onClose: () => void;
  onCrafted: () => void;
}) {
  const hasCustomised = !!(savedItem.final_recipe ?? savedItem.filtered_recipe);
  const tabs = [
    { key: 'original', label: 'Original', data: savedItem.original_recipe },
    ...(hasCustomised ? [{ key: 'customised', label: 'Customised', data: (savedItem.final_recipe ?? savedItem.filtered_recipe)! }] : []),
  ];

  const [activeTab, setActiveTab] = useState(hasCustomised ? 'customised' : 'original');
  const current = tabs.find(t => t.key === activeTab)?.data || savedItem.original_recipe;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="glass-panel rounded-2xl border border-white/15 w-full max-w-2xl my-4">
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-white/10">
          <div>
            <h2 className="text-lg font-bold text-frost text-balance">{savedItem.food_name}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {savedItem.continent} · {savedItem.country} · {savedItem.category}
            </p>
          </div>
          <button onClick={onClose} className="text-frost/40 hover:text-frost transition-colors ml-4 shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        {tabs.length > 1 && (
          <div className="px-6 pt-3 flex gap-1 bg-white/0">
            <div className="flex gap-1 bg-white/5 rounded-xl p-1">
              {tabs.map(t => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={cn(
                    'px-4 py-1.5 rounded-lg text-xs font-medium transition-all',
                    activeTab === t.key ? 'bg-sky-blue/20 text-sky-blue border border-sky-blue/40' : 'text-frost/50 hover:text-frost/80'
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Recipe content */}
        <div className="px-6 pb-6 space-y-5 mt-4">
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span>⏱ {current.time}</span>
            <span>👥 {current.servings}</span>
            <span>📊 {current.difficulty}</span>
            <span className="text-gold">★ Crafted {savedItem.craft_count}×</span>
          </div>

          {current.notes && (
            <div className="bg-mint/10 border border-mint/30 rounded-xl px-3 py-2">
              <p className="text-xs text-mint text-pretty">{current.notes}</p>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold text-frost/50 uppercase tracking-wider mb-2">Ingredients</p>
            {Object.entries(current.ingredients).map(([section, items]) => (
              <div key={section} className="mb-3">
                {Object.keys(current.ingredients).length > 1 && (
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
            <p className="text-xs font-semibold text-frost/50 uppercase tracking-wider mb-2">Steps</p>
            <ol className="space-y-2">
              {current.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-frost/80">
                  <span className="text-sky-blue font-bold shrink-0 w-5 text-right">{i + 1}.</span>
                  <span className="text-pretty">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {current.making_tips?.length ? (
            <div>
              <p className="text-xs font-semibold text-frost/50 uppercase tracking-wider mb-2">Tips</p>
              <ul className="space-y-1">
                {current.making_tips.map((tip, i) => (
                  <li key={i} className="text-xs text-frost/60 flex items-start gap-2 text-pretty">
                    <span className="text-gold shrink-0">✦</span>{tip}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="flex gap-3 pt-2">
            <Button onClick={onCrafted} className="glass-button-primary font-medium">
              <Award className="w-4 h-4 mr-2" />
              Mark as Crafted
            </Button>
            <Button variant="ghost" onClick={onClose} className="border border-white/20 text-frost/70 hover:bg-white/10">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Recipe Card ──────────────────────────────────────────────────────────────
function ShackCard({
  item,
  onStar,
  onDelete,
  onExpand,
  onCrafted,
}: {
  item: SavedRecipe;
  onStar: () => void;
  onDelete: () => void;
  onExpand: () => void;
  onCrafted: () => void;
}) {
  const hasCustomised = !!(item.final_recipe ?? item.filtered_recipe);
  const displayRecipe = item.final_recipe || item.filtered_recipe || item.original_recipe;

  return (
    <div
      className={cn(
        'glass-card rounded-2xl border p-4 flex flex-col gap-3 h-full cursor-pointer hover:border-sky-blue/30 transition-colors',
        item.starred ? 'border-gold/40' : 'border-white/10'
      )}
      onClick={onExpand}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-frost text-sm leading-snug group-hover:text-sky-blue transition-colors text-balance">
            {item.food_name}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {item.continent} · {item.country}
          </p>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={e => { e.stopPropagation(); onStar(); }}
            className={cn('p-1 rounded transition-colors', item.starred ? 'text-gold' : 'text-frost/30 hover:text-gold')}
            aria-label={item.starred ? 'Unstar' : 'Star'}
          >
            <Star className={cn('w-4 h-4', item.starred && 'fill-gold')} />
          </button>
          <button
            onClick={e => { e.stopPropagation(); onDelete(); }}
            className="p-1 rounded text-frost/30 hover:text-coral transition-colors"
            aria-label="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        <Badge variant="outline" className={cn('text-xs border',
          item.category === 'Beverage' ? 'border-mint/40 text-mint bg-mint/10' : 'border-sunshine/40 text-sunshine bg-sunshine/10'
        )}>
          {item.category}
        </Badge>
        {hasCustomised && (
          <Badge variant="outline" className="text-xs border-sky-blue/30 text-sky-blue bg-sky-blue/10">Customised</Badge>
        )}
      </div>

      {/* Quick info */}
      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span>⏱ {displayRecipe.time}</span>
        <span>📊 {displayRecipe.difficulty}</span>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-2 flex items-center justify-between border-t border-white/10">
        <button
          onClick={e => { e.stopPropagation(); onCrafted(); }}
          className="flex items-center gap-1.5 text-xs text-frost/50 hover:text-gold transition-colors"
        >
          <Award className="w-3.5 h-3.5" />
          <span className="text-gold font-medium">{item.craft_count}</span>
          <span>crafted</span>
        </button>
        <span className="flex items-center gap-1 text-xs text-sky-blue/60">
          <ChefHat className="w-3.5 h-3.5" />
          View Recipe
        </span>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ShackPage() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState<SavedRecipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedItem, setExpandedItem] = useState<SavedRecipe | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<SavedRecipe | null>(null);
  const [undoItem, setUndoItem] = useState<SavedRecipe | null>(null);
  const [undoTimer, setUndoTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [authOpen, setAuthOpen] = useState(false);

  const load = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const data = await getSavedRecipes();
      setRecipes(data);
    } catch {
      toast.error('Failed to load your Shack');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (authLoading) return;
    if (!user) { setAuthOpen(true); setLoading(false); return; }
    load();
  }, [user, authLoading, load]);

  const handleStar = async (item: SavedRecipe) => {
    const newStarred = !item.starred;
    setRecipes(r => r.map(x => x.id === item.id ? { ...x, starred: newStarred } : x));
    try {
      await toggleStar(item.id, newStarred);
    } catch {
      setRecipes(r => r.map(x => x.id === item.id ? { ...x, starred: item.starred } : x));
      toast.error('Failed to update star');
    }
    // Re-sort: starred first
    setRecipes(r => [
      ...r.filter(x => x.starred),
      ...r.filter(x => !x.starred),
    ]);
  };

  const handleDelete = (item: SavedRecipe) => setDeleteTarget(item);

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    const deleted = deleteTarget;
    setDeleteTarget(null);
    setRecipes(r => r.filter(x => x.id !== deleted.id));
    if (expandedItem?.id === deleted.id) setExpandedItem(null);

    try {
      await deleteRecipe(deleted.id);
      setUndoItem(deleted);
      const t = setTimeout(() => setUndoItem(null), 6000);
      setUndoTimer(t);
      toast.custom(() => (
        <div className="glass-panel rounded-xl border border-white/15 px-4 py-3 flex items-center gap-3 text-sm text-frost">
          <BookmarkX className="w-4 h-4 text-coral shrink-0" />
          <span className="flex-1">"{deleted.food_name}" removed</span>
          <button
            onClick={() => handleUndo(deleted)}
            className="text-sky-blue hover:text-mint font-medium transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Undo
          </button>
        </div>
      ), { duration: 6000 });
    } catch {
      setRecipes(r => {
        const arr = [...r];
        arr.splice(deleted.position, 0, deleted);
        return arr;
      });
      toast.error('Failed to delete recipe');
    }
  };

  const handleUndo = async (item: SavedRecipe) => {
    if (undoTimer) { clearTimeout(undoTimer); setUndoTimer(null); }
    setUndoItem(null);
    try {
      await restoreRecipe(item);
      await load();
      toast.success(`"${item.food_name}" restored!`);
    } catch {
      toast.error('Failed to restore recipe');
    }
  };

  const handleCrafted = async (item: SavedRecipe) => {
    try {
      const newCount = await incrementCraftCount(item.id);
      setRecipes(r => r.map(x => x.id === item.id ? { ...x, craft_count: newCount } : x));
      if (expandedItem?.id === item.id) setExpandedItem(prev => prev ? { ...prev, craft_count: newCount } : null);
      toast.success(`Marked as Crafted! (${newCount}×)`);
    } catch {
      toast.error('Failed to update craft count');
    }
  };

  const sortedRecipes = [
    ...recipes.filter(r => r.starred),
    ...recipes.filter(r => !r.starred),
  ];

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-sky-blue animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 pt-20 px-4 md:px-8 py-8 max-w-7xl mx-auto w-full">

        {/* Header row with back button */}
        <div className="mb-6 flex items-start gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="border border-white/20 text-frost/70 hover:bg-white/10 shrink-0 mt-1"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />Back
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-frost text-balance">My Shack</h1>
            <p className="text-sm text-muted-foreground mt-1 text-pretty">
              Your personal collection of saved and customised recipes.
            </p>
          </div>
        </div>

        {/* Auth wall */}
        {!user && !authLoading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="glass-card rounded-2xl border border-white/10 p-8 flex flex-col items-center gap-4 text-center max-w-sm">
              <ChefHat className="w-12 h-12 text-sky-blue" />
              <h2 className="text-lg font-bold text-frost text-balance">Sign in to access your Shack</h2>
              <p className="text-sm text-muted-foreground text-pretty">Save and manage your favourite recipes from around the world.</p>
              <Button onClick={() => setAuthOpen(true)} className="glass-button-primary font-medium w-full">
                Sign In
              </Button>
            </div>
            <AuthModal open={authOpen} onOpenChange={o => { setAuthOpen(o); if (!o && !user) navigate('/'); }} />
          </div>
        )}

        {/* Loading */}
        {user && loading && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-sky-blue animate-spin" />
          </div>
        )}

        {/* Empty state */}
        {user && !loading && sortedRecipes.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
            <ChefHat className="w-12 h-12 text-muted-foreground" />
            <h2 className="text-lg font-semibold text-frost text-balance">Your Shack is empty</h2>
            <p className="text-sm text-muted-foreground text-pretty max-w-xs">
              Explore the map, find recipes you love, and save them here.
            </p>
            <Button onClick={() => navigate('/')} className="glass-button-primary font-medium">
              Explore the Map
            </Button>
          </div>
        )}

        {/* Recipe grid */}
        {user && !loading && sortedRecipes.length > 0 && (
          <>
            {/* Starred section */}
            {sortedRecipes.some(r => r.starred) && (
              <div className="mb-6">
                <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-gold" /> Pinned
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sortedRecipes.filter(r => r.starred).map(item => (
                    <ShackCard
                      key={item.id}
                      item={item}
                      onStar={() => handleStar(item)}
                      onDelete={() => handleDelete(item)}
                      onExpand={() => setExpandedItem(item)}
                      onCrafted={() => handleCrafted(item)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Unstarred section */}
            {sortedRecipes.some(r => !r.starred) && (
              <div>
                {sortedRecipes.some(r => r.starred) && (
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">All Recipes</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sortedRecipes.filter(r => !r.starred).map(item => (
                    <ShackCard
                      key={item.id}
                      item={item}
                      onStar={() => handleStar(item)}
                      onDelete={() => handleDelete(item)}
                      onExpand={() => setExpandedItem(item)}
                      onCrafted={() => handleCrafted(item)}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Recipe overlay (detail view) */}
      {expandedItem && (
        <RecipeOverlay
          recipe={expandedItem.original_recipe}
          savedItem={expandedItem}
          onClose={() => setExpandedItem(null)}
          onCrafted={() => handleCrafted(expandedItem)}
        />
      )}

      {/* Delete confirmation */}
      <AlertDialog open={!!deleteTarget} onOpenChange={o => { if (!o) setDeleteTarget(null); }}>
        <AlertDialogContent className="max-w-[calc(100%-2rem)] md:max-w-md glass-panel border border-white/15">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-frost text-balance flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-coral" />
              Delete "{deleteTarget?.food_name}"?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground text-pretty">
              This will permanently delete the recipe, all your customisations, and its Craft count. This action cannot be undone (but you can undo immediately after).
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border border-white/20 text-frost/70 hover:bg-white/10 bg-transparent">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-coral/80 hover:bg-coral text-white border-none"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AuthModal open={authOpen && !user} onOpenChange={setAuthOpen} />
    </div>
  );
}
