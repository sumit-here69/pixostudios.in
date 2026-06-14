"use client";

import { useRef, useState, useEffect } from "react";
import { PROCESS_STEPS, STUDIO_CAL } from "@/lib/constants";
import { AccentButton } from "@/components/ui/shared";

const R_DESKTOP = 550;
const R_MOBILE = 250;
const BORDER_W = 10;

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [radius, setRadius] = useState(R_DESKTOP);
  const total = PROCESS_STEPS.length;

  useEffect(() => {
    const updateRadius = () =>
      setRadius(window.innerWidth < 640 ? R_MOBILE : R_DESKTOP);
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) {
          ticking = false;
          return;
        }
        const rect = el.getBoundingClientRect();
        const scrollable = el.offsetHeight - window.innerHeight;
        if (scrollable <= 0) {
          ticking = false;
          return;
        }
        setProgress(Math.max(0, Math.min(1, -rect.top / scrollable)));
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const idx = Math.min(total - 1, Math.floor(progress * total));
  const step = PROCESS_STEPS[idx];
  const isMobile = radius === R_MOBILE;

  return (
    <section
      ref={ref}
      id="process"
      className="relative"
      style={{ height: `${(total + 0.5) * 65}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <style>{`
          @keyframes step-fade-in {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .step-animate { animation: step-fade-in 0.35s ease-out both; }
        `}</style>

        {/* Header */}
        <div className="text-center pt-32 pb-8 sm:pb-0 relative z-10">
          <span className="section-badge mb-4 block">Process</span>
          <h2 className="text-[36px] sm:text-[52px] font-medium leading-[1.08] text-primary">
            A collaborative approach
          </h2>
        </div>

        {/* Static circle — pushed down on mobile so arc starts below header */}
        <div
          className="absolute left-1/2 pointer-events-none"
          style={{ top: isMobile ? "60%" : "50%", width: 0, height: 0 }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: radius * 2,
              height: radius * 2,
              top: -radius,
              left: -radius,
              border: `${BORDER_W}px solid rgba(200,196,192,0.5)`,
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Radial fade — desktop only */}
        <div
          className="absolute inset-0 pointer-events-none hidden sm:block"
          style={{
            zIndex: 5,
            background:
              "radial-gradient(ellipse 55% 48% at 50% 50%, transparent 42%, #f7f6f5 80%)",
          }}
        />

        {/* Edge fades — mobile only */}
        <div className="absolute inset-0 pointer-events-none sm:hidden" style={{ zIndex: 5 }}>
          <div className="absolute top-0 left-0 right-0 h-[28%]" style={{ background: "linear-gradient(to bottom, #f7f6f5, transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-[15%]" style={{ background: "linear-gradient(to top, #f7f6f5, transparent)" }} />
          <div className="absolute top-0 left-0 bottom-0 w-[10%]" style={{ background: "linear-gradient(to right, #f7f6f5, transparent)" }} />
          <div className="absolute top-0 right-0 bottom-0 w-[10%]" style={{ background: "linear-gradient(to left, #f7f6f5, transparent)" }} />
        </div>

        {/* Center content */}
        <div
          key={idx}
          className="absolute inset-x-0 text-center px-6 z-10 step-animate"
          style={{ top: isMobile ? "45%" : "40%", transform: "translateY(-50%)" }}
        >
          <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.15em] text-accent uppercase mb-3">
            Step
          </p>
          <p
            className="text-[32px] sm:text-[42px] font-bold text-accent leading-none mb-3"
            style={{
              fontFamily:
                "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif",
            }}
          >
            {step.number}
          </p>
          <h3
            className="text-[28px] sm:text-[36px] text-primary mb-3"
            style={{
              fontFamily:
                "var(--font-dm-sans), 'DM Sans', system-ui, sans-serif",
            }}
          >
            {step.title}
          </h3>
          <p className="text-[15px] sm:text-[16px] text-secondary leading-relaxed mb-5 max-w-md mx-auto">
            {step.description}
          </p>

          <div className="flex items-center justify-center flex-wrap gap-y-1 mb-6">
            {step.tags.map((tag, i) => (
              <span key={tag} className="flex items-center">
                <span className="text-[11px] sm:text-[12px] font-semibold text-secondary uppercase">
                  {tag}
                </span>
                {i < step.tags.length - 1 && (
                  <span className="text-border-dark mx-2 sm:mx-3">
                    &bull;
                  </span>
                )}
              </span>
            ))}
          </div>

          <AccentButton href={STUDIO_CAL} external>
            Start your project
          </AccentButton>
        </div>
      </div>
    </section>
  );
}
