"use client";

import { useRef, useState, useEffect } from "react";
import { PROCESS_STEPS, STUDIO_CAL } from "@/lib/constants";
import { AccentButton, TAG_PILL_CLASSES } from "@/components/ui/shared";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const total = PROCESS_STEPS.length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
      },
      { threshold: 0 }
    );
    observer.observe(section);

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const stickyHeight = section.offsetHeight - window.innerHeight;
      if (stickyHeight <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / stickyHeight));
      const step = Math.min(total - 1, Math.floor(progress * total));
      setActive(step);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [total]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative concentric-bg"
      style={{ height: `${(total + 1) * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 w-full">
          <div className="text-center mb-10">
            <span className="section-badge mb-4 block">Process</span>
            <h2 className="text-[38px] sm:text-[52px] font-bold leading-[1.08] text-primary">
              A collaborative approach
            </h2>
          </div>

          <div className="flex items-center justify-center gap-0 mb-10 relative">
            <div className="absolute top-[28px] left-[12%] right-[12%] h-[2px] hidden sm:block overflow-hidden">
              <div className="h-full bg-border" />
              <div
                className="absolute top-0 left-0 h-full bg-accent transition-all duration-700 ease-out"
                style={{ width: `${(active / (total - 1)) * 100}%` }}
              />
            </div>

            {PROCESS_STEPS.map((s, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center flex-1 cursor-pointer"
                onClick={() => {
                  const section = sectionRef.current;
                  if (!section) return;
                  const stickyHeight = section.offsetHeight - window.innerHeight;
                  const targetScroll = section.offsetTop + (i / total) * stickyHeight;
                  window.scrollTo({ top: targetScroll, behavior: "smooth" });
                }}
              >
                <div
                  className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-[18px] font-bold transition-all duration-500 ${
                    i === active
                      ? "bg-accent text-white shadow-[0_6px_20px_rgba(255,99,33,0.35)] scale-110"
                      : i < active
                      ? "bg-accent/20 text-accent border border-accent/30"
                      : "bg-white border border-border text-primary"
                  }`}
                >
                  {s.number}
                </div>
                <span
                  className={`mt-3 text-[13px] font-semibold transition-colors duration-300 ${
                    i === active ? "text-accent" : i < active ? "text-accent/60" : "text-secondary"
                  }`}
                >
                  {s.title}
                </span>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden" style={{ minHeight: "280px" }}>
            {PROCESS_STEPS.map((s, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ease-out ${
                  i === active
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-[20px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-8 sm:p-10 text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent text-[16px] font-bold mb-4">
                    {s.number}
                  </div>
                  <h3 className="text-[28px] sm:text-[34px] font-semibold text-primary mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[16px] text-secondary leading-relaxed mb-6 max-w-md mx-auto">
                    {s.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
                    {s.tags.map((tag) => (
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
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-[15px] font-semibold text-primary tabular-nums">
              {String(active + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              {PROCESS_STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    i === active ? "bg-accent scale-125" : i < active ? "bg-accent/40" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
