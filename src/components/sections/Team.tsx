"use client";

import Image from "next/image";
import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHead } from "@/components/SectionHead";
import { useReveal } from "@/hooks/useReveal";

const { team } = site;

/**
 * A grade acompanha o número de profissionais e todos os cartões têm o mesmo
 * tamanho. O cartão cresce no hover (classe `team-card`, só transform).
 */
function gridClass(n: number) {
  if (n === 1) return "max-w-sm";
  if (n === 2) return "sm:grid-cols-2";
  if (n === 3) return "sm:grid-cols-3";
  return "sm:grid-cols-2 lg:grid-cols-4";
}

export function Team() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} id="equipe" className="pb-20 pt-24 md:pt-30">
      <Container>
        <SectionHead title={team.title} />
        <ul role="list" className={`grid gap-5 ${gridClass(team.members.length)}`}>
          {team.members.map((m, i) => (
            <li
              key={i}
              data-reveal
              className="team-card overflow-hidden rounded-surface border border-line bg-surface"
            >
              <div className="relative aspect-square bg-bg-2 sm:aspect-[4/5]">
                <Image
                  src="/placeholders/team.svg"
                  alt={m.photoAlt}
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-pill bg-scrim px-3 py-1 text-xs text-surface">
                  {team.photoTag} · {site.labels.example}
                </span>
              </div>
              <div className="px-6 pb-6 pt-5">
                <h3 className="text-h4">{m.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {m.specialty}
                  {i === 0 ? ` · ${team.leadRole}` : ""}
                </p>
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
