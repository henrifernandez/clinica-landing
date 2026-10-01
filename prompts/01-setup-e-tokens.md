# Prompt 01, setup, tokens e layout base

```
Crie o projeto Next.js (App Router, TypeScript, Tailwind) na raiz desta pasta, sem apagar CLAUDE.md, docs/, mockups/, prompts/ e .claude/.

Instale gsap e lenis. Não instale outras bibliotecas de animação ou de UI.

Implemente.
1. Tokens da direção escolhida em src/styles/tokens.css e no tailwind.config, conforme docs/01-direcao-visual.md. Inclua cores, escala de espaçamento de 4 px, raios, escala tipográfica fluida com clamp() e as curvas de easing de docs/03-animacoes.md.
2. Fontes da direção escolhida com next/font, com display swap e subset latin.
3. src/content/site.ts tipado com todo o conteúdo de docs/02-estrutura-da-pagina.md. Valores de exemplo marcados com um campo `isPlaceholder: true` quando dependem do cliente.
4. Layout raiz com lang pt-BR, metadados básicos e um componente <Container> reutilizável.
5. Um componente <MotionProvider> (client) que registra GSAP e ScrollTrigger uma única vez, inicializa Lenis ligado ao ticker do GSAP e desativa tudo quando prefers-reduced-motion estiver ativo.
6. src/lib/whatsapp.ts com buildWhatsAppUrl, conforme docs/04-whatsapp.md, e .env.local copiado de .env.example.

Não construa as seções ainda. Ao final rode npm run build e npm run lint, corrija o que aparecer e me mostre a árvore de pastas e o conteúdo de tokens.css.
```
