import { HelpCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DemoOverlayProps {
  isDemo: boolean;
  message: string;
  onDismiss?: () => void;
  showVideo?: boolean;
}

export default function DemoOverlay({
  isDemo,
  message,
  onDismiss,
  showVideo,
}: DemoOverlayProps) {
  if (!isDemo) return null;

  return (
    <div
      data-demo-overlay
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-[15vh]"
    >
      <div className="glass-panel rounded-2xl border border-sky-blue/20 p-5 shadow-2xl w-full max-w-md">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 shrink-0 text-sky-blue">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-frost text-balance">{message}</p>
            {showVideo && (
              <div className="mt-3 rounded-xl border border-sky-blue/15 bg-sky-blue/5 overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/bFxdJRkgjqw"
                    title="SnackGlobe Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
          {onDismiss && (
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 text-frost/40 hover:text-frost/70"
              aria-label="Dismiss"
              onClick={onDismiss}
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
