"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader, InsetPanel, NavArrows } from "@/components/ui/shared";

const AVATAR_COLORS = ["#FFD4B8", "#B8D8FF", "#D4B8FF"];

function PersonAvatar({ color, size = 44 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="rounded-full shrink-0">
      <circle cx="50" cy="50" r="50" fill={color} />
      <circle cx="50" cy="38" r="16" fill="white" opacity="0.6" />
      <ellipse cx="50" cy="72" rx="22" ry="16" fill="white" opacity="0.6" />
    </svg>
  );
}

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
                className="bg-white rounded-[16px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-8 flex flex-col justify-between"
              >
                <p className="text-[17px] text-primary leading-[1.7] mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PersonAvatar color={AVATAR_COLORS[i % AVATAR_COLORS.length]} />
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
