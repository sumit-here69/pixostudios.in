"use client";

import { useState } from "react";
import { FAQ_DATA, STUDIO_CAL } from "@/lib/constants";
import { InsetPanel, AccentButton } from "@/components/ui/shared";

function AccordionItem({ index, q, a }: { index: number; q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full flex items-start gap-4 text-left py-5 px-6 border-b border-border last:border-b-0 hover:bg-[#faf9f8] transition-colors"
    >
      <span className="text-[14px] text-secondary shrink-0 mt-0.5">{index}.</span>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[17px] font-medium text-primary">{q}</span>
          <div className={`w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 transition-transform ${open ? "rotate-45" : ""}`}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1v8M1 5h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40 mt-3" : "max-h-0"}`}>
          <p className="text-[15px] text-secondary leading-relaxed pr-8">{a}</p>
        </div>
      </div>
    </button>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-badge mb-4 block">Got Questions</span>
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-[36px] sm:text-[48px] font-bold leading-[1.08] text-primary">
              We&apos;ve got answers
            </h2>
            <div className="hidden sm:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/framer/70A1TVDytyaXNukzYYdKPABwt1c.svg" alt="" className="w-6 h-6" />
              <p className="text-[14px] text-accent" style={{ fontFamily: "var(--font-serif)" }}>
                Let&apos;s clear things up
              </p>
            </div>
          </div>
        </div>

        <InsetPanel>
          <div className="bg-white rounded-[16px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] overflow-hidden">
            {FAQ_DATA.map((item, i) => (
              <AccordionItem key={i} index={i + 1} q={item.q} a={item.a} />
            ))}
          </div>
        </InsetPanel>

        <div className="text-center mt-10">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-surface border border-border -ml-1.5 first:ml-0" />
            ))}
          </div>
          <p className="text-[15px] text-secondary mb-3">Still have questions?</p>
          <AccentButton href={STUDIO_CAL} external className="h-[38px] px-5 text-[13px]">
            Let&apos;s talk
          </AccentButton>
        </div>
      </div>
    </section>
  );
}
