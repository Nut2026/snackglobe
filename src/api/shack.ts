import { supabase } from '@/db/supabase';
import type { SavedRecipe, AdaptedRecipe, SelectedFilters } from '@/types/index';

export async function isRecipeSaved(foodSlug: string): Promise<boolean> {
  const { data } = await supabase
    .from('saved_recipes')
    .select('id')
    .eq('food_slug', foodSlug)
    .maybeSingle();
  return !!data;
}

export async function upsertCustomisedRecipe(foodSlug: string, customisedRecipe: AdaptedRecipe): Promise<void> {
  const { error } = await supabase
    .from('saved_recipes')
    .update({ customised_recipe: customisedRecipe })
    .eq('food_slug', foodSlug);
  if (error) throw error;
}

export async function getPrompt(type: 'character_experience' | 'recipe_customisation'): Promise<string> {
  const { data } = await supabase
    .from('prompts')
    .select('content')
    .eq('type', type)
    .maybeSingle();
  return data?.content ?? '';
}

export async function getExperience(foodSlug: string): Promise<{ exists: boolean; summary: string }> {
  const { data } = await supabase
    .from('user_experiences')
    .select('memory_summary')
    .eq('food_slug', foodSlug)
    .maybeSingle();
  return { exists: !!data, summary: data?.memory_summary ?? '' };
}

export async function upsertExperience(foodSlug: string, memorySummary: string): Promise<void> {
  const { error } = await supabase
    .from('user_experiences')
    .upsert({ food_slug: foodSlug, memory_summary: memorySummary, updated_at: new Date().toISOString() },
      { onConflict: 'user_id,food_slug' });
  if (error) throw error;
}

export async function deleteExperience(foodSlug: string): Promise<void> {
  const { error } = await supabase
    .from('user_experiences')
    .delete()
    .eq('food_slug', foodSlug);
  if (error) throw error;
}

export async function getSavedRecipes(): Promise<SavedRecipe[]> {
  const { data, error } = await supabase
    .from('saved_recipes')
    .select('*')
    .order('starred', { ascending: false })
    .order('position', { ascending: true })
    .order('saved_at', { ascending: false });
  if (error) throw error;
  return Array.isArray(data) ? data : [];
}

export async function saveRecipe(recipe: {
  food_slug: string;
  food_name: string;
  country: string;
  continent: string;
  category: string;
  original_recipe: AdaptedRecipe;
  filtered_recipe?: AdaptedRecipe | null;
  final_recipe?: AdaptedRecipe | null;
  applied_filters?: SelectedFilters | null;
}): Promise<void> {
  // Get current max position
  const { data: existing } = await supabase
    .from('saved_recipes')
    .select('position')
    .order('position', { ascending: false })
    .limit(1)
    .maybeSingle();

  const nextPos = (existing?.position ?? -1) + 1;

  const { error } = await supabase
    .from('saved_recipes')
    .upsert({
      food_slug: recipe.food_slug,
      food_name: recipe.food_name,
      country: recipe.country,
      continent: recipe.continent,
      category: recipe.category,
      original_recipe: recipe.original_recipe,
      filtered_recipe: recipe.filtered_recipe ?? null,
      final_recipe: recipe.final_recipe ?? null,
      applied_filters: recipe.applied_filters ?? null,
      position: nextPos,
    }, { onConflict: 'user_id,food_slug' });
  if (error) throw error;
}

export async function toggleStar(id: string, starred: boolean): Promise<void> {
  const { error } = await supabase
    .from('saved_recipes')
    .update({ starred })
    .eq('id', id);
  if (error) throw error;
}

export async function incrementCraftCount(id: string): Promise<number> {
  const { data, error } = await supabase
    .from('saved_recipes')
    .select('craft_count')
    .eq('id', id)
    .maybeSingle();
  if (error) throw error;
  const newCount = (data?.craft_count ?? 0) + 1;
  const { error: upErr } = await supabase
    .from('saved_recipes')
    .update({ craft_count: newCount })
    .eq('id', id);
  if (upErr) throw upErr;
  return newCount;
}

export async function deleteRecipe(id: string): Promise<void> {
  const { error } = await supabase
    .from('saved_recipes')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

export async function restoreRecipe(recipe: SavedRecipe): Promise<void> {
  const { error } = await supabase
    .from('saved_recipes')
    .insert({
      id: recipe.id,
      food_slug: recipe.food_slug,
      food_name: recipe.food_name,
      country: recipe.country,
      continent: recipe.continent,
      category: recipe.category,
      original_recipe: recipe.original_recipe,
      filtered_recipe: recipe.filtered_recipe,
      final_recipe: recipe.final_recipe,
      applied_filters: recipe.applied_filters,
      starred: recipe.starred,
      craft_count: recipe.craft_count,
      position: recipe.position,
    });
  if (error) throw error;
}
