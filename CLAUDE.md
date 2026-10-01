# CLAUDE.md

Protótipo de landing page para clínica odontológica premium (conceito high ticket). Uma única página, com animações refinadas e conversão via WhatsApp. Este arquivo é lido a cada sessão, então mantenha-o curto e atualizado.

## Objetivo do projeto

Mostrar ao cliente, em poucos dias, um protótipo funcional que transmita sofisticação e leve o visitante a iniciar uma conversa no WhatsApp. Depois de aprovado, o protótipo vira o site final trocando apenas conteúdo e imagens.

## Stack

Next.js (App Router) com TypeScript, Tailwind CSS, GSAP com ScrollTrigger para animações de scroll e timelines, Lenis para rolagem suave. Deploy na Vercel. Sem backend, sem banco de dados. O único "backend" é o link de WhatsApp.

Não adicionar outra biblioteca de animação. Se um caso não for coberto por GSAP ou CSS, perguntar antes.

## Fonte da verdade

Leia nesta ordem antes de qualquer tarefa relevante.

1. `docs/00-briefing.md` com cliente, público, tom e objetivos
2. `docs/01-direcao-visual.md` com a direção escolhida e os tokens de design
3. `docs/02-estrutura-da-pagina.md` com seções, copy base e hierarquia
4. `docs/03-animacoes.md` com o catálogo de movimento e as regras
5. `docs/04-whatsapp.md` com a integração e o rastreamento
6. `docs/05-qualidade-e-entrega.md` com o checklist final

Os mockups em `mockups/` (A, B, C e D) são referência visual e de movimento. Não copiar o HTML literalmente, reimplementar como componentes React com os tokens da direção escolhida.

## Como trabalhar

Siga os prompts de `prompts/` em ordem, um por vez. Ao terminar cada etapa, rode o build, confirme que não há erros de TypeScript ou lint e resuma em poucas linhas o que mudou. Não avance para a próxima etapa sem confirmação.

A direção ativa é a D, o híbrido definido em `docs/01-direcao-visual.md` (base da direção B, com a seção de tratamentos da C adaptada aos tokens da B). Referência visual principal, `mockups/D-hibrido-B-com-C.html`. Não importar nenhum outro token da C além do descrito lá, e não adicionar elementos de A ou C sem eu pedir.

## Regras de código

Componentes pequenos em `src/components`, uma seção por arquivo em `src/components/sections`. Todo conteúdo editável (textos, serviços, números, links, endereço, CRO) fica em `src/content/site.ts`, nunca espalhado nos componentes. Cores, fontes e espaçamentos vêm de tokens no Tailwind e em variáveis CSS, sem valores soltos nos componentes.

Imagens com `next/image`, sempre com `alt` descritivo e dimensões definidas. Enquanto não houver fotos reais, usar os placeholders em SVG e marcar claramente com o rótulo "foto".

Fontes com `next/font`. Sem fontes carregadas por tag externa.

## Regras de movimento (não negociáveis)

Animar somente `transform` e `opacity`. Nunca `transition: all`. Elementos que entram usam ease-out, os que saem usam ease-in, nunca linear. Microinterações entre 100 e 200 ms, transições de seção entre 200 e 400 ms, revelações de scroll podem chegar a 900 ms por serem raras. Respeitar `prefers-reduced-motion` em tudo, inclusive no Lenis e no ScrollTrigger. Toda animação precisa ter um motivo (revelar, guiar a atenção, confirmar uma ação). Detalhes em `docs/03-animacoes.md`. Exceções aceitas: o acordeão do FAQ anima `grid-template-rows` (não existe abertura de altura só com `transform`), o parallax usa `ease: none` em `scrub`, e transições de cor são permitidas.

## Regras de copy

Português do Brasil, voz ativa, frases específicas. Tom sóbrio e acolhedor, sem promessas de resultado e sem superlativos vazios. Nunca usar travessão. Evitar CAIXA ALTA em títulos. Linhas de texto abaixo de 80 caracteres. Qualquer afirmação clínica, preço, promoção ou antes e depois deve seguir as regras de publicidade do conselho de odontologia, então marcar como "revisar com o cliente" em vez de inventar.

## Comandos

```
npm run dev      # desenvolvimento
npm run build    # build de produção
npm run lint     # lint
npm test         # testes (vitest)
```

Comandos úteis em `.claude/commands/`: `/revisar-animacoes` e `/auditar-visual`.

## Estado atual

Protótipo completo, prompts 01 a 08 concluídos. Seções: Nav, Hero, Stats, Treatments (tabela da direção D), Method, Results (slider), Team, Testimonials, Faq, FinalCta e Footer. WhatsApp com botão flutuante, `track` e cópia do número. SEO com Open Graph, favicon, robots, sitemap e JSON-LD `Dentist`. Lighthouse mobile (simulado): performance 93 a 95, acessibilidade, boas práticas e SEO 100, CLS 0, LCP 3,0 s (meta 2,5 s, ver abaixo). Todo dado fictício está marcado com `isPlaceholder` e listado em `PENDENCIAS.md`. Troca de conteúdo explicada em `GUIA-DO-CLIENTE.md`.

## Decisões tomadas

Tailwind 3 (o prompt pede `tailwind.config`). GSAP registrado uma vez em `src/lib/gsap.ts`. Movimento reduzido tratado por `gsap.matchMedia` em cada seção, com fallback de 6 s que mostra tudo se o movimento não iniciar. Cartões flutuantes do hero ficam parados (sem loop). Subtítulo e visual do hero ficam visíveis no HTML e animam só `transform`, por causa do LCP. Tabela de tratamentos usa breakpoint de 860 px, definido em `docs/01-direcao-visual.md`. Nunca adicionar Claude como coautor em commits.

## Próximos passos

Receber do cliente os itens de `PENDENCIAS.md`. Se o LCP simulado precisar ficar abaixo de 2,5 s, carregar GSAP e Lenis só depois do carregamento (custo, hero mais tardio em celulares lentos). Publicar a prévia na Vercel e, depois da aprovação, apontar o domínio final.

## Definição de pronto

Build sem erros, Lighthouse mobile acima de 90 em performance e acima de 95 em acessibilidade, nenhum scroll horizontal em 360 px, botão de WhatsApp funcionando em todas as seções, `prefers-reduced-motion` testado e conteúdo 100% trocável via `src/content/site.ts`.
