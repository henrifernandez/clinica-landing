"use client";

import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHead } from "@/components/SectionHead";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { useReveal } from "@/hooks/useReveal";

const { treatments } = site;

/**
 * Estrutura de tabela numerada da direção D, com os tokens da E.
 * O hover (preenchimento, deslocamento e seta) vive em globals.css (.tr).
 */
export function Treatments() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} id="tratamentos" className="pb-24 pt-24 md:pt-36">
      <Container>
        <SectionHead title={treatments.title}>{treatments.intro}</SectionHead>

        <ul
          role="list"
          data-reveal
          className="overflow-hidden rounded-surface border border-line bg-surface"
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
                  <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
                  </svg>
                </span>
              </WhatsAppLink>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-4 space-y-1 text-xs text-muted">
          <p className="flex items-center gap-2">
            <i className="inline-block h-1.5 w-1.5 rounded-full bg-brass" aria-hidden="true" />
            {treatments.legend}
          </p>
          <p>{treatments.durationNote}</p>
        </div>
      </Container>
    </section>
  );
}
