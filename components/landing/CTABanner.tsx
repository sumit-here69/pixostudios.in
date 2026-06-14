"use client";

import { STUDIO_CAL } from "@/lib/constants";
import { AccentButton } from "@/components/ui/shared";

export default function CTABanner() {
  return (
    <section className="pt-16 lg:pt-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="inset-container-lg relative">
          <div
            className="rounded-[16px] overflow-hidden relative"
            style={{
              backgroundImage:
                "url(https://framerusercontent.com/images/4RGuWhw5VjbAJbMonewftyJZ4c.jpg?width=1000&height=400)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 lg:p-16">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-black/70 mb-3">
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
              <div className="p-2 bg-black/10 rounded-2xl">
                <div className="flex items-center gap-2 justify-center md:justify-end">
                  <div className="bg-white rounded-[12px] p-6 w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary">
                        Available for Project
                      </span>
                    </div>
                    <div className="flex items-center gap-2 my-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/framer/avatar-sumit.jpg"
                        alt="Sumit"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="text-[20px] font-medium text-secondary">+</span>
                      <div className="w-10 h-10 rounded-full bg-primary border border-primary flex items-center justify-center">
                        <span className="text-[11px] font-semibold text-white">You</span>
                      </div>
                    </div>
                    <h4 className="text-[17px] font-semibold text-primary mb-1">
                      Quick 30-minute call
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
            </div>

            {/* Floating icon cards */}
            <div className="absolute bottom-8 left-[30px] w-[44px] h-[44px] floating-card hidden lg:flex items-center justify-center rotate-10">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9L9 3L15 9L9 15L3 9Z" stroke="#060612" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="absolute bottom-6 left-[100px] w-[44px] h-[44px] floating-card hidden lg:flex items-center justify-center rotate-[-8deg]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="6" stroke="#060612" strokeWidth="1.5"/>
                <path d="M9 6V12M6 9H12" stroke="#ff6321" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
