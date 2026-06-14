"use client";

import { useRef, useState, useEffect } from "react";
import { PROCESS_STEPS, STUDIO_CAL } from "@/lib/constants";
import { AccentButton, TAG_PILL_CLASSES } from "@/components/ui/shared";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const total = PROCESS_STEPS.length;

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const stickyH = section.offsetHeight - window.innerHeight;
      if (stickyH <= 0) return;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / stickyH)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const active = Math.min(total - 1, Math.floor(progress * total));
  const lineProgress = progress * 100;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative"
      style={{ height: `${(total + 1.5) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-start pt-20 overflow-hidden">
        <div className="mx-auto max-w-5xl w-full px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="section-badge mb-4 block">Process</span>
            <h2 className="text-[38px] sm:text-[52px] font-bold leading-[1.08] text-primary">
              How we work
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_44px_1fr] gap-0 items-start max-w-4xl mx-auto">
            {/* Left column — odd steps content */}
            <div className="hidden lg:flex flex-col gap-6 pt-2">
              {PROCESS_STEPS.map((s, i) =>
                i % 2 === 0 ? (
                  <div
                    key={i}
                    className={`rounded-[16px] p-6 transition-all duration-700 ${
                      i === active
                        ? "bg-white shadow-[0_4px_24px_rgba(6,6,18,0.08)] scale-100 opacity-100"
                        : i < active
                        ? "bg-transparent opacity-40 scale-95"
                        : "bg-transparent opacity-25 scale-95"
                    }`}
                    style={{ minHeight: "140px" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[13px] font-bold text-accent tracking-wider">
                        STEP {s.number}
                      </span>
                    </div>
                    <h3 className="text-[22px] font-semibold text-primary mb-2">{s.title}</h3>
                    <p className="text-[14px] text-secondary leading-relaxed mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((tag) => (
                        <span key={tag} className={`${TAG_PILL_CLASSES} text-[11px] px-3 py-1`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div key={i} style={{ minHeight: "140px" }} />
                )
              )}
            </div>

            {/* Center — vertical progress line */}
            <div className="hidden lg:flex flex-col items-center relative" style={{ minHeight: `${total * 146}px` }}>
              <div className="absolute top-0 bottom-0 w-[3px] bg-border rounded-full" />
              <div
                className="absolute top-0 w-[3px] bg-accent rounded-full transition-all duration-300 ease-out"
                style={{ height: `${lineProgress}%` }}
              />

              {PROCESS_STEPS.map((s, i) => {
                const yPos = (i / (total - 1)) * 100;
                return (
                  <div
                    key={i}
                    className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
                    style={{ top: `${yPos}%` }}
                  >
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-[15px] font-bold transition-all duration-500 ${
                        i === active
                          ? "bg-accent text-white shadow-[0_0_0_6px_rgba(255,99,33,0.15)] scale-110"
                          : i < active
                          ? "bg-accent text-white scale-100"
                          : "bg-white border-2 border-border text-secondary scale-90"
                      }`}
                    >
                      {s.number}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right column — even steps content */}
            <div className="hidden lg:flex flex-col gap-6 pt-2">
              {PROCESS_STEPS.map((s, i) =>
                i % 2 === 1 ? (
                  <div
                    key={i}
                    className={`rounded-[16px] p-6 transition-all duration-700 ${
                      i === active
                        ? "bg-white shadow-[0_4px_24px_rgba(6,6,18,0.08)] scale-100 opacity-100"
                        : i < active
                        ? "bg-transparent opacity-40 scale-95"
                        : "bg-transparent opacity-25 scale-95"
                    }`}
                    style={{ minHeight: "140px" }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[13px] font-bold text-accent tracking-wider">
                        STEP {s.number}
                      </span>
                    </div>
                    <h3 className="text-[22px] font-semibold text-primary mb-2">{s.title}</h3>
                    <p className="text-[14px] text-secondary leading-relaxed mb-3">{s.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((tag) => (
                        <span key={tag} className={`${TAG_PILL_CLASSES} text-[11px] px-3 py-1`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div key={i} style={{ minHeight: "140px" }} />
                )
              )}
            </div>

            {/* Mobile layout — simple vertical list */}
            <div className="lg:hidden flex flex-col gap-4">
              {PROCESS_STEPS.map((s, i) => (
                <div
                  key={i}
                  className={`rounded-[16px] p-6 transition-all duration-500 flex gap-4 items-start ${
                    i === active
                      ? "bg-white shadow-[0_4px_24px_rgba(6,6,18,0.08)]"
                      : i < active
                      ? "opacity-50"
                      : "opacity-30"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold shrink-0 ${
                      i === active
                        ? "bg-accent text-white"
                        : i < active
                        ? "bg-accent/30 text-accent"
                        : "bg-border text-secondary"
                    }`}
                  >
                    {s.number}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-primary mb-1">{s.title}</h3>
                    <p className="text-[13px] text-secondary leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <AccentButton href={STUDIO_CAL} external>
              Start your project
            </AccentButton>
          </div>
        </div>
      </div>
    </section>
  );
}
