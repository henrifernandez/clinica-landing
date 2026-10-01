# Integração com WhatsApp

No protótipo a integração é por link direto (click to chat). Não precisa de API, de servidor nem de conta Business API. Funciona no celular abrindo o app e no desktop abrindo o WhatsApp Web ou o aplicativo.

## Formato do link

```
https://wa.me/<numero>?text=<mensagem codificada>
```

O número tem código do país e DDD, só dígitos (por exemplo `5511999999999`). A mensagem passa por `encodeURIComponent`.

## Utilitário

Criar `src/lib/whatsapp.ts` com uma função `buildWhatsAppUrl({ message, source })`. Ela lê `NEXT_PUBLIC_WHATSAPP_NUMBER` e `NEXT_PUBLIC_WHATSAPP_MESSAGE`, aplica `encodeURIComponent` e devolve a URL. Se o número não estiver definido, usar um número fictício e mostrar um aviso apenas no console em desenvolvimento.

## Mensagens por contexto

Cada botão envia uma mensagem que ajuda a recepção a entender de onde o paciente veio.

| Origem | Mensagem |
|--------|----------|
| Navegação, hero e fechamento | Olá, gostaria de agendar uma avaliação. |
| Lentes e facetas | Olá, tenho interesse em lentes e facetas e gostaria de agendar uma avaliação. |
| Implantes | Olá, tenho interesse em implantes e gostaria de agendar uma avaliação. |
| Ortodontia invisível | Olá, tenho interesse em ortodontia invisível e gostaria de agendar uma avaliação. |
| Harmonização | Olá, tenho interesse em harmonização orofacial e gostaria de agendar uma avaliação. |
| Prevenção | Olá, gostaria de agendar um check-up. |
| Botão flutuante | Olá, vim pelo site e gostaria de mais informações. |

As mensagens vivem em `src/content/site.ts`, junto de cada tratamento, para o cliente poder ajustar.

## Botões

Todos abrem em nova aba com `target="_blank"` e `rel="noopener noreferrer"`. O botão flutuante aparece depois de 60% da altura da primeira tela, fica fixo no canto inferior direito, respeita `safe-area-inset-bottom` e tem área de toque mínima de 44 px. Precisa ter `aria-label` claro e foco visível. Sem animação de pulso contínuo.

Em desktop, considerar mostrar um pequeno cartão com o número formatado e a opção de copiar, caso o usuário não tenha o WhatsApp instalado.

## Rastreamento (opcional, deixar preparado)

Disparar um evento `whatsapp_click` com `source` (hero, nav, tratamento, flutuante, fechamento) e `treatment` quando houver. Implementar uma função `track(event, params)` que, por enquanto, só registra no console e envia para GA4 ou Meta Pixel quando os IDs do `.env` existirem. Não carregar scripts de rastreamento sem IDs.

## Privacidade

A página não coleta dados pessoais, então o link de WhatsApp é suficiente no protótipo. Se rastreamento for ativado, incluir aviso de cookies e política de privacidade conforme a LGPD, a validar com o cliente.

## Próxima fase, se o cliente quiser

Integração com WhatsApp Business API ou plataforma de atendimento para fila, horários automáticos e relatório de origem. Fora do escopo do protótipo.
