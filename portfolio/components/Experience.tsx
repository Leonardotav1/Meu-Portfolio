import { Section } from "@/components/Terminal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experiencias" index="04" title="EXPERIÊNCIAS">
      <div className="divide-y divide-phosphor/20 border border-phosphor/30 bg-black/40">
        {experiences.map((experience) => (
          <div key={`${experience.company}-${experience.period}`} className="p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-display text-2xl tracking-wide text-phosphor">
                  {experience.role}
                </h3>
                <p className="text-sm text-amber glow-amber">
                  {experience.company}
                </p>
              </div>
              <span className="text-xs text-phosphor-dim">
                [{experience.period}]
              </span>
            </div>

            <ul className="mt-3 space-y-1.5 text-sm text-foreground/70">
              {experience.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-phosphor-dim">-</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}