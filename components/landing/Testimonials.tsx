"use client";

import { useRef } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader, InsetPanel, NavArrows } from "@/components/ui/shared";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = dir === "left" ? -460 : 460;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader badge="Testimonials" heading="What clients say" />

        <InsetPanel>
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="min-w-[320px] lg:min-w-[400px] shrink-0 snap-center bg-white rounded-[16px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-7 flex flex-col justify-between"
              >
                <p className="text-[17px] text-primary leading-[1.7] mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[15px] font-semibold text-primary">{t.name}</p>
                      <p className="text-[14px] text-secondary">— {t.role}</p>
                    </div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/framer/zJWcHB20yyCSW9nYP85FUNuRmf4.svg" alt="5 stars" className="h-[14px]" />
                </div>
              </div>
            ))}
          </div>
        </InsetPanel>

        <NavArrows
          onPrev={() => scroll("left")}
          onNext={() => scroll("right")}
          className="mt-5"
        />
      </div>
    </section>
  );
}
