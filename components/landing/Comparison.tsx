"use client";

import { COMPARISON, STUDIO_NAME } from "@/lib/constants";
import { SerifAccent, InsetPanel, AccentButton } from "@/components/ui/shared";

export default function Comparison() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-[38px] sm:text-[48px] font-bold leading-[1.15] text-primary mb-4">
            We know choosing the right agency
            <br />
            is hard because few <SerifAccent>truly deliver</SerifAccent>.
          </h2>
          <p className="text-[20px] sm:text-[24px] font-medium leading-[1.4] text-primary">
            So we made it <span className="font-normal">simple</span>{" "}
            <SerifAccent>to compare</SerifAccent> how
            <br />
            we work{" "}
            <span className="inline-flex items-center w-[38px] h-[20px] bg-primary rounded-full mx-1 relative">
              <span className="absolute right-[3px] w-[14px] h-[14px] bg-white rounded-full" />
            </span>{" "}
            versus what you usually
            <br />
            get <SerifAccent>in the market</SerifAccent>.
          </p>
        </div>

        <InsetPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 rounded-[16px] overflow-hidden">
            <div className="bg-white p-8 shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)]">
              <h3 className="text-[17px] font-semibold text-primary mb-6">Other agencies</h3>
              <ul className="space-y-4">
                {COMPARISON.others.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] text-secondary">
                    <svg width="6" height="10" viewBox="0 0 6 10" className="mt-1.5 shrink-0 opacity-40">
                      <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#ff8c42] p-8 rounded-r-[16px]">
              <h3 className="text-[17px] font-semibold text-primary mb-6">{STUDIO_NAME}</h3>
              <ul className="space-y-4">
                {COMPARISON.pixo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] text-primary/80">
                    <svg width="6" height="10" viewBox="0 0 6 10" className="mt-1.5 shrink-0 opacity-70">
                      <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </InsetPanel>

        <div className="flex flex-wrap items-center gap-5 mt-10">
          <AccentButton href="#about">
            Read our story
          </AccentButton>
        </div>
      </div>
    </section>
  );
}
