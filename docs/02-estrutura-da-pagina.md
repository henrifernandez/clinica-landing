# Estrutura da página

Página única, rolagem vertical, oito blocos. A ordem segue a jornada de quem decide um tratamento caro: entender, confiar, ver resultado, agir.

## Mapa

| # | Bloco | Função | CTA |
|---|-------|--------|-----|
| 1 | Navegação | Orientar e manter o WhatsApp sempre à mão | Agendar avaliação |
| 2 | Hero | Posicionar a clínica em uma frase e abrir a conversa | Falar com a equipe |
| 3 | Prova rápida | Números que sustentam a promessa | nenhum |
| 4 | Tratamentos | Mostrar a amplitude e destacar os de maior valor | Saber mais (WhatsApp com contexto) |
| 5 | Método | Reduzir a incerteza, mostrar o caminho em 4 passos | nenhum |
| 6 | Resultados e equipe | Provar competência com casos e pessoas | nenhum |
| 7 | Depoimentos e perguntas frequentes | Remover objeções | nenhum |
| 8 | Fechamento e rodapé | Converter | Chamar no WhatsApp |

## Detalhamento

**1. Navegação.** Logo à esquerda, três âncoras (Tratamentos, Método, Contato) e botão de WhatsApp à direita. Fica transparente no topo e ganha fundo com blur após 40 px de scroll. No celular vira apenas logo e botão, sem menu hambúrguer, já que a página é curta.

**2. Hero.** Título de uma frase com no máximo três linhas, subtítulo de até 25 palavras, botão principal e link secundário para a seção de tratamentos. Elemento visual característico: na direção E, uma foto retangular que sangra até a borda direita, com legendas planas na base. Sem selo no hero. O tipo de negócio é dito em texto, não pela foto: "Odontologia" ao lado do nome na navegação, "equipe odontológica" no subtítulo e, abaixo dos botões, uma linha informativa "Clínica odontológica em São Paulo" com o horário (`hero.descriptor` mais `clinic`). Este é o momento de movimento mais elaborado da página.

**3. Prova rápida.** Três números estáticos (sem contagem animada), por exemplo anos de prática, pacientes atendidos e especialistas. "Satisfação média" ficou de fora por ser afirmação delicada pelas regras de publicidade. Todos os valores vêm de `site.ts` e são marcados como exemplo até o cliente confirmar.

**4. Tratamentos.** Cinco itens, na ordem de valor para a clínica: lentes e facetas, implantes e reabilitação, ortodontia invisível, harmonização orofacial e prevenção. Cada item tem nome, uma frase, a duração estimada e um link que abre o WhatsApp com mensagem específica daquele tratamento. O formato é uma tabela de linhas numeradas (herdada da direção C, adaptada aos tokens da B), conforme a seção "Direção D" de `docs/01-direcao-visual.md`. Os quatro primeiros itens são marcados como tratamentos de maior complexidade.

**5. Método.** Quatro etapas (avaliação, planejamento, execução, manutenção), cada uma com título e uma frase. Aqui o texto reforça previsibilidade e ausência de pressa.

**6. Resultados e equipe.** Comparativo de antes e depois (slider ou grade) e cartões da equipe com foto, nome, CRO e especialidade. Sem fotos reais, manter placeholders marcados. Antes e depois só entra com autorização do paciente e conferência das regras de publicidade.

**7. Depoimentos e perguntas frequentes.** Três depoimentos curtos e de cinco a seis perguntas em acordeão (dói, quanto tempo leva, parcelamento, quando começa, como funciona a avaliação, atende convênio). Respostas curtas, sem preço.

**8. Fechamento e rodapé.** Título final com convite, uma linha de apoio, botão grande de WhatsApp. Rodapé com nome, CRO, responsável técnico, endereço, horários, mapa em link e redes sociais.

## Copy base (rascunho, ajustar com o cliente)

Hero, direção A: "O sorriso certo é desenhado, não improvisado." Subtítulo: "Planejamento digital, materiais de última geração e um atendimento pensado para quem valoriza tempo, discrição e resultado duradouro."

Hero, direção B (usada na direção ativa D): "Cuidado que você sente desde a recepção." Subtítulo: "Do planejamento digital ao pós-tratamento, uma equipe odontológica integrada cuida do seu sorriso em um ambiente calmo, discreto e sem pressa."

Hero, direção C: "Odontologia de precisão." Subtítulo: "Diagnóstico digital, planejamento 3D e execução com tolerância mínima."

Botões principais: "Agendar avaliação", "Falar com a equipe", "Chamar no WhatsApp". Evitar "Compre", "Aproveite", "Últimas vagas".

## Conteúdo em `src/content/site.ts`

Todo texto acima vive em um único objeto tipado, com chaves para `clinic`, `nav`, `hero`, `stats`, `treatments`, `method`, `team`, `testimonials`, `faq`, `cta` e `footer`. Os componentes só leem desse objeto.

## Responsividade

Projetar mobile primeiro, já que a maior parte do tráfego virá do Instagram. Breakpoints em 640, 768, 1024 e 1280 px. Em 360 px nada pode gerar scroll horizontal e o botão de WhatsApp precisa estar sempre alcançável com o polegar.

## SEO e metadados

Título com nome da clínica, especialidade e cidade. Descrição de até 155 caracteres. Open Graph com imagem 1200 por 630. Dados estruturados `Dentist` ou `LocalBusiness` em JSON-LD com endereço, horários e telefone. `lang="pt-BR"`.
