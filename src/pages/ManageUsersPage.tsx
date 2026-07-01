import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NavBar from '@/components/common/NavBar';
import { useAuth } from '@/contexts/AuthContext';
// @ts-ignore
import { supabase } from '@/db/supabase';
import { cn } from '@/lib/utils';

interface UserRow {
  id: string;
  username: string | null;
  email: string | null;
  role: 'user' | 'admin';
  created_at: string;
  saved_recipe_count: number;
}

function Avatar({ username, size = 8 }: { username: string; size?: number }) {
  const initials = (username || 'U').slice(0, 2).toUpperCase();
  const sizeClass = size === 8 ? 'w-8 h-8 text-xs' : 'w-9 h-9 text-xs';
  return (
    <div className={cn(
      'rounded-full bg-sky-blue/20 border border-sky-blue/40 flex items-center justify-center font-bold text-sky-blue shrink-0',
      sizeClass
    )}>
      {initials}
    </div>
  );
}

function formatDateUTC8(iso: string): string {
  try {
    const d = new Date(iso);
    const utc8 = new Date(d.getTime() + 8 * 60 * 60 * 1000);
    return utc8.toISOString().replace('T', ' ').slice(0, 16) + ' UTC+8';
  } catch { return iso; }
}

const ROW_HEIGHT = 56;
const VISIBLE_ROWS = 10;

function VirtualList({ users }: { users: UserRow[] }) {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const startIdx = Math.floor(scrollTop / ROW_HEIGHT);
  const endIdx = Math.min(users.length, startIdx + VISIBLE_ROWS + 2);
  const visibleUsers = users.slice(startIdx, endIdx);
  const totalHeight = users.length * ROW_HEIGHT;
  const offsetY = startIdx * ROW_HEIGHT;

  const handleScroll = useCallback(() => {
    if (containerRef.current) setScrollTop(containerRef.current.scrollTop);
  }, []);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="overflow-y-auto"
      style={{ height: Math.min(users.length, VISIBLE_ROWS) * ROW_HEIGHT }}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ position: 'absolute', top: offsetY, left: 0, right: 0 }}>
          {visibleUsers.map(user => (
            <UserRowItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

function UserRowItem({ user }: { user: UserRow }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 border-b border-white/5 hover:bg-white/3 transition-colors"
      style={{ height: ROW_HEIGHT }}
    >
      <Avatar username={user.username || user.email || 'U'} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-sm font-medium text-frost truncate">
            {user.username || '(no username)'}
          </span>
          {user.role === 'admin' && (
            <Badge variant="outline" className="text-xs border-sky-blue/40 text-sky-blue bg-sky-blue/10 shrink-0 py-0">
              <ShieldCheck className="w-3 h-3 mr-1" />Admin
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
      </div>
      <div className="text-right shrink-0 hidden md:block">
        <p className="text-xs text-muted-foreground">{formatDateUTC8(user.created_at)}</p>
      </div>
      <div className="shrink-0 text-right min-w-[40px]">
        <span className="text-xs font-medium text-sky-blue">{user.saved_recipe_count}</span>
        <p className="text-xs text-muted-foreground">recipes</p>
      </div>
    </div>
  );
}

export default function ManageUsersPage() {
  const { profile, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [admins, setAdmins] = useState<UserRow[]>([]);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && profile?.role !== 'admin') navigate('/', { replace: true });
  }, [authLoading, profile, navigate]);

  useEffect(() => {
    if (profile?.role !== 'admin') return;
    (async () => {
      setLoading(true);
      // Fetch profiles with saved recipe counts
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, username, email, role, created_at')
        .order('created_at', { ascending: false });

      if (!profiles) { setLoading(false); return; }

      // Get recipe counts per user
      const { data: counts } = await supabase
        .from('saved_recipes')
        .select('user_id');

      const countMap: Record<string, number> = {};
      if (counts) {
        for (const row of counts) {
          countMap[row.user_id] = (countMap[row.user_id] ?? 0) + 1;
        }
      }

      const rows: UserRow[] = profiles.map(p => ({
        id: p.id,
        username: p.username,
        email: p.email,
        role: p.role,
        created_at: p.created_at,
        saved_recipe_count: countMap[p.id] ?? 0,
      }));

      setAdmins(rows.filter(r => r.role === 'admin'));
      setUsers(rows.filter(r => r.role === 'user'));
      setLoading(false);
    })();
  }, [profile]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-sky-blue animate-spin" />
      </div>
    );
  }

  if (profile?.role !== 'admin') return null;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 pt-20 px-4 md:px-8 pb-12 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8 flex items-start gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="border border-white/20 text-frost/70 hover:bg-white/10 shrink-0 mt-1"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />Back
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-frost text-balance">Manage Users</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {admins.length} admin{admins.length !== 1 ? 's' : ''} · {users.length} user{users.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Admins section */}
          <div className="glass-card rounded-2xl border border-sky-blue/20 overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-blue" />
              <h2 className="text-sm font-bold text-frost">Admins</h2>
              <Badge variant="outline" className="text-xs border-sky-blue/30 text-sky-blue bg-sky-blue/10 ml-auto">
                {admins.length}
              </Badge>
            </div>
            {admins.length === 0 ? (
              <p className="text-sm text-muted-foreground px-5 py-4">No admins found.</p>
            ) : (
              admins.map(user => <UserRowItem key={user.id} user={user} />)
            )}
          </div>

          {/* Users section */}
          <div className="glass-card rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-5 py-3 border-b border-white/10 flex items-center gap-2">
              <h2 className="text-sm font-bold text-frost">Users</h2>
              <Badge variant="outline" className="text-xs border-white/20 text-muted-foreground ml-auto">
                {users.length}
              </Badge>
            </div>
            {users.length === 0 ? (
              <p className="text-sm text-muted-foreground px-5 py-4">No users found.</p>
            ) : (
              <VirtualList users={users} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
