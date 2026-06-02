"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { PRICING } from "@/lib/constants";
import { AnimatedSection, TextReveal, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-primary mb-4">
            <TextReveal text="Simple pricing. No surprises." />
          </h2>
          <p className="text-lg text-secondary max-w-xl mx-auto mb-8">
            Less than your daily chai. Cancel anytime.
          </p>

          <div className="inline-flex items-center gap-3 rounded-full bg-surface p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !annual
                  ? "bg-primary text-white shadow-sm"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                annual
                  ? "bg-primary text-white shadow-sm"
                  : "text-secondary hover:text-primary"
              }`}
            >
              Annual
              <span className="ml-1.5 text-xs text-success font-bold">Save 2 months</span>
            </button>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PRICING.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={`relative flex flex-col h-full p-6 rounded-3xl transition-all ${
                  tier.popular
                    ? "bg-primary text-white shadow-sm shadow-primary/5 scale-[1.02]"
                    : "bg-surface"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}

                <div className="mb-5">
                  <h3
                    className={`text-lg font-semibold mb-1 ${
                      tier.popular ? "text-white" : "text-primary"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      tier.popular ? "text-white/70" : "text-secondary"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold tracking-tight ${
                        tier.popular ? "text-white" : "text-primary"
                      }`}
                    >
                      ₹{annual ? Math.round(tier.annualPrice / 12).toLocaleString("en-IN") : tier.price.toLocaleString("en-IN")}
                    </span>
                    <span
                      className={`text-sm ${
                        tier.popular ? "text-white/60" : "text-tertiary"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                  {annual && (
                    <p
                      className={`text-xs mt-1 ${
                        tier.popular ? "text-white/50" : "text-tertiary"
                      }`}
                    >
                      ₹{tier.annualPrice.toLocaleString("en-IN")}/year billed annually
                    </p>
                  )}
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${
                          tier.popular ? "text-accent" : "text-success"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          tier.popular ? "text-white/80" : "text-secondary"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`flex h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-colors ${
                    tier.popular
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-primary text-white hover:bg-accent"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="text-center mt-8">
          <p className="text-sm text-secondary">
            All plans include a one-time setup fee (₹999–₹4,999) for domain registration & initial customization.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
