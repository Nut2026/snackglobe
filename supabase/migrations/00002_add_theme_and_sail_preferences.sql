
-- Add theme_preference to profiles
ALTER TABLE profiles ADD COLUMN theme_preference text NOT NULL DEFAULT 'dark' CHECK (theme_preference IN ('light', 'dark'));

-- Sail preferences: per-user compass settings
CREATE TABLE IF NOT EXISTS sail_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid(),
  mode text NOT NULL DEFAULT 'random' CHECK (mode IN ('random', 'filtered')),
  selected_regions text[] NOT NULL DEFAULT '{}',
  selected_countries text[] NOT NULL DEFAULT '{}',
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE sail_preferences ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own sail prefs" ON sail_preferences FOR ALL USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

-- Recipe overrides: admin-editable recipe data stored in DB
CREATE TABLE IF NOT EXISTS recipe_overrides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  food_slug text NOT NULL UNIQUE,
  override_data jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE recipe_overrides ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read recipe overrides" ON recipe_overrides FOR SELECT USING (true);
CREATE POLICY "Admins can manage recipe overrides" ON recipe_overrides FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
) WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
);
