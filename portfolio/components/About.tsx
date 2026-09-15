import Image from "next/image";
import { Section } from "@/components/Terminal";
import { education, profile } from "@/lib/data";
import Foto from "@/public/Images/Foto.jpg"
 
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
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            {profile.photo ? (
              <div className="relative h-36 w-36 shrink-0 border border-phosphor/40 p-1">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="img-placeholder flex h-auto w-36 shrink-0 items-center justify-center border border-phosphor/40 p-1 text-center text-[10px] leading-4 text-phosphor-dim">
                <Image src={Foto} alt="" className="w-36 h-auto" ></Image>
              </div>
            )}

            <div className="font-display text-3xl tracking-wide text-phosphor">
              {profile.name}
              <p className="glow-amber mt-1 text-lg text-amber">
                {profile.role}
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm leading-7 text-foreground/80">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="h-fit border border-phosphor/30 bg-black/40">
            <div className="border-b border-phosphor/30 px-4 py-2 text-xs text-phosphor-dim">
              system.log
            </div>
            <dl className="space-y-2 p-4 text-sm">
              {systemInfo.map((info) => (
                <div key={info.key} className="flex gap-3">
                  <dt className="w-24 shrink-0 text-phosphor-dim">
                    {info.key}
                  </dt>
                  <dd className="text-foreground/80">: {info.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border border-phosphor/30 bg-black/40">
            <div className="border-b border-phosphor/30 px-4 py-2 text-xs text-phosphor-dim">
              education.log
            </div>
            <div className="space-y-3 p-4 text-sm">
              {education.map((edu) => (
                <div key={edu.school} className="flex gap-3">
                  <span className="w-20 shrink-0 text-phosphor-dim">
                    [{edu.period}]
                  </span>
                  <div>
                    <p className="text-foreground/80">{edu.course}</p>
                    <p className="text-xs text-foreground/60">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}