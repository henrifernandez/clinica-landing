"use client";

import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHead } from "@/components/SectionHead";
import { useReveal } from "@/hooks/useReveal";

const { team } = site;

export function Team() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} id="equipe" className="py-20 md:py-30">
      <Container>
        <SectionHead
          eyebrow={team.eyebrow}
          title={team.title}
          emphasis={team.titleEmphasis}
        />
        <ul role="list" className="grid gap-5 sm:grid-cols-3">
          {team.members.map((m, i) => (
            <li
              key={i}
              data-reveal
              className="overflow-hidden rounded-lg border border-line bg-surface"
            >
              <div className="relative aspect-[4/5] bg-accent-soft">
                <Image
                  src="/placeholders/team.svg"
                  alt={m.photoAlt}
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-pill bg-ink/70 px-3 py-1 text-xs text-surface">
                  {team.photoTag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-h4">{m.name}</h3>
                <p className="mt-1 text-sm text-muted">{m.specialty}</p>
                <p className="text-xs text-muted">{m.cro}</p>
              </div>
            </li>
          ))}
        </ul>
        <p data-reveal className="mt-6 text-xs text-muted">
          {team.note}
        </p>
      </Container>
    </section>
  );
}
