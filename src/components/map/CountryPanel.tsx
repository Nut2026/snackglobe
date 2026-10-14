import {
  BookmarkCheck,
  BookmarkPlus,
  Coffee,
  Cookie,
  Globe,
  Leaf,
  Search,
  ShieldCheck,
  ShoppingCart,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Recipe } from '@/data/recipes';
import { cn } from '@/lib/utils';

interface CountryPanelProps {
  recipe: Recipe;
  isSaved: boolean;
  onClose: () => void;
  onBookmark: () => void;
}

export default function CountryPanel({ recipe, isSaved, onClose, onBookmark }: CountryPanelProps) {
  const navigate = useNavigate();

  return (
    <div className="glass-panel border border-white/15 rounded-2xl p-5 flex flex-col gap-3 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-12 text-frost/40 hover:text-frost transition-colors"
        aria-label="Close panel"
      >
        <X className="w-4 h-4" />
      </button>

      <button
        onClick={onBookmark}
        className={cn(
          'absolute top-4 right-4 transition-colors',
          isSaved ? 'text-gold' : 'text-frost/40 hover:text-sky-blue',
        )}
        aria-label={isSaved ? 'Saved to Shack' : 'Save to Shack'}
      >
        {isSaved ? <BookmarkCheck className="w-5 h-5" /> : <BookmarkPlus className="w-5 h-5" />}
      </button>

      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Globe className="w-3.5 h-3.5 text-sky-blue shrink-0" />
        <span className="text-sky-blue font-medium">{recipe.continent}</span>
        <span className="text-frost/30">|</span>
        <span className="text-frost/70">{recipe.country}</span>
      </div>

      <button onClick={() => navigate(`/${recipe.slug}/uncover`)} className="text-left group">
        <h2 className="text-xl font-bold text-frost group-hover:text-sky-blue transition-colors leading-tight text-balance">
          {recipe.name}
        </h2>
      </button>

      <div className="flex flex-col gap-1.5">
        <Badge
          variant="outline"
          className={cn(
            'border text-xs font-medium w-fit',
            recipe.category === 'Beverage'
              ? 'border-mint/40 text-mint bg-mint/10'
              : 'border-sunshine/40 text-sunshine bg-sunshine/10',
          )}
        >
          {recipe.category === 'Beverage' ? (
            <Coffee className="w-3 h-3 mr-1" />
          ) : (
            <Cookie className="w-3 h-3 mr-1" />
          )}
          {recipe.category}
        </Badge>
        <p className="text-xs text-muted-foreground">
          {recipe.difficulty} · {recipe.time}
        </p>
      </div>

      <div className="flex items-start gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-sky-blue shrink-0 mt-0.5" />
        <p className="text-xs text-frost/70 text-pretty">
          <span className="text-sky-blue font-medium">Cultural Authenticity: </span>
          {recipe.cultural_authenticity}
        </p>
      </div>

      <div className="flex items-start gap-2">
        <ShoppingCart className="w-3.5 h-3.5 text-sunshine shrink-0 mt-0.5" />
        <p className="text-xs text-frost/70 text-pretty">
          <span className="text-sunshine font-medium">Versus Store Bought: </span>
          {recipe.better_than_store_bought}
        </p>
      </div>

      <div className="flex items-start gap-2">
        <Leaf className="w-3.5 h-3.5 text-mint shrink-0 mt-0.5" />
        <p className="text-xs text-frost/70 text-pretty">
          <span className="text-mint font-medium">Hidden Nutrients: </span>
          {recipe.hidden_nutrients}
        </p>
      </div>

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
