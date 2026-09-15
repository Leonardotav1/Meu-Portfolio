import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-center gap-3">
          <span className="text-phosphor-dim">{"//"}</span>
          <span className="text-phosphor-dim">{index}</span>
          <h2 className="glow font-display text-4xl tracking-wider text-phosphor">
            {title}
          </h2>
          <span className="h-px flex-1 bg-phosphor/20" />
        </div>
        {children}
      </div>
    </section>
  );
}