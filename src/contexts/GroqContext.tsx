import { createContext, type ReactNode, useContext, useMemo } from 'react';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

interface GroqContextValue {
  groqApiKey: string;
}

const GroqContext = createContext<GroqContextValue | undefined>(undefined);

export function GroqProvider({ children }: { children: ReactNode }) {
  const value = useMemo(() => ({ groqApiKey: GROQ_API_KEY }), []);
  return <GroqContext.Provider value={value}>{children}</GroqContext.Provider>;
}

export function useGroq() {
  const context = useContext(GroqContext);
  if (!context) throw new Error('useGroq must be used within a GroqProvider');
  return context;
}
