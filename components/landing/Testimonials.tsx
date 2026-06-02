import Image from "next/image";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <Image
        src="/images/testimonials-bg.png"
        alt=""
        fill
        className="object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-linear-to-b from-bg via-bg/80 to-bg" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-primary">
            Trusted by businesses across India
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <div className="flex flex-col h-full p-7 rounded-3xl bg-white/80 backdrop-blur-sm transition-all">
                <Quote size={24} className="text-accent/30 mb-4" />
                <p className="flex-1 text-secondary leading-relaxed mb-6 text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-tertiary">
                    {t.role} — {t.city}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
