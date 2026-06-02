import { Check, X as XIcon, Minus } from "lucide-react";
import { COMPARISON } from "@/lib/constants";
import { AnimatedSection, TextReveal } from "@/components/ui/AnimatedSection";

export default function Comparison() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Compare
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-primary mb-4">
            <TextReveal text="Why us over the alternatives?" />
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="overflow-x-auto rounded-3xl bg-surface">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border/40">
                  {COMPARISON.headers.map((header, i) => (
                    <th
                      key={header || "label"}
                      className={`px-6 py-4 text-sm font-semibold ${
                        i === 0
                          ? "text-secondary w-48"
                          : i === 1
                          ? "text-accent"
                          : "text-secondary"
                      }`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.rows.map((row, rowIdx) => (
                  <tr
                    key={row.label}
                    className={rowIdx < COMPARISON.rows.length - 1 ? "border-b border-border/30" : ""}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-primary">
                      {row.label}
                    </td>
                    {row.values.map((val, colIdx) => (
                      <td
                        key={val}
                        className={`px-6 py-4 text-sm ${
                          colIdx === 0 ? "text-primary font-medium" : "text-secondary"
                        }`}
                      >
                        {colIdx === 0 && (
                          <span className="inline-flex items-center gap-1.5">
                            <Check size={15} className="text-success flex-shrink-0" />
                            {val}
                          </span>
                        )}
                        {colIdx === 1 && (
                          <span className="inline-flex items-center gap-1.5">
                            <Minus size={15} className="text-tertiary flex-shrink-0" />
                            {val}
                          </span>
                        )}
                        {colIdx === 2 && (
                          <span className="inline-flex items-center gap-1.5">
                            <XIcon size={15} className="text-red-400 flex-shrink-0" />
                            {val}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
