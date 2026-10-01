# Prompt 05, WhatsApp e rastreamento

```
Finalize a integração com WhatsApp conforme docs/04-whatsapp.md.

1. Garanta que todos os botões da página usam buildWhatsAppUrl com a mensagem correta de cada contexto, abrem em nova aba e têm rel="noopener noreferrer".
2. Crie o botão flutuante (src/components/WhatsAppFloat.tsx). Aparece depois de 60% da altura da primeira tela com opacity e scale (500 ms, ease-out), fica no canto inferior direito, respeita safe-area-inset-bottom, tem pelo menos 44 px de área de toque, aria-label e foco visível. Sem pulso infinito.
3. Crie src/lib/track.ts com track(event, params). Por enquanto registra no console em desenvolvimento e envia a GA4 ou Meta Pixel só se os IDs do .env existirem. Dispare whatsapp_click com source e treatment em todos os botões.
4. Em desktop, se for simples, adicione no botão do fechamento uma opção discreta de copiar o número.
5. Escreva testes simples (vitest ou o que já estiver configurado) para buildWhatsAppUrl cobrindo codificação de acentos, número ausente e mensagem vazia.

Ao final rode build, lint e testes, e me liste cada ponto de entrada de WhatsApp da página com a mensagem que ele envia.
```
