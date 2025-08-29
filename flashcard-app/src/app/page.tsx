"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { WORDS, type Word } from "@/data/vocabulary";

/**
 * Flashcard Thai→English Trainer (React)
 *
 * Notes on "Failed to connect to MetaMask":
 * - This app does NOT use MetaMask or any web3 API.
 * - If you see that error in the console, it's almost certainly from a browser extension
 *   or a dev tool trying to auto-inject web3. Disable that extension for this page
 *   and reload; the app will run normally.
 */

// ----------------------------- Utilities -----------------------------
const randInt = (n: number): number => Math.floor(Math.random() * n);
const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Safe localStorage helpers (avoid SSR / privacy errors)
const safeGetItem = (k: string): string | null => {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(k);
  } catch {
    return null;
  }
};

const safeSetItem = (k: string, v: string): void => {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(k, v);
    }
  } catch {
    // ignore
  }
};

// ------------------------- Speech: TTS + STT -------------------------
const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;
const speak = (text: string, lang: string = "en-GB"): void => {
  if (!canSpeak || !text) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    try {
      const voices = window.speechSynthesis.getVoices();
      const byExactName = voices.find(v => (v.name || "").includes("Google UK English Male"));
      const byEnGb = voices.find(v => (v.lang || "").toLowerCase().startsWith("en-gb"));
      const byEn = voices.find(v => (v.lang || "").toLowerCase().startsWith("en"));
      const v = byExactName || byEnGb || byEn || null;
      if (v) { u.voice = v; u.lang = v.lang || lang; } else { u.lang = lang; }
    } catch { u.lang = lang; }
    u.rate = 0.95;
    u.pitch = 1.0;
    window.speechSynthesis.speak(u);
  } catch {
    // fail silently
  }
};

const canListen = typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window);
const createRecognizer = (lang: string = "en-US") => {
  if (typeof window === "undefined") return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const windowWithSpeech = window as any;
  const SpeechRecognition = windowWithSpeech.SpeechRecognition || windowWithSpeech.webkitSpeechRecognition;
  if (!SpeechRecognition) return null;
  const rec = new SpeechRecognition();
  rec.lang = lang;
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  return rec;
};

// Levenshtein + similarity (0..1)
const levenshtein = (a: string, b: string): number => {
  a = (a || "").toLowerCase();
  b = (b || "").toLowerCase();
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[a.length][b.length];
};
const similarity = (a: string, b: string): number => {
  const dist = levenshtein((a || "").trim(), (b || "").trim());
  const maxLen = Math.max(1, (a || "").trim().length, (b || "").trim().length);
  return 1 - dist / maxLen;
};

// ---------------------------- State & Logic ----------------------------
const STORAGE_KEY = "thai_en_flash_known_v1";

interface RecognitionState {
  listening: boolean;
  transcript: string;
  score: number | null;
  error: string | null;
}

function useKnownSet() {
  const [known, setKnown] = useState<Set<number>>(() => {
    const raw = safeGetItem(STORAGE_KEY);
    try {
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    safeSetItem(STORAGE_KEY, JSON.stringify([...known]));
  }, [known]);

  const markKnown = (id: number) => {
    setKnown((s) => new Set(s).add(id));
  };

  const reset = () => {
    setKnown(new Set());
  };

  return { known, markKnown, reset };
}

function buildChoices(currentId: number, correctThai: string, pool: Word[], n: number = 6): string[] {
  const distractors = shuffle(
    pool
      .filter((w) => w.id !== currentId)
      .map((w) => w.thai)
  )
    .filter((t) => t !== correctThai)
    .slice(0, n - 1);

  return shuffle([correctThai, ...distractors]);
}

function pickNextWord(pool: Word[], known: Set<number>, onlyUnknown: boolean): Word | null {
  const candidates = onlyUnknown ? pool.filter((w) => !known.has(w.id)) : pool;
  
  if (candidates.length === 0) return null;
  
  const weighted = [
    ...candidates.filter((w) => !known.has(w.id)), 
    ...candidates
  ];
  
  return weighted[randInt(weighted.length)];
}

const ALL_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const ALL_CATS = [
  "daily", "food", "home", "work", "school", "social", 
  "shopping", "money", "time", "grammar", "technology", 
  "travel", "health", "weather", "city"
];

// ------------------------------ Component ------------------------------
export default function FlashcardThaiEN() {
  const { known, markKnown, reset } = useKnownSet();
  const [onlyUnknown, setOnlyUnknown] = useState(true);
  const [current, setCurrent] = useState<Word | null>(null);
  const [choices, setChoices] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showExplain, setShowExplain] = useState(false);
  const [levelFilter, setLevelFilter] = useState("ALL");
  const [catFilter, setCatFilter] = useState("ALL");
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [theme, setTheme] = useState("light");
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate client-side values after mounting
  useEffect(() => {
    const savedTheme = safeGetItem("thai_en_flash_theme") || "light";
    setTheme(savedTheme);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      safeSetItem("thai_en_flash_theme", theme);
    }
  }, [theme, isHydrated]);

  // Speech practice
  const [recState, setRecState] = useState<RecognitionState>({ 
    listening: false, 
    transcript: "", 
    score: null, 
    error: null 
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recRef = useRef<any>(null);


  const filteredPool = useMemo(() => 
    WORDS.filter((w) =>
      (levelFilter === "ALL" || w.level === levelFilter) && 
      (catFilter === "ALL" || w.cats.includes(catFilter))
    ), 
    [levelFilter, catFilter]
  );

  const progress = useMemo(() => ({
    total: filteredPool.length,
    known: [...known].filter((id) => 
      filteredPool.some((w) => w.id === id)
    ).length,
  }), [known, filteredPool]);

  const initCard = () => {
    const next = pickNextWord(filteredPool, known, onlyUnknown) || 
                 pickNextWord(filteredPool, known, false);
    
    if (!next) {
      setCurrent(null);
      setChoices([]);
      setSelected(null);
      setShowExplain(false);
      return;
    }

    setCurrent(next);
    setChoices(buildChoices(next.id, next.thai, filteredPool, 6));
    setSelected(null);
    setShowExplain(false);
    
    if (autoSpeak) {
      speak(next.word);
    }
    
    setRecState({ listening: false, transcript: "", score: null, error: null });
  };

  useEffect(() => {
    if (isHydrated) {
      initCard();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onlyUnknown, levelFilter, catFilter, isHydrated]);

  // User answer
  const onSelect = (c: string) => {
    if (selected) return;
    setSelected(c);
    setShowExplain(true);
    if (c === current?.thai) markKnown(current.id);
    // Auto read the first example sentence after answering
    const ex = current?.examples?.[0]?.en;
    if (ex) setTimeout(() => speak(ex), 300);
  };

  // Speaking practice controls
  const startPractice = () => {
    if (!canListen) { setRecState((s) => ({ ...s, error: "เบราว์เซอร์นี้ยังไม่รองรับ Speech Recognition" })); return; }
    if (!recRef.current) recRef.current = createRecognizer("en-US");
    const rec = recRef.current; if (!rec) return;
    setRecState({ listening: true, transcript: "", score: null, error: null });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onresult = (e: any) => {
      const heard = e?.results?.[0]?.[0]?.transcript || "";
      const target = current?.word || "";
      const score = Math.round(similarity(heard, target) * 100);
      setRecState({ listening: false, transcript: heard, score, error: null });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rec.onerror = (e: any) => setRecState({ listening: false, transcript: "", score: null, error: e?.error || "unknown" });
    rec.start();
  };
  const stopPractice = () => { 
    try { 
      if (recRef.current) {
        recRef.current.stop(); 
      }
    } catch { 
      // Ignore errors when stopping recognition
    } 
    setRecState((s) => ({ ...s, listening: false })); 
  };

  // Theme helpers
  const bgMain = theme === "dark" ? "from-slate-900 to-slate-950 text-slate-100" : "from-white to-slate-50 text-slate-900";
  const cardBg = theme === "dark" ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200";
  const muted = theme === "dark" ? "text-slate-300" : "text-slate-600";
  const btnBorder = theme === "dark" ? "border-slate-700 hover:bg-slate-800" : "border-slate-300 hover:bg-slate-100";


  // Show loading state during hydration
  if (!isHydrated) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl mb-2">🇬🇧 Flash Cards</div>
          <div className="text-sm text-slate-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full bg-gradient-to-b ${bgMain}`}> 
      <div className="max-w-3xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <div className={`px-3 py-1 rounded-full text-sm ${theme==='dark'? 'bg-slate-800 text-slate-200':'bg-slate-100 text-slate-700'}`}> 
              รู้แล้ว {progress.known} / {progress.total}
            </div>
            <label className={`flex items-center gap-2 text-sm px-3 py-1 rounded-full ${theme==='dark'?'bg-slate-800':'bg-slate-100'}`}>
              <input type="checkbox" className="scale-110" checked={onlyUnknown} onChange={(e) => setOnlyUnknown(e.target.checked)} />
              แสดงเฉพาะคำที่ยังไม่รู้
            </label>
            <button className={`text-sm px-3 py-1 ${btnBorder} rounded-full`} onClick={() => setTheme(t=>t==='dark'?'light':'dark')} title="สลับโหมดแสง/มืด">{theme==='dark' ? '🌞 Light' : '🌙 Dark'}</button>
          </div>
        </header>

        {/* Filters */}
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-2">
            <label className={`text-sm ${muted} w-20`}>ระดับ</label>
            <select className={`flex-1 border rounded-xl px-3 py-2 ${theme==='dark'?'bg-slate-900 border-slate-700':'bg-white'}`} value={levelFilter} onChange={(e)=>setLevelFilter(e.target.value)}>
              <option value="ALL">ทั้งหมด</option>
              {ALL_LEVELS.map((lv) => (<option key={lv} value={lv}>{lv}</option>))}
            </select>
          </div>
          <div className="flex items-center gap-2 sm:col-span-2">
            <label className={`text-sm ${muted} w-20`}>หมวด</label>
            <select className={`flex-1 border rounded-xl px-3 py-2 ${theme==='dark'?'bg-slate-900 border-slate-700':'bg-white'}`} value={catFilter} onChange={(e)=>setCatFilter(e.target.value)}>
              <option value="ALL">ทั้งหมด</option>
              {ALL_CATS.map((c) => (<option key={c} value={c}>{c}</option>))}
            </select>
          </div>
        </div>

        {/* Card */}
        {current ? (
          <div className={`${cardBg} rounded-2xl shadow-sm border p-6 sm:p-8`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className={`text-sm ${muted}`}>คำศัพท์</div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="font-bold tracking-tight text-3xl sm:text-5xl">{current.word}</div>
                  <button className={`${btnBorder} px-3 py-1 rounded-full text-sm`} onClick={() => speak(current.word)} title="ออกเสียงคำศัพท์">🔊 ฟังเสียง</button>
                  <button className={`${btnBorder} px-3 py-1 rounded-full text-sm`} onClick={() => (recState.listening ? stopPractice() : startPractice())} title="ฝึกออกเสียงและให้คะแนน">{recState.listening ? '⏹️ หยุดฟัง' : '🎙️ ฝึกออกเสียง'}</button>
                </div>
                {(recState.listening || recState.transcript || recState.error) && (
                  <div className={`mt-2 text-xs ${muted}`}>
                    {recState.listening && <span>กำลังฟัง... พูดว่า &quot;{current.word}&quot;</span>}
                    {!recState.listening && recState.transcript && (
                      <span>ได้ยินว่า: <b>{recState.transcript}</b> · คะแนนความใกล้เคียง: <b>{recState.score}%</b></span>
                    )}
                    {recState.error && <span>ไม่สามารถฟังได้: {recState.error}</span>}
                  </div>
                )}
                <div className={`mt-2 flex flex-wrap items-center gap-2 text-sm ${muted}`}>
                  <span className={`px-2 py-0.5 rounded ${theme==='dark'?'bg-slate-800':'bg-slate-100'}`}>{current.pos}</span>
                  <span className={`px-2 py-0.5 rounded ${theme==='dark'?'bg-indigo-500/15 text-indigo-300':'bg-indigo-50 text-indigo-700'}`}>hint: {current.hint}</span>
                  <span className={`px-2 py-0.5 rounded ${theme==='dark'?'bg-emerald-500/15 text-emerald-300':'bg-emerald-50 text-emerald-700'}`}>ระดับ: {current.level}</span>
                  <span className={`px-2 py-0.5 rounded ${theme==='dark'?'bg-amber-500/15 text-amber-300':'bg-amber-50 text-amber-700'}`}>หมวด: {current.cats.join(", ")}</span>
                </div>
              </div>
            </div>

            {!showExplain && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {choices.map((c) => {
                  const chosen = selected === c;
                  const correct = c === current.thai;
                  return (
                    <button
                      key={c}
                      className={[
                        `w-full text-left border rounded-xl px-4 py-3 hover:shadow-sm transition ${theme==='dark'?'bg-slate-900 border-slate-700':''}`,
                        chosen && correct && (theme==='dark'?"border-green-500 bg-green-900/20":"border-green-500 bg-green-50"),
                        chosen && !correct && (theme==='dark'?"border-rose-500 bg-rose-900/20":"border-rose-500 bg-rose-50"),
                        !chosen && selected && correct && "border-green-400",
                      ].filter(Boolean).join(" ")}
                      onClick={() => onSelect(c)}
                      disabled={!!selected}
                    >
                      <div className="font-medium">{c}</div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Explanation */}
            {showExplain && (
              <div className="mt-6 border-t border-slate-200/30 pt-6">
                <div className="flex items-center gap-2 mb-2">
                  {selected === current.thai ? (
                    <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-sm">ถูกต้อง!</span>
                  ) : (
                    <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 text-sm">ยังไม่ถูก</span>
                  )}
                  {selected !== current.thai && (
                    <span className={`text-sm ${muted}`}>คำตอบที่ถูก: <b>{current.thai}</b></span>
                  )}
                </div>
                <div className={`${muted} leading-relaxed`}>
                  <div className="text-sm">ความหมาย (อังกฤษ):</div>
                  <div className="font-medium">{current.definition}</div>
                </div>
                <div className="mt-3">
                  <div className={`text-sm ${muted}`}>ตัวอย่างประโยค:</div>
                  <ul className="list-disc pl-5 space-y-2">
                    {current.examples.map((ex, i) => (
                      <li key={i}>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{ex.en}</span>
                          <button className={`${btnBorder} px-2 py-0.5 rounded text-xs`} onClick={() => speak(ex.en)} title="ออกเสียงประโยคตัวอย่าง">🔊</button>
                        </div>
                        <span className={`block text-sm ${muted}`}>— {ex.th}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className={`${btnBorder} px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800`} onClick={initCard}>ข้อต่อไป →</button>
                  {selected !== current.thai && (
                    <button className={`${btnBorder} px-4 py-2 rounded-xl`} onClick={() => markKnown(current.id)} title="ถ้าเข้าใจแล้ว สามารถนับว่ารู้คำนี้">นับว่ารู้คำนี้</button>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={`${cardBg} rounded-2xl shadow-sm border p-8 text-center ${muted}`}>
            ไม่มีคำศัพท์ในตัวกรองที่เลือก — ลองเปลี่ยนระดับ/หมวด หรือกดรีเซ็ตความคืบหน้า
          </div>
        )}


        {/* Footer */}
        <footer className={`mt-6 text-center ${muted} space-y-3`}>
          <h1 className="text-xl font-bold">🇬🇧 Flash Cards — สอนคำศัพท์ (ไทย→อังกฤษ)</h1>
          <p className="text-sm">
            สุ่มคำศัพท์ใช้บ่อย พร้อมตัวอย่างประโยค, เฉลยละเอียด, เสียงอ่าน และโหมดฝึกออกเสียง
          </p>
          <div className="flex justify-center gap-3">
            <button className={`text-sm px-3 py-1 ${btnBorder} rounded-full`} onClick={() => setAutoSpeak((s) => !s)} title="อ่านออกเสียงอัตโนมัติเมื่อการ์ดใหม่">{autoSpeak ? "🔈 Auto" : "🔇 Auto"}</button>
            <button className={`text-sm px-3 py-1 ${btnBorder} rounded-full`} onClick={initCard} title="สุ่มการ์ดใหม่">สุ่มใหม่</button>
            <button className={`text-sm px-4 py-2 ${btnBorder} rounded-full`} onClick={reset} title="ล้างความคืบหน้า">รีเซ็ตความคืบหน้า</button>
          </div>
          <p className="text-xs">
            สร้างเพื่อผู้เรียนไทย — เก็บความคืบหน้าไว้ในเครื่องของคุณ (LocalStorage) · ใช้ Web Speech API สำหรับเสียงอ่าน & ฝึกออกเสียง (เฉพาะเบราว์เซอร์ที่รองรับ)
          </p>
          <p className="text-xs">
            <a href="https://github.com/Gamezxz/flashcard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
              📂 Source Code on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
