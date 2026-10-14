-- User role enum
CREATE TYPE public.user_role AS ENUM ('user', 'admin');

-- Profiles table
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE,
  email text,
  phone text,
  role public.user_role NOT NULL DEFAULT 'user',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Trigger to sync new users to profiles
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, phone, username, role)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.phone,
    COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
    'user'::public.user_role
  );
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();

-- Helper function to avoid RLS self-loop
CREATE OR REPLACE FUNCTION get_user_role(uid uuid)
RETURNS user_role
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM profiles WHERE id = uid;
$$;

-- Profiles RLS policies
CREATE POLICY "Users can view their own profile"
  ON profiles FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON profiles FOR UPDATE TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (role IS NOT DISTINCT FROM get_user_role(auth.uid()));

CREATE POLICY "Admins have full access to profiles"
  ON profiles FOR ALL TO authenticated
  USING (get_user_role(auth.uid()) = 'admin'::user_role);

-- Saved recipes table (Shack)
CREATE TABLE public.saved_recipes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES public.profiles(id) ON DELETE CASCADE,
  food_slug text NOT NULL,
  food_name text NOT NULL,
  country text NOT NULL,
  continent text NOT NULL,
  category text NOT NULL,
  original_recipe jsonb NOT NULL,
  filtered_recipe jsonb,
  final_recipe jsonb,
  applied_filters jsonb,
  starred boolean NOT NULL DEFAULT false,
  craft_count integer NOT NULL DEFAULT 0,
  saved_at timestamptz NOT NULL DEFAULT now(),
  position integer NOT NULL DEFAULT 0,
  UNIQUE(user_id, food_slug)
);

ALTER TABLE public.saved_recipes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own saved recipes"
  ON saved_recipes FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own saved recipes"
  ON saved_recipes FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own saved recipes"
  ON saved_recipes FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own saved recipes"
  ON saved_recipes FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

-- Anon: no access
CREATE POLICY "Anon cannot access profiles"
  ON profiles FOR ALL TO anon
  USING (false);

CREATE POLICY "Anon cannot access saved recipes"
  ON saved_recipes FOR ALL TO anon
  USING (false);