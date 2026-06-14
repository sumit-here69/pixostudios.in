"use client";

import { useRef } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import { SectionHeader, InsetPanel, NavArrows, AccentButton } from "@/components/ui/shared";

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("[data-card]") as HTMLElement;
    const amount = card ? card.offsetWidth + 16 : 600;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          badge="Featured Projects"
          heading="Refined projects with purpose"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <InsetPanel>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                data-card
                className="min-w-[85%] sm:min-w-[75%] lg:min-w-[90%] shrink-0 snap-center bg-white rounded-[16px] shadow-[inset_0_1px_1px_rgba(6,6,18,0.18)] overflow-hidden"
                style={{ height: "420px" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="p-8 lg:p-10 flex flex-col justify-center h-full overflow-hidden">
                    <h3 className="text-[26px] font-bold text-primary mb-3">
                      {project.name}
                    </h3>
                    <p className="text-[14px] text-secondary mb-1">
                      Industry: <span className="font-medium text-primary">{project.industry}</span>
                    </p>
                    <p className="text-[14px] text-secondary mb-5">
                      Scope: <span className="font-medium text-primary">{project.scope}</span>
                    </p>
                    <div className="border-t border-dashed border-border my-4" />
                    <p className="text-[15px] text-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <AccentButton href="#contact" className="w-fit">
                      View project detail
                    </AccentButton>
                  </div>

                  <div className="relative hidden md:block">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InsetPanel>

        <NavArrows
          onPrev={() => scroll("left")}
          onNext={() => scroll("right")}
          className="mt-5"
        />
      </div>
    </section>
  );
}
