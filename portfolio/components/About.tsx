import { Section } from "@/components/Terminal";
import { profile } from "@/lib/data";

const systemInfo = [
  { key: "hostname", value: "portfolio" },
  { key: "role", value: profile.role },
  { key: "location", value: profile.location },
  { key: "email", value: profile.email },
  { key: "status", value: profile.status },
];

export default function About() {
  return (
    <Section id="sobre" index="01" title="SOBRE MIM">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-sm leading-7 text-foreground/80">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="h-fit border border-phosphor/30 bg-black/40">
          <div className="border-b border-phosphor/30 px-4 py-2 text-xs text-phosphor-dim">
            system.log
          </div>
          <dl className="space-y-2 p-4 text-sm">
            {systemInfo.map((info) => (
              <div key={info.key} className="flex gap-3">
                <dt className="w-24 shrink-0 text-phosphor-dim">{info.key}</dt>
                <dd className="text-foreground/80">
                  : {info.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}