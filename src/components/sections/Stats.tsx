"use client";

import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { useReveal } from "@/hooks/useReveal";

const { stats } = site;

/** Números estáticos, sem contagem animada. Todos de exemplo até o cliente confirmar. */
export function Stats() {
  const root = useReveal<HTMLElement>();

  return (
    <section
      ref={root}
      aria-label="Números da clínica"
      className="border-y border-line pb-10 pt-14"
    >
      <Container>
        <ul
          role="list"
          data-reveal
          className="grid grid-cols-2 gap-y-10 sm:grid-cols-3"
        >
          {stats.items.map((s, i) => {
            const suffix = "suffix" in s ? s.suffix : "";
            return (
              <li
                key={s.label}
                className={
                  (i > 0 ? "sm:border-l sm:border-line sm:pl-7 " : "") +
                  (i % 2 === 1 ? "max-sm:border-l max-sm:border-line max-sm:pl-6" : "")
                }
              >
                <span className="block font-serif text-stat leading-none tabular-nums text-ink">
                  {s.value.toLocaleString("pt-BR")}
                  {suffix}
                </span>
                <span className="mt-2.5 block text-sm text-muted">{s.label}</span>
              </li>
            );
          })}
        </ul>
        <p className="mt-9 text-xs text-muted">{stats.note}</p>
      </Container>
    </section>
  );
}
