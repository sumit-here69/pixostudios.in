"use client";

import { COMPARISON, STUDIO_NAME } from "@/lib/constants";
import { InsetPanel } from "@/components/ui/shared";

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
          <h2 className="text-[18px] sm:text-[36px] font-medium leading-[1.4] text-primary">
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
          {/* Desktop: side-by-side grid */}
          <div className="hidden md:grid grid-cols-[1fr_1fr] rounded-[16px] overflow-hidden bg-white">
            <div className="p-6 pb-5 lg:px-10 lg:pt-8 lg:pb-6">
              <h3 className="text-[18px] lg:text-[20px] font-semibold text-primary">Other agencies</h3>
            </div>
            <div className="bg-[#ff8c42] p-6 pb-5 lg:px-10 lg:pt-8 lg:pb-6 rounded-t-[16px]">
              <h3 className="text-[18px] lg:text-[20px] font-semibold text-primary">{STUDIO_NAME}</h3>
            </div>
            {COMPARISON.others.map((other, i) => (
              <div key={i} className="contents">
                <div className="flex items-center gap-3 px-6 lg:px-10 py-5" style={{ borderTop: "1.5px dashed #d4d0cb" }}>
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

          {/* Mobile: stacked columns */}
          <div className="md:hidden rounded-[16px] overflow-hidden bg-white">
            <div className="p-5 pb-4">
              <h3 className="text-[17px] font-semibold text-primary">Other agencies</h3>
            </div>
            {COMPARISON.others.map((other, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-4" style={{ borderTop: "1.5px dashed #d4d0cb" }}>
                <svg width="6" height="10" viewBox="0 0 6 10" className="shrink-0 opacity-40">
                  <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
                <span className="text-[14px] text-secondary">{other}</span>
              </div>
            ))}

            <div className="bg-[#ff8c42] rounded-[16px] p-5 pb-4 mt-1">
              <h3 className="text-[17px] font-semibold text-primary mb-1">{STUDIO_NAME}</h3>
              {COMPARISON.pixo.map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-4" style={{ borderTop: i > 0 ? "1.5px dashed rgba(0,0,0,0.15)" : "none" }}>
                  <svg width="6" height="10" viewBox="0 0 6 10" className="shrink-0 opacity-60">
                    <path d="M1 1l4 4-4 4" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                  <span className="text-[14px] font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </InsetPanel>

      </div>
    </section>
  );
}
