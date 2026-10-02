---
version: alpha
name: Aurea (nome provisório)
description: Clínica odontológica completa em São Paulo para adultos de 30 a 60 anos que valorizam tempo, discrição e previsibilidade. A página lê como um plano de tratamento bem composto, calmo e acolhedor.
status: APROVADO em 02/10/2026 (direção E, tema Luz natural). Implementado em src/.
colors:
  linho: "#F3EEE6"        # fundo dominante da página
  esmalte: "#FBF8F3"      # superfícies elevadas (tabela, cartões, legendas)
  areia: "#E8DFD1"        # faixas de seção (resultados, perguntas)
  grafite: "#2A2521"      # texto e títulos (grafite quente)
  grafite-suave: "#625A50" # texto secundário
  verde-profundo: "#2E4A3B" # único acento de ação: botões, hover da tabela, fechamento
  latao: "#9A6B2F"        # detalhe gráfico fino (pontos, sinal de mais). Nunca texto pequeno
  fio: "#DDD3C4"          # linhas finas
  fio-forte: "#C4B9A8"    # linhas de contorno e divisores de depoimentos
typography:
  display:
    fontFamily: Newsreader
    fontWeight: 400
    fontSize: clamp(2.6rem, 1.4rem + 3.6vw, 5rem)
    letterSpacing: -0.01em
  body:
    fontFamily: Figtree
    fontSize: clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)
    lineHeight: 1.65
rounded:
  foto: 12px
  superficie: 16px
  acao: 999px
spacing:
  base: 4px
components:
  button-primary:
    backgroundColor: "{colors.verde-profundo}"
    textColor: "{colors.esmalte}"
    rounded: "{rounded.acao}"
---

## Overview

Clínica premium, equipe integrada, atendimento sem pressa, planejamento digital. O público chega pelo celular, por indicação ou Instagram, desconfia de promoção e procura sinais de competência e de acolhimento. O mundo do assunto é o consultório particular (luz natural, madeira clara, linho, cerâmica) e o documento que o paciente leva para casa: o plano de tratamento.

Conceito: **plano de tratamento**. Hierarquia de documento, números e durações em tabela, coluna de leitura estreita, muito ar. O calor vem do linho, do grafite quente e da luz, e depois da fotografia. Não vem de decoração.

## Colors

- **Linho (#F3EEE6):** fundo dominante.
- **Esmalte (#FBF8F3):** superfícies que sobem do fundo. Texto grafite sobre ele: 14:1.
- **Areia (#E8DFD1):** faixas de seção, para dar ritmo sem usar cor de destaque.
- **Grafite (#2A2521):** texto e títulos, 13:1 sobre linho.
- **Grafite suave (#625A50):** texto secundário, 5,9:1 sobre linho e 5,1:1 sobre areia.
- **Verde profundo (#2E4A3B):** único acento, função de ação. 8,4:1 sobre linho.
- **Latão (#9A6B2F):** pontos de destaque e sinal de mais do FAQ, 4:1 sobre linho (elemento gráfico).

## Typography

- **Títulos: Newsreader 400**, sem itálico de destaque em palavra solta. Uma só cor (grafite).
- **Corpo e interface: Figtree** 400, 500 e 600. Números tabulares em durações e estatísticas.
- Fontes carregadas com `next/font` (cerca de 43 KB no total). Linhas abaixo de 80 caracteres.

## Layout

Grade de 1240 px. O hero tem título à esquerda e foto que sangra até a borda direita. Cabeçalho de seção em duas colunas (título e introdução). Ritmo vertical variado: mais ar antes de tratamentos, resultados e fechamento, menos entre método e resultados. Sem rótulo acima dos títulos. Fechamento em faixa de largura total, texto à esquerda e ação à direita.

## Elevation & Depth

Sem sombras. A profundidade vem de três superfícies planas (linho, esmalte e areia) separadas por fio de 1 px. A barra de navegação mantém o desfoque porque é camada real sobre conteúdo que rola.

## Shapes

Foto 12 px, superfícies (tabela e cartões) 16 px, botões em pílula. Na foto do hero, só o canto esquerdo é arredondado (o direito sangra até a borda da tela).

## Components

- **Botão primário:** verde profundo, texto esmalte, pílula. Rótulo único da ação principal: "Agendar avaliação".
- **Tabela de tratamentos:** estrutura da direção D (linhas numeradas, preenchimento em verde no hover), com os tokens da E.
- **Identificação da clínica:** em texto simples e discreto, sem rótulo decorativo. "Odontologia" em Figtree pequeno ao lado do nome na navegação (empilhado no celular) e uma linha informativa abaixo dos botões do hero ("Clínica odontológica em São Paulo", horário). Assim o tipo de negócio fica claro mesmo com uma foto de sorriso.
- **Legendas do hero:** faixa plana na base da foto, no lugar dos cartões flutuantes, com a marca "foto · exemplo".

## Do's and Don'ts

- Do preservar: ordem das seções, âncoras (`#tratamentos`, `#metodo`, `#contato`, `#resultados`, `#equipe`, `#perguntas`, `#conteudo`), links de WhatsApp e mensagens, textos de `site.ts`, hierarquia h1, h2, h3, JSON-LD, SEO, rastreamento, acessibilidade e as regras de movimento do CLAUDE.md.
- Do manter números só de sequências reais (método). Estatísticas só com dado confirmado.
- Don't inventar métricas, depoimentos, clientes ou provas. O que não for real fica marcado "exemplo".
- Don't usar: palavra solta em itálico ou cor no título, rótulo acima das seções, forma orgânica, cartões flutuantes, linha do sorriso, contagem animada de números, sombras decorativas, o mesmo fade com subida em todo bloco.
