import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChefHat, Volume2, VolumeX, RotateCcw, Loader2, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/common/NavBar';
import { getRecipeBySlug } from '@/data/recipes';
import { useGroq } from '@/contexts/GroqContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

type SimStatus = 'idle' | 'loading' | 'speaking' | 'done' | 'error';

interface SimResult {
  character: string;
  gender: 'male' | 'female';
  text: string; // cleaned (no [pause])
  segments: string[]; // split on [pause]
}

async function generateStory(recipe: {
  name: string; country: string; continent: string; cultural_authenticity: string;
}, groqKey: string): Promise<SimResult> {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${groqKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: `You are a master storyteller who resurrects the cultural soul of food through vivid first-person monologues. 
Your output MUST be a valid JSON object with these exact fields:
{
  "character": "brief description of who is speaking (e.g. a tea house owner in 1980s Taipei)",
  "gender": "male" or "female",
  "monologue": "the full monologue text"
}

Rules for the monologue:
- 180–250 words
- First-person perspective, rich with emotion, sensory detail, personal memory
- Covers history, tradition, cultural significance naturally through the character's story
- Insert [pause] exactly 4–6 times at natural breathing or emotional moments (mid-thought, after a key memory, before a revelation)
- Never use stage directions or action descriptions
- Sound completely human — like someone actually speaking, not reading
- CRITICAL: Return ONLY the JSON object, no markdown, no backticks, no extra text`,
        },
        {
          role: 'user',
          content: `Tell the story of "${recipe.name}" from ${recipe.country} (${recipe.continent}). Cultural note: ${recipe.cultural_authenticity}`,
        },
      ],
      temperature: 0.9,
      max_tokens: 600,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Groq API error: ${err}`);
  }

  const data = await res.json();
  const raw = data.choices?.[0]?.message?.content || '';

  let parsed: { character: string; gender: string; monologue: string };
  try {
    parsed = JSON.parse(raw);
  } catch {
    // Try to extract JSON from the string
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Could not parse Groq response');
    parsed = JSON.parse(match[0]);
  }

  const segments = parsed.monologue.split('[pause]').map((s: string) => s.trim()).filter(Boolean);
  const cleanText = segments.join(' ');

  return {
    character: parsed.character,
    gender: (parsed.gender?.toLowerCase() === 'female') ? 'female' : 'male',
    text: cleanText,
    segments,
  };
}

export default function ExplorePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const recipe = slug ? getRecipeBySlug(slug) : undefined;
  const { groqApiKey, hasGroqKey } = useGroq();

  const [status, setStatus] = useState<SimStatus>('idle');
  const [sim, setSim] = useState<SimResult | null>(null);
  const [spokenWords, setSpokenWords] = useState<string[]>([]);
  const [muted, setMuted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utterancesRef = useRef<SpeechSynthesisUtterance[]>([]);

  useEffect(() => {
    synthRef.current = window.speechSynthesis;
    return () => synthRef.current?.cancel();
  }, []);

  const stopSpeech = useCallback(() => {
    synthRef.current?.cancel();
    utterancesRef.current = [];
  }, []);

  const speakSegments = useCallback((segments: string[], gender: 'male' | 'female') => {
    if (!synthRef.current) return;
    stopSpeech();

    const voices = synthRef.current.getVoices();
    const preferredVoice = voices.find(v =>
      gender === 'female'
        ? v.name.includes('Samantha') || v.name.includes('Victoria') || v.name.includes('Karen') || v.name.toLowerCase().includes('female')
        : v.name.includes('Daniel') || v.name.includes('Alex') || v.name.includes('Tom') || v.name.toLowerCase().includes('male')
    ) || voices.find(v => v.lang.startsWith('en')) || voices[0];

    // Build cumulative word counts per segment for reveal
    const segWordCounts = segments.map(s => s.split(' ').filter(Boolean).length);
    let revealedWords = 0;

    const speakSegment = (segIdx: number) => {
      if (segIdx >= segments.length) {
        // Reveal any remaining words
        setSpokenWords(prev => {
          const full = segments.join(' ').split(' ').filter(Boolean);
          return full.length > prev.length ? full : prev;
        });
        setStatus('done');
        return;
      }

      const seg = segments[segIdx];
      const utter = new SpeechSynthesisUtterance(seg);
      utter.voice = preferredVoice || null;
      utter.rate = 0.88;
      utter.pitch = gender === 'female' ? 1.1 : 0.95;
      utter.volume = muted ? 0 : 1;

      // Reveal words in this segment as it plays using a timed interval
      const wordCount = segWordCounts[segIdx];
      const startReveal = revealedWords;
      const allWordsFlat = segments.join(' ').split(' ').filter(Boolean);
      // Estimate speech duration: ~130 words/min at rate 0.88
      const estimatedMs = (wordCount / (130 * 0.88)) * 60000;
      const interval = Math.max(60, estimatedMs / wordCount);
      let wordTimer: ReturnType<typeof setInterval> | null = null;

      utter.onstart = () => {
        let w = 0;
        wordTimer = setInterval(() => {
          w++;
          if (w <= wordCount) {
            setSpokenWords(allWordsFlat.slice(0, startReveal + w));
          } else {
            if (wordTimer) clearInterval(wordTimer);
          }
        }, interval);
      };

      utter.onend = () => {
        if (wordTimer) clearInterval(wordTimer);
        revealedWords += wordCount;
        // Ensure all words in this segment are revealed
        setSpokenWords(allWordsFlat.slice(0, revealedWords));
        // Pause between segments
        const pauseMs = 350 + Math.random() * 700;
        setTimeout(() => speakSegment(segIdx + 1), pauseMs);
      };

      utter.onerror = () => {
        if (wordTimer) clearInterval(wordTimer);
        revealedWords += wordCount;
        setSpokenWords(allWordsFlat.slice(0, revealedWords));
        setTimeout(() => speakSegment(segIdx + 1), 300);
      };

      utterancesRef.current.push(utter);
      synthRef.current!.speak(utter);
    };

    speakSegment(0);
  }, [muted, stopSpeech]);

  const startSimulation = useCallback(async () => {
    if (!recipe || !hasGroqKey) return;
    setStatus('loading');
    setSpokenWords([]);
    setSim(null);
    setErrorMsg('');

    try {
      const result = await generateStory(recipe, groqApiKey);
      setSim(result);
      setStatus('speaking');

      // Wait for voices to load
      const startSpeak = () => {
        speakSegments(result.segments, result.gender);
      };

      if (window.speechSynthesis.getVoices().length) {
        startSpeak();
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          window.speechSynthesis.onvoiceschanged = null;
          startSpeak();
        };
        setTimeout(startSpeak, 800);
      }
    } catch (e) {
      setStatus('error');
      setErrorMsg((e as Error).message || 'Failed to generate story');
      toast.error('Story generation failed. Check your Groq API key in Settings.');
    }
  }, [recipe, hasGroqKey, groqApiKey, speakSegments]);

  const handleRestart = () => {
    stopSpeech();
    setSpokenWords([]);
    setSim(null);
    setStatus('idle');
  };

  const handleMuteToggle = () => {
    setMuted(m => !m);
    if (synthRef.current) {
      const utters = utterancesRef.current;
      utters.forEach(u => { u.volume = muted ? 1 : 0; });
    }
  };

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 pt-14">
          <AlertTriangle className="w-10 h-10 text-coral" />
          <p className="text-frost text-lg font-medium">Recipe not found</p>
          <Button variant="ghost" onClick={() => navigate('/')} className="border border-white/20 text-frost/70 hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Map
          </Button>
        </div>
      </div>
    );
  }

  const words = (sim?.text || '').split(' ').filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-1 pt-14 flex flex-col">

        {/* Tabs */}
        <div className="border-b border-white/10 px-4 md:px-8">
          <div className="max-w-3xl mx-auto flex gap-0 pt-4">
            <Link
              to={`/${slug}/explore`}
              className="px-5 py-2.5 text-sm font-medium border-b-2 border-sky-blue text-sky-blue"
            >
              Explore
            </Link>
            <Link
              to={`/${slug}/craft`}
              className="px-5 py-2.5 text-sm font-medium border-b-2 border-transparent text-frost/50 hover:text-frost/80 transition-colors"
            >
              <ChefHat className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              Craft
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center px-4 md:px-8 py-8">
          <div className="w-full max-w-2xl">

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <span className="text-sky-blue">{recipe.continent}</span>
                <span className="text-frost/30">·</span>
                <span>{recipe.country}</span>
                <span className="text-frost/30">·</span>
                <span>{recipe.category}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-frost text-balance">{recipe.name}</h1>
              {sim && status !== 'idle' && (
                <p className="text-sm text-muted-foreground mt-2 italic text-pretty">
                  Speaking as: <span className="text-sunshine">{sim.character}</span>
                </p>
              )}
            </div>

            {/* Controls */}
            {(status === 'idle' || status === 'done' || status === 'error') && (
              <div className="flex flex-wrap gap-3 mb-8">
                {!hasGroqKey ? (
                  <div className="glass-card border border-sunshine/30 rounded-xl p-4 w-full flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-sunshine shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-sunshine">Groq API Key Required</p>
                      <p className="text-xs text-frost/60 mt-0.5 text-pretty">
                        Add your Groq API key in Settings to experience the simulation.
                      </p>
                    </div>
                  </div>
                ) : (
                  <Button
                    onClick={status === 'done' || status === 'error' ? handleRestart : startSimulation}
                    className="glass-button-primary font-medium px-6 h-11"
                  >
                    {status === 'done' || status === 'error' ? (
                      <><RotateCcw className="w-4 h-4 mr-2" /> Replay</>
                    ) : (
                      <><Volume2 className="w-4 h-4 mr-2" /> Begin Simulation</>
                    )}
                  </Button>
                )}
              </div>
            )}

            {status === 'loading' && (
              <div className="flex items-center gap-3 mb-8 text-sky-blue">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-sm">Summoning your guide…</span>
              </div>
            )}

            {status === 'speaking' && (
              <div className="flex items-center gap-3 mb-6">
                <button onClick={handleMuteToggle} className="text-frost/50 hover:text-frost transition-colors">
                  {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-sky-blue animate-pulse" />}
                </button>
                <div className="flex gap-1">
                  {[0, 0.15, 0.3].map(d => (
                    <div key={d} className="w-1 h-4 bg-sky-blue/60 rounded-full animate-pulse" style={{ animationDelay: `${d}s` }} />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">Narrating…</span>
              </div>
            )}

            {/* Transcript */}
            {(status === 'speaking' || status === 'done') && (
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 min-h-48">
                <p className="text-base leading-relaxed text-frost/80 text-pretty" style={{ lineHeight: '1.8' }}>
                  {words.map((word: string, i: number) => (
                    <span
                      key={i}
                      className={cn(
                        'transcript-word',
                        i < spokenWords.length ? 'visible' : ''
                      )}
                    >
                      {word}{' '}
                    </span>
                  ))}
                </p>

                {status === 'done' && (
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-3">
                    <Button
                      onClick={handleRestart}
                      variant="ghost"
                      size="sm"
                      className="border border-white/20 text-frost/70 hover:bg-white/10"
                    >
                      <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                      Replay
                    </Button>
                    <Button
                      onClick={() => navigate(`/${slug}/craft`)}
                      size="sm"
                      className="glass-button-primary"
                    >
                      <ChefHat className="w-3.5 h-3.5 mr-1.5" />
                      Craft this Recipe
                    </Button>
                  </div>
                )}
              </div>
            )}

            {status === 'error' && (
              <div className="glass-card rounded-2xl p-5 border border-coral/30">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-coral">Simulation failed</p>
                    <p className="text-xs text-frost/60 mt-1 text-pretty">{errorMsg}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
