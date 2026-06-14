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
      <span className="text-[15px] text-secondary shrink-0 mt-1">{index}.</span>
      <div className="flex-1">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[16px] sm:text-[17px] font-medium text-primary leading-snug">{q}</span>
          <div className={`w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 transition-transform ${open ? "rotate-45" : ""}`}>
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
              <path d="M5 1v8M1 5h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 mt-4" : "max-h-0"}`}>
          <p className="text-[14px] text-primary/70 leading-[1.7] pr-6">{a}</p>
        </div>
      </div>
    </button>
  );
}

const AVATAR_IMAGES = [
  "/framer/avatar-emma.jpg",
  "/framer/avatar-david.jpg",
  "/framer/avatar-michael.jpg",
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-badge mb-4 block">Got Questions</span>
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-[36px] sm:text-[48px] font-medium text-primary sm:pl-24">
              We&apos;ve got answers
            </h2>
            <div className="hidden sm:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/framer/70A1TVDytyaXNukzYYdKPABwt1c.svg" alt="" className="w-6 h-6 -scale-x-100 -rotate-32"  />
              <p className="text-[14px] text-accent">
                Let&apos;s clear things up
              </p>
            </div>
          </div>
        </div>

        <InsetPanel>
          <div className="bg-white rounded-[16px] overflow-hidden">
            {FAQ_DATA.map((item, i) => (
              <AccordionItem key={i} index={i + 1} q={item.q} a={item.a} />
            ))}
          </div>
        </InsetPanel>

        <div className="text-center mt-10">
          <div className="flex items-center justify-center gap-0">
            {AVATAR_IMAGES.map((src, i) => (
              <div key={i} className="-ml-2 first:ml-0 ring-2 ring-bg rounded-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" width={36} height={36} className="w-9 h-9 rounded-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-[15px] text-secondary mb-3 mt-3">Still have questions?</p>
          <AccentButton href={STUDIO_CAL} external className="h-[38px] px-5 text-[13px]">
            Let&apos;s talk
          </AccentButton>
        </div>
      </div>
    </section>
  );
}
