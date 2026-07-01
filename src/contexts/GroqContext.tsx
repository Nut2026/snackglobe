import { createContext, useContext, type ReactNode } from 'react';

// Owner's hardcoded Groq API key — all users share this key
const HARDCODED_GROQ_KEY = process.env.GROQ_API_KEY || "";

interface GroqContextType {
  groqApiKey: string;
  hasGroqKey: boolean;
}

const GroqContext = createContext<GroqContextType | undefined>(undefined);

export function GroqProvider({ children }: { children: ReactNode }) {
  return (
    <GroqContext.Provider value={{ groqApiKey: HARDCODED_GROQ_KEY, hasGroqKey: true }}>
      {children}
    </GroqContext.Provider>
  );
}

export function useGroq() {
  const ctx = useContext(GroqContext);
  if (!ctx) throw new Error('useGroq must be used within GroqProvider');
  return ctx;
}
