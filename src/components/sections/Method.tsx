"use client";

import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHead } from "@/components/SectionHead";
import { useReveal } from "@/hooks/useReveal";

const { method } = site;

/** Única sequência real da página, por isso é o único lugar com números de ordem. */
export function Method() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} id="metodo" className="pb-24 pt-6 md:pb-30">
      <Container>
        <SectionHead title={method.title} />
        <ol
          role="list"
          className="grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {method.steps.map((s, i) => (
            <li key={s.title} data-reveal className="border-t border-ink pt-6">
              <span
                className="font-serif text-lg tabular-nums text-muted"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="my-2.5 text-h4">{s.title}</h3>
              <p className="max-w-[30ch] text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
