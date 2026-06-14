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
            <span className="inline-flex items-center w-[50px] h-[24px] top-0.5 bg-primary rounded-full mx-1 relative">
              <span className="absolute right-[3px] w-[16px] h-[16px] bg-white rounded-full" />
            </span>{" "}
            versus what you usually
            <br />
            get{" "}
            <span className="text-accent">in the market</span>.
          </h2>
        </div>

        <InsetPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 rounded-[16px] overflow-hidden bg-white">
            <div className="p-8 lg:p-10" style={{ minHeight: "300px" }}>
              <h3 className="text-[18px] font-semibold text-primary mb-6">Other agencies</h3>
              <ul className="space-y-4">
                {COMPARISON.others.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-secondary">
                    <svg width="6" height="10" viewBox="0 0 6 10" className="mt-1.5 shrink-0 opacity-40">
                      <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent p-8 lg:p-10 rounded-[16px]" style={{ minHeight: "300px" }}>
              <h3 className="text-[18px] font-bold text-white mb-6">{STUDIO_NAME}</h3>
              <ul className="space-y-4">
                {COMPARISON.pixo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-white">
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
