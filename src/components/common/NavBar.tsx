import {AlertCircle, 
  Bookmark, 
  ChevronDown, Eye, EyeOff, Lock,LogIn, LogOut, Menu, Trash2, X 
} from 'lucide-react';
import {useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import AuthModal from '@/components/auth/AuthModal';
import DemoOverlay from '@/components/common/DemoOverlay';
import { Button } from '@/components/ui/button';
import {
  Dialog, DialogContent, DialogDescription,DialogHeader, DialogTitle, 
} from '@/components/ui/dialog';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

const DEMO_MODE = import.meta.env.VITE_DEMO_MODE;
const SUPABASE_DEMO_MESSAGE =
  "Supabase is not available for this demo. But don't worry, watch a video demo instead!";

function AvatarCircle({ username, onClick }: { username: string; onClick?: () => void }) {
  const initials = username.slice(0, 2).toUpperCase();
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 rounded-full bg-sky-blue/20 border border-sky-blue/40 flex items-center justify-center text-sky-blue text-xs font-bold hover:bg-sky-blue/30 transition-colors shrink-0"
      aria-label="Account menu"
    >
      {initials}
    </button>
  );
}

function ChangePasswordModal({ open, onOpenChange }: {
  open: boolean; onOpenChange: (v: boolean) => void;
}) {
  const { updatePassword } = useAuth();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const reset = () => {
    setOldPassword(''); setNewPassword(''); setConfirmPassword('');
    setShowOld(false); setShowNew(false); setShowConfirm(false);
    setError(''); setLoading(false);
  };

  const handleChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (newPassword.length < 6) { setError('New password must be at least 6 characters'); return; }
    if (newPassword !== confirmPassword) { setError('Passwords do not match'); return; }
    setLoading(true);
    const { error: changeErr } = await updatePassword(oldPassword, newPassword);
    setLoading(false);
    if (changeErr) { setError(changeErr); return; }
    toast.success('Password changed successfully!');
    onOpenChange(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={v => { onOpenChange(v); if (!v) reset(); }}>
      <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-sm glass-panel border border-white/15">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-frost text-balance">
            <Lock className="w-5 h-5 text-sky-blue" />
            Change Password
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleChange} className="space-y-4 mt-1">
          <div className="space-y-2">
            <Label className="text-sm font-normal text-frost/80">Current Password</Label>
            <div className="relative">
              <Input
                type={showOld ? 'text' : 'password'}
                value={oldPassword}
                onChange={e => { setOldPassword(e.target.value); setError(''); }}
                placeholder="••••••••"
                className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowOld(s => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-frost/40 hover:text-frost/70 transition-colors"
                tabIndex={-1}
              >
                {showOld ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-normal text-frost/80">New Password</Label>
            <div className="relative">
              <Input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={e => { setNewPassword(e.target.value); setError(''); }}
                placeholder="••••••••"
                className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowNew(s => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-frost/40 hover:text-frost/70 transition-colors"
                tabIndex={-1}
              >
                {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-normal text-frost/80">Confirm New Password</Label>
            <div className="relative">
              <Input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={e => { setConfirmPassword(e.target.value); setError(''); }}
                placeholder="••••••••"
                className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(s => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-frost/40 hover:text-frost/70 transition-colors"
                tabIndex={-1}
              >
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-sm text-coral bg-coral/10 border border-coral/30 rounded-lg px-3 py-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span className="text-pretty">{error}</span>
            </div>
          )}

          <Button type="submit" disabled={loading} className="w-full glass-button-primary font-semibold h-10">
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-sky-blue border-t-transparent rounded-full animate-spin" />
                Changing…
              </span>
            ) : 'Change Password'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function DeleteAccountModal({ open, onOpenChange, username }: {
  open: boolean; onOpenChange: (v: boolean) => void; username: string;
}) {
  const { deleteAccount } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<'confirm' | 'verify'>('confirm');
  const [password, setPassword] = useState('');
  const [confirmText, setConfirmText] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [textError, setTextError] = useState('');

  const expectedText = `Delete-${username}-forever`;

  const reset = () => {
    setStep('confirm'); setPassword(''); setConfirmText('');
    setPasswordError(''); setTextError(''); setShowPassword(false);
  };

  const handleVerify = async () => {
    setPasswordError(''); setTextError('');
    let valid = true;
    if (!password) { setPasswordError('Password is required'); valid = false; }
    if (confirmText !== expectedText) { setTextError(`Must type exactly: ${expectedText}`); valid = false; }
    if (!valid) return;
    setLoading(true);
    const { error } = await deleteAccount(password);
    setLoading(false);
    if (error) {
      if (error.toLowerCase().includes('password')) setPasswordError(error);
      else toast.error(error);
      return;
    }
    toast.success('Account permanently deleted.');
    onOpenChange(false);
    reset();
    navigate('/');
  };

  return (
    <Dialog open={open} onOpenChange={v => { onOpenChange(v); if (!v) reset(); }}>
      <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-md glass-panel border border-white/15">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-coral text-balance">
            <Trash2 className="w-5 h-5" />
            Delete Account
          </DialogTitle>
          {step === 'confirm' && (
            <DialogDescription className="text-frost/70 text-pretty mt-2">
              Delete account permanently? All your saved and customised recipes, alongside your progress, will be lost forever. There is no grace period.
            </DialogDescription>
          )}
        </DialogHeader>

        {step === 'confirm' ? (
          <div className="flex gap-3 mt-2">
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="flex-1 border border-white/20 text-frost/70 hover:bg-white/10"
            >
              Surely not
            </Button>
            <Button
              onClick={() => setStep('verify')}
              className="flex-1 bg-coral/20 border border-coral/40 text-coral hover:bg-coral/30"
            >
              I'm certain
            </Button>
          </div>
        ) : (
          <div className="space-y-4 mt-2">
            <p className="text-sm text-frost/70 text-pretty">
              Enter your password and type <span className="text-coral font-mono text-xs">{expectedText}</span> to confirm.
            </p>

            <div className="space-y-2">
              <Label className="text-sm font-normal text-frost/80">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setPasswordError(''); }}
                  placeholder="Your account password"
                  className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(s => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-frost/40 hover:text-frost/70 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {passwordError && (
                <p className="flex items-center gap-1.5 text-xs text-coral">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />{passwordError}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-normal text-frost/80">Confirmation text</Label>
              <Input
                value={confirmText}
                onChange={e => { setConfirmText(e.target.value); setTextError(''); }}
                placeholder={expectedText}
                className="bg-white/5 border-white/15 text-frost placeholder:text-frost/30 font-mono text-sm"
              />
              {textError && (
                <p className="flex items-center gap-1.5 text-xs text-coral">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />{textError}
                </p>
              )}
            </div>

            <div className="flex gap-3">
              <Button
                variant="ghost"
                onClick={() => { setStep('confirm'); reset(); }}
                className="flex-1 border border-white/20 text-frost/70 hover:bg-white/10"
              >
                Cancel
              </Button>
              <Button
                onClick={handleVerify}
                disabled={loading}
                className="flex-1 bg-coral/20 border border-coral/40 text-coral hover:bg-coral/30"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-coral border-t-transparent rounded-full animate-spin" />
                    Deleting…
                  </span>
                ) : 'Delete Forever'}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function NavBar() {
  const { user, profile, signOut } = useAuth();

  const navigate = useNavigate();
  const [authOpen, setAuthOpen] = useState(false);
  const [demoOverlayMsg, setDemoOverlayMsg] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const username = profile?.username ?? user?.email?.split('@')[0] ?? 'U';

  const handleShack = () => {
    setMobileOpen(false);
    if (DEMO_MODE) { setDemoOverlayMsg(SUPABASE_DEMO_MESSAGE); return; }
    if (!user) { setAuthOpen(true); return; }
    navigate('/shack');
  };

  const desktopUserControls = user ? (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleShack}
        className="border border-white/20 text-frost/80 hover:bg-white/10 hover:text-frost"
      >
        <Bookmark className="w-4 h-4 mr-1.5" />
        My Shack
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-1 group" aria-label="Account menu">
            <AvatarCircle username={username} />
            <ChevronDown className="w-3 h-3 text-frost/40 group-hover:text-frost/70 transition-colors" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-48 glass-panel border border-white/15 text-frost/90"
        >
          <DropdownMenuItem
            onClick={() => setChangePasswordOpen(true)}
            className="flex items-center gap-2 cursor-pointer hover:bg-white/10 focus:bg-white/10"
          >
            <Lock className="w-4 h-4 text-frost/60" />
            <span>Change Password</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-white/10" />
          <DropdownMenuItem
            onClick={async () => { await signOut(); navigate('/'); }}
            className="flex items-center gap-2 cursor-pointer hover:bg-white/10 focus:bg-white/10"
          >
            <LogOut className="w-4 h-4 text-frost/60" />
            <span>Sign Out</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setDeleteOpen(true)}
            className="flex items-center gap-2 cursor-pointer text-coral hover:bg-coral/10 focus:bg-coral/10"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete Account</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ) : (
    <div className="flex items-center gap-3">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleShack}
        className="border border-white/20 text-frost/80 hover:bg-white/10 hover:text-frost"
      >
        <Bookmark className="w-4 h-4 mr-1.5" />
        My Shack
      </Button>
      <Button
        size="sm"
        onClick={() => { if (DEMO_MODE) { setDemoOverlayMsg(SUPABASE_DEMO_MESSAGE); return; } setAuthOpen(true); }}
        className="glass-button-primary font-medium"
      >
        <LogIn className="w-4 h-4 mr-1" />
        Log In
      </Button>
    </div>
  );

  const mobileNavContent = (
    <div className="flex flex-col gap-3">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleShack}
        className="justify-start border border-white/20 text-frost/80 hover:bg-white/10 hover:text-frost"
      >
        <Bookmark className="w-4 h-4 mr-1.5" />
        My Shack
      </Button>
      {user ? (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => { setMobileOpen(false); setChangePasswordOpen(true); }}
            className="justify-start border border-white/20 text-frost/80 hover:bg-white/10"
          >
            <Lock className="w-4 h-4 mr-1.5" />
            Change Password
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={async () => { setMobileOpen(false); await signOut(); navigate('/'); }}
            className="justify-start border border-white/20 text-frost/80 hover:bg-white/10"
          >
            <LogOut className="w-4 h-4 mr-1.5" />
            Sign Out
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => { setMobileOpen(false); setDeleteOpen(true); }}
            className="justify-start border border-coral/30 text-coral hover:bg-coral/10"
          >
            <Trash2 className="w-4 h-4 mr-1.5" />
            Delete Account
          </Button>
        </>
      ) : (
        <Button
          size="sm"
          onClick={() => { setMobileOpen(false); if (DEMO_MODE) { setDemoOverlayMsg(SUPABASE_DEMO_MESSAGE); return; } setAuthOpen(true); }}
          className="glass-button-primary font-medium"
        >
          <LogIn className="w-4 h-4 mr-1" />
          Log In
        </Button>
      )}
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SnackGlobe" className="w-8 h-8 object-contain" />
            <span className={cn("font-bold text-frost text-lg tracking-tight")}>
              Snack<span className="text-sky-blue">Globe</span>
            </span>
          </Link>

            <div className="hidden md:flex items-center gap-3">
            {desktopUserControls}
          </div>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden border border-white/20 text-frost/80 hover:bg-white/10">
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-panel border-l border-white/10 w-64 flex flex-col gap-4 pt-16">
              {mobileNavContent}
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <AuthModal open={authOpen} onOpenChange={setAuthOpen} />
      {demoOverlayMsg && (
        <DemoOverlay
          isDemo={DEMO_MODE}
          message={demoOverlayMsg}
          showVideo
          onDismiss={() => setDemoOverlayMsg(null)}
        />
      )}
      <ChangePasswordModal open={changePasswordOpen} onOpenChange={setChangePasswordOpen} />
      <DeleteAccountModal
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        username={username}
      />
    </>
  );
}
