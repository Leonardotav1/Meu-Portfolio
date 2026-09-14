import { Section } from "@/components/Terminal";
import { stacks } from "@/lib/data";

export default function Stack() {
  return (
    <Section id="stacks" index="02" title="MINHA STACK">
      <div className="grid gap-6 md:grid-cols-3">
        {stacks.map((group) => (
          <div
            key={group.group}
            className="border border-phosphor/30 bg-black/40"
          >
            <div className="border-b border-phosphor/30 px-4 py-2 font-display text-2xl tracking-wider text-amber glow-amber">
              {group.group}
            </div>
            <ul className="space-y-2 p-4 text-sm text-foreground/80">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-phosphor-dim">&gt;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}