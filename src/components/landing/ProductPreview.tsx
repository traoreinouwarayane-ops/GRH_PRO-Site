"use client";

import { useEffect, useRef } from "react";

/** Mini interface produit — illustrative, avec animations d’entrée. */
export function ProductPreview({ className = "" }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const bars = root.querySelectorAll<HTMLElement>(".chart-bar");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bars.forEach((bar, i) => {
            bar.style.animationDelay = `${120 + i * 70}ms`;
            bar.classList.add("is-on");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const heights = [40, 65, 48, 80, 55, 90, 70, 85, 60, 75];

  return (
    <div
      ref={rootRef}
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#0f4a42] shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-shadow duration-500 sm:hover:shadow-[0_32px_90px_rgba(0,0,0,0.45)] ${className}`}
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5 sm:px-4 sm:py-3">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57] sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e] sm:h-2.5 sm:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-[#28c840] sm:h-2.5 sm:w-2.5" />
        <span className="ml-2 truncate text-[10px] font-medium tracking-wide text-white/50 sm:ml-3 sm:text-[11px]">
          GRH_PRO — Tableau de bord
        </span>
      </div>
      <div className="grid gap-2.5 p-3 sm:gap-3 sm:p-4 md:grid-cols-3">
        <div className="rounded-lg bg-white/5 p-3 md:col-span-2">
          <div className="mb-3 flex h-20 items-end gap-1 sm:h-24 sm:gap-1.5">
            {heights.map((h, i) => (
              <div
                key={i}
                className="chart-bar flex-1 rounded-sm bg-accent/80"
                style={{
                  height: `${h}%`,
                  opacity: 0.55 + (i % 3) * 0.15,
                }}
              />
            ))}
          </div>
          <div className="h-2 w-1/3 overflow-hidden rounded bg-white/15">
            <div className="h-full w-full animate-[shimmer_2.4s_linear_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)] bg-[length:200%_100%]" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:flex md:flex-col">
          <div className="rounded-lg bg-white/5 p-3 transition-transform duration-300 md:flex-1 md:hover:-translate-y-0.5">
            <div className="h-2 w-12 rounded bg-accent/70" />
            <div className="mt-3 h-6 w-16 rounded bg-white/20" />
          </div>
          <div className="rounded-lg bg-white/5 p-3 transition-transform duration-300 md:flex-1 md:hover:-translate-y-0.5">
            <div className="h-2 w-14 rounded bg-white/20" />
            <div className="mt-3 h-6 w-12 rounded bg-white/15" />
          </div>
        </div>
        <div className="rounded-lg bg-white/5 p-3 md:col-span-3">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-6 w-6 shrink-0 rounded-full bg-teal-bright/30 sm:h-7 sm:w-7" />
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-white/20" />
                  <div className="h-1.5 w-2/3 rounded bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
