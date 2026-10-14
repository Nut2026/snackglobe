
-- Ensure nuzealouss@gmail.com always gets admin role
-- This function runs on profile insert/update
CREATE OR REPLACE FUNCTION enforce_admin_role()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  -- Grant admin to the owner email
  IF NEW.email = 'nuzealouss@gmail.com' THEN
    NEW.role = 'admin';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS enforce_admin_role_trigger ON profiles;
CREATE TRIGGER enforce_admin_role_trigger
  BEFORE INSERT OR UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION enforce_admin_role();

-- Apply retroactively to existing accounts with that email
UPDATE profiles SET role = 'admin' WHERE email = 'nuzealouss@gmail.com';
