"use client";

import { COMPARISON, STUDIO_NAME } from "@/lib/constants";
import { InsetPanel, AccentButton } from "@/components/ui/shared";

const AVATAR_IMAGES = [
  "/framer/avatar-sarah.jpg",
  "/framer/avatar-james.jpg",
  "/framer/avatar-priya.jpg",
];

export default function Comparison() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 mx-auto">
          <h2 className="text-[20px] sm:text-[36px] font-medium leading-[1.15] text-primary mb-4">
            We know choosing the right agency
            <br/>
            is hard because few{" "}
            <span className="text-accent">truly deliver</span>.
          </h2>
          <h2 className="text-[20px] sm:text-[36px] font-medium leading-[1.4] text-primary">
            So we made it simple{" "}
            <span className="text-accent">to compare</span> how
            <br />
            we work{" "}
            <span className="inline-flex items-center w-[45px] h-[24px] top-0.5 bg-primary rounded-full mx-1 relative">
              <span className="absolute right-[3px] w-[18px] h-[18px] bg-white rounded-full" />
            </span>{" "}
            versus what you usually
            <br />
            get{" "}
            <span className="text-accent">in the market</span>.
          </h2>
        </div>

        <InsetPanel>
          <div className="grid grid-cols-[1fr_1fr] rounded-[16px] overflow-hidden bg-white">
            {/* Header row */}
            <div className="p-6 pb-5 lg:px-10 lg:pt-8 lg:pb-6">
              <h3 className="text-[18px] lg:text-[20px] font-semibold text-primary">Other agencies</h3>
            </div>
            <div className="bg-[#ff8c42] p-6 pb-5 lg:px-10 lg:pt-8 lg:pb-6 rounded-t-[16px]">
              <h3 className="text-[18px] lg:text-[20px] font-semibold text-primary">{STUDIO_NAME}</h3>
            </div>

            {/* Comparison rows with dotted separators */}
            {COMPARISON.others.map((other, i) => (
              <div key={i} className="contents">
                <div
                  className="flex items-center gap-3 px-6 lg:px-10 py-5"
                  style={{
                    borderTop: "1.5px dashed #d4d0cb",
                  }}
                >
                  <svg width="6" height="10" viewBox="0 0 6 10" className="shrink-0 opacity-40">
                    <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                  <span className="text-[15px] text-secondary">{other}</span>
                </div>
                <div
                  className="bg-[#ff8c42] flex items-center gap-3 px-6 lg:px-10 py-5"
                  style={{
                    borderTop: "1.5px dashed rgba(0,0,0,0.15)",
                    ...(i === COMPARISON.others.length - 1 ? { borderRadius: "0 0 16px 16px" } : {}),
                  }}
                >
                  <svg width="6" height="10" viewBox="0 0 6 10" className="shrink-0 opacity-60">
                    <path d="M1 1l4 4-4 4" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                  <span className="text-[15px] font-medium text-primary">{COMPARISON.pixo[i]}</span>
                </div>
              </div>
            ))}
          </div>
        </InsetPanel>

        <div className="flex flex-wrap items-center gap-8 mt-10">
          <AccentButton href="#about">
            Read our story
          </AccentButton>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              {AVATAR_IMAGES.map((src, i) => (
                <div key={i} className="-ml-2 first:ml-0 ring-2 ring-bg rounded-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" width={36} height={36} className="w-9 h-9 rounded-full object-cover" />
                </div>
              ))}
              <div className="-ml-2 w-9 h-9 rounded-full bg-primary text-white text-[11px] font-semibold flex items-center justify-center ring-2 ring-bg">
                +54
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#ff6321">
                    <path d="M7 1l1.76 3.57 3.94.57-2.85 2.78.67 3.93L7 10.07l-3.52 1.78.67-3.93L1.3 5.14l3.94-.57z" />
                  </svg>
                ))}
                <span className="text-[14px] font-semibold text-primary ml-1">4.9/5</span>
              </div>
              <p className="text-[13px] text-secondary">
                Trusted by <span className="text-accent font-medium">54+</span> visionary brands
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
