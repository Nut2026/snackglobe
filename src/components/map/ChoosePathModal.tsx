import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Wind, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RECIPE_COUNTRIES } from '@/data/recipes';
import { useAuth } from '@/contexts/AuthContext';
// @ts-ignore
import { supabase } from '@/db/supabase';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export interface SailPath {
  mode: 'random' | 'filtered';
  selectedRegions: string[];
  selectedCountries: string[];
}

const CONTINENTS = ['Asia', 'Africa', 'Europe', 'Middle East', 'North America', 'South America', 'Oceania', 'Antarctica'];

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onConfirm: (path: SailPath) => void;
}

export default function ChoosePathModal({ open, onOpenChange, onConfirm }: Props) {
  const { user } = useAuth();
  const [mode, setMode] = useState<'random' | 'filtered'>('random');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [countrySearch, setCountrySearch] = useState('');
  const [saving, setSaving] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Load latest preferences from Supabase when modal opens
  useEffect(() => {
    if (!open || !user) return;
    (async () => {
      const { data } = await supabase
        .from('sail_preferences')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();
      if (data) {
        setMode(data.mode as 'random' | 'filtered');
        setSelectedRegions(data.selected_regions ?? []);
        setSelectedCountries(data.selected_countries ?? []);
      } else {
        // No preferences yet — default to wind
        setMode('random');
        setSelectedRegions([]);
        setSelectedCountries([]);
      }
    })();
  }, [open, user]);

  // Persist to Supabase on every change
  const persistPrefs = useCallback(async (
    newMode: 'random' | 'filtered',
    regions: string[],
    countries: string[]
  ) => {
    if (!user) return;
    await supabase.from('sail_preferences').upsert({
      user_id: user.id,
      mode: newMode,
      selected_regions: regions,
      selected_countries: countries,
      updated_at: new Date().toISOString(),
    });
  }, [user]);

  const handleModeToggle = (checked: boolean) => {
    const newMode = checked ? 'random' : 'filtered';
    setMode(newMode);
    persistPrefs(newMode, selectedRegions, selectedCountries);
  };

  const toggleRegion = (r: string) => {
    const newRegions = selectedRegions.includes(r)
      ? selectedRegions.filter(x => x !== r)
      : [...selectedRegions, r];
    setSelectedRegions(newRegions);
    persistPrefs(mode, newRegions, selectedCountries);
  };

  const toggleCountry = (c: string) => {
    const newCountries = selectedCountries.includes(c)
      ? selectedCountries.filter(x => x !== c)
      : [...selectedCountries, c];
    setSelectedCountries(newCountries);
    persistPrefs(mode, selectedRegions, newCountries);
  };

  const clearSearch = useCallback(() => {
    setCountrySearch('');
    searchRef.current?.focus();
  }, []);

  const filteredCountries = countrySearch.trim()
    ? RECIPE_COUNTRIES.filter(c => c.toLowerCase().includes(countrySearch.toLowerCase()))
    : RECIPE_COUNTRIES;

  const handleSetSail = async () => {
    const path: SailPath = { mode, selectedRegions, selectedCountries };
    if (user) {
      setSaving(true);
      try {
        await supabase.from('sail_preferences').upsert({
          user_id: user.id,
          mode,
          selected_regions: selectedRegions,
          selected_countries: selectedCountries,
          updated_at: new Date().toISOString(),
        });
      } catch {
        toast.error('Could not save path preferences.');
      }
      setSaving(false);
    }
    onConfirm(path);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-2xl glass-panel border border-white/15 max-h-[90dvh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-frost text-lg font-bold text-balance">Choose Path</DialogTitle>
        </DialogHeader>

        <div className="space-y-5 mt-1">
          {/* Let the wind take me — toggle */}
          <div className={cn(
            'flex items-center gap-3 px-4 py-3 rounded-xl border transition-all',
            mode === 'random'
              ? 'bg-sky-blue/15 border-sky-blue/50'
              : 'bg-white/5 border-white/15'
          )}>
            <Wind className={cn('w-5 h-5 shrink-0', mode === 'random' ? 'text-sky-blue' : 'text-frost/40')} />
            <div className="flex-1 min-w-0">
              <p className={cn('font-semibold text-sm', mode === 'random' ? 'text-sky-blue' : 'text-frost/70')}>
                Let the wind take me
              </p>
              <p className="text-xs text-frost/50 text-pretty">Fully random — any region, any country, any snack</p>
            </div>
            <Switch
              checked={mode === 'random'}
              onCheckedChange={handleModeToggle}
              aria-label="Toggle wind mode"
            />
          </div>

          {/* Region + Country selectors */}
          <div className={cn(
            'grid grid-cols-1 md:grid-cols-2 gap-4 transition-opacity',
            mode === 'random' ? 'opacity-40 pointer-events-none select-none' : 'opacity-100'
          )}>
            {/* Select Regions */}
            <div className="glass-card rounded-xl border border-white/10 p-4 space-y-3">
              <p className="text-sm font-semibold text-frost">Select Regions</p>
              <div className="flex flex-col gap-2">
                {CONTINENTS.map(cont => {
                  const isSelected = selectedRegions.includes(cont);
                  return (
                    <button
                      key={cont}
                      onClick={() => toggleRegion(cont)}
                      className={cn(
                        'flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left',
                        isSelected
                          ? 'bg-sky-blue/20 border border-sky-blue/40 text-sky-blue'
                          : 'bg-white/5 border border-white/10 text-frost/70 hover:border-white/25'
                      )}
                    >
                      <div className={cn(
                        'w-3.5 h-3.5 rounded border-2 shrink-0 transition-all',
                        isSelected ? 'bg-sky-blue border-sky-blue' : 'border-white/30'
                      )} />
                      {cont}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Select Countries — plain CSS scroll */}
            <div className="glass-card rounded-xl border border-white/10 p-4 space-y-3 flex flex-col">
              <p className="text-sm font-semibold text-frost">Select Countries</p>
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-frost/40 pointer-events-none" />
                <Input
                  ref={searchRef}
                  value={countrySearch}
                  onChange={e => setCountrySearch(e.target.value)}
                  placeholder="Search countries…"
                  className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 text-sm pl-8 pr-8 h-8"
                />
                {countrySearch && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-frost/40 hover:text-frost/70"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {selectedCountries.length > 0 && (
                <p className="text-xs text-sky-blue/80">
                  {selectedCountries.length} selected
                  <button
                    onClick={() => { setSelectedCountries([]); persistPrefs(mode, selectedRegions, []); }}
                    className="ml-2 text-frost/50 hover:text-coral underline"
                  >
                    clear
                  </button>
                </p>
              )}

              <div className="overflow-y-auto flex-1" style={{ maxHeight: 280 }}>
                <div className="flex flex-col gap-0.5 pr-1">
                  {filteredCountries.map(country => {
                    const isSelected = selectedCountries.includes(country);
                    return (
                      <button
                        key={country}
                        onClick={() => toggleCountry(country)}
                        className={cn(
                          'w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors',
                          isSelected
                            ? 'bg-sky-blue/20 text-sky-blue border border-sky-blue/40'
                            : 'text-frost/80 hover:bg-white/5'
                        )}
                      >
                        {country}
                      </button>
                    );
                  })}
                  {filteredCountries.length === 0 && (
                    <p className="text-xs text-muted-foreground px-3 py-2">No countries found</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-1">
            <Button
              onClick={handleSetSail}
              disabled={saving}
              className="flex-1 glass-button-primary font-semibold h-10"
            >
              {saving && (
                <span className="w-4 h-4 border-2 border-sky-blue border-t-transparent rounded-full animate-spin mr-2 inline-block" />
              )}
              Set Sail
            </Button>
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="border border-white/20 text-frost/70 hover:bg-white/10 h-10"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
