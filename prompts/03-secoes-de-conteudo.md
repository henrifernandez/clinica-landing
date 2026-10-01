# Prompt 03, prova rápida, tratamentos e método

```
Implemente três seções (as demais partes da página seguem a direção B, e só os tratamentos usam a estrutura da C), cada uma em seu arquivo em src/components/sections, com conteúdo vindo de src/content/site.ts.

1. Stats (prova rápida). Quatro números com contagem animada ao entrar na tela (60% de visibilidade, uma vez). Com prefers-reduced-motion, mostrar o valor final direto.
2. Treatments (tratamentos). Cinco itens na ordem de docs/02-estrutura-da-pagina.md. Cada item tem nome, frase e um link para o WhatsApp com a mensagem específica do tratamento (docs/04-whatsapp.md). Siga a seção "Direção D" de docs/01-direcao-visual.md e o mockup mockups/D-hibrido-B-com-C.html. É uma tabela de linhas numeradas dentro de um único container arredondado, com número, nome, frase, duração e seta. No hover a linha é preenchida de baixo para cima com --deep (scaleY), o título desloca 10 px e a seta avança, só com transform, opacity e cor. Os quatro primeiros itens levam o ponto de destaque e a legenda abaixo da tabela. Abaixo de 860 px vira bloco empilhado. Use os tokens da B (Fraunces, DM Sans, sálvia, argila), nunca os da C.
3. Method (método). Quatro etapas com numeração e uma frase cada. A revelação segue o padrão em escada do catálogo de animações.

Crie um hook useReveal (ou utilitário equivalente) para a revelação em escada, reutilizável nas próximas seções, com ScrollTrigger disparando uma vez a 15% de visibilidade e atraso de 70 a 90 ms entre irmãos.

Ao final rode build e lint e confira a página em 360 e 1440 px. Informe qualquer ponto em que o texto passe de 80 caracteres por linha.
```
