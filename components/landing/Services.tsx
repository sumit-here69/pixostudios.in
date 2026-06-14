"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICES, STUDIO_CAL } from "@/lib/constants";
import { SerifAccent, AccentButton, InsetPanel, Card, TAG_PILL_CLASSES } from "@/components/ui/shared";

function RevealCard({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {children}
    </div>
  );
}

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
                <RevealCard key={i} index={i}>
                  <Card hover className="rounded-[16px] p-8">
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
                </RevealCard>
              ))}
            </div>
          </InsetPanel>
        </div>
      </div>
    </section>
  );
}
