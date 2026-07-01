export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
}

export interface Profile {
  id: string;
  username: string | null;
  email: string | null;
  phone: string | null;
  role: 'user' | 'admin';
  theme_preference: 'light' | 'dark';
  created_at: string;
}

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

export interface UserExperience {
  id: string;
  user_id: string;
  food_slug: string;
  memory_summary: string;
  created_at: string;
  updated_at: string;
}

export interface Prompt {
  id: string;
  type: 'character_experience' | 'recipe_customisation';
  content: string;
  updated_at: string;
}

export interface UserProfile {
  id: string;
  username: string | null;
  email: string | null;
  role: 'user' | 'admin';
  created_at: string;
  saved_recipe_count?: number;
}
