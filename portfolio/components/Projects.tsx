"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/Terminal";
import { projects } from "@/lib/data";

const categories = [
  "TODOS",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export default function Projects() {
  const [category, setCategory] = useState("TODOS");

  const filtered =
    category === "TODOS"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <Section id="projetos" index="03" title="MEUS PROJETOS">
      <div className="mb-8 flex flex-wrap gap-3 text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={category === cat}
            onClick={() => setCategory(cat)}
            className={`border px-4 py-1.5 transition-colors ${
              category === cat
                ? "border-phosphor bg-phosphor text-black"
                : "border-phosphor/30 text-foreground/70 hover:border-phosphor hover:text-phosphor"
            }`}
          >
            [ {cat} ]
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.name}
            className="flex flex-col border border-phosphor/30 bg-black/40 transition-colors hover:border-phosphor/70"
          >
            {project.video ? (
              <div className="relative aspect-video border-b border-phosphor/30">
                <video
                  src={project.video}
                  controls
                  preload="metadata"
                  playsInline
                  className="h-full w-full bg-black object-contain"
                />
                <span className="absolute left-2 top-2 border border-amber/60 bg-black/70 px-2 py-0.5 text-[10px] text-amber">
                  [ VIDEO ]
                </span>
              </div>
            ) : project.image ? (
              <div className="relative aspect-video border-b border-phosphor/30">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="img-placeholder flex aspect-video items-center justify-center border-b border-phosphor/30 text-[10px] text-phosphor-dim">
                [ SINAL AUSENTE ]
              </div>
            )}

            <div className="flex items-center justify-between border-b border-phosphor/30 px-4 py-2">
              <h3 className="font-display text-2xl tracking-wide text-phosphor">
                {project.name}
              </h3>
              {project.year && (
                <span className="text-xs text-phosphor-dim">{project.year}</span>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-4 p-4">
              <p className="text-sm leading-6 text-foreground/70">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 text-xs">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-phosphor/25 px-2 py-1 text-phosphor/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex gap-4 text-xs">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber hover:underline"
                  >
                    [demo]
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-phosphor hover:underline"
                  >
                    [repo]
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-phosphor-dim">
          NENHUM PROJETO NESTE CATÁLOGO
        </p>
      )}
    </Section>
  );
}