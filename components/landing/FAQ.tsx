"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ as FAQ_DATA } from "@/lib/constants";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/40 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left group"
      >
        <span className="font-serif text-xl lg:text-2xl text-primary pr-4 group-hover:text-accent transition-colors">
          {q}
        </span>
        <ChevronDown
          size={22}
          className={`shrink-0 text-tertiary transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-base lg:text-lg text-secondary leading-relaxed pr-12">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-primary">
            Questions? We&apos;ve got answers.
          </h2>
        </AnimatedSection>

        <StaggerContainer>
          <div className="rounded-3xl bg-surface px-8 lg:px-12">
            {FAQ_DATA.map((item) => (
              <StaggerItem key={item.q}>
                <AccordionItem q={item.q} a={item.a} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
