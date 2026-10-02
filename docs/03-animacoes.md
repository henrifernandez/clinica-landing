# Animações

Movimento é o que separa um site que parece caro de um que só parece bonito. Aqui a regra é poucos momentos bem orquestrados, nunca efeitos espalhados.

## Ferramentas

GSAP com ScrollTrigger para a timeline do hero e para revelações guiadas por scroll. Lenis para rolagem suave, integrado ao ticker do GSAP. CSS para hover e microinterações. Nada de outra biblioteca.

## Princípios

Toda animação responde a uma ação do usuário ou revela conteúdo no momento em que ele chega à tela. Só se anima `transform` e `opacity`. Entradas usam ease-out forte, saídas usam ease-in. Nada de `linear` e nada de `transition: all`. Elementos de uso frequente (hover, botões) respondem entre 100 e 200 ms. Revelações de seção podem durar de 600 a 1000 ms porque acontecem uma vez. Tudo precisa ser interrompível e respeitar `prefers-reduced-motion`.

Curvas sugeridas, ajustar pelo resultado percebido.

```
--ease-out-expo: cubic-bezier(.16, 1, .3, 1)
--ease-out-quint: cubic-bezier(.22, 1, .36, 1)
--ease-in: cubic-bezier(.4, 0, 1, 1)
```

## Catálogo de movimentos

| Nome | Onde | Descrição | Duração | Observação |
|------|------|-----------|---------|------------|
| Máscara de linha | Título do hero | Cada linha sobe de dentro de um container com overflow oculto, com 100 a 120 ms de atraso entre linhas | 1100 a 1200 ms | Só no carregamento |
| Revelação de moldura | Visual do hero | Arco, forma ou faixa de fotos aparece por clip-path ou escala de 1.06 para 1 | 1400 a 1600 ms | Usar clip-path só na entrada |
| Revelação em escada | Cards, linhas, etapas | Fade e subida de 24 a 28 px com atraso de 70 a 90 ms entre irmãos | 800 a 900 ms | Dispara a 15% de visibilidade, uma vez |
| Contador | Números | Contagem com ease-out forte | 1600 a 1800 ms | Dispara a 60% de visibilidade |
| Parallax leve | Visual do hero e fotos | Translate vertical proporcional ao scroll, máximo de 60 px | contínuo | Só `transform`, `will-change` com cuidado |
| Preenchimento de linha | Tabela de tratamentos | Camada em verde profundo com `scaleY` de 0 a 1, origem embaixo, e texto trocando para a cor de papel | 350 a 500 ms | Direção ativa D, só no hover |
| Deslocamento no hover | Títulos da tabela de tratamentos | `translateX` de 10 px no hover | 400 a 500 ms | Sem layout shift |
| Seta que avança | Tabela de tratamentos | `translate(4px, -4px)` no hover | 350 a 400 ms | Cor muda junto |
| Preenchimento de botão | Botões principais | Camada que sobe com `translateY` | 350 a 450 ms | Texto troca de cor no mesmo tempo |
| Botão flutuante | WhatsApp | Entra com opacity e scale de .8 a 1 após 60% do hero | 500 ms | Sem pulso infinito |
| Slider antes e depois | Resultados | Arrastar com pointer events, interrompível | direto | Teclado com setas |
| Acordeão | FAQ | Abre com `grid-template-rows` ou altura medida e opacity | 250 a 350 ms | Botão com `aria-expanded` |

## Orquestração do hero

O hero é o único momento elaborado. Ordem sugerida na timeline, tempos em segundos a partir do carregamento.

```
0.00  fundo e navegação estáveis, sem animação
0.10  eyebrow aparece
0.15  título entra linha por linha
0.60  subtítulo
0.80  botões
0.20  visual principal (em paralelo, mais longo)
1.30  selo de credibilidade
```

Nada pode bloquear a interação. O botão de WhatsApp funciona desde o primeiro frame.

## Reduzir movimento

Com `prefers-reduced-motion: reduce`, desativar Lenis, desativar parallax, mostrar tudo já posicionado (sem fade) e manter apenas mudanças de cor e foco. Testar emulando a preferência nas ferramentas de desenvolvimento.

## Desempenho

Registrar os plugins do GSAP uma única vez, em um componente cliente. Limpar ScrollTriggers no desmonte com `gsap.context()` e `ctx.revert()`. Evitar `will-change` permanente, aplicar só durante a animação. Nenhuma animação deve causar layout shift ou CLS acima de 0.05. Carregar GSAP somente no cliente e evitar animar imagens grandes sem dimensão fixa.

## Revisão

Depois de implementar, rodar `/revisar-animacoes` e corrigir tudo que vier como severidade média ou alta.

## Ajustes da direção E (ativa desde 02/10/2026)

O hero continua sendo o único momento grande. Mudanças em relação ao catálogo acima.

- **Revelação em escada:** só `opacity` (700 ms, `power2.out`, 80 ms entre irmãos), sem subida. O movimento fica para o hero.
- **Contador:** removido. Os números aparecem estáticos.
- **Orquestração do hero:** sem eyebrow, sem selo e sem cartões flutuantes. Ordem: título por palavra (0.10 s), foto assentando de 1,06 para 1 (0.15 s), subtítulo (0.55 s), botões (0.75 s).
- **Parallax:** mantido só na foto do hero, máximo de 50 px.
- **Linha do sorriso:** removida do projeto.
- **Cartões da equipe:** todos do mesmo tamanho. No hover (só com mouse, `@media (hover: hover)`) o cartão cresce para `scale(1.05)` em 250 ms, ease-out na entrada e ease-in na saída, e sobe de camada (`z-index`) para não ficar atrás do vizinho. Só `transform`, sem sombra. Classe `team-card` em `globals.css`.
- Hover da tabela de tratamentos, botões, acordeão e botão flutuante seguem como no catálogo.
