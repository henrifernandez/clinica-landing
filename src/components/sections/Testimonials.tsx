"use client";

import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHead } from "@/components/SectionHead";
import { useReveal } from "@/hooks/useReveal";

const { testimonials } = site;

/** Depoimentos reais exigem autorização escrita. Os atuais são de exemplo. */
export function Testimonials() {
  const root = useReveal<HTMLElement>();

  return (
    <section ref={root} className="bg-surface py-20 md:py-30">
      <Container>
        <SectionHead
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          emphasis={testimonials.titleEmphasis}
        />
        <ul role="list" className="grid gap-5 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <li key={i} data-reveal>
              <figure className="m-0 h-full rounded-md border border-line bg-bg p-8">
                <blockquote className="m-0 mb-5 font-serif text-quote font-light leading-[1.35]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="text-sm text-muted">
                  {t.author} · {testimonials.exampleLabel}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
