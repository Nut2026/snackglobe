import { HelpCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useGroq } from '@/contexts/GroqContext';

export default function DemoModeBanner() {
  const { disabled: groqDisabled, reason: groqReason } = useGroq();
  const isDemo = import.meta.env.VITE_DEMO_MODE;
  if (!isDemo && !groqDisabled) return null;

  return (
    <div
      data-demo-banner
      className="fixed top-16 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-2xl"
    >
      <div className="glass-panel rounded-2xl border border-sky-blue/20 p-4 shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 shrink-0 text-sky-blue">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-frost text-balance">
              {isDemo
                ? 'My Shack, Log In / Sign Up, Groq API: "This feature has been disabled in demo mode. But don\'t let that stop you, feel free to watch a demo video instead!"'
                : groqReason}
            </p>
            {isDemo && (
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
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 text-frost/40 hover:text-frost/70"
            aria-label="Dismiss banner"
            onClick={() => {
              const banner = document.querySelector('[data-demo-banner]') as HTMLElement | null;
              banner?.remove();
            }}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
