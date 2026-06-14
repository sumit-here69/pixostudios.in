"use client";

import Image from "next/image";
import { STUDIO_CAL, INDUSTRIES } from "@/lib/constants";
import { InsetPanel, TAG_PILL_CLASSES } from "@/components/ui/shared";

export default function BentoGrid() {
  return (
    <section className="py-20 lg:py-28 concentric-bg">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <InsetPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Row 1 */}
            <div className="bg-white rounded-[14px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] overflow-hidden relative">
              <Image
                src="/framer/MXYWm6qJWs0gXV3nFT1bXTo3aeY.jpg"
                alt="Design work"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-[14px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/framer/rQNAGmYR2DGFWU2U3JkMB4Hys.svg" alt="" className="w-7 h-7 mb-3" />
              <h4 className="text-[17px] font-semibold text-primary mb-1.5">Strategy that matters</h4>
              <p className="text-[13px] text-secondary leading-relaxed">
                Your brand gains a clear voice, purpose, and positioning that resonates.
              </p>
            </div>

            <div className="bg-white rounded-[14px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-5">
              <h4 className="text-[17px] font-semibold text-primary mb-1.5">
                SEO ready &amp; fast performance
              </h4>
              <p className="text-[13px] text-secondary mb-4">
                Optimized for search rankings and blazing-fast speed.
              </p>
              <div className="flex items-end justify-center gap-4">
                {[
                  { value: "99%", label: "Performance" },
                  { value: "100%", label: "SEO" },
                  { value: "98%", label: "Accessibility" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="relative w-12 h-12 mx-auto mb-1.5">
                      <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                        <circle cx="28" cy="28" r="24" fill="none" stroke="#eeecea" strokeWidth="3" />
                        <circle
                          cx="28"
                          cy="28"
                          r="24"
                          fill="none"
                          stroke="#ff6321"
                          strokeWidth="3"
                          strokeDasharray={`${parseInt(stat.value) * 1.508} 150.8`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-primary">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-[9px] font-medium text-secondary uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div
              className="md:col-span-2 rounded-[14px] p-5 relative overflow-hidden"
              style={{
                backgroundImage: "url(https://framerusercontent.com/images/4RGuWhw5VjbAJbMonewftyJZ4c.jpg?width=1000&height=400)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative z-10">
                <h4 className="text-[17px] font-semibold text-white mb-2">Discuss your project</h4>
                <a
                  href={STUDIO_CAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[34px] items-center px-5 rounded-[8px] bg-white text-accent text-[13px] font-semibold hover:bg-white/90 transition-colors w-fit mb-3"
                >
                  Schedule a call · 30 mins free
                </a>
                <p className="text-[12px] text-white/60">No pressure, just a thoughtful chat.</p>
              </div>
              <div className="absolute bottom-3 right-4 flex items-end gap-2">
                {["/framer/avatar-sumit.jpg", "/framer/avatar-vikram.jpg", "/framer/avatar-ananya.jpg"].map((src, i) => (
                  <div key={i} className={`w-14 h-14 rounded-[10px] overflow-hidden shadow-lg rotate-[${[-6, 2, -3][i]}deg]`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-white rounded-[14px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] overflow-hidden">
              <Image
                src="/framer/P0sSNnMlhW7adaGkZFmKHL828bY.jpg"
                alt="Founder"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-3">
                <p className="text-[13px] font-semibold text-white">Sumit Kumar</p>
                <p className="text-[11px] text-white/60 uppercase tracking-wider">Founder, Pixo Studios</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="md:col-span-3 bg-white rounded-[14px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-5">
              <h4 className="text-[18px] font-semibold text-primary mb-4">Industries we work with</h4>
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((industry) => (
                  <span
                    key={industry}
                    className={`${TAG_PILL_CLASSES} hover:border-accent hover:text-accent transition-colors cursor-default`}
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </InsetPanel>
      </div>
    </section>
  );
}
