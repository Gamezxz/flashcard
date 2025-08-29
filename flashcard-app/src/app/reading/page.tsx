"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { READINGS, type ReadingItem } from "@/data/readings";

// Static levels list to keep stable across renders
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

const safeGetItem = (k: string): string | null => {
  try { if (typeof window === "undefined") return null; return window.localStorage.getItem(k); } catch { return null; }
};
const safeSetItem = (k: string, v: string): void => {
  try { if (typeof window !== "undefined") window.localStorage.setItem(k, v); } catch { /* ignore */ }
};

const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;
// Wait until voices are loaded (some browsers populate asynchronously)
const waitForVoices = async (timeoutMs: number = 4000): Promise<SpeechSynthesisVoice[]> => {
  const synth = window.speechSynthesis;
  const existing = synth.getVoices();
  if (existing && existing.length) return existing;
  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve(synth.getVoices());
    };
    const onChange = () => { if (synth.getVoices().length) { synth.removeEventListener?.('voiceschanged', onChange); finish(); } };
    synth.addEventListener?.('voiceschanged', onChange);
    const start = Date.now();
    const poll = () => {
      if (synth.getVoices().length || Date.now() - start > timeoutMs) {
        synth.removeEventListener?.('voiceschanged', onChange);
        finish();
      } else {
        setTimeout(poll, 150);
      }
    };
    poll();
  });
};

const getPreferredVoice = async (lang: string = "en-GB"): Promise<SpeechSynthesisVoice | null> => {
  try {
    const voices = await waitForVoices();
    const lower = (lang || "").toLowerCase();
    const base = lower.split('-')[0];
    return (
      voices.find(v => (v.name || "").includes("Google UK English Male")) ||
      voices.find(v => (v.lang || "").toLowerCase().startsWith(lower)) ||
      voices.find(v => (v.lang || "").toLowerCase().startsWith(base)) ||
      null
    );
  } catch { return null; }
};

// direct speak removed; use speakSequential

const speakSequential = async (parts: string[], lang: string = "en-GB", stopRef?: React.MutableRefObject<boolean>) => {
  if (!canSpeak) return;
  window.speechSynthesis.cancel();
  const voice = await getPreferredVoice(lang);
  const speakOne = (t: string) => new Promise<void>((resolve) => {
    const u = new SpeechSynthesisUtterance(t);
    if (voice) { u.voice = voice; u.lang = voice.lang || lang; } else { u.lang = lang; }
    u.rate = 0.98; u.pitch = 1.0;
    u.onend = () => resolve();
    u.onerror = () => resolve();
    window.speechSynthesis.speak(u);
  });
  for (const p of parts) {
    if (!p) continue;
    const segments = p.split(/(?<=[\.\!\?\u2026])\s+/);
    for (const s of segments) {
      if (stopRef?.current) return;
      if (s) await speakOne(s);
      if (stopRef?.current) return;
    }
  }
};

export default function ReadingModePage() {
  const [theme, setTheme] = useState("light");
  const [ready, setReady] = useState(false);
  const [readingId, setReadingId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<number[]>([]); // -1 = not answered
  const [showResult, setShowResult] = useState(false);
  const [showTrans, setShowTrans] = useState(false);
  const stopRef = useRef(false);
  const [speaking, setSpeaking] = useState(false);
  const [levelFilter, setLevelFilter] = useState<string>("ALL");

  useEffect(() => {
    const t = safeGetItem("thai_en_flash_theme") || "light";
    const last = safeGetItem("reading_last_id");
    const savedLevel = safeGetItem("reading_level_filter") || "ALL";
    setTheme(t);
    setLevelFilter(savedLevel);
    setReadingId(last || READINGS[0]?.id || null);
    setReady(true);
  }, []);

  const filteredReadings = useMemo(() => {
    const list = READINGS.filter(r => levelFilter === "ALL" || r.level === levelFilter);
    const order: Record<string, number> = Object.fromEntries(LEVELS.map((lv, i) => [lv, i]));
    return [...list].sort((a,b) => {
      const li = order[a.level] ?? 999;
      const lj = order[b.level] ?? 999;
      if (li !== lj) return li - lj;
      return a.title.localeCompare(b.title);
    });
  }, [levelFilter]);

  const reading: ReadingItem | null = useMemo(() => {
    const r = READINGS.find(r => r.id === readingId) || null;
    return r;
  }, [readingId]);

  // Ensure selected article is valid for current filter
  useEffect(() => {
    if (!filteredReadings.length) return;
    const exist = filteredReadings.some(r => r.id === readingId);
    if (!exist) {
      const firstId = filteredReadings[0].id;
      setReadingId(firstId);
      safeSetItem('reading_last_id', firstId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelFilter, filteredReadings]);

  // Reset answers when reading changes
  useEffect(() => {
    if (reading) {
      setAnswers(Array(reading.questions.length).fill(-1));
      setShowResult(false);
    }
  }, [reading]);

  const bgMain = theme === "dark" ? "from-slate-900 to-slate-950 text-slate-100" : "from-white to-slate-50 text-slate-900";
  const cardBg = theme === "dark" ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200";
  const muted = theme === "dark" ? "text-slate-300" : "text-slate-600";
  const btnBorder = theme === "dark" ? "border-slate-700 hover:bg-slate-800" : "border-slate-300 hover:bg-slate-100";

  // Note: Hooks above must run unconditionally; UI branches happen below

  const onChoose = (idx: number, choice: number) => {
    const next = [...answers];
    next[idx] = choice;
    setAnswers(next);
  };

  const numCorrect = useMemo(() => {
    if (!reading) return 0;
    return reading.questions.reduce((acc, q, i) => acc + (answers[i] === q.answerIndex ? 1 : 0), 0);
  }, [answers, reading]);

  const speakAll = () => {
    if (!reading) return;
    stopRef.current = false;
    setSpeaking(true);
    void speakSequential(reading.paragraphs, "en-GB", stopRef).then(() => {
      setSpeaking(false);
    });
  };

  const stopSpeak = () => {
    try {
      stopRef.current = true;
      if (canSpeak) window.speechSynthesis.cancel();
    } catch {}
    setSpeaking(false);
  };

  if (!ready) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl mb-2">📖 Reading Mode</div>
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
          <div className="flex items-center gap-3">
            <Link href="/" className={`text-sm px-3 py-1 ${btnBorder} rounded-full`}>← แฟลชการ์ด</Link>
            <span className={`px-3 py-1 rounded-full text-sm ${theme==='dark'? 'bg-slate-800 text-slate-200':'bg-slate-100 text-slate-700'}`}>
              📖 โหมดอ่าน (Reading)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className={`btn btn-outline`} onClick={() => setTheme(t=>{const nt=t==='dark'?'light':'dark'; safeSetItem("thai_en_flash_theme", nt); return nt;})}>{theme==='dark'? '🌞 Light':'🌙 Dark'}</button>
          </div>
        </header>

        {/* Selector */}
        <div className={`mb-4 p-4 rounded-xl border ${cardBg}`}>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <label className="text-sm">
                ระดับ:
                <select
                  className={`ml-2 border rounded px-2 py-1 ${theme==='dark'?'bg-slate-800 border-slate-700':'bg-white border-slate-300'}`}
                  value={levelFilter}
                  onChange={(e)=> { setLevelFilter(e.target.value); safeSetItem('reading_level_filter', e.target.value); }}
                >
                  <option value="ALL">ทั้งหมด</option>
                  {LEVELS.map(lv => (<option key={lv} value={lv}>{lv}</option>))}
                </select>
              </label>
              <label className="text-sm">
                เลือกบทความ:
                <select
                  className={`ml-2 border rounded px-2 py-1 ${theme==='dark'?'bg-slate-800 border-slate-700':'bg-white border-slate-300'}`}
                  value={readingId || ''}
                  onChange={(e) => { setReadingId(e.target.value); safeSetItem('reading_last_id', e.target.value); setShowResult(false); }}
                >
                  {filteredReadings.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title} ({r.level})
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>

        {/* Content */}
        {reading ? (
          <div className="space-y-6">
            {/* Passage */}
            <article className={`p-5 rounded-2xl border ${cardBg}`}>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-xl font-bold">{reading.title}</h1>
                <span className={`text-xs ${muted}`}>ระดับ: {reading.level}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <button
                  className={`btn btn-outline ${speaking ? 'opacity-60 cursor-not-allowed' : ''}`}
                  onClick={speakAll}
                  disabled={speaking}
                >
                  🔊 อ่านออกเสียงทั้งเรื่อง
                </button>
                <button
                  className={`btn btn-outline ${speaking ? '' : 'opacity-50'}`}
                  onClick={stopSpeak}
                  disabled={!speaking}
                >
                  ⏹️ หยุดอ่าน
                </button>
              </div>
              <div className="space-y-4 leading-relaxed">
                {reading.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {reading.translationTh && (
                <div className="mt-4">
                  <button
                    className={`btn btn-outline`}
                    onClick={() => setShowTrans((s) => !s)}
                    aria-pressed={showTrans}
                    aria-controls="reading-translation"
                  >
                    {showTrans ? "ซ่อนคำแปล" : "แสดงคำแปล"}
                  </button>
                  {showTrans && (
                    <div id="reading-translation" className={`mt-3 rounded-xl border p-3 ${theme==='dark'?'bg-slate-900/50 border-slate-700':'bg-slate-50'}`}>
                      <div className={`text-sm ${muted} mb-1`}>คำแปลภาษาไทย</div>
                      <div className="whitespace-pre-line leading-relaxed">{reading.translationTh}</div>
                    </div>
                  )}
                </div>
              )}
            </article>

            {/* Questions */}
            <section className={`p-5 rounded-2xl border ${cardBg}`}>
              <h2 className="text-lg font-semibold mb-3">คำถามเกี่ยวกับบทความ</h2>
              <ol className="space-y-4 list-decimal pl-6">
                {reading.questions.map((q, qi) => {
                  const chosen = answers[qi];
                  const correct = chosen === q.answerIndex;
                  return (
                    <li key={qi} className="space-y-2">
                      <div className="font-medium">{q.q}</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.choices.map((c, ci) => {
                          const selected = chosen === ci;
                          // Strong highlight when showing results
                          const resultClass = showResult
                            ? (ci === q.answerIndex
                                ? (theme === "dark"
                                    ? "border-green-500 bg-green-800/30 text-green-200"
                                    : "border-green-500 bg-green-100 text-green-800")
                                : (selected
                                    ? (theme === "dark"
                                        ? "border-rose-500 bg-rose-800/30 text-rose-200"
                                        : "border-rose-500 bg-rose-100 text-rose-800")
                                    : "opacity-80"))
                            : "";

                          // Pre-submit selection highlight
                          const selectedClass = !showResult && selected
                            ? (theme === "dark" ? "border-violet-500 bg-violet-900/30" : "border-violet-400 bg-violet-50")
                            : "";

                          const finalState = resultClass || selectedClass;
                          return (
                            <button
                              key={ci}
                              type="button"
                              className={`text-left px-3 py-2 rounded-xl border ${btnBorder} ${finalState} pointer-events-auto`}
                              aria-pressed={selected}
                              onClick={() => !showResult && onChoose(qi, ci)}
                            >
                              <span className="font-medium mr-1">{String.fromCharCode(65 + ci)}.</span>
                              {c}
                            </button>
                          );
                        })}
                      </div>
                      {showResult && (
                        <div className={`${muted} text-sm`}>
                          {chosen === -1 ? (
                            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800">ยังไม่ได้เลือกคำตอบ</span>
                          ) : (
                            <>
                              {correct ? (
                                <span className="px-2 py-0.5 rounded bg-green-100 text-green-800">ถูกต้อง</span>
                              ) : (
                                <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800">ยังไม่ถูก</span>
                              )}
                              <span className="ml-2">คำตอบที่ถูก: <b>{q.choices[q.answerIndex]}</b></span>
                              {q.explain && <span className="ml-2">— {q.explain}</span>}
                            </>
                          )}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
              <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
                <div className={`${muted} text-sm`}>
                  ตอบแล้ว {answers.filter(a=>a!==-1).length} / {reading.questions.length}
                </div>
                {!showResult ? (
                  <div className="flex items-center gap-2">
                    <button className={`btn btn-outline`} onClick={()=>{ setAnswers(Array(reading?.questions.length||0).fill(-1)); setShowResult(false); }}>
                      รีเซ็ตคำตอบ
                    </button>
                    <button className={`btn btn-solid`} onClick={()=> setShowResult(true)}>
                      ตรวจคำตอบ
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-sm">คะแนน: <b>{numCorrect}</b> / {reading.questions.length}</span>
                    <button className={`btn btn-outline`} onClick={()=>{ setShowResult(false); setAnswers(Array(reading.questions.length).fill(-1)); }}>
                      ทำใหม่อีกครั้ง
                    </button>
                  </div>
                )}
              </div>
            </section>
          </div>
        ) : (
          <div className={`rounded-2xl border p-8 text-center ${cardBg} ${muted}`}>
            ไม่พบบทความ
          </div>
        )}

        {/* Footer */}
        <footer className={`mt-6 text-center ${muted} space-y-2`}>
          <p className="text-xs">โหมดอ่านเพื่อฝึกอ่านความเข้าใจ (Reading Comprehension)</p>
          <p className="text-xs">ใช้ Web Speech API เพื่ออ่านออกเสียงย่อหน้า (เฉพาะเบราว์เซอร์ที่รองรับ)</p>
        </footer>
      </div>
    </div>
  );
}
