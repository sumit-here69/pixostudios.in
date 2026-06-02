import { FEATURES } from "@/lib/constants";
import { AnimatedSection, TextReveal, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-accent-light/50 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-primary mb-4">
            <TextReveal text="Everything included." />
            <br />
            <TextReveal text="Nothing to worry about." delay={0.2} />
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            From domain to design to hosting — your monthly subscription covers it all.
            No hidden costs, no surprise charges.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[140px] lg:auto-rows-[160px]">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "lg";

            return (
              <StaggerItem
                key={feature.title}
                className={
                  isLarge
                    ? "col-span-2 row-span-1"
                    : "col-span-1 row-span-1"
                }
              >
                <div
                  className={`h-full rounded-3xl p-6 flex flex-col justify-between transition-colors ${
                    isLarge
                      ? "bg-primary text-white"
                      : "bg-surface"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                      isLarge
                        ? "bg-white/15"
                        : "bg-accent-light text-accent"
                    }`}
                  >
                    <Icon size={20} className={isLarge ? "text-white" : ""} />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold mb-1 ${
                        isLarge ? "text-lg text-white" : "text-sm text-primary"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`leading-relaxed ${
                        isLarge
                          ? "text-sm text-white/70"
                          : "text-xs text-secondary"
                      }`}
                    >
                      {feature.description}
                    </p>
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
