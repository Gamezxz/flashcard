"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { READINGS, type ReadingItem } from "@/data/readings";

const safeGetItem = (k: string): string | null => {
  try { if (typeof window === "undefined") return null; return window.localStorage.getItem(k); } catch { return null; }
};
const safeSetItem = (k: string, v: string): void => {
  try { if (typeof window !== "undefined") window.localStorage.setItem(k, v); } catch { /* ignore */ }
};

const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;
const speak = (text: string, lang: string = "en-US"): void => {
  if (!canSpeak || !text) return;
  try { 
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang; u.rate = 0.98; u.pitch = 1.0;
    window.speechSynthesis.speak(u);
  } catch { /* ignore */ }
};

export default function ReadingModePage() {
  const [theme, setTheme] = useState("light");
  const [ready, setReady] = useState(false);
  const [readingId, setReadingId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<number[]>([]); // -1 = not answered
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const t = safeGetItem("thai_en_flash_theme") || "light";
    const last = safeGetItem("reading_last_id");
    setTheme(t);
    setReadingId(last || READINGS[0]?.id || null);
    setReady(true);
  }, []);

  const reading: ReadingItem | null = useMemo(() => {
    const r = READINGS.find(r => r.id === readingId) || null;
    if (r) setAnswers(Array(r.questions.length).fill(-1));
    return r;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readingId]);

  const bgMain = theme === "dark" ? "from-slate-900 to-slate-950 text-slate-100" : "from-white to-slate-50 text-slate-900";
  const cardBg = theme === "dark" ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200";
  const muted = theme === "dark" ? "text-slate-300" : "text-slate-600";
  const btnBorder = theme === "dark" ? "border-slate-700 hover:bg-slate-800" : "border-slate-300 hover:bg-slate-100";

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
    reading.paragraphs.forEach((p, i) => setTimeout(() => speak(p), i * 2000));
  };

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
            <button className={`text-sm px-3 py-1 ${btnBorder} rounded-full`} onClick={() => setTheme(t=>{const nt=t==='dark'?'light':'dark'; safeSetItem("thai_en_flash_theme", nt); return nt;})}>{theme==='dark'? '🌞 Light':'🌙 Dark'}</button>
          </div>
        </header>

        {/* Selector */}
        <div className={`mb-4 p-4 rounded-xl border ${cardBg}`}>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <label className="text-sm">
              เลือกบทความ:
              <select
                className={`ml-2 border rounded px-2 py-1 ${theme==='dark'?'bg-slate-800 border-slate-700':'bg-white border-slate-300'}`}
                value={readingId || ''}
                onChange={(e) => { setReadingId(e.target.value); safeSetItem('reading_last_id', e.target.value); setShowResult(false); }}
              >
                {READINGS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.title} ({r.level})
                  </option>
                ))}
              </select>
            </label>
            <div className="flex gap-2">
              <button className={`px-3 py-1 ${btnBorder} rounded-full`} onClick={speakAll}>🔊 อ่านออกเสียงทั้งเรื่อง</button>
              <button className={`px-3 py-1 ${btnBorder} rounded-full`} onClick={()=>{ setAnswers(Array(reading?.questions.length||0).fill(-1)); setShowResult(false); }}>รีเซ็ตคำตอบ</button>
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
              <div className="space-y-4 leading-relaxed">
                {reading.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
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
                          const showState = showResult && selected;
                          const stateClass = showState ? (ci === q.answerIndex ? "border-green-500 bg-green-50" : "border-rose-400 bg-rose-50") : "";
                          return (
                            <button
                              key={ci}
                              className={`text-left px-3 py-2 rounded-xl border ${btnBorder} ${stateClass}`}
                              onClick={() => onChoose(qi, ci)}
                              disabled={showResult}
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
              <div className="mt-4 flex items-center justify-between">
                <div className={`${muted} text-sm`}>
                  ตอบแล้ว {answers.filter(a=>a!==-1).length} / {reading.questions.length}
                </div>
                {!showResult ? (
                  <button className={`px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800`} onClick={()=> setShowResult(true)}>
                    ตรวจคำตอบ
                  </button>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-sm">คะแนน: <b>{numCorrect}</b> / {reading.questions.length}</span>
                    <button className={`px-3 py-1 ${btnBorder} rounded-full`} onClick={()=>{ setShowResult(false); setAnswers(Array(reading.questions.length).fill(-1)); }}>
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

