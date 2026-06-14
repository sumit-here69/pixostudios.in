"use client";

import { useState } from "react";
import { PROCESS_STEPS, STUDIO_CAL } from "@/lib/constants";
import { AccentButton, TAG_PILL_CLASSES } from "@/components/ui/shared";

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = PROCESS_STEPS[active];
  const total = PROCESS_STEPS.length;

  return (
    <section id="process" className="py-20 lg:py-28 concentric-bg">
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <span className="section-badge mb-4 block">Process</span>
        <h2 className="text-[38px] sm:text-[52px] font-bold leading-[1.08] text-primary mb-16">
          A collaborative approach
        </h2>

        <div className="relative mx-auto" style={{ maxWidth: "600px", height: "360px" }}>
          <svg
            viewBox="0 0 600 360"
            className="absolute inset-0 w-full h-full"
            fill="none"
          >
            <path d="M 50 340 A 260 260 0 0 1 550 340" stroke="#ddd9d5" strokeWidth="2" fill="none" />
            <path d="M 80 340 A 230 230 0 0 1 520 340" stroke="#eeecea" strokeWidth="1.5" fill="none" opacity="0.6" />
            <path d="M 110 340 A 200 200 0 0 1 490 340" stroke="#eeecea" strokeWidth="1" fill="none" opacity="0.3" />
          </svg>

          {PROCESS_STEPS.map((s, i) => {
            const angle = Math.PI - (i / (total - 1)) * Math.PI;
            const cx = 300 + Math.cos(angle) * 230;
            const cy = 340 - Math.sin(angle) * 230;
            const isActive = i === active;

            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`absolute flex flex-col items-center transition-all duration-500 -translate-x-1/2 -translate-y-1/2 ${
                  isActive ? "scale-110 z-10" : "scale-90 opacity-40 z-0"
                }`}
                style={{ left: `${(cx / 600) * 100}%`, top: `${(cy / 360) * 100}%` }}
              >
                <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary mb-1.5">
                  Step
                </span>
                <span
                  className={`w-12 h-12 rounded-[10px] flex items-center justify-center text-[17px] font-bold transition-all duration-500 ${
                    isActive
                      ? "bg-accent text-white shadow-[0_4px_16px_rgba(255,99,33,0.3)]"
                      : "bg-white border border-border text-primary"
                  }`}
                >
                  {s.number}
                </span>
              </button>
            );
          })}

          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-center" style={{ width: "400px" }}>
            <h3 className="text-[28px] sm:text-[34px] font-semibold text-primary mb-3">
              {step.title}
            </h3>
            <p className="text-[16px] text-secondary leading-relaxed mb-5">
              {step.description}
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
              {step.tags.map((tag) => (
                <span key={tag} className={TAG_PILL_CLASSES}>
                  {tag}
                </span>
              ))}
            </div>
            <AccentButton href={STUDIO_CAL} external>
              Start your project
            </AccentButton>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="text-[15px] font-semibold text-primary">
            {String(active + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {PROCESS_STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-accent scale-125" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
