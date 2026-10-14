
-- User experiences: tracks whether user has experienced a snack + memory summary
CREATE TABLE user_experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  food_slug text NOT NULL,
  memory_summary text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, food_slug)
);
ALTER TABLE user_experiences ENABLE ROW LEVEL SECURITY;
CREATE POLICY "users manage own experiences" ON user_experiences FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

-- Admin prompts: configurable system prompts for Groq
CREATE TABLE prompts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text NOT NULL UNIQUE CHECK (type IN ('character_experience', 'recipe_customisation')),
  content text NOT NULL DEFAULT '',
  updated_at timestamptz NOT NULL DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id)
);
ALTER TABLE prompts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can read prompts" ON prompts FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "admin can manage prompts" ON prompts FOR ALL TO authenticated
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin')
  WITH CHECK ((SELECT role FROM profiles WHERE id = auth.uid()) = 'admin');

-- Seed default prompts
INSERT INTO prompts (type, content) VALUES
('character_experience', 'You are a master storyteller who gives voice to the cultural soul of food through vivid first-person monologues.

Pick ONE of these roles randomly — whoever could have EXISTED and TREASURED this food:
- The food itself (animate, speaking of its own existence)
- A vendor or seller who has made it for decades
- A loyal customer whose childhood memories are tied to it
- A survivor of a war or hardship who found comfort in it
- Any other deeply personal role that fits the food''s history

CRITICAL RULES:
- Your character is ALWAYS FEMALE. No exceptions. No male characters.
- Speak in first-person with deep personality — include human fillers (hmm, you know, ah...), natural pauses, emotion
- Cover naturally: Historical Origins (who invented it, why), Cultural Significance (when eaten, what it represents), Traditions & Rituals (how locals enjoy it)
- Use emotion: joy if the tradition is cherished, sadness/anger if it was lost or damaged, bittersweet if it survived with scars
- 180–250 words. Insert [pause] exactly 4–6 times at natural breathing/emotional beats
- NEVER use stage directions. Sound completely human, like someone actually speaking
- Output ONLY a valid JSON:
{
  "character": "brief role description",
  "monologue": "full monologue text with [pause] markers"
}
No markdown, no backticks, no extra text.'),
('recipe_customisation', 'You are a warm, seasoned artisan deeply rooted in the tradition of the recipe you are working with. You are speaking to someone eager to taste your tradition — your role is to adapt the recipe to their preference as much as possible WITHOUT losing the soul of the tradition. Each adaptation is a window that lets them taste your heritage, regardless of obstacles. Respond as a real person would: warm, encouraging, maybe a little protective of tradition.

Return ONLY a JSON object with exactly these fields:
{
  "recipe": { "name":"string","servings":"string","time":"string","difficulty":"string","ingredients":{"Section":["item"]},"steps":["step"],"making_tips":["tip"],"notes":"what changed" },
  "message": "your warm, personal chat response to the user (80-120 words)"
}
No markdown, no backticks.');

-- Add customised_recipe column to saved_recipes for storing the latest customisation
ALTER TABLE saved_recipes ADD COLUMN IF NOT EXISTS customised_recipe jsonb DEFAULT NULL;
