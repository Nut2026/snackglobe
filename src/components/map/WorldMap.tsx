/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { COUNTRY_ISO_MAP, COUNTRY_LABEL_COORDS, RECIPE_COUNTRIES } from '@/data/recipes';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const ISO_TO_COUNTRY: Record<string, string> = Object.fromEntries(
  Object.entries(COUNTRY_ISO_MAP).map(([name, iso]) => [iso, name])
);

interface Props {
  selectedCountry: string | null;
  dotCountry: string | null;
  onCountryClick: (country: string) => void;
}

export default function WorldMap({ selectedCountry, dotCountry, onCountryClick }: Props) {
  const recipeIsos = useMemo(
    () => new Set(RECIPE_COUNTRIES.map(c => COUNTRY_ISO_MAP[c]).filter(Boolean)),
    []
  );

  const handleClick = useCallback((geo: any) => {
    const iso = geo.properties.ADM0_A3 || geo.properties.ISO_A3;
    if (!iso) return;
    const country = ISO_TO_COUNTRY[iso];
    if (country && RECIPE_COUNTRIES.includes(country)) {
      onCountryClick(country);
    }
  }, [onCountryClick]);

  // Dot coords: use geographic centroid from COUNTRY_LABEL_COORDS
  const dotCoords = useMemo(() => {
    if (!dotCountry) return null;
    return COUNTRY_LABEL_COORDS[dotCountry] as [number, number] | undefined;
  }, [dotCountry]);

  return (
    <div className="w-full h-full select-none">
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 153, center: [10, 10] }}
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          {/* Land texture gradient — gives subtle depth */}
          <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(203 35% 30%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(213 37% 20%)" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="recipeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(199 60% 42%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(199 51% 32%)" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="selectedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(199 70% 58%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(199 51% 45%)" stopOpacity="1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="dotGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map(geo => {
              const iso = geo.properties.ADM0_A3 || geo.properties.ISO_A3;
              const country = ISO_TO_COUNTRY[iso] || '';
              const hasRecipes = recipeIsos.has(iso);
              const isSelected = country === selectedCountry || country === dotCountry;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleClick(geo)}
                  style={{
                    default: {
                      fill: isSelected
                        ? 'url(#selectedGrad)'
                        : hasRecipes
                        ? 'url(#recipeGrad)'
                        : 'url(#landGrad)',
                      stroke: isSelected
                        ? 'rgba(122,184,212,0.9)'
                        : hasRecipes
                        ? 'rgba(122,184,212,0.5)'
                        : 'rgba(74,122,154,0.25)',
                      strokeWidth: isSelected ? 0.8 : hasRecipes ? 0.5 : 0.3,
                      outline: 'none',
                      cursor: hasRecipes ? 'pointer' : 'default',
                      filter: isSelected ? 'url(#glow)' : 'none',
                      transition: 'fill 0.25s ease, stroke 0.25s ease',
                    },
                    hover: {
                      fill: hasRecipes
                        ? isSelected ? 'url(#selectedGrad)' : 'hsl(199 65% 52%)'
                        : 'url(#landGrad)',
                      stroke: hasRecipes ? 'rgba(184,226,240,0.85)' : 'rgba(74,122,154,0.25)',
                      strokeWidth: hasRecipes ? 0.7 : 0.3,
                      outline: 'none',
                      cursor: hasRecipes ? 'pointer' : 'default',
                    },
                    pressed: {
                      fill: 'url(#selectedGrad)',
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Pulsing dot on selected country */}
        {dotCoords && (
          <Marker coordinates={dotCoords}>
            {/* Outer ring */}
            <circle r={7} fill="none" stroke="#7AB8D4" strokeWidth={1.5} opacity={0.45} className="animate-pulse-glow" />
            {/* Inner dot */}
            <circle r={4} fill="#B8E2F0" opacity={0.95} filter="url(#dotGlow)" className="animate-pulse-glow" />
          </Marker>
        )}
      </ComposableMap>
    </div>
  );
}
