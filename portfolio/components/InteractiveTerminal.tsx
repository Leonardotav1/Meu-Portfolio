"use client";

import { useEffect, useRef, useState } from "react";
import { profile, projects, stacks, socials } from "@/lib/data";

type Line = { id: number; kind: "in" | "out"; text: string };

let nextId = 1;

const initialLines: Line[] = [
  { id: nextId++, kind: "out", text: "PORTFOLIO.SYS — terminal interativo" },
  {
    id: nextId++,
    kind: "out",
    text: "comandos: whoami | projetos | stack | contato | local | status | date | clear",
  },
];

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<Line[]>(initialLines);
  const [input, setInput] = useState("");
  const [ready, setReady] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = outputRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const print = (kind: Line["kind"], text: string) => {
    setLines((prev) => [...prev, { id: nextId++, kind, text }]);
  };

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    print("in", `$ ${raw}`);

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    const output: string[] = [];
    if (cmd === "" || cmd === "help") {
      output.push(
        "comandos: whoami | projetos | stack | contato | local | status | date | clear"
      );
    } else if (cmd === "whoami") {
      output.push(`${profile.name} — ${profile.role}`);
    } else if (cmd === "projetos") {
      projects.forEach((p) => output.push(`* ${p.name}`));
    } else if (cmd === "stack") {
      stacks.forEach((g) =>
        output.push(`${g.group}: ${g.items.join(", ")}`)
      );
    } else if (cmd === "contato" || cmd === "contact") {
      output.push(`email: ${profile.email}`);
      socials.forEach((s) => output.push(`${s.label}: ${s.url}`));
    } else if (cmd === "local") {
      output.push(profile.location);
    } else if (cmd === "status") {
      output.push(profile.status);
    } else if (cmd === "date") {
      output.push(new Date().toLocaleString("pt-BR"));
    } else {
      output.push(`comando não encontrado: ${raw.trim()}`);
      output.push("digite help para listar os comandos");
    }

    output.forEach((text) => print("out", text));
  };

  const submit = () => {
    run(input);
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <div
      className="flex flex-col border border-phosphor/30 bg-black/40"
      onClick={() => inputRef.current?.focus()}
      onKeyDownCapture={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          submit();
        }
      }}
    >
      <div className="flex items-center gap-2 border-b border-phosphor/30 px-4 py-2 text-xs text-phosphor-dim">
        <span className="h-3 w-3 rounded-full border border-phosphor/40" />
        <span className="h-3 w-3 rounded-full border border-phosphor/40" />
        <span className="h-3 w-3 rounded-full border border-phosphor/40" />
        <span className="ml-3">ITERM — TENTE DIGITAR</span>
        <span className="ml-auto">
          {ready ? (
            <span className="text-phosphor">REACT.JS CONECTADO</span>
          ) : (
            <span className="animate-pulse text-phosphor-dim">conectando...</span>
          )}
        </span>
      </div>

      <div
        ref={outputRef}
        className="h-56 space-y-1 overflow-y-auto p-4 text-sm"
        aria-live="polite"
      >
        {lines.map((line) => (
          <p
            key={line.id}
            className={
              line.kind === "in"
                ? "whitespace-pre-wrap text-phosphor"
                : "whitespace-pre-wrap text-foreground/70"
            }
          >
            {line.text}
          </p>
        ))}

        <div className="flex items-center gap-2">
          <span className="text-phosphor">$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            aria-label="digite um comando"
            className="w-full flex-1 bg-transparent text-phosphor caret-phosphor outline-none placeholder:text-phosphor-dim"
            placeholder="digite help"
          />
          <button
            type="button"
            onClick={submit}
            className="shrink-0 border border-phosphor/40 px-3 py-1 text-xs text-phosphor transition-colors hover:bg-phosphor hover:text-black"
          >
            [ ENTER ]
          </button>
        </div>
      </div>
    </div>
  );
}