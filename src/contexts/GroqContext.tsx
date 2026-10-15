import { createContext, type ReactNode, useContext, useMemo } from 'react';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

interface GroqContextValue {
  groqApiKey: string;
  disabled: boolean;
  reason: string;
}

const GroqContext = createContext<GroqContextValue | undefined>(undefined);

export function GroqProvider({ children }: { children: ReactNode }) {
  const disabled = !GROQ_API_KEY || import.meta.env.VITE_DEMO_MODE;
  const reason = disabled
    ? (import.meta.env.VITE_DEMO_MODE
        ? 'Groq is not available for this demo. But don\'t worry, watch a video demo instead!'
        : 'Groq API key not configured. Set VITE_GROQ_API_KEY in .env.')
    : '';
  const value = useMemo(
    () => ({ groqApiKey: disabled ? '' : GROQ_API_KEY, disabled, reason }),
    [disabled],
  );
  return <GroqContext.Provider value={value}>{children}</GroqContext.Provider>;
}

export function useGroq() {
  const context = useContext(GroqContext);
  if (!context) throw new Error('useGroq must be used within a GroqProvider');
  return context;
}
