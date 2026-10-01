# Qualidade e entrega

Checklist para considerar o protótipo pronto para mostrar ao cliente e, depois, para virar o site final.

## Desempenho

Lighthouse mobile acima de 90 em performance. LCP abaixo de 2,5 s, CLS abaixo de 0,05, INP abaixo de 200 ms. Imagens em AVIF ou WebP com `next/image`, `priority` somente na imagem do hero. Fontes com `next/font` e no máximo dois pesos por família além do itálico. JavaScript do GSAP carregado só no cliente.

## Acessibilidade

Acima de 95 no Lighthouse. Contraste mínimo de 4.5 para texto normal. Navegação completa por teclado, com foco visível. Um único h1 e hierarquia coerente. Landmarks (`header`, `main`, `nav`, `footer`). Acordeão com `aria-expanded`. Slider de antes e depois operável por teclado. Animações com `prefers-reduced-motion`.

## Responsividade

Testar em 360, 390, 768, 1024, 1440 e 1920 px. Sem scroll horizontal em nenhum. Botão de WhatsApp sempre acessível. Títulos grandes quebram bem em telas pequenas.

## Conteúdo

Nenhum texto fora de `src/content/site.ts`. Nenhum dado fictício sem marcação "exemplo" no protótipo. Nenhuma promessa de resultado, nenhum preço, nenhuma promoção sem validação do cliente. Antes e depois, depoimentos e fotos de pacientes só com autorização escrita e conferência das regras de publicidade do conselho de odontologia.

## SEO

Título, descrição, Open Graph, favicon, `robots.txt`, `sitemap.xml` e JSON-LD de `Dentist`. `lang="pt-BR"`. Texto alternativo em todas as imagens.

## Revisões automáticas

Rodar `/revisar-animacoes` e `/auditar-visual` e resolver tudo que for severidade média ou alta.

## Deploy

Criar o projeto na Vercel, configurar as variáveis do `.env.example`, publicar em um domínio de pré-visualização e enviar o link ao cliente. Para o domínio final, apontar DNS depois da aprovação.

## Passagem para o cliente

Entregar um guia curto de como trocar textos, números, fotos e o número de WhatsApp (tudo em `src/content/site.ts`, `public/` e `.env`). Listar o que ainda é placeholder e o que precisa de aprovação, como fotos, depoimentos, antes e depois, CRO e textos legais.

## Pendências comuns que travam o lançamento

Fotos profissionais da clínica e da equipe, logo em vetor, autorização de imagem dos pacientes, texto final revisado pelo responsável técnico e domínio registrado.
