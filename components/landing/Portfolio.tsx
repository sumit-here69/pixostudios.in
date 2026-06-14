"use client";

import { useRef } from "react";
import { PROJECTS, STUDIO_CAL } from "@/lib/constants";
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
                className="w-full shrink-0 snap-center bg-white rounded-[16px] overflow-hidden"
                style={{ maxHeight: "560px" }}
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-1/3 p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                    <div>
                      <h3 className="text-[36px] font-bold text-primary mb-3">
                        {project.name}
                      </h3>
                      <p className="text-[16px] text-secondary mb-2">
                        Industry: <span className="font-medium text-primary">{project.industry}</span>
                      </p>
                    </div>
                    <div>
                      <div className="border-t border-dashed border-border my-4" />
                      <p className="text-[15px] md:text-[17px] text-secondary leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <AccentButton href={project.link && project.link !== "#" ? project.link : STUDIO_CAL} external className="w-fit">
                        {project.link && project.link !== "#" ? "View live site" : "View project detail"}
                      </AccentButton>
                    </div>
                  </div>

                  <div className="w-full md:w-2/3 p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full rounded-lg object-cover"
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
