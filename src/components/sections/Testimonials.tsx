"use client";

import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { SectionHead } from "@/components/SectionHead";
import { useReveal } from "@/hooks/useReveal";

const { testimonials } = site;

/**
 * Depoimentos reais exigem autorização escrita e conferência das regras de
 * publicidade do conselho de odontologia. Os atuais são de exemplo.
 * O primeiro ganha destaque por escolha editorial, não por ser "o melhor".
 */
export function Testimonials() {
  const root = useReveal<HTMLElement>();
  const [first, ...others] = testimonials.items;

  return (
    <section ref={root} className="pb-24 pt-12 md:pb-30">
      <Container>
        <SectionHead title={testimonials.title} />
        <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <figure data-reveal className="m-0">
            <blockquote className="m-0 max-w-[22ch] font-serif text-quote-lg leading-[1.18]">
              “{first.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted">
              {first.author} · {testimonials.exampleLabel}
            </figcaption>
          </figure>

          <ul role="list" className="border-b border-line-strong">
            {others.map((t, i) => (
              <li
                key={i}
                data-reveal
                className="border-t border-line-strong py-7"
              >
                <figure className="m-0">
                  <blockquote className="m-0 font-serif text-quote leading-[1.3]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-3.5 text-sm text-muted">
                    {t.author} · {testimonials.exampleLabel}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
