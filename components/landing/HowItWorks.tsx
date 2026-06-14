"use client";

import { useState } from "react";
import { PROCESS_STEPS, STUDIO_CAL } from "@/lib/constants";
import { AccentButton, TAG_PILL_CLASSES } from "@/components/ui/shared";

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = PROCESS_STEPS[active];

  return (
    <section id="process" className="py-20 lg:py-28 concentric-bg">
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-badge mb-4 block">Process</span>
          <h2 className="text-[38px] sm:text-[52px] font-bold leading-[1.08] text-primary">
            A collaborative approach
          </h2>
        </div>

        <div className="flex items-center justify-center gap-0 mb-12 relative">
          <div className="absolute top-1/2 left-[12%] right-[12%] h-[2px] bg-border -translate-y-1/2 hidden sm:block" />

          {PROCESS_STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative z-10 flex flex-col items-center flex-1 group"
            >
              <div
                className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-[18px] font-bold transition-all duration-400 ${
                  i === active
                    ? "bg-accent text-white shadow-[0_6px_20px_rgba(255,99,33,0.35)] scale-110"
                    : "bg-white border border-border text-primary group-hover:border-accent/40"
                }`}
              >
                {s.number}
              </div>
              <span
                className={`mt-3 text-[13px] font-semibold transition-colors duration-300 ${
                  i === active ? "text-accent" : "text-secondary"
                }`}
              >
                {s.title}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[20px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-8 sm:p-10 text-center max-w-2xl mx-auto">
          <h3 className="text-[26px] sm:text-[32px] font-semibold text-primary mb-3">
            {step.title}
          </h3>
          <p className="text-[16px] text-secondary leading-relaxed mb-6 max-w-md mx-auto">
            {step.description}
          </p>
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
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

        <div className="mt-8 flex items-center justify-center gap-3">
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
