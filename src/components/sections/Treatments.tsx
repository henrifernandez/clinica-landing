"use client";

import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHead } from "@/components/SectionHead";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { useReveal } from "@/hooks/useReveal";

const { treatments } = site;

/**
 * Direção D: estrutura de tabela da C, tokens da B.
 * O hover (preenchimento, deslocamento e seta) vive em globals.css (.tr).
 */
export function Treatments() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} id="tratamentos" className="py-20 md:py-30">
      <Container>
        <SectionHead
          eyebrow={treatments.eyebrow}
          title={treatments.title}
          emphasis={treatments.titleEmphasis}
        >
          {treatments.intro}
        </SectionHead>

        <ul
          role="list"
          data-reveal
          className="overflow-hidden rounded-lg border border-line bg-surface"
        >
          {treatments.items.map((t, i) => (
            <li key={t.slug} className="border-b border-line last:border-b-0">
              <WhatsAppLink
                source="tratamento"
                treatment={t.slug}
                message={t.whatsappMessage}
                ariaLabel={`${treatments.cta} sobre ${t.name} pelo WhatsApp`}
                className="tr"
              >
                <span className={`tr-n ${t.complex ? "tr-main" : ""}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="tr-title">{t.name}</h3>
                <p className="tr-text">{t.summary}</p>
                <span className="tr-time">{t.duration}</span>
                <span aria-hidden="true" className="tr-arrow">
                  ↗
                </span>
              </WhatsAppLink>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-4 space-y-1 text-xs text-muted">
          <p className="flex items-center gap-2">
            <i className="inline-block h-1.5 w-1.5 rounded-full bg-clay" aria-hidden="true" />
            {treatments.legend}
          </p>
          <p>{treatments.durationNote}</p>
        </div>
      </Container>
    </section>
  );
}
