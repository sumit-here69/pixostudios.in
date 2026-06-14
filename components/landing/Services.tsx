"use client";

import { SERVICES, STUDIO_CAL } from "@/lib/constants";
import { SerifAccent, AccentButton, InsetPanel, Card, TAG_PILL_CLASSES } from "@/components/ui/shared";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="section-badge mb-4 block">What We Do</span>
            <h2 className="text-[40px] sm:text-[48px] font-bold leading-[1.08] text-primary mb-6">
              Services built
              <br />
              to drive impact
            </h2>
            <AccentButton href={STUDIO_CAL} external>
              Discuss your ideas
            </AccentButton>
            <p className="mt-3">
              <SerifAccent className="text-[16px]">Let&apos;s get started</SerifAccent>
            </p>
          </div>

          <InsetPanel>
            <div className="space-y-3">
              {SERVICES.map((service, i) => (
                <Card key={i} hover className="rounded-[16px] p-8">
                  <h3 className="text-[26px] font-semibold text-primary group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <div className="border-t border-dashed border-border group-hover:border-white/20 my-4 transition-colors" />
                  <p className="text-[16px] text-secondary group-hover:text-white/70 leading-relaxed mb-6 max-w-lg transition-colors">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`${TAG_PILL_CLASSES} group-hover:border-white/20 group-hover:text-white/60 transition-colors`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </InsetPanel>
        </div>
      </div>
    </section>
  );
}
