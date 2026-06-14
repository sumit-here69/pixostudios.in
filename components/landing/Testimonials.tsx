"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader, InsetPanel } from "@/components/ui/shared";

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(TESTIMONIALS.length / perPage);
  const visible = TESTIMONIALS.slice(page * perPage, page * perPage + perPage);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader badge="Testimonials" heading="What clients say" />

        <InsetPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {visible.map((t, i) => (
              <div
                key={`${page}-${i}`}
                className="bg-white rounded-[16px] p-7 lg:p-9 flex flex-col justify-between"
              >
                <p className="text-[15px] lg:text-[16px] text-primary leading-[1.75] mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[14px] font-semibold text-primary">
                        {t.name}
                      </p>
                      <p className="text-[13px] text-secondary">{t.role}</p>
                    </div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/framer/zJWcHB20yyCSW9nYP85FUNuRmf4.svg"
                    alt="5 stars"
                    className="h-[16px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </InsetPanel>

        {/* Nav arrows using section-badge arrow icons */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-colors cursor-pointer outline-none hover:bg-surface"
            aria-label="Previous"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/framer/F8wan4JxRuiIlSJe5tqI0wnJhM.svg"
              alt=""
              className="w-3 h-4"
            />
          </button>
          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-white flex items-center justify-center transition-colors cursor-pointer outline-none hover:bg-surface"
            aria-label="Next"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/framer/T2mfWqIsv4Kpdf5hFk22cxmmg78.svg"
              alt=""
              className="w-3 h-4"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
