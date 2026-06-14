"use client";

import { PRICING, STUDIO_CAL } from "@/lib/constants";
import { SectionHeader, InsetPanel } from "@/components/ui/shared";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeader badge="Pricing" heading="Plan that fits" />

        <InsetPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRICING.map((plan, idx) => (
              <div
                key={plan.tier}
                className={`rounded-[16px] relative overflow-hidden flex flex-col ${
                  plan.popular
                    ? "bg-[#ff8c42] text-primary"
                    : "bg-white shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] text-primary"
                }`}
                style={{}}
              >
                <div className={`p-6 lg:p-8 pb-4 ${plan.popular ? "border-b border-primary/10 m-3 rounded-xl bg-white" : "border-b border-border m-3 rounded-xl bg-black/5"}`}>
                  {plan.popular && (
                    <span className="absolute top-6 right-6 px-3 py-1 rounded-[8px] bg-primary/10 text-[11px] font-bold uppercase tracking-wider text-primary">
                      Popular
                    </span>
                  )}
                  <p className={`text-[13px] font-semibold uppercase tracking-wider mb-2 ${plan.popular ? "text-primary/60" : "text-secondary"}`}>
                    {plan.tier}
                  </p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-[38px] font-bold leading-none">{plan.price}</span>
                    <span className={`text-[14px] ${plan.popular ? "text-primary/50" : "text-secondary"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-[14px] leading-relaxed ${plan.popular ? "text-primary/60" : "text-secondary"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="p-6 pt-2 flex flex-col flex-1">
                  <ul className="space-y-3 mb-10 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <svg width="18" height="18" viewBox="0 0 18 18" className={`mt-0.5 shrink-0 ${plan.popular ? "text-primary" : "text-accent"}`}>
                          <circle cx="9" cy="9" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[14px] font-medium text-primary">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={STUDIO_CAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center h-[42px] rounded-[8px] text-[14px] font-semibold transition-colors w-fit px-5 ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-[#1a1a2e]"
                        : "bg-accent text-white hover:bg-accent-hover"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={idx === 0 ? "/framer/rocket.svg" : "/framer/fire.svg"}
                  alt=""
                  className={`absolute bottom-0 right-8 pointer-events-none ${
                    idx === 0 ? "h-[100px]" : "h-[100px]"
                  }`}
                />
              </div>
            ))}
          </div>
        </InsetPanel>

        <div className="text-center mt-10">
          <p className="text-[14px] text-secondary mb-2">
            For startups and businesses needing full product development.
          </p>
          <a href={STUDIO_CAL} target="_blank" rel="noopener noreferrer" className="text-[14px] font-semibold text-primary hover:text-accent transition-colors">
            Contact us &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
