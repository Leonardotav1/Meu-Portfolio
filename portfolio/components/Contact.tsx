import { Section } from "@/components/Terminal";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import { profile, socials } from "@/lib/data";

export default function Contact() {
  return (
    <Section id="contato" index="05" title="CONTATO">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="border border-phosphor/30 bg-black/40 p-5">
          <p className="text-sm leading-7 text-phosphor-dim">
            $
            <span className="text-foreground/80">
              {" "}
              echo &quot;fale comigo&quot; &gt;&gt; {profile.email}
            </span>
          </p>
          <p className="mt-1 text-sm leading-7 text-foreground/80">
            Vamos conversar sobre projetos, vagas ou apenas trocar uma ideia.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="border border-phosphor px-5 py-2.5 text-phosphor transition-colors hover:bg-phosphor hover:text-black"
            >
              enviar_email
            </a>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-phosphor/40 px-5 py-2.5 text-foreground transition-colors hover:border-phosphor hover:text-phosphor"
              >
                {social.label}
              </a>
            ))}
          </div>

          <p className="mt-6 text-xs text-phosphor-dim">
            local: {profile.location} | status: {profile.status}
          </p>
        </div>

        <InteractiveTerminal />
      </div>
    </Section>
  );
}