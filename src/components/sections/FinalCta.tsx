"use client";

import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { CopyNumber } from "@/components/CopyNumber";
import { useReveal } from "@/hooks/useReveal";

const { cta } = site;

/** Faixa de largura total: título à esquerda, ação à direita. */
export function FinalCta() {
  const root = useReveal<HTMLElement>();

  return (
    <section
      ref={root}
      id="contato"
      className="on-dark bg-accent pb-20 pt-24 text-on-accent md:pb-24 md:pt-28"
    >
      <Container className="grid items-end gap-10 lg:grid-cols-[7fr_5fr] lg:gap-[4.5rem]">
        <h2 data-reveal className="text-cta text-on-accent">
          {cta.title}
        </h2>
        <div data-reveal>
          <p className="mb-8 max-w-[40ch] text-on-accent-muted">{cta.text}</p>
          <WhatsAppLink source="fechamento" className="btn btn-light btn-lg">
            {cta.button}
          </WhatsAppLink>
          <CopyNumber source="fechamento" />
        </div>
      </Container>
    </section>
  );
}
