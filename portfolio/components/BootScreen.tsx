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

const LINE_DELAY = 120;

export default function BootScreen() {
  return (
    <header id="inicio" className="relative flex min-h-[82vh] items-center py-16">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="border border-phosphor/30 bg-black/40">
          <div className="flex items-center gap-2 border-b border-phosphor/30 px-4 py-2 text-xs text-phosphor-dim">
            <span className="h-3 w-3 rounded-full border border-phosphor/40" />
            <span className="h-3 w-3 rounded-full border border-phosphor/40" />
            <span className="h-3 w-3 rounded-full border border-phosphor/40" />
            <span className="ml-3">PORTFOLIO.SYS</span>
            <span className="ml-auto">CRT 1984</span>
          </div>
          <div className="p-6 text-sm sm:p-10 sm:text-base">
            {bootLines.map((line, i) => (
              <p
                key={i}
                className="fade-in whitespace-pre-wrap leading-7"
                style={{ animationDelay: `${i * LINE_DELAY}ms` }}
              >
                {line === "" ? "\u00A0" : line}
              </p>
            ))}
            <p
              className="fade-in leading-7 text-phosphor-dim"
              style={{ animationDelay: `${bootLines.length * LINE_DELAY}ms` }}
            >
              $ <span className="caret text-phosphor" />
            </p>
          </div>
        </div>

        <div
          className="fade-in py-10"
          style={{ animationDelay: `${(bootLines.length + 1) * LINE_DELAY}ms` }}
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
              VER_PROJETOS
            </a>
            <a
              href="#contato"
              className="border border-phosphor/40 px-5 py-2.5 text-foreground transition-colors hover:border-phosphor hover:text-phosphor"
            >
              CONTATO
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