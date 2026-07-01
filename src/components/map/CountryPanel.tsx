import { useNavigate } from 'react-router-dom';
import { X, Search, Coffee, Cookie, Globe, ShieldCheck, ShoppingCart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Recipe } from '@/data/recipes';
import { cn } from '@/lib/utils';

// BookmarkPlus icon — bookmark with + sign
function BookmarkPlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg1"
      width="20px"
      height="20px"
      viewBox="0 0 30 30"
      preserveAspectRatio="xMidYMid meet"
      key="2a86fffd-9ef5-4217-8819-ca775bc98e39"
      inkscape="http://www.inkscape.org/namespaces/inkscape"
      sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      svg="http://www.w3.org/2000/svg"
      version="1.1"
      docname="bookmark.svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}><defs id="defs1"><linearGradient id="swatch10"><stop
            id="stop10"
            offset="0"
            style={{
              stopColor: "#6c7a83",
              stopOpacity: "1"
            }} /></linearGradient></defs><g id="layer1"><g
          id="g17"
          style={{
            strokeWidth: "1.1",
            strokeDasharray: "none"
          }}
          transform="translate(2.5 .084)"><g
            id="g18"
            style={{
              strokeWidth: "1.5",
              strokeDasharray: "none"
            }}
            transform="translate(3.025 -3.732)"><g id="g22"><g id="g21"><g id="g20"><g id="g19"><g id="g23" transform="translate(-4.735 -10.748)scale(1.49976)"><path
                        id="path2"
                        d="M4.797 12.266h9.356"
                        style={{
                          fill: "#73b568",
                          stroke: "#6c7a83",
                          strokeWidth: "1.5",
                          strokeDasharray: "none",
                          strokeOpacity: "1"
                        }} /><path
                        id="path5"
                        d="M4.673 12.266h9.604"
                        style={{
                          fill: "#73b568",
                          stroke: "#6c7a83",
                          strokeWidth: "1.5",
                          strokeDasharray: "none",
                          strokeOpacity: "1"
                        }} /><path
                        id="path6"
                        d="M14.153 25.14V12.266"
                        style={{
                          fill: "#73b568",
                          stroke: "#6c7a83",
                          strokeWidth: "1.5",
                          strokeDasharray: "none",
                          strokeOpacity: "1"
                        }} /><path
                        id="path7"
                        d="M4.797 12.266V25.14"
                        style={{
                          fill: "#73b568",
                          stroke: "#6c7a83",
                          strokeWidth: "1.5",
                          strokeDasharray: "none",
                          strokeOpacity: "1"
                        }} /><path
                        id="path9"
                        d="m9.67 21.648 4.582 3.56z"
                        style={{
                          fill: "#73b568",
                          stroke: "#6c7a83",
                          strokeWidth: "1.25438",
                          strokeDasharray: "none",
                          strokeOpacity: "1"
                        }} /><path
                        id="path10"
                        d="m9.367 21.646-4.579 3.336"
                        style={{
                          fill: "#73b568",
                          stroke: "#6c7a83",
                          strokeWidth: "1.22839",
                          strokeDasharray: "none",
                          strokeOpacity: "1"
                        }} /></g></g></g></g></g></g></g></g></svg>
  );
}

// BookmarkCheck icon — bookmark with tick
function BookmarkCheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      <polyline points="9 11 12 14 16 9" />
    </svg>
  );
}

interface Props {
  recipe: Recipe;
  isSaved: boolean;
  onClose: () => void;
  onBookmark: () => void;
}

export default function CountryPanel({ recipe, isSaved, onClose, onBookmark }: Props) {
  const navigate = useNavigate();

  return (
    <div className="glass-panel border border-white/15 rounded-2xl p-5 flex flex-col gap-3 relative">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-12 text-frost/40 hover:text-frost transition-colors"
        aria-label="Close panel"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Bookmark — BookmarkPlus when unsaved, BookmarkCheck (golden) when saved */}
      <button
        onClick={onBookmark}
        className={cn(
          'absolute top-4 right-4 transition-colors',
          isSaved ? 'text-gold' : 'text-frost/40 hover:text-sky-blue'
        )}
        aria-label={isSaved ? 'Saved to Shack' : 'Save to Shack'}
      >
        {isSaved
          ? <BookmarkCheckIcon className="w-5 h-5" />
          : <BookmarkPlusIcon className="w-5 h-5" />
        }
      </button>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Globe className="w-3.5 h-3.5 text-sky-blue shrink-0" />
        <span className="text-sky-blue font-medium">{recipe.continent}</span>
        <span className="text-frost/30">|</span>
        <span className="text-frost/70">{recipe.country}</span>
      </div>

      {/* Food name */}
      <button onClick={() => navigate(`/${recipe.slug}/uncover`)} className="text-left group">
        <h2 className="text-xl font-bold text-frost group-hover:text-sky-blue transition-colors leading-tight text-balance">
          {recipe.name}
        </h2>
      </button>

      {/* Category + difficulty/time */}
      <div className="flex flex-col gap-1.5">
        <Badge
          variant="outline"
          className={cn(
            'border text-xs font-medium w-fit',
            recipe.category === 'Beverage'
              ? 'border-mint/40 text-mint bg-mint/10'
              : 'border-sunshine/40 text-sunshine bg-sunshine/10'
          )}
        >
          {recipe.category === 'Beverage' ? <Coffee className="w-3 h-3 mr-1" /> : <Cookie className="w-3 h-3 mr-1" />}
          {recipe.category}
        </Badge>
        <p className="text-xs text-muted-foreground">
          {recipe.difficulty} · {recipe.time}
        </p>
      </div>

      {/* Cultural Authenticity */}
      <div className="flex items-start gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-sky-blue shrink-0 mt-0.5" />
        <p className="text-xs text-frost/70 text-pretty">
          <span className="text-sky-blue font-medium">Cultural Authenticity: </span>
          {recipe.cultural_authenticity}
        </p>
      </div>

      {/* Versus Store Bought */}
      <div className="flex items-start gap-2">
        <ShoppingCart className="w-3.5 h-3.5 text-sunshine shrink-0 mt-0.5" />
        <p className="text-xs text-frost/70 text-pretty">
          <span className="text-sunshine font-medium">Versus Store Bought: </span>
          {recipe.better_than_store_bought}
        </p>
      </div>

      {/* Hidden Nutrients */}
      <div className="flex items-start gap-2">
        <Leaf className="w-3.5 h-3.5 text-mint shrink-0 mt-0.5" />
        <p className="text-xs text-frost/70 text-pretty">
          <span className="text-mint font-medium">Hidden Nutrients: </span>
          {recipe.hidden_nutrients}
        </p>
      </div>

      {/* Uncover button */}
      <Button
        onClick={() => navigate(`/${recipe.slug}/uncover`)}
        className="w-full glass-button-primary font-medium h-9 text-sm mt-1"
      >
        <Search className="w-4 h-4 mr-1.5" />
        Uncover
      </Button>
    </div>
  );
}
