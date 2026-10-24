
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

