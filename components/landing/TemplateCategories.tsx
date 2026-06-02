"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function TemplateCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="templates" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
              Templates
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-primary mb-4">
              Made for every type of business
            </h2>
            <p className="text-lg text-secondary max-w-2xl">
              Category-specific templates designed for Indian businesses.
              Not generic — built for your industry.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface hover:bg-muted transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-secondary" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-surface hover:bg-muted transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-secondary" />
            </button>
          </div>
        </AnimatedSection>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="group flex-none w-[280px] sm:w-[320px] snap-start cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white mb-2">
                    From {cat.from}/mo
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-white/70 mt-0.5">
                    {cat.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
