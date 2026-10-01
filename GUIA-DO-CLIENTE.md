# Guia do cliente

Este guia explica, em linguagem simples, como trocar o conteúdo do site sem mexer no design. Todo o conteúdo mora em três lugares:

| O que trocar | Onde |
|---|---|
| Textos, números, serviços, equipe, perguntas, endereço, CRO | `src/content/site.ts` |
| Fotos e imagens | pasta `public/` |
| Número do WhatsApp e endereço do site | arquivo `.env.local` (no computador) e variáveis na Vercel (no ar) |

## 1. Trocar textos, números e serviços

Abra `src/content/site.ts`. O arquivo é organizado por seção, na mesma ordem da página: `clinic`, `nav`, `hero`, `stats`, `treatments`, `method`, `results`, `team`, `testimonials`, `faq`, `cta` e `footer`.

- **Nome, CRO, responsável técnico, endereço, horário e Instagram:** seção `clinic`.
- **Título e subtítulo da primeira tela:** seção `hero`.
- **Números da faixa de destaque** (anos, pacientes, satisfação, especialistas): seção `stats`, campo `value`.
- **Tratamentos:** seção `treatments`. Cada item tem nome, frase, duração e a mensagem que abre no WhatsApp (`whatsappMessage`). Para adicionar um tratamento, copie um bloco existente e ajuste.
- **Perguntas frequentes:** seção `faq`. Cada pergunta tem `question` e `answer`.

Regras para os textos: use português claro e frases curtas, sem preço, sem promoção e sem promessa de resultado. Qualquer afirmação clínica deve ser conferida com o responsável técnico e com as regras de publicidade do conselho de odontologia.

Quando um conteúdo for confirmado, apague a linha `isPlaceholder: true` do item e retire as marcas "exemplo" ou "revisar com o cliente" do texto.

## 2. Trocar as fotos

As imagens de exemplo estão em `public/placeholders/`:

| Arquivo | Onde aparece |
|---|---|
| `hero.svg` | primeira tela (proporção 4 por 5) |
| `team.svg` | cartões da equipe (proporção 4 por 5) |
| `antes.svg` e `depois.svg` | comparativo de antes e depois (proporção 4 por 3) |

Para usar uma foto real:

1. Salve a foto em `public/` (por exemplo `public/fotos/recepcao.jpg`), em boa qualidade e com no máximo 2000 px no lado maior.
2. No arquivo do componente (`src/components/sections/Hero.tsx`, `Team.tsx` ou `Results.tsx`), troque o caminho em `src="/placeholders/hero.svg"` por `src="/fotos/recepcao.jpg"`.
3. Ajuste o texto `alt` para descrever a foto de verdade, e retire o rótulo "foto".

Fotos de pacientes e o antes e depois só podem entrar com **autorização escrita do paciente** e depois de conferidas as regras de publicidade do conselho de odontologia.

## 3. Trocar o número de WhatsApp

O número fica em uma variável de ambiente, nunca dentro do código.

- **No computador:** abra o arquivo `.env.local` e altere `NEXT_PUBLIC_WHATSAPP_NUMBER`. Use só dígitos, com código do país e DDD (exemplo: `5511999999999`).
- **No site publicado:** na Vercel, abra o projeto, vá em Settings, Environment Variables, altere o mesmo valor e publique novamente (Redeploy).

O mesmo vale para `NEXT_PUBLIC_SITE_URL`, que deve ser o endereço final do site (exemplo: `https://www.suaclinica.com.br`), usado nos metadados e no compartilhamento em redes sociais.

O rastreamento (Google Analytics e Meta Pixel) fica desligado enquanto `NEXT_PUBLIC_GA4_ID` e `NEXT_PUBLIC_META_PIXEL_ID` estiverem vazios. Se for ativar, é preciso incluir aviso de cookies e política de privacidade, conforme a LGPD.

## 4. Conferir antes de publicar

No terminal, dentro da pasta do projeto:

```
npm install        # só na primeira vez
npm run dev        # abre o site em http://localhost:3000 para conferir
npm run build      # confirma que não há erros
```

## 5. Publicar uma alteração

O site é publicado pela Vercel, ligada ao repositório do projeto.

1. Faça a alteração e confira com `npm run dev`.
2. Registre a alteração no git:
   ```
   git add .
   git commit -m "Descreva a alteração em uma frase"
   git push
   ```
3. A Vercel publica uma versão de prévia automaticamente. Abra o link da prévia, confira e aprove. Alterações na ramificação principal vão para o endereço oficial.

## 6. Pendências

A lista do que ainda depende do cliente está em `PENDENCIAS.md`.
