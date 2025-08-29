"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function IconHome({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11.5L12 4l9 7.5"/>
      <path d="M5 10.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9.5"/>
      {active && <circle cx="12" cy="12" r="0" />}
    </svg>
  );
}

function IconBook({ active }: { active?: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 19.5c2-1 4-1 6 0 2-1 4-1 6 0V5.5c-2-1-4-1-6 0-2-1-4-1-6 0v14z"/>
      {active && <circle cx="12" cy="12" r="0" />}
    </svg>
  );
}

export default function BottomNav() {
  const pathname = usePathname();
  const isFlash = pathname === "/";
  const isReading = pathname?.startsWith("/reading") ?? false;

  // Avoid hydration mismatch: previously used mounted flag; not needed with CSS-only approach

  const baseBtn = "relative flex items-center justify-center gap-2 px-3 py-2 text-sm transition-colors";

  return (
    <div className="fixed inset-x-0 bottom-2 z-50 pointer-events-none" suppressHydrationWarning>
      <div className="max-w-3xl mx-auto px-3">
        <nav
          className={`pointer-events-auto rounded-3xl shadow-lg border backdrop-blur-sm bottom-nav-surface`}
          aria-label="Bottom Navigation"
        >
          <div className="grid grid-cols-2">
            {/* Flashcards */}
            <Link href="/" className={`${baseBtn}`}>
              <div className={`flex items-center gap-2 ${isFlash ? "text-white" : "opacity-90"}`}>
                <span className={`inline-flex items-center justify-center ${isFlash ? "bg-violet-600" : "bg-transparent"} rounded-full w-8 h-8`}>
                  <IconHome active={isFlash} />
                </span>
                <span className={`hidden sm:block ${isFlash ? "" : ""}`}>Flashcard</span>
              </div>
              {isFlash && (
                <span className="absolute inset-y-1 left-2 right-2 -z-10 rounded-2xl bg-violet-600/90" aria-hidden></span>
              )}
            </Link>

            {/* Reading */}
            <Link href="/reading" className={`${baseBtn}`}>
              <div className={`flex items-center gap-2 ${isReading ? "text-white" : "opacity-90"}`}>
                <span className={`inline-flex items-center justify-center ${isReading ? "bg-violet-600" : "bg-transparent"} rounded-full w-8 h-8`}>
                  <IconBook active={isReading} />
                </span>
                <span className="hidden sm:block">Reading</span>
              </div>
              {isReading && (
                <span className="absolute inset-y-1 left-2 right-2 -z-10 rounded-2xl bg-violet-600/90" aria-hidden></span>
              )}
            </Link>
          </div>
        </nav>

        {/* Handle indicator */}
        <div className={`mx-auto mt-2 h-1.5 w-24 rounded-full bottom-nav-handle`} aria-hidden />
      </div>
    </div>
  );
}
