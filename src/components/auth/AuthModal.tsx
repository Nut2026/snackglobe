import { useState, useEffect } from 'react';
import { Anchor, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSuccess?: () => void;
  message?: string;
}

export default function AuthModal({ open, onOpenChange, onSuccess, message }: Props) {
  const { signInWithUsername, signUpWithUsername } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    if (!username.trim()) return 'Username is required';
    if (!/^[a-zA-Z0-9_]+$/.test(username)) return 'Username may only contain letters, digits, and underscores';
    if (mode === 'signup') {
      if (!email.trim()) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
      if (password.length < 6) return 'Password must be at least 6 characters';
      if (password !== confirmPassword) return 'Passwords do not match';
    } else {
      if (password.length < 6) return 'Password must be at least 6 characters';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setError('');
    setLoading(true);
    try {
      const { error: authErr } = mode === 'signin'
        ? await signInWithUsername(username, password)
        : await signUpWithUsername(username, email, password);
      if (authErr) { setError(authErr.message); return; }
      toast.success(mode === 'signin' ? `Welcome back, ${username}!` : `Welcome to SnackGlobe, ${username}!`);
      reset();
      onOpenChange(false);
      onSuccess?.();
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setUsername(''); setEmail(''); setPassword(''); setConfirmPassword(''); setError('');
    setShowPassword(false); setShowConfirmPassword(false);
  };
  const switchMode = (m: 'signin' | 'signup') => { setMode(m); reset(); };

  // Always reset to signin mode when modal closes
  useEffect(() => {
    if (!open) { setMode('signin'); reset(); }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={v => { onOpenChange(v); if (!v) { reset(); setMode('signin'); } }}>
      <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-sm glass-panel border border-white/15">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-frost text-balance">
            <Anchor className="w-5 h-5 text-sky-blue" />
            {mode === 'signin' ? 'Log In to SnackGlobe' : 'Join SnackGlobe'}
          </DialogTitle>
        </DialogHeader>

        {message && (
          <p className="text-sm text-sunshine bg-sunshine/10 border border-sunshine/30 rounded-lg px-3 py-2 text-pretty">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 mt-1">
          <div className="space-y-2">
            <Label htmlFor="auth-username" className="text-sm font-normal text-frost/80">Username</Label>
            <Input
              id="auth-username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="your_username"
              autoComplete="username"
              className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30"
            />
          </div>

          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="auth-email" className="text-sm font-normal text-frost/80">Email</Label>
              <Input
                id="auth-email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="auth-password" className="text-sm font-normal text-frost/80">Password</Label>
            <div className="relative">
              <Input
                id="auth-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(s => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-frost/40 hover:text-frost/70 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="auth-confirm-password" className="text-sm font-normal text-frost/80">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="auth-confirm-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-frost/40 hover:text-frost/70 transition-colors"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {error && (
            <div className="flex items-center gap-2 text-sm text-coral bg-coral/10 border border-coral/30 rounded-lg px-3 py-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span className="text-pretty">{error}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full glass-button-primary font-semibold h-10"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-sky-blue border-t-transparent rounded-full animate-spin" />
                {mode === 'signin' ? 'Logging in…' : 'Creating account…'}
              </span>
            ) : mode === 'signin' ? 'Log In' : 'Create Account'}
          </Button>

          <p className="text-center text-sm text-frost/50">
            {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => switchMode(mode === 'signin' ? 'signup' : 'signin')}
              className="text-sky-blue hover:text-mint transition-colors font-medium"
            >
              {mode === 'signin' ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
