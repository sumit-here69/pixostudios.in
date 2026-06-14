"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader, InsetPanel, NavArrows } from "@/components/ui/shared";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader badge="Testimonials" heading="What clients say" />

        <InsetPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TESTIMONIALS.slice(0, 2).map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-[16px] p-8 flex flex-col justify-between"
              >
                <p className="text-[17px] text-primary leading-[1.7] mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[16px] font-semibold text-primary">{t.name}</p>
                      <p className="text-[14px] text-secondary">{t.role}</p>
                    </div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/framer/zJWcHB20yyCSW9nYP85FUNuRmf4.svg" alt="5 stars" className="h-[16px]" />
                </div>
              </div>
            ))}
          </div>
        </InsetPanel>

        <NavArrows
          onPrev={() => {}}
          onNext={() => {}}
          className="mt-6"
        />
      </div>
    </section>
  );
}
