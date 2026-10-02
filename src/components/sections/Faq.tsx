"use client";

import { useId, useState } from "react";
import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHead } from "@/components/SectionHead";
import { useReveal } from "@/hooks/useReveal";

const { faq } = site;

export function Faq() {
  const root = useReveal<HTMLElement>();
  const base = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section ref={root} id="perguntas" className="bg-bg-2 py-24 md:py-30">
      <Container className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <SectionHead title={faq.title} className="mb-0" />

        <div data-reveal className="border-t border-line-strong">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const buttonId = `${base}-b${i}`;
            const panelId = `${base}-p${i}`;
            return (
              <div key={item.question} className="border-b border-line-strong">
                <h3 className="font-sans text-base font-medium leading-normal tracking-normal">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-[3.75rem] w-full items-center justify-between gap-4 py-4 text-left"
                  >
                    {item.question}
                    <span aria-hidden="true" className="faq-icon">
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  data-open={isOpen}
                  className="faq-panel"
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[56ch] pb-5 text-sm text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
