"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { useReveal } from "@/hooks/useReveal";

const { results } = site;
const STEP = 5;

const clamp = (n: number) => Math.max(0, Math.min(100, n));

/**
 * Comparativo antes e depois.
 * ATENÇÃO: as imagens atuais são placeholders. Fotos reais de pacientes só
 * entram com autorização escrita e conferência das regras de publicidade
 * do conselho de odontologia (revisar com o cliente).
 *
 * A posição move camadas com transform (sem clip-path animado):
 * a camada "depois" desliza para a direita e a imagem interna volta o mesmo tanto.
 */
export function Results() {
  const root = useReveal<HTMLElement>();
  const box = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const moveTo = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r || !r.width) return;
    setPos(clamp(((clientX - r.left) / r.width) * 100));
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    moveTo(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) moveTo(e.clientX);
  };
  const stopDrag = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = {
      ArrowLeft: pos - STEP,
      ArrowDown: pos - STEP,
      ArrowRight: pos + STEP,
      ArrowUp: pos + STEP,
      Home: 0,
      End: 100,
    };
    if (e.key in keys) {
      e.preventDefault();
      setPos(clamp(keys[e.key]));
    }
  };

  return (
    <section ref={root} id="resultados" className="bg-bg-2 py-24 md:py-30">
      <Container className="grid items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div data-reveal>
          <h2 className="text-h2">{results.title}</h2>
          <p className="mt-5 max-w-[40ch] text-muted">{results.text}</p>
        </div>

        <figure data-reveal className="m-0">
          <div
            ref={box}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={stopDrag}
            onPointerCancel={stopDrag}
            className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden rounded-photo"
            style={{ touchAction: "pan-y" }}
          >
            {/* antes (base) */}
            <Image
              src="/placeholders/antes.svg"
              alt="Exemplo de situação inicial, imagem ilustrativa sem paciente real"
              width={800}
              height={600}
              draggable={false}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
            <span className="pointer-events-none absolute bottom-4 left-4 rounded-pill bg-scrim px-3 py-1 text-xs text-surface">
              {results.beforeLabel} · {results.exampleLabel}
            </span>

            {/* depois (desliza com transform) */}
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden"
              style={{ transform: `translateX(${pos}%)` }}
            >
              <div
                className="absolute inset-0"
                style={{ transform: `translateX(${-pos}%)` }}
              >
                <Image
                  src="/placeholders/depois.svg"
                  alt="Exemplo de resultado, imagem ilustrativa sem paciente real"
                  width={800}
                  height={600}
                  draggable={false}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-4 right-4 rounded-pill bg-scrim px-3 py-1 text-xs text-surface">
                  {results.afterLabel} · {results.exampleLabel}
                </span>
              </div>
            </div>

            {/* alça: elemento focável do slider */}
            <div
              role="slider"
              tabIndex={0}
              aria-label={results.sliderLabel}
              aria-orientation="horizontal"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              aria-valuetext={`Divisão em ${Math.round(pos)}%`}
              onKeyDown={onKeyDown}
              className="absolute inset-y-0 w-12 -translate-x-1/2 outline-offset-[-4px]"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-surface" />
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-pill bg-surface text-ink"
              >
                <svg
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6.5 6l-4 4 4 4M13.5 6l4 4-4 4M3 10h14" />
                </svg>
              </span>
            </div>
          </div>
          <figcaption className="mt-3 text-xs text-muted">{results.note}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
