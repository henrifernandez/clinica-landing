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

A direção ativa é a E, "plano de tratamento" no tema Luz natural, definida em `docs/01-direcao-visual.md` e `DESIGN.md` (substituiu a D em 02/10/2026). Referência visual principal, `mockups/E-plano-de-tratamento.html` com o tema B de `mockups/laboratorio-paleta-fonte.html`. Preservar estrutura, ordem das seções, âncoras, links de WhatsApp, textos de `site.ts` e hierarquia de títulos. Não voltar a usar palavra em itálico no título, rótulo acima das seções, forma orgânica, cartões flutuantes, linha do sorriso ou contagem animada, e não adicionar elementos de outras direções sem eu pedir.

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

## Commits

Seguir Conventional Commits: `tipo(escopo opcional): descrição`. A descrição fica em português, no imperativo, em minúscula, sem ponto final e com até 72 caracteres. O corpo é opcional e explica o porquê, não o quê.

Tipos: `feat` (funcionalidade ou mudança visível ao visitante), `fix` (correção de bug), `docs` (só documentação, mockups e arquivos de referência), `style` (formatação, sem mudar comportamento), `refactor` (reestruturação sem mudar comportamento), `perf` (desempenho), `test` (testes), `build` (dependências e build), `ci` (integração e deploy) e `chore` (configuração e manutenção, como `.gitignore`). Mudança que quebra compatibilidade leva `!` depois do tipo ou escopo e `BREAKING CHANGE:` no corpo.

Escopos usuais: `design`, `hero`, `nav`, `equipe`, `seo`, `whatsapp`, `config`. Um commit por assunto, e `npm run build` e `npm run lint` passando antes de commitar. Nunca incluir Claude como coautor, nem a linha `Co-Authored-By` nem o rodapé "Generated with Claude Code", em commits ou PRs.

## Estado atual

Protótipo completo na direção E (tema Luz natural), implementada em 02/10/2026 sobre a estrutura da D. Seções: Nav, Hero, Stats (estáticos), Treatments (tabela), Method, Results (slider), Team, Testimonials, Faq, FinalCta e Footer. WhatsApp com botão flutuante, `track` e cópia do número. SEO com Open Graph, favicon, robots, sitemap e JSON-LD `Dentist`. Scanner anti-IA (`.claude/skills/avoid-ai-design`) sem achados em `src/`. Todo dado fictício está marcado com `isPlaceholder` e listado em `PENDENCIAS.md`. Troca de conteúdo explicada em `GUIA-DO-CLIENTE.md`. Referências visuais em `mockups/` (E, laboratório de paleta e comparadores) e `DESIGN.md`.

## Decisões tomadas

Tailwind 3 (o prompt pede `tailwind.config`). GSAP registrado uma vez em `src/lib/gsap.ts`. Movimento reduzido tratado por `gsap.matchMedia` em cada seção, com fallback de 6 s que mostra tudo se o movimento não iniciar. Hero é o único momento de movimento grande, e as seções entram só com `opacity`. Subtítulo e foto do hero ficam visíveis no HTML e animam só `transform`, por causa do LCP. Fontes: Newsreader 400 e Figtree (cerca de 43 KB). Tabela de tratamentos usa breakpoint de 860 px, definido em `docs/01-direcao-visual.md`. Cores com transparência usam tokens (`--scrim`, `--glass`), porque o Tailwind não aplica opacidade em cor de variável. O tipo de negócio (clínica odontológica) é dito em texto, discreto: "Odontologia" ao lado do nome na navegação e linha informativa abaixo dos botões do hero, para não depender da foto. `.claude/skills/` e `skills-lock.json` ficam fora do git. Nunca adicionar Claude como coautor em commits.

## Próximos passos

Receber do cliente os itens de `PENDENCIAS.md`, principalmente as fotos (o calor final da direção depende delas). Se o LCP simulado precisar ficar abaixo de 2,5 s, carregar GSAP e Lenis só depois do carregamento. Publicar a prévia na Vercel e, depois da aprovação, apontar o domínio final.

## Definição de pronto

Build sem erros, Lighthouse mobile acima de 90 em performance e acima de 95 em acessibilidade, nenhum scroll horizontal em 360 px, botão de WhatsApp funcionando em todas as seções, `prefers-reduced-motion` testado e conteúdo 100% trocável via `src/content/site.ts`.
