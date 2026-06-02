import { AnimatedSection } from "@/components/ui/AnimatedSection";

const STATS = [
  { value: "63M+", label: "Indian SMBs without websites" },
  { value: "₹999", label: "Starting price per month" },
  { value: "48hrs", label: "Average setup time" },
  { value: "99.9%", label: "Uptime guaranteed" },
];

export default function SocialProof() {
  return (
    <section className="py-16 lg:py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${
                  i < STATS.length - 1 ? "md:border-r md:border-border/50" : ""
                }`}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
