---
description: Revisa as animações do projeto contra os dez padrões de motion design
---

Revise todas as animações e transições do projeto (CSS, Tailwind e GSAP) contra estes dez padrões.

1. Movimento justificado, toda animação comunica algo.
2. Animar só `transform` e `opacity`.
3. Nunca `transition: all`.
4. Duração proporcional ao tamanho e à frequência, microinterações entre 100 e 200 ms.
5. Easing com direção, ease-out na entrada e ease-in na saída, nunca linear.
6. Ações frequentes respondem quase de imediato.
7. Nunca esconder com `scale(0)`, preferir opacity com scale sutil.
8. Animações disparadas pelo usuário são interrompíveis.
9. `prefers-reduced-motion` respeitado, inclusive Lenis e ScrollTrigger.
10. Curvas ajustadas pelo resultado percebido, não pelo nome genérico.

Procure em `src/` por `transition: all`, `transition-all`, `ease-in` em elementos que aparecem, `scale-0`, durações acima de 500 ms em elementos de uso frequente e propriedades como width, height, top, left e box-shadow sendo animadas.

Devolva uma tabela com as colunas elemento, problema, padrão violado e severidade. Termine com um veredito entre "pronto", "precisa de ajustes" e "problemas sérios". Não corrija nada sem eu pedir.
