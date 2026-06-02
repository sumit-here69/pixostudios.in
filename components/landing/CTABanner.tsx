import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <Image
        src="/images/cta-bg.png"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-accent/90 via-accent/85 to-blue-700/90" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6">
            Ready to take your
            <br />
            business online?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Join hundreds of Indian businesses already growing with a professional website.
            Get started in under 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-accent hover:bg-white/90 transition-colors"
            >
              Get Started — ₹999/month
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-8 text-base font-semibold text-white hover:bg-white/25 transition-colors"
            >
              <Phone size={16} />
              Talk to Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
