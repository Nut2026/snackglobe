import type { User } from '@supabase/supabase-js';
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'sonner';
import { supabase } from '@/db/supabase';
import type { Profile } from '@/types/index';

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, email, phone, theme_preference, created_at')
    .eq('id', userId)
    .maybeSingle();
  if (error) {
    console.error('Failed to load profile:', error);
    return null;
  }
  return data;
}

interface AuthContextValue {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signInWithUsername: (username: string, password: string) => Promise<{ error: Error | null }>;
  signUpWithUsername: (
    username: string,
    email: string,
    password: string,
  ) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  updateTheme: (theme: 'light' | 'dark') => Promise<void>;
  updatePassword: (
    oldPassword: string,
    newPassword: string,
  ) => Promise<{ error: string | null }>;
  deleteAccount: (password: string) => Promise<{ error: string | null }>;
}

const NOT_READY = 'Authentication is not ready yet';

const AuthContext = createContext<AuthContextValue>({
  user: null,
  profile: null,
  loading: true,
  signInWithUsername: async () => ({ error: new Error(NOT_READY) }),
  signUpWithUsername: async () => ({ error: new Error(NOT_READY) }),
  signOut: async () => {},
  refreshProfile: async () => {},
  updateTheme: async () => {},
  updatePassword: async () => ({ error: NOT_READY }),
  deleteAccount: async () => ({ error: NOT_READY }),
});

function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement;
  root.classList.toggle('light', theme === 'light');
  root.classList.toggle('dark', theme === 'dark');
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = useCallback(async (userId: string) => {
    const data = await getProfile(userId);
    setProfile(data);
    if (data?.theme_preference) applyTheme(data.theme_preference);
  }, []);

  const refreshProfile = useCallback(async () => {
    if (user) {
      await loadProfile(user.id);
    } else {
      setProfile(null);
    }
  }, [user, loadProfile]);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setUser(session?.user ?? null);
        if (session?.user) loadProfile(session.user.id);
      })
      .catch((error: Error) => toast.error(`Session error: ${error.message}`))
      .finally(() => setLoading(false));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) loadProfile(session.user.id);
      else setProfile(null);
    });

    return () => subscription.unsubscribe();
  }, [loadProfile]);

  const signInWithUsername = useCallback(async (username: string, password: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('sign-in', {
        body: { username: username.trim(), password },
      });

      if (error) throw new Error(error.message || 'Failed to sign in');
      if (data?.error) throw new Error(data.error);

      if (!data?.access_token || !data?.refresh_token) {
        throw new Error('Invalid login credentials');
      }

      const { error: sessionError } = await supabase.auth.setSession({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      });
      if (sessionError) throw sessionError;

      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  }, []);

  const signUpWithUsername = useCallback(
    async (username: string, email: string, password: string) => {
      try {
        const { data: existing } = await supabase
          .from('profiles')
          .select('id')
          .ilike('username', username.trim())
          .maybeSingle();

        if (existing) {
          return { error: new Error('Username taken, please try another') };
        }

        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;

        if (data.user) {
          await supabase.from('profiles').upsert({
            id: data.user.id,
            username: username.trim().toLowerCase(),
            email,
          });
        }
        return { error: null };
      } catch (error) {
        return { error: error as Error };
      }
    },
    [],
  );

  const updatePassword = useCallback(
    async (oldPassword: string, newPassword: string): Promise<{ error: string | null }> => {
      if (!user?.email) return { error: 'Not signed in' };

      const { error: verifyError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: oldPassword,
      });
      if (verifyError) return { error: 'Current password is incorrect' };

      const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });
      if (updateError) return { error: updateError.message };
      return { error: null };
    },
    [user],
  );

  const updateTheme = useCallback(
    async (theme: 'light' | 'dark') => {
      applyTheme(theme);
      setProfile((current) => (current ? { ...current, theme_preference: theme } : current));
      if (!user) return;
      await supabase.from('profiles').update({ theme_preference: theme }).eq('id', user.id);
    },
    [user],
  );

  const deleteAccount = useCallback(
    async (password: string): Promise<{ error: string | null }> => {
      if (!user) return { error: 'Not signed in' };

      const email = user.email;
      if (!email) return { error: 'Not signed in' };

      const { error: reAuthError } = await supabase.auth.signInWithPassword({ email, password });
      if (reAuthError) return { error: 'Incorrect password. Please try again.' };

      await supabase.from('saved_recipes').delete().eq('user_id', user.id);
      await supabase.from('sail_preferences').delete().eq('user_id', user.id);

      const { error: deleteError } = await supabase.functions.invoke('delete-account');
      if (deleteError) return { error: 'Failed to delete account. Please try again.' };

      await supabase.auth.signOut();
      setUser(null);
      setProfile(null);
      return { error: null };
    },
    [user],
  );

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signInWithUsername,
        signUpWithUsername,
        signOut,
        refreshProfile,
        updateTheme,
        updatePassword,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
