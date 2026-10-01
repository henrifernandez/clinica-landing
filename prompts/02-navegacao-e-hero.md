# Prompt 02, navegação e hero

```
Implemente a navegação e o hero, que são o momento mais importante da página.

Navegação (src/components/Nav.tsx).
- Logo, três âncoras e botão de WhatsApp usando buildWhatsAppUrl.
- Transparente no topo, fundo com blur depois de 40 px de scroll, sem animar nada além de background-color e transform.
- No celular, só logo e botão.

Hero (src/components/sections/Hero.tsx).
- Reproduza o hero do mockup da direção escolhida, mas como componente React com os tokens e o conteúdo vindo de site.ts.
- Timeline GSAP conforme o catálogo e a orquestração de docs/03-animacoes.md (máscara de linha no título, revelação do visual, subtítulo, botões, selo).
- Parallax leve no visual, só com transform, máximo de 60 px.
- Altura mínima de 100svh, sem estourar a primeira tela em 360 por 740.
- O visual usa o placeholder em SVG com o rótulo "foto" até haver imagem real.

Regras. Use gsap.context() e reverta no desmonte. Respeite prefers-reduced-motion mostrando o estado final sem animar. Nada de transition: all.

Ao final rode build e lint, abra a página em 1440 e em 360 px de largura e me diga se há quebra de linha estranha no título ou scroll horizontal.
```
