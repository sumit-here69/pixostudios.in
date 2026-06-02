import Image from "next/image";
import { MessageCircle, Paintbrush, Globe } from "lucide-react";
import { STEPS } from "@/lib/constants";
import { AnimatedSection, TextReveal, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

const ICONS = [MessageCircle, Paintbrush, Globe];
const STEP_IMAGES = [
  "/images/steps/step-01.png",
  "/images/steps/step-02.png",
  "/images/steps/step-03.png",
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-primary">
            <TextReveal text="Three steps. That's it." />
          </h2>
        </AnimatedSection>

        <StaggerContainer className="space-y-0">
          {STEPS.map((step, i) => {
            const Icon = ICONS[i];
            const isEven = i % 2 === 1;

            return (
              <StaggerItem key={step.number}>
                <div className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 ${isEven ? "md:flex-row-reverse" : ""} ${i < STEPS.length - 1 ? "mb-20 lg:mb-28" : ""}`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white">
                        <Icon size={24} />
                      </div>
                      <span className="text-7xl font-serif text-border/70">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-secondary leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="relative aspect-4/3 rounded-3xl overflow-hidden">
                      <Image
                        src={STEP_IMAGES[i]}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
