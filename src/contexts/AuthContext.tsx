import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
// @ts-ignore
import { supabase } from '@/db/supabase';
import type { User } from '@supabase/supabase-js';
import type { Profile } from '@/types/index';
import { toast } from 'sonner';

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .maybeSingle();
  if (error) { console.error('getProfile error:', error); return null; }
  return data;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signInWithUsername: (username: string, password: string) => Promise<{ error: Error | null }>;
  signUpWithUsername: (username: string, email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  updateTheme: (theme: 'light' | 'dark') => Promise<void>;
  updatePassword: (oldPassword: string, newPassword: string) => Promise<{ error: string | null }>;
  deleteAccount: (password: string) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signInWithUsername: async () => ({ error: new Error('AuthProvider not ready') }),
  signUpWithUsername: async () => ({ error: new Error('AuthProvider not ready') }),
  signOut: async () => {},
  refreshProfile: async () => {},
  updateTheme: async () => {},
  updatePassword: async () => ({ error: 'AuthProvider not ready' }),
  deleteAccount: async () => ({ error: 'AuthProvider not ready' }),
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const applyTheme = (theme: 'light' | 'dark') => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  };

  const refreshProfile = useCallback(async () => {
    if (!user) { setProfile(null); return; }
    const profileData = await getProfile(user.id);
    setProfile(profileData);
    if (profileData?.theme_preference) applyTheme(profileData.theme_preference as 'light' | 'dark');
  }, [user]);

  useEffect(() => {
    supabase.auth.getSession()
      // @ts-ignore
      .then(({ data: { session } }) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          getProfile(session.user.id).then(p => {
            setProfile(p);
            if (p?.theme_preference) applyTheme(p.theme_preference as 'light' | 'dark');
          });
        }
      })
      .catch((error: Error) => { toast.error(`Session error: ${error.message}`); })
      .finally(() => { setLoading(false); });

    // @ts-ignore
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: string, session: { user: User } | null) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        getProfile(session.user.id).then(p => {
          setProfile(p);
          if (p?.theme_preference) applyTheme(p.theme_preference as 'light' | 'dark');
        });
      } else {
        setProfile(null);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const signInWithUsername = async (username: string, password: string) => {
    try {
      // Call edge function to sign in by username (bypasses RLS)
      const { data, error: fnError } = await supabase.functions.invoke('sign-in', {
        body: { username: username.trim(), password },
      });

      if (fnError) {
        throw new Error(fnError.message || 'Failed to sign in');
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      // Set the returned session in the browser
      if (data?.access_token && data?.refresh_token) {
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: data.access_token,
          refresh_token: data.refresh_token,
        });
        if (sessionError) throw sessionError;
      } else {
        throw new Error('Invalid login credentials');
      }

      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signUpWithUsername = async (username: string, email: string, password: string) => {
    try {
      // Check username uniqueness (case-insensitive)
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
      // Upsert profile with normalized lowercase username and email
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
  };

  const updatePassword = async (oldPassword: string, newPassword: string): Promise<{ error: string | null }> => {
    if (!user?.email) return { error: 'Not signed in' };
    // Verify old password
    const { error: verifyError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: oldPassword,
    });
    if (verifyError) return { error: 'Current password is incorrect' };
    // Update to new password
    const { error: updateError } = await supabase.auth.updateUser({ password: newPassword });
    if (updateError) return { error: updateError.message };
    return { error: null };
  };

  const updateTheme = async (theme: 'light' | 'dark') => {
    applyTheme(theme);
    setProfile(p => p ? { ...p, theme_preference: theme } : p);
    if (!user) return;
    await supabase.from('profiles').update({ theme_preference: theme }).eq('id', user.id);
  };

  const deleteAccount = async (password: string): Promise<{ error: string | null }> => {
    if (!user) return { error: 'Not signed in' };
    // Re-authenticate first
    const email = user.email!;
    const { error: reAuthError } = await supabase.auth.signInWithPassword({ email, password });
    if (reAuthError) return { error: 'Incorrect password. Please try again.' };
    // Delete all user data
    await supabase.from('saved_recipes').delete().eq('user_id', user.id);
    await supabase.from('sail_preferences').delete().eq('user_id', user.id);
    await supabase.from('profiles').delete().eq('id', user.id);
    // Delete auth user via admin endpoint — requires edge function
    const { error: delError } = await supabase.functions.invoke('delete-account');
    if (delError) return { error: 'Failed to delete account. Please try again.' };
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    return { error: null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signInWithUsername, signUpWithUsername, signOut, refreshProfile, updateTheme, updatePassword, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
