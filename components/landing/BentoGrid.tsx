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
            <div className="bg-white rounded-[16px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-6 flex flex-col">
              <h4 className="text-[18px] font-semibold text-primary mb-1">CSAT</h4>
              <p className="text-[14px] text-secondary mb-4">Measures and improves client satisfaction.</p>
              <p className="text-[13px] font-semibold text-accent uppercase tracking-wider mb-3">Excellent</p>
              <div className="flex gap-1 mt-auto">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20" />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[16px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] overflow-hidden relative">
              <Image
                src="/framer/MXYWm6qJWs0gXV3nFT1bXTo3aeY.jpg"
                alt="Design work"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 flex gap-1.5">
                <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/framer/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg" alt="" className="w-5" />
                </button>
                <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/framer/11KSGbIZoRSg4pjdnUoif6MKHI.svg" alt="" className="w-5" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[16px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/framer/rQNAGmYR2DGFWU2U3JkMB4Hys.svg" alt="" className="w-8 h-8 mb-4" />
              <h4 className="text-[18px] font-semibold text-primary mb-2">Strategy that matters</h4>
              <p className="text-[14px] text-secondary leading-relaxed">
                Thoughtful direction aligned with real business goals.
              </p>
            </div>

            {/* Row 2 */}
            <div className="bg-[#ff8c42] rounded-[16px] p-6 flex flex-col">
              <h4 className="text-[18px] font-semibold text-primary mb-2">Discuss your project</h4>
              <a
                href={STUDIO_CAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[36px] items-center px-5 rounded-[8px] bg-white text-accent text-[13px] font-semibold hover:bg-white/90 transition-colors w-fit mb-4"
              >
                Schedule a call · 30 mins free
              </a>
              <p className="text-[13px] text-primary/50 mb-4">No pressure, just a thoughtful chat.</p>
              <div className="mt-auto flex items-center gap-2">
                <span className="text-[12px] font-semibold text-primary/70 uppercase tracking-wider">Sumit Kumar</span>
                <div className="flex gap-1">
                  <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/framer/UL7nQuU8na523wMxrFlhlYj80A.svg" alt="" className="w-3" />
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[16px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-6">
              <h4 className="text-[17px] font-semibold text-primary mb-2">
                SEO ready &amp; fast performance
              </h4>
              <p className="text-[14px] text-secondary mb-6">
                Optimized for search rankings and blazing-fast speed.
              </p>
              <div className="flex items-end justify-center gap-4">
                {[
                  { value: "99%", label: "Performance" },
                  { value: "100%", label: "SEO" },
                  { value: "98%", label: "Accessibility" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="relative w-14 h-14 mx-auto mb-2">
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
                      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-primary">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-[10px] font-medium text-secondary uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-white rounded-[16px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] overflow-hidden">
              <Image
                src="/framer/P0sSNnMlhW7adaGkZFmKHL828bY.jpg"
                alt="Founder"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
                <p className="text-[14px] font-semibold text-white">Sumit Kumar</p>
                <p className="text-[12px] text-white/60 uppercase tracking-wider">Founder, Pixo Studios</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="bg-white rounded-[16px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-6">
              <h4 className="text-[17px] font-semibold text-primary mb-1">Pixo Studios Launch</h4>
              <p className="text-[15px] text-accent font-semibold mb-4">Design-led growth</p>
              <div className="flex gap-2">
                <Image
                  src="/framer/iaD7JUj0bVPCWMXFrnFx6r2HY.jpg"
                  alt=""
                  width={80}
                  height={60}
                  className="rounded-[8px] object-cover"
                />
                <Image
                  src="/framer/gDcaZH5xt6hqSU2VbK2snAw.jpg"
                  alt=""
                  width={80}
                  height={60}
                  className="rounded-[8px] object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-2 bg-white rounded-[16px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] p-6">
              <h4 className="text-[20px] font-semibold text-primary mb-5">Industries we work with</h4>
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
