"use client";

import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { CopyNumber } from "@/components/CopyNumber";
import { useReveal } from "@/hooks/useReveal";

const { cta } = site;

export function FinalCta() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} id="contato" className="pb-20 pt-10 md:pb-30">
      <Container>
        <div
          data-reveal
          className="on-dark rounded-xl bg-accent p-[clamp(2rem,1rem+6vw,6rem)] text-center text-on-accent"
        >
          <h2 className="mb-5 text-cta">
            {cta.title} <em className="text-accent-soft">{cta.titleEmphasis}</em>
          </h2>
          <p className="mx-auto mb-10 max-w-[46ch] text-on-accent-muted">
            {cta.text}
          </p>
          <WhatsAppLink source="fechamento" className="btn btn-light">
            {cta.button}
          </WhatsAppLink>
          <CopyNumber source="fechamento" />
        </div>
      </Container>
    </section>
  );
}
