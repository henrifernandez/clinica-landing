# Landing page para clínica odontológica premium

Pasta de estruturação para jogar no Claude Code. Ela não contém código do site, contém o contexto, as decisões e a sequência de prompts para o Claude Code construir tudo do jeito certo.

## Como usar

1. Os mockups em `mockups/` mostram as três direções (A, B, C) e a versão escolhida, `D-hibrido-B-com-C.html`, que é a B com a seção de tratamentos da C. Essa é a direção ativa do projeto.
2. A escolha já está marcada em `docs/01-direcao-visual.md`. Se mudar de ideia, altere lá.
3. Preencha o que já souber do cliente em `docs/00-briefing.md`. O que faltar fica como placeholder.
4. Abra esta pasta no Claude Code (`claude` dentro da pasta).
5. Cole o conteúdo de `prompts/00-kickoff.md` e siga os prompts em ordem, um por vez.

## Conteúdo

```
CLAUDE.md                  contexto fixo do projeto, lido em toda sessão
docs/                      briefing, direção visual, estrutura, animações, WhatsApp, entrega
mockups/                   três propostas visuais navegáveis (HTML único cada)
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
