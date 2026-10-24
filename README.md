# Landing page para clínica odontológica premium

Landing page pensada para converter visitas em contatos por WhatsApp, construída com Next.js 16, React 19, TypeScript, Tailwind CSS, GSAP e Lenis, com testes em Vitest. A demonstração online usa dados fictícios: [clinica-landing-one.vercel.app](https://clinica-landing-one.vercel.app).

## Destaques

- Seções de hero, método, tratamentos, resultados, depoimentos, equipe, perguntas frequentes e chamada final.
- Animações de rolagem com GSAP e Lenis.
- Botão flutuante e links de WhatsApp com mensagem pré-preenchida, e rastreamento opcional com GA4 e Meta Pixel.
- SEO técnico com sitemap, `robots.txt`, imagem Open Graph gerada no build e dados estruturados (JSON-LD).

## Como foi construído

O projeto foi planejado antes de ser codado. Os mockups em `mockups/` compararam várias direções visuais (a escolhida foi a `D-hibrido-B-com-C.html`), os documentos em `docs/` registram briefing, estrutura, animações e entrega, e a sequência em `prompts/` guiou a implementação com o Claude Code, do kickoff ao deploy. O `CLAUDE.md` guarda o contexto fixo do projeto.

## Conteúdo

```
src/                       código do site (Next.js, App Router)
CLAUDE.md                  contexto fixo do projeto, lido em toda sessão
docs/                      briefing, direção visual, estrutura, animações, WhatsApp, entrega
mockups/                   propostas visuais navegáveis (HTML único cada)
prompts/                   sequência de prompts, do kickoff ao deploy
.claude/commands/          comandos de revisão (/revisar-animacoes, /auditar-visual)
.env.example               variáveis de ambiente
```

## Observações

O nome "Aurea", o CRO, o endereço e o número de WhatsApp dos mockups são fictícios. Troque pelos dados reais do cliente em `docs/00-briefing.md`.

Os mockups usam fontes do Google Fonts. Sem internet eles abrem com fontes de reserva, e o layout continua funcionando.

## Rodar e publicar

```
npm install
cp .env.example .env.local   # ajuste o número de WhatsApp e a URL do site
npm run dev                  # http://localhost:3000
npm run build && npm test
```

Deploy na Vercel: importe o repositório, configure as variáveis de `.env.example` em Settings, Environment Variables (`NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_WHATSAPP_MESSAGE`, `NEXT_PUBLIC_SITE_URL` e, opcionalmente, `NEXT_PUBLIC_GA4_ID` e `NEXT_PUBLIC_META_PIXEL_ID`) e publique. Nenhum segredo é versionado: `.env.local` fica fora do git. Veja `GUIA-DO-CLIENTE.md` e `PENDENCIAS.md`.
