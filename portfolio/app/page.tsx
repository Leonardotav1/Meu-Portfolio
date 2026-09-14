import BootScreen from "@/components/BootScreen";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { nav } from "@/lib/data";

export default function Home() {
  return (
    <div>
      <nav className="sticky top-0 z-40 border-b border-phosphor/20 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-1 px-4 py-3">
          <a
            href="#inicio"
            className="glow font-display text-2xl tracking-wide text-phosphor"
          >
            ~/portfolio
          </a>
          <div className="ml-auto flex flex-wrap gap-x-5 text-xs text-foreground/60">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-phosphor"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <BootScreen />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-phosphor/20 py-8">
        <div className="mx-auto max-w-5xl px-4 text-xs text-phosphor-dim">
          <p># EOF — construído com Next.js + TypeScript + Tailwind CSS</p>
          <p>version 1.0 | all_systems_operational</p>
        </div>
      </footer>
    </div>
  );
}