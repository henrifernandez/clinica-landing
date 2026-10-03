# Pendências do cliente

Lista gerada a partir de todos os campos marcados como placeholder (`isPlaceholder: true` em `src/content/site.ts`) e das imagens de exemplo. Enquanto um item estiver aqui, ele aparece no site como "exemplo" ou "revisar com o cliente".

## Precisa de dado do cliente

| Item | Valor atual (exemplo) | Onde trocar |
|---|---|---|
| Nome da clínica e identidade | Aurea | `site.ts`, `clinic.name` e `clinic.legalName` |
| Logo em vetor | texto "Aurea" na navegação | `src/components/Nav.tsx` |
| CRO da clínica | CRO 00000 | `site.ts`, `clinic.cro` |
| Responsável técnico | Dr. Nome Sobrenome | `site.ts`, `clinic.responsible` |
| Endereço e CEP | Rua Exemplo, 000, 00000-000 | `site.ts`, `clinic.address` e `clinic.postalCode` |
| Cidade e estado | São Paulo, SP | `site.ts`, `clinic.city` e `clinic.state` |
| Horário de atendimento | Segunda a sexta, das 8h às 19h | `site.ts`, `clinic.hours` e `clinic.openingHours` |
| Link do mapa | busca genérica | `site.ts`, `clinic.mapUrl` |
| Instagram | @aurea (link genérico) | `site.ts`, `clinic.instagramUrl` e `clinic.instagramHandle` |
| Número de WhatsApp | 5500000000000 (fictício) | `.env.local` e Vercel, `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| Endereço do site | http://localhost:3000 | `.env.local` e Vercel, `NEXT_PUBLIC_SITE_URL` |
| Domínio do site | não registrado | Vercel, Settings, Domains |

## Números de exemplo (a confirmar)

| Item | Valor atual |
|---|---|
| Anos de prática (faixa de números) | 12 |
| Pacientes atendidos | 4.800+ |
| Especialistas na equipe | 8 |

Onde: `site.ts`, `stats.items`. Se algum número não puder ser comprovado, remova o item em vez de manter o exemplo.

## Conteúdo clínico (revisar com o responsável técnico)

- **Tratamentos:** a lista, a ordem de prioridade, as frases e as durações ("3 a 4 sessões", "1 a 2 sessões", "6 a 18 meses", "1 sessão", "Semestral") são exemplos. Local: `treatments.items`.
- **Quais tratamentos levam o destaque de maior complexidade:** hoje os quatro primeiros. Local: campo `complex`.
- **Legendas do hero** ("Planejamento 3D" e "Agenda individual"): afirmam equipamento e serviço que precisam ser confirmados. Local: `hero.captions`.
- **Método:** as quatro etapas e suas frases. Local: `method.steps`.
- **Perguntas frequentes:** as seis respostas. As de parcelamento e de convênio ainda trazem a observação "revisar com o cliente" dentro do texto e precisam ser reescritas antes da publicação. Local: `faq.items`.

## Imagens e autorizações

| Item | Situação | Exigência |
|---|---|---|
| Foto da recepção ou da clínica (hero) | imagem de exemplo gerada por IA, `public/placeholders/hero-consultorio-ia.webp` (só para o protótipo) | foto real da recepção do cliente. Tirar a etiqueta "imagem · exemplo" e reescrever o `alt` (`hero.visualAlt` em `site.ts`) |
| Fotos da equipe | placeholder `public/placeholders/team.svg` | foto profissional e autorização de imagem |
| Equipe: nomes, CRO e especialidades | três profissionais de exemplo | dados reais. Local: `team.members` |
| Antes e depois | imagens de exemplo geradas por IA, `antes-ia.webp` e `depois-ia.webp` (só para demonstrar o slider, remover ou trocar antes do lançamento) | caso real, com autorização escrita do paciente e conferência das regras de publicidade do conselho de odontologia. O link do protótipo na Vercel é público, então manter as etiquetas "exemplo" |
| Depoimentos | três textos de exemplo | autorização escrita de cada paciente. Local: `testimonials.items` |
| Imagem de compartilhamento (Open Graph) | gerada automaticamente com nome e slogan | opcional: trocar por foto ou arte da clínica |

## Textos legais e conformidade

- Regras de publicidade do conselho de odontologia: conferir título, subtítulo, descrições de tratamento, antes e depois e depoimentos.
- Política de privacidade e aviso de cookies: necessários se o rastreamento (Google Analytics ou Meta Pixel) for ativado, conforme a LGPD.
- Texto final revisado pelo responsável técnico.

## Para o lançamento

1. Trocar todos os itens acima e remover as marcas "exemplo".
2. Registrar o domínio e apontar o DNS na Vercel.
3. Atualizar `NEXT_PUBLIC_SITE_URL` e o número de WhatsApp.
4. Testar o botão de WhatsApp em todos os pontos da página, no celular.
