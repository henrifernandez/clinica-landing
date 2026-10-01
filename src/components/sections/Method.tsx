"use client";

import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHead } from "@/components/SectionHead";
import { useReveal } from "@/hooks/useReveal";

const { method } = site;

export function Method() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} id="metodo" className="py-20 md:py-30">
      <Container>
        <SectionHead
          eyebrow={method.eyebrow}
          title={method.title}
          emphasis={method.titleEmphasis}
        />
        <ol
          role="list"
          className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {method.steps.map((s, i) => (
            <li key={s.title} data-reveal className="border-t border-line pt-6">
              <span className="font-serif text-lg text-sage-text" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="my-2 text-h4">{s.title}</h3>
              <p className="max-w-[34ch] text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
