"use client";

import { STUDIO_CAL } from "@/lib/constants";
import { InsetPanel, AccentButton } from "@/components/ui/shared";

export default function CTABanner() {
  return (
    <section className="py-16 lg:py-24 concentric-bg">
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <InsetPanel>
          <div className="rounded-[16px] overflow-hidden bg-linear-to-br from-[#ffb366] via-[#ff8c42] to-[#ff6321] relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 lg:p-12">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-white/70 mb-3">
                  Let&apos;s Build Something Great
                </p>
                <h2 className="text-[34px] sm:text-[42px] font-bold text-white leading-[1.08] mb-6">
                  Ready to start
                  <br />
                  your next project?
                </h2>
                <a
                  href={STUDIO_CAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[44px] items-center px-6 rounded-[8px] bg-primary text-white text-[14px] font-semibold hover:bg-[#1a1a2e] transition-colors"
                >
                  Get started
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-end">
                <div className="bg-white rounded-[16px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] max-w-[280px] w-full">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary">
                      Available for Project
                    </span>
                  </div>
                  <div className="flex items-center gap-2 my-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-[12px] font-bold text-accent">SK</span>
                    </div>
                    <span className="text-[20px] font-medium text-secondary">+</span>
                    <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                      <span className="text-[11px] font-semibold text-primary">You</span>
                    </div>
                  </div>
                  <h4 className="text-[17px] font-semibold text-primary mb-1">
                    Quick 15-minute call
                  </h4>
                  <p className="text-[14px] text-secondary mb-4">
                    Pick a time that works for you.
                  </p>
                  <AccentButton href={STUDIO_CAL} external className="w-full h-[40px] text-[13px]">
                    Book a free call
                  </AccentButton>
                </div>
              </div>
            </div>

            <div className="absolute top-6 left-[-20px] w-[50px] h-[50px] floating-card hidden lg:flex items-center justify-center rotate-[-15deg]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L2 6L10 10L18 6L10 2Z" stroke="#060612" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M2 10L10 14L18 10" stroke="#ff6321" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="absolute bottom-8 left-[-30px] w-[44px] h-[44px] floating-card hidden lg:flex items-center justify-center rotate-10">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9L9 3L15 9L9 15L3 9Z" stroke="#060612" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="absolute top-4 right-[-24px] w-[48px] h-[48px] floating-card hidden lg:flex items-center justify-center rotate-12">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="#060612" strokeWidth="1.5"/>
                <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="#ff6321" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="absolute bottom-6 right-[-20px] w-[44px] h-[44px] floating-card hidden lg:flex items-center justify-center rotate-[-8deg]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="6" stroke="#060612" strokeWidth="1.5"/>
                <path d="M9 6V12M6 9H12" stroke="#ff6321" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </InsetPanel>
      </div>
    </section>
  );
}
