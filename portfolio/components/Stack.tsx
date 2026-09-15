import { Section } from "@/components/Terminal";
import { stacks } from "@/lib/data";

const totalItems = stacks.reduce((total, group) => total + group.items.length, 0);

export default function Stack() {
  return (
    <Section id="stacks" index="02" title="MINHA STACK">
      <p className="mb-8 text-sm text-foreground/70">
        $ cat ./skills.txt{" "}
        <span className="text-phosphor-dim">
          {"// "}módulos carregados abaixo
        </span>
      </p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stacks.map((group) => (
          <div
            key={group.group}
            className="flex flex-col border border-phosphor/30 bg-black/40 transition-colors hover:border-phosphor/60"
          >
            <div className="flex items-center justify-between border-b border-phosphor/30 px-4 py-2">
              <h3 className="font-display text-2xl tracking-wider text-amber glow-amber">
                {group.group}
              </h3>
              <span className="text-[10px] text-phosphor-dim">
                [{group.items.length}]
              </span>
            </div>
            <ul className="flex-1 space-y-2 p-4 text-sm text-foreground/80">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="group flex items-baseline gap-2 transition-colors hover:text-phosphor-bright"
                >
                  <span className="transition-transform duration-150 group-hover:translate-x-1 text-phosphor-dim">
                    &gt;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-phosphor-dim">
        TOTAL: {totalItems} SKILLS DETECTADAS <span className="caret text-phosphor" />
      </p>
    </Section>
  );
}