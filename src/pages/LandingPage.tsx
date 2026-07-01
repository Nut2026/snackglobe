import { useState, useCallback, useRef, useEffect } from 'react';
import { Anchor, Loader2, Compass, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
// @ts-ignore
import { supabase } from '@/db/supabase';
import AuthModal from '@/components/auth/AuthModal';
import NavBar from '@/components/common/NavBar';
import WorldMap from '@/components/map/WorldMap';
import CountryPanel from '@/components/map/CountryPanel';
import ChoosePathModal, { type SailPath } from '@/components/map/ChoosePathModal';
import { RECIPE_COUNTRIES, getRandomRecipeForCountry, ALL_RECIPES } from '@/data/recipes';
import { saveRecipe } from '@/api/shack';
import type { Recipe } from '@/data/recipes';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const SAIL_JUMPS = 12;
const JUMP_INTERVAL = 120;
const SESSION_KEY = 'snackglobe_landing_state';

function saveLandingState(country: string | null, slug: string | null, visible: boolean) {
  try { sessionStorage.setItem(SESSION_KEY, JSON.stringify({ country, slug, visible })); } catch { /* ignore */ }
}

function loadLandingState(): { country: string | null; slug: string | null; visible: boolean } | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

// Build the pool of jumpable countries given a SailPath
function buildCountryPool(path: SailPath): string[] {
  if (path.mode === 'random' || (path.selectedRegions.length === 0 && path.selectedCountries.length === 0)) {
    return RECIPE_COUNTRIES;
  }
  const pool = new Set<string>();
  if (path.selectedRegions.length > 0) {
    ALL_RECIPES.forEach(r => {
      if (path.selectedRegions.includes(r.continent)) {
        if (r.country === 'Germany/Austria') { pool.add('Germany'); pool.add('Austria'); }
        else if (r.country === 'Australia/New Zealand') { pool.add('Australia'); pool.add('New Zealand'); }
        else pool.add(r.country);
      }
    });
  }
  path.selectedCountries.forEach(c => pool.add(c));
  return pool.size > 0 ? Array.from(pool) : RECIPE_COUNTRIES;
}

export default function LandingPage() {
  const { user } = useAuth();

  const restored = loadLandingState();
  const [dotCountry, setDotCountry] = useState<string | null>(restored?.country ?? null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(restored?.country ?? null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(() => {
    if (restored?.slug) return ALL_RECIPES.find(r => r.slug === restored.slug) ?? null;
    return null;
  });
  const [savedSlugs, setSavedSlugs] = useState<Set<string>>(new Set());
  const [sailing, setSailing] = useState(false);
  const [panelVisible, setPanelVisible] = useState<boolean>(restored?.visible ?? false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMsg, setAuthMsg] = useState('');
  const [mapReady, setMapReady] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Compass / Choose Path state
  const [compassOpen, setCompassOpen] = useState(false);
  const [compassSpinning, setCompassSpinning] = useState(false);
  const [sailPath, setSailPath] = useState<SailPath>({ mode: 'random', selectedRegions: [], selectedCountries: [] });

  useEffect(() => {
    const t = setTimeout(() => setMapReady(true), 600);
    return () => clearTimeout(t);
  }, []);

  // Load saved sail preferences from Supabase on mount (if logged in)
  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase
        .from('sail_preferences')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();
      if (data) {
        setSailPath({
          mode: data.mode as 'random' | 'filtered',
          selectedRegions: data.selected_regions ?? [],
          selectedCountries: data.selected_countries ?? [],
        });
      }
    })();
  }, [user]);

  useEffect(() => {
    saveLandingState(dotCountry, selectedRecipe?.slug ?? null, panelVisible);
  }, [dotCountry, selectedRecipe, panelVisible]);

  // Search logic
  useEffect(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) { setSearchResults([]); setSearchOpen(false); return; }
    const results = ALL_RECIPES.filter(r =>
      r.name.toLowerCase().includes(q) ||
      r.country.toLowerCase().includes(q) ||
      r.continent.toLowerCase().includes(q)
    ).slice(0, 12);
    setSearchResults(results);
    setSearchOpen(results.length > 0);
  }, [searchQuery]);

  // Close search dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearchSelect = (recipe: Recipe) => {
    setSearchQuery('');
    setSearchOpen(false);
    setSelectedRecipe(recipe);
    setSelectedCountry(recipe.country);
    setDotCountry(recipe.country);
    setPanelVisible(true);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchOpen(false);
    searchInputRef.current?.focus();
  };

  const selectCountry = useCallback((country: string) => {
    setSelectedCountry(country);
    setDotCountry(country);
    const recipe = getRandomRecipeForCountry(country);
    setSelectedRecipe(recipe);
    setPanelVisible(true);
  }, []);

  const handleSetSail = useCallback((path?: SailPath) => {
    if (sailing) return;
    const activePath = path ?? sailPath;
    const pool = buildCountryPool(activePath);
    setSailing(true);
    setPanelVisible(false);
    let count = 0;
    const jump = () => {
      const randCountry = pool[Math.floor(Math.random() * pool.length)];
      setDotCountry(randCountry);
      setSelectedCountry(randCountry);
      count++;
      if (count < SAIL_JUMPS) {
        timerRef.current = setTimeout(jump, JUMP_INTERVAL + Math.random() * 80);
      } else {
        const finalCountry = pool[Math.floor(Math.random() * pool.length)];
        setDotCountry(finalCountry);
        setSelectedCountry(finalCountry);
        const recipe = getRandomRecipeForCountry(finalCountry);
        setSelectedRecipe(recipe);
        setSailing(false);
        setTimeout(() => setPanelVisible(true), 150);
      }
    };
    jump();
  }, [sailing, sailPath]);

  const handleCompassClick = () => {
    setCompassSpinning(true);
    setTimeout(() => setCompassSpinning(false), 520);
    setCompassOpen(true);
  };

  const handlePathConfirmed = (path: SailPath) => {
    setSailPath(path);
    handleSetSail(path);
  };

  const handleBookmark = useCallback(async () => {
    if (!selectedRecipe) return;
    if (!user) {
      setAuthMsg('Sign in to save recipes to your Shack!');
      setAuthOpen(true);
      return;
    }
    if (savedSlugs.has(selectedRecipe.slug)) {
      toast.info('Already in your Shack');
      return;
    }
    try {
      await saveRecipe({
        food_slug: selectedRecipe.slug,
        food_name: selectedRecipe.name,
        country: selectedRecipe.country,
        continent: selectedRecipe.continent,
        category: selectedRecipe.category,
        original_recipe: {
          name: selectedRecipe.name,
          servings: selectedRecipe.servings,
          time: selectedRecipe.time,
          difficulty: selectedRecipe.difficulty,
          ingredients: selectedRecipe.ingredients,
          steps: selectedRecipe.steps,
          making_tips: selectedRecipe.making_tips,
        },
      });
      setSavedSlugs(s => new Set([...s, selectedRecipe.slug]));
      toast.success(`${selectedRecipe.name} saved to your Shack!`);
    } catch {
      toast.error('Failed to save. Please try again.');
    }
  }, [selectedRecipe, user, savedSlugs]);

  const closePanel = () => {
    setPanelVisible(false);
    setTimeout(() => {
      setSelectedRecipe(null);
      setSelectedCountry(null);
      setDotCountry(null);
    }, 300);
  };

  const hasFilter = sailPath.mode === 'filtered' && (sailPath.selectedRegions.length > 0 || sailPath.selectedCountries.length > 0);

  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <NavBar />

      {/* ── Main content below navbar ── */}
      <div className="flex flex-col items-center pt-14 flex-1">

        {/* ── Text header ── */}
        <div className="w-full px-6 pt-6 pb-3 flex flex-col items-center text-center">
          <h1 className="text-frost font-bold text-xl md:text-2xl whitespace-nowrap">
            Every snack is a window to a time-honored tradition
          </h1>
          <p className="text-muted-foreground text-sm md:text-base whitespace-nowrap mt-1">
            Click on a country or{' '}
            <span className="text-sky-blue font-medium">Set Sail</span>
            {' '}to discover the world through its snacks
          </p>
        </div>

        {/* ── Map frame ── */}
        <div className="w-[85%] relative mt-2 mb-4">
          {/* Glassmorphism frame */}
          <div className="rounded-3xl border border-white/20 shadow-2xl overflow-hidden map-glass-frame">
            {/* Map area */}
            <div className="relative w-full" style={{ paddingBottom: '52%' }}>
              {!mapReady && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Loader2 className="w-8 h-8 text-sky-blue animate-spin" />
                </div>
              )}
              <div className={cn(
                'absolute inset-0 transition-opacity duration-700',
                mapReady ? 'opacity-100' : 'opacity-0'
              )}>
                <WorldMap
                  selectedCountry={selectedCountry}
                  dotCountry={dotCountry}
                  onCountryClick={selectCountry}
                />
              </div>
            </div>
          </div>

          {/* Set Sail + Compass + or + Search — all centered, horizontally aligned */}
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            {/* Set Sail */}
            <Button
              onClick={() => handleSetSail()}
              disabled={sailing}
              size="lg"
              className={cn(
                'glass-button-primary font-bold text-base px-8 h-12 rounded-full shadow-lg relative shrink-0',
                sailing && 'opacity-75 cursor-not-allowed'
              )}
              style={!sailing ? {
                boxShadow: '0 0 0 0 rgba(122,184,212,0.7)',
                animation: 'set-sail-pulse 2s ease-out infinite',
              } : undefined}
            >
              {sailing ? (
                <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Sailing…</>
              ) : (
                <><Anchor className="w-5 h-5 mr-2" />Set Sail</>
              )}
            </Button>

            {/* Compass button */}
            <div className="relative shrink-0">
              <Button
                onClick={handleCompassClick}
                disabled={sailing}
                size="lg"
                className={cn(
                  'h-12 w-12 rounded-full glass-button-primary shadow-lg p-0 flex items-center justify-center',
                  sailing && 'opacity-50 cursor-not-allowed'
                )}
                aria-label="Choose Path"
              >
                <Compass className={cn(
                  'w-5 h-5 transition-transform',
                  compassSpinning && 'animate-compass-spin'
                )} />
              </Button>
              {hasFilter && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-sky-blue border-2 border-background" />
              )}
            </div>

            {/* Divider */}
            <span className="text-frost/40 text-sm font-medium shrink-0">or</span>

            {/* Search bar — dropdown opens upward */}
            <div ref={searchContainerRef} className="relative shrink-0 w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-frost/40 pointer-events-none" />
                <Input
                  ref={searchInputRef}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onFocus={() => searchResults.length > 0 && setSearchOpen(true)}
                  placeholder="Search traditional snacks/beverages…"
                  className="bg-white/10 border-white/20 text-frost placeholder:text-frost/35 text-sm pl-9 pr-9 h-12 rounded-full"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-frost/40 hover:text-frost/70 transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Upward dropdown */}
              {searchOpen && searchResults.length > 0 && (
                <div
                  className="absolute bottom-full mb-2 left-0 right-0 glass-panel border border-white/15 rounded-2xl overflow-hidden z-50"
                  style={{ maxHeight: Math.min(searchResults.length * 52 + 8, 360) }}
                >
                  <div className="overflow-y-auto" style={{ maxHeight: 360 }}>
                    {searchResults.map(recipe => (
                      <button
                        key={recipe.slug}
                        onClick={() => handleSearchSelect(recipe)}
                        className="w-full text-left px-4 py-3 hover:bg-white/8 transition-colors border-b border-white/5 last:border-0 flex items-center gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-frost truncate">{recipe.name}</p>
                          <p className="text-xs text-muted-foreground truncate">{recipe.country} · {recipe.continent}</p>
                        </div>
                        <span className={cn(
                          'text-xs shrink-0 px-2 py-0.5 rounded-full border',
                          recipe.category === 'Beverage'
                            ? 'border-mint/40 text-mint bg-mint/10'
                            : 'border-sunshine/40 text-sunshine bg-sunshine/10'
                        )}>
                          {recipe.category}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="w-full px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 border-t border-white/8 mt-auto">
        <p className="text-xs text-frost/40 text-pretty">Made with 💙 by Nuz</p>
        <p className="text-xs text-frost/40 text-pretty italic text-center md:text-right">
          — Where every snack tells a story. And every story brings us closer
        </p>
      </footer>

      {/* ── Bottom roll-up panel — closes on backdrop click ── */}
      {panelVisible && (
        <div
          className="fixed inset-0 z-30"
          onClick={closePanel}
        />
      )}
      <div
        className={cn(
          'fixed bottom-0 left-0 right-0 z-40 flex justify-center pb-4 px-4 transition-all duration-300',
          panelVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        )}
      >
        <div className="w-full max-w-[75%]" onClick={e => e.stopPropagation()}>
          {selectedRecipe && (
            <CountryPanel
              recipe={selectedRecipe}
              isSaved={savedSlugs.has(selectedRecipe.slug)}
              onClose={closePanel}
              onBookmark={handleBookmark}
            />
          )}
        </div>
      </div>

      <ChoosePathModal
        open={compassOpen}
        onOpenChange={setCompassOpen}
        onConfirm={handlePathConfirmed}
      />

      <AuthModal
        open={authOpen}
        onOpenChange={setAuthOpen}
        message={authMsg}
        onSuccess={() => { setAuthMsg(''); handleBookmark(); }}
      />
    </div>
  );
}
