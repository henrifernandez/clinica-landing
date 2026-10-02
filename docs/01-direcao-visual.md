# Direção visual

Três direções foram prototipadas em `mockups/`. Escolha uma e marque abaixo. O Claude Code deve usar somente os tokens da direção marcada e nunca misturar tipografia, cor ou movimento de duas direções.

## Escolha

- [ ] A, Editorial escuro de luxo
- [ ] B, Clean clínico premium
- [ ] C, Minimalismo arquitetônico
- [ ] D, Híbrido: B como base, com a seção de tratamentos da C (`mockups/D-hibrido-B-com-C.html`). Substituída pela E em 02/10/2026.
- [x] E, Plano de tratamento, tema "Luz natural" (`mockups/E-plano-de-tratamento.html` e `mockups/laboratorio-paleta-fonte.html`, tema B)

Decisão em 02/10/2026, depois da auditoria anti-IA e do teste de paleta e fonte. A direção D ficou genérica (palavra em itálico em todo título, rótulo acima de cada seção, creme com argila) e fria demais em sua versão testada. A direção E mantém a estrutura, as âncoras, a ordem das seções e a tabela de tratamentos da D, e muda a camada visual. Os tokens completos estão em `DESIGN.md`. A regra de não misturar tokens de direções diferentes continua valendo.

## Direção E, plano de tratamento, tema Luz natural (direção ativa)

Conceito. A página lê como um plano de tratamento bem diagramado: hierarquia de documento, números e durações em tabela, muito ar, nenhum enfeite que não informe. O calor vem do linho quente, da madeira clara e da luz natural, não de decoração.

Cores (função). Linho `#F3EEE6` (fundo), esmalte `#FBF8F3` (superfícies elevadas), areia `#E8DFD1` (faixas), grafite quente `#2A2521` (texto), grafite suave `#625A50` (texto secundário), verde profundo `#2E4A3B` (único acento de ação), latão `#9A6B2F` (detalhe gráfico fino, nunca texto pequeno). Linhas `#DDD3C4` e `#C4B9A8`. Saem sálvia, argila e o creme anterior.

Tipografia. Títulos em Newsreader 400 (sem itálico de destaque em palavra solta). Corpo e interface em Figtree 400, 500 e 600. Escala fluida com `clamp()` mantida.

Formas. Foto com 12 px de raio, superfícies (tabela, cartões) com 16 px, botões em pílula.

Layout. Grade larga de 1240 px, hero com a foto sangrando até a borda direita, cabeçalho de seção em duas colunas (título e introdução), ritmo vertical variado (mais ar antes de tratamentos, resultados e fechamento). Sem rótulo acima dos títulos. Fechamento em faixa de largura total, texto à esquerda e ação à direita.

Movimento. Um único momento grande, o hero. O restante entra só com `opacity` curta, sem subida. Contagem animada de números removida.

Removidos nesta direção: linha do sorriso, forma orgânica e cartões flutuantes no hero, selo "12 anos" no hero, palavra em itálico nos títulos, rótulo com traço acima das seções.

## Direção D, B com tratamentos da C (substituída pela E)

Base. Todos os tokens, fontes, raios e movimentos da direção B.

O que vem da C, e somente isso. A seção de tratamentos deixa de ser uma grade de cards e passa a ser uma tabela de linhas numeradas dentro de um único container arredondado (raio de 28 px, borda fina, fundo `--paper`). Cada linha tem cinco colunas: número, nome do tratamento, frase de apoio, duração estimada e seta. No hover, a linha é preenchida de baixo para cima com o verde profundo (`--deep`) usando `scaleY` com origem embaixo, o texto passa para a cor de papel, o título desloca 10 px para a direita e a seta sobe e avança 4 px. Em telas abaixo de 860 px a linha vira bloco empilhado, com o número à esquerda e o conteúdo à direita.

Como a C é adaptada aos tokens da B.
- Números em Fraunces na cor sálvia, não em mono.
- Títulos em Fraunces 300, não em Inter Tight.
- Setas em argila (`--clay`), que vira sálvia clara no hover.
- Preenchimento no hover em `--deep`, não em preto.
- Os quatro tratamentos de maior complexidade levam um pequeno ponto em argila ao lado do número, com uma legenda curta abaixo da tabela.
- Duração em DM Sans pequeno, não em mono.

Movimento da seção. A tabela inteira entra com a revelação padrão (fade e subida de 26 px). Dentro dela, só o hover anima, usando `transform` e `opacity` e a cor de texto com 350 ms. Nada de `transition: all`.

Quando o cliente pedir para trazer mais elementos da C (por exemplo as barras de progresso do método ou o bloco de números escuro), tratar como novo ajuste neste arquivo antes de implementar.

Ajustes pedidos sobre a direção escolhida (opcional):

## Direção A, Editorial escuro de luxo

Conceito. Atmosfera de joalheria e hotel de alto padrão. Fundo quase preto, muito respiro e títulos serifados grandes com uma palavra em itálico dourado.

Cores. Fundo `#0e0d0c`, superfície `#151311`, texto `#ece6da`, texto secundário `#9b9486`, acento champagne `#c9ab7a`, acento claro `#e2cfa8`, linhas `rgba(236,230,218,.14)`.

Tipografia. Cormorant Garamond (300 e 400, itálico nos destaques) para títulos e Manrope (300, 400 e 500) para corpo.

Layout. Container de 1240 px, hero em duas colunas com moldura em arco, lista de tratamentos em linhas numeradas, muito espaço vertical (cerca de 150 px entre seções).

Movimento. Lento e elegante, revelações de 900 a 1200 ms com ease-out forte, linhas que crescem no hover, contadores e um leve parallax no hero.

Riscos. Fotografia precisa ser excelente e escura para não destoar. Cuidar do contraste do texto secundário.

## Direção B, Clean clínico premium

Conceito. Sensação de spa e consultório contemporâneo. Tons areia e verde sálvia, cantos muito arredondados e formas orgânicas.

Cores. Fundo `#f4efe7`, papel `#fbf8f3`, tinta `#1d2822`, texto secundário `#66705f`, sálvia `#8a9c86`, sálvia clara `#c9d3c4`, verde profundo `#2e4a3b`, argila `#c98f6b` (uso pontual).

Tipografia. Fraunces (300, 400 e itálico) para títulos e DM Sans (400 e 500) para corpo.

Layout. Container de 1200 px, navegação em pílula flutuante, hero com forma orgânica e cartões flutuantes, cards com raio de 28 px, seção de antes e depois com slider arrastável.

Movimento. Suave e acolhedor, entrada palavra por palavra no título, cartões que flutuam levemente, slider interativo.

Riscos. Mais fácil de parecer genérico, então depende de boas fotos e de manter a restrição de cores.

## Direção C, Minimalismo arquitetônico

Conceito. Estúdio de design. Grade rígida, linhas finas, tipografia enorme e um único acento.

Cores. Fundo `#f1f0ec`, tinta `#0c0c0b`, texto secundário `#6d6c66`, acento laranja `#ff4a1c` (somente em botões, pontos e detalhes).

Tipografia. Inter Tight (400, 500 e 600) com tracking negativo nos títulos e JetBrains Mono para rótulos e dados.

Layout. Container de 1320 px, grade de 12 colunas, tabela de tratamentos com preenchimento no hover, faixa de fotos em proporções diferentes, números em bloco escuro.

Movimento. Preciso e seco, máscaras de texto subindo, barras de progresso nas etapas, hover que preenche linhas.

Riscos. Mais ousado para uma clínica, pode soar frio se o cliente quer acolhimento acima de tudo.

## Regras válidas para qualquer direção

Um único h1 por página. Títulos nunca em caixa alta como padrão. O botão principal sempre usa a cor de acento da direção e leva ao WhatsApp. O botão flutuante de WhatsApp aparece depois de 60% da altura da primeira tela. Raio de borda, sombra e espaçamento seguem a mesma escala em todos os componentes.

## Tokens a implementar

O Claude Code deve traduzir a direção escolhida em variáveis CSS (`--bg`, `--surface`, `--ink`, `--muted`, `--line`, `--accent`, `--accent-soft`), em `tailwind.config` e em `src/styles/tokens.css`. Também deve definir escalas de tipografia fluida com `clamp()` e uma escala de espaçamento de 4 px.
