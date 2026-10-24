export interface Profile {
  id: string;
  username: string | null;
  email: string | null;
  phone: string | null;
  theme_preference: 'light' | 'dark';
  created_at: string;
}

export interface AdaptedRecipe {
  name: string;
  servings: string;
  time: string;
  difficulty: string;
  ingredients: Record<string, string[]>;
  steps: string[];
  making_tips?: string[];
  notes?: string;
}

export interface SelectedFilters {
  healthGoals: string[];
  dietaryRestrictions: string[];
  cuisineFusion: string[];
}

export type RecipeTab = 'original' | 'customised';

export interface SavedRecipe {
  id: string;
  user_id: string;
  food_slug: string;
  food_name: string;
  country: string;
  continent: string;
  category: string;
  original_recipe: AdaptedRecipe;
  filtered_recipe: AdaptedRecipe | null;
  final_recipe: AdaptedRecipe | null;
  applied_filters: SelectedFilters | null;
  starred: boolean;
  craft_count: number;
  saved_at: string;
  position: number;
}
