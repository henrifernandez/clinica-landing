"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { useReveal } from "@/hooks/useReveal";

const { stats } = site;

function format(value: number, decimals = 0) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function Stats() {
  const root = useReveal<HTMLElement>();
  const grid = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = grid.current;
    if (!list) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Com movimento reduzido o valor final já está no HTML.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const nodes = gsap.utils.toArray<HTMLElement>("[data-count]", list);
        const values = nodes.map((n) => ({
          el: n,
          to: Number(n.dataset.count),
          decimals: Number(n.dataset.decimals ?? 0),
          suffix: n.dataset.suffix ?? "",
        }));

        values.forEach((v) => (v.el.textContent = format(0, v.decimals) + v.suffix));

        ScrollTrigger.create({
          trigger: list,
          // dispara quando 60% da altura do bloco está visível
          start: () => `top ${window.innerHeight - list.offsetHeight * 0.6}px`,
          once: true,
          invalidateOnRefresh: true,
          onEnter: () => {
            values.forEach((v) => {
              const state = { n: 0 };
              gsap.to(state, {
                n: v.to,
                duration: 1.7,
                ease: "expo.out",
                onUpdate: () => {
                  v.el.textContent = format(state.n, v.decimals) + v.suffix;
                },
              });
            });
          },
        });

        // Ao reverter (movimento reduzido), devolve o valor final ao texto.
        return () =>
          values.forEach((v) => {
            v.el.textContent = format(v.to, v.decimals) + v.suffix;
          });
      });
    }, list);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      aria-label="Números da clínica"
      className="border-y border-line py-12 md:py-16"
    >
      <Container>
        <ul
          ref={grid}
          role="list"
          data-reveal
          className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4"
        >
          {stats.items.map((s) => {
            const decimals = "decimals" in s ? s.decimals : 0;
            const suffix = "suffix" in s ? s.suffix : "";
            return (
              <li key={s.label}>
                <span
                  data-count={s.value}
                  data-decimals={decimals}
                  data-suffix={suffix}
                  className="block font-serif text-stat font-light leading-none tabular-nums text-ink"
                >
                  {format(s.value, decimals)}
                  {suffix}
                </span>
                <span className="mt-2 block text-sm text-muted">{s.label}</span>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-xs text-muted">{stats.note}</p>
      </Container>
    </section>
  );
}
