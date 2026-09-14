"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const bootLines = [
  "> PORTFOLIO.SYS v1.0 — BIOS 1984",
  "memoria ............ OK",
  "video .............. CRT 640x480",
  "teclado ............ OK",
  "montando /workspace",
  "",
  "$ whoami",
  `${profile.name} — ${profile.role}`,
];

export default function BootScreen() {
  const [lines, setLines] = useState(0);
  const [chars, setChars] = useState(0);

  const booted = lines >= bootLines.length;

  useEffect(() => {
    if (lines >= bootLines.length) return;
    const current = bootLines[lines] ?? "";
    if (chars < current.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 28);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLines((l) => l + 1);
      setChars(0);
    }, 260);
    return () => clearTimeout(t);
  }, [lines, chars]);

  return (
    <header id="inicio" className="relative flex min-h-[82vh] items-center py-16">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="border border-phosphor/30 bg-black/40">
          <div className="flex items-center gap-2 border-b border-phosphor/30 px-4 py-2 text-xs text-phosphor-dim">
            <span className="h-3 w-3 rounded-full border border-phosphor/40" />
            <span className="h-3 w-3 rounded-full border border-phosphor/40" />
            <span className="h-3 w-3 rounded-full border border-phosphor/40" />
            <span className="ml-3">PORTFOLIO.SYS</span>
            <span className="ml-auto">CRT 1984</span>
          </div>
          <div className="p-6 text-sm sm:p-10 sm:text-base">
            {bootLines.slice(0, lines).map((line, i) => (
              <p key={i} className="whitespace-pre-wrap leading-7">
                {line === "" ? "\u00A0" : line}
              </p>
            ))}
            {booted ? (
              <p className="leading-7 text-phosphor-dim">
                $ <span className="caret text-phosphor" />
              </p>
            ) : (
              <p className="whitespace-pre-wrap leading-7">
                {bootLines[lines]?.slice(0, chars)}
                <span className="caret" />
              </p>
            )}
          </div>
        </div>

        <div
          className={`py-10 transition-opacity duration-700 ${
            booted ? "fade-in opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="glow font-display text-6xl tracking-wide text-phosphor sm:text-8xl">
            {profile.name}
          </h1>
          <p className="glow-amber mt-2 font-display text-3xl tracking-widest text-amber sm:text-4xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-foreground/70">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <a
              href="#projetos"
              className="border border-phosphor px-5 py-2.5 text-phosphor transition-colors hover:bg-phosphor hover:text-black"
            >
              ver_projetos
            </a>
            <a
              href="#contato"
              className="border border-phosphor/40 px-5 py-2.5 text-foreground transition-colors hover:border-phosphor hover:text-phosphor"
            >
              contato
            </a>
          </div>

          <p className="mt-10 text-xs text-phosphor-dim">
            status: {profile.status} | local: {profile.location}
          </p>
        </div>
      </div>
    </header>
  );
}