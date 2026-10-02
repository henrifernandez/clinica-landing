/**
 * Todo o conteúdo editável da página vive aqui.
 * Campos com `isPlaceholder: true` dependem de confirmação do cliente
 * e aparecem como "exemplo" ou "revisar com o cliente" no protótipo.
 */

export type TreatmentSlug =
  | "lentes"
  | "implantes"
  | "ortodontia"
  | "harmonizacao"
  | "prevencao";

export interface Treatment {
  slug: TreatmentSlug;
  name: string;
  summary: string;
  /** Duração estimada. Revisar com o cliente antes de publicar. */
  duration: string;
  /** Tratamento de maior complexidade, leva o ponto de destaque. */
  complex: boolean;
  /** Mensagem enviada ao WhatsApp a partir deste item. */
  whatsappMessage: string;
  isPlaceholder: true;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  isPlaceholder: true;
}

export interface MethodStep {
  title: string;
  text: string;
}

export interface TeamMember {
  name: string;
  cro: string;
  specialty: string;
  photoAlt: string;
  isPlaceholder: true;
}

export interface Testimonial {
  quote: string;
  author: string;
  isPlaceholder: true;
}

export interface FaqItem {
  question: string;
  answer: string;
  isPlaceholder: true;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroWord {
  text: string;
}

export const site = {
  clinic: {
    name: "Aurea",
    legalName: "Clínica Aurea",
    specialty: "Odontologia",
    city: "São Paulo",
    state: "SP",
    responsible: "Dr. Nome Sobrenome",
    cro: "CRO 00000",
    address: "Rua Exemplo, 000",
    postalCode: "00000-000",
    hours: "Segunda a sexta, das 8h às 19h",
    openingHours: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    mapUrl: "https://maps.google.com/?q=Rua+Exemplo+000+Sao+Paulo",
    instagramUrl: "https://instagram.com/",
    instagramHandle: "@aurea",
    isPlaceholder: true,
  },

  labels: {
    example: "exemplo",
  },

  a11y: {
    skipLink: "Pular para o conteúdo",
    newTab: "abre em nova aba",
  },

  seo: {
    title: "Aurea | Clínica odontológica completa em São Paulo",
    description:
      "Planejamento digital e atendimento sem pressa. Lentes, implantes, ortodontia invisível e harmonização com equipe integrada em São Paulo.",
    ogImageAlt: "Clínica Aurea, odontologia completa em São Paulo",
    ogTagline: "Cuidado que você sente desde a recepção.",
  },

  whatsapp: {
    defaultMessage: "Olá, gostaria de agendar uma avaliação.",
    floatMessage: "Olá, vim pelo site e gostaria de mais informações.",
    floatLabel: "Falar no WhatsApp",
    floatAriaLabel: "Falar com a clínica no WhatsApp",
    copyLabel: "Copiar número",
    copiedLabel: "Número copiado",
  },

  nav: {
    links: [
      { label: "Tratamentos", href: "#tratamentos" },
      { label: "Método", href: "#metodo" },
      { label: "Contato", href: "#contato" },
    ] satisfies NavLink[],
    cta: "Agendar avaliação",
    ariaLabel: "Navegação principal",
  },

  hero: {
    title: [
      { text: "Cuidado" },
      { text: "que" },
      { text: "você" },
      { text: "sente" },
      { text: "desde" },
      { text: "a" },
      { text: "recepção." },
    ] satisfies HeroWord[],
    subtitle:
      "Do planejamento digital ao pós-tratamento, uma equipe odontológica integrada cuida do seu sorriso em um ambiente calmo, discreto e sem pressa.",
    descriptor: "Clínica odontológica",
    primaryCta: "Agendar avaliação",
    secondaryCta: "Ver tratamentos",
    secondaryHref: "#tratamentos",
    visualAlt: "Espaço reservado para foto da recepção da clínica",
    visualTag: "foto",
    captions: [
      { title: "Planejamento 3D", text: "Veja o plano antes de começar" },
      { title: "Agenda individual", text: "Atendimento com hora marcada" },
    ],
  },

  stats: {
    items: [
      { value: 12, label: "anos de prática", isPlaceholder: true },
      {
        value: 4800,
        suffix: "+",
        label: "pacientes atendidos",
        isPlaceholder: true,
      },
      { value: 8, label: "especialistas na equipe", isPlaceholder: true },
    ] satisfies Stat[],
    note: "Números de exemplo, a confirmar com o cliente.",
  },

  treatments: {
    title: "Tudo o que seu sorriso precisa, em um só lugar.",
    intro:
      "Uma equipe multidisciplinar trabalha em conjunto, para que você tenha um único plano e um único ponto de contato.",
    cta: "Saber mais",
    legend:
      "Tratamentos de maior complexidade, com planejamento digital individual.",
    durationNote: "Durações de exemplo, revisar com o cliente.",
    items: [
      {
        slug: "lentes",
        name: "Lentes e facetas",
        summary: "Desenho digital e aprovação do plano antes do preparo.",
        duration: "3 a 4 sessões",
        complex: true,
        whatsappMessage:
          "Olá, tenho interesse em lentes e facetas e gostaria de agendar uma avaliação.",
        isPlaceholder: true,
      },
      {
        slug: "implantes",
        name: "Implantes",
        summary: "Cirurgia guiada por tomografia, com plano individual.",
        duration: "1 a 2 sessões",
        complex: true,
        whatsappMessage:
          "Olá, tenho interesse em implantes e gostaria de agendar uma avaliação.",
        isPlaceholder: true,
      },
      {
        slug: "ortodontia",
        name: "Ortodontia invisível",
        summary: "Alinhadores planejados em 3D, com acompanhamento digital.",
        duration: "6 a 18 meses",
        complex: true,
        whatsappMessage:
          "Olá, tenho interesse em ortodontia invisível e gostaria de agendar uma avaliação.",
        isPlaceholder: true,
      },
      {
        slug: "harmonizacao",
        name: "Harmonização",
        summary: "Equilíbrio entre sorriso e face, conduzido por especialista.",
        duration: "1 sessão",
        complex: true,
        whatsappMessage:
          "Olá, tenho interesse em harmonização orofacial e gostaria de agendar uma avaliação.",
        isPlaceholder: true,
      },
      {
        slug: "prevencao",
        name: "Prevenção",
        summary: "Check-up com imagem 3D e plano de manutenção sob medida.",
        duration: "Semestral",
        complex: false,
        whatsappMessage: "Olá, gostaria de agendar um check-up.",
        isPlaceholder: true,
      },
    ] satisfies Treatment[],
  },

  method: {
    title: "Um caminho claro, sem pressa.",
    steps: [
      {
        title: "Avaliação",
        text: "Escaneamento, fotos e uma conversa sobre o que você quer para o seu sorriso.",
      },
      {
        title: "Planejamento",
        text: "Plano digital com simulação, explicado com calma antes de qualquer decisão.",
      },
      {
        title: "Execução",
        text: "Sessões objetivas, com conforto e hora marcada.",
      },
      {
        title: "Manutenção",
        text: "Retornos programados para cuidar do resultado ao longo do tempo.",
      },
    ] satisfies MethodStep[],
  },

  results: {
    title: "Arraste e compare.",
    text: "Aqui entra o comparativo de antes e depois, com casos reais e autorização escrita do paciente.",
    // Fotos reais exigem autorização escrita do paciente e conferência das
    // regras de publicidade do conselho de odontologia. Revisar com o cliente.
    note: "Imagem de exemplo, sem paciente real.",
    sliderLabel:
      "Comparativo de antes e depois. Use as setas do teclado para mover.",
    beforeLabel: "antes",
    afterLabel: "depois",
    exampleLabel: "exemplo",
    isPlaceholder: true,
  },

  team: {
    title: "Quem cuida de você de perto.",
    note: "Equipe de exemplo, a confirmar com o cliente.",
    members: [
      {
        name: "Dr. Nome Sobrenome",
        cro: "CRO 00000",
        specialty: "Implantodontia",
        photoAlt: "Espaço reservado para foto do profissional",
        isPlaceholder: true,
      },
      {
        name: "Dra. Nome Sobrenome",
        cro: "CRO 00000",
        specialty: "Ortodontia",
        photoAlt: "Espaço reservado para foto da profissional",
        isPlaceholder: true,
      },
      {
        name: "Dra. Nome Sobrenome",
        cro: "CRO 00000",
        specialty: "Dentística estética",
        photoAlt: "Espaço reservado para foto da profissional",
        isPlaceholder: true,
      },
    ] satisfies TeamMember[],
    photoTag: "foto",
    leadRole: "responsável técnico",
  },

  testimonials: {
    title: "O que dizem sobre o atendimento.",
    exampleLabel: "Depoimento de exemplo",
    items: [
      {
        quote: "Tudo explicado com calma. Eu sabia o que ia acontecer em cada etapa.",
        author: "Paciente",
        isPlaceholder: true,
      },
      {
        quote: "A clínica é tranquila e discreta. Perdi o receio de voltar ao dentista.",
        author: "Paciente",
        isPlaceholder: true,
      },
      {
        quote: "Fui ouvida desde a primeira conversa e o plano seguiu o que eu pedi.",
        author: "Paciente",
        isPlaceholder: true,
      },
    ] satisfies Testimonial[],
  },

  faq: {
    title: "Dúvidas comuns.",
    items: [
      {
        question: "O tratamento dói?",
        answer:
          "Usamos anestesia e técnicas pensadas para o seu conforto. Você pode pedir uma pausa a qualquer momento durante o atendimento.",
        isPlaceholder: true,
      },
      {
        question: "Quanto tempo leva?",
        answer:
          "Depende do tratamento e do seu caso. Na avaliação, a equipe apresenta um cronograma individual, com as etapas e os prazos previstos.",
        isPlaceholder: true,
      },
      {
        question: "Existe parcelamento?",
        answer:
          "As condições de pagamento são apresentadas junto do plano de tratamento, na avaliação. Revisar formas de pagamento com o cliente.",
        isPlaceholder: true,
      },
      {
        question: "Quando posso começar?",
        answer:
          "Depois da avaliação e da aprovação do plano. A equipe confirma os horários disponíveis pelo WhatsApp.",
        isPlaceholder: true,
      },
      {
        question: "Como funciona a avaliação?",
        answer:
          "Uma conversa sobre seus objetivos, exame clínico e imagens digitais. Ao final, você recebe a explicação do que é indicado, sem compromisso.",
        isPlaceholder: true,
      },
      {
        question: "Vocês atendem convênio?",
        answer:
          "Informe seu convênio ao falar com a equipe, que confirma as condições de atendimento. Revisar com o cliente.",
        isPlaceholder: true,
      },
    ] satisfies FaqItem[],
  },

  cta: {
    title: "Pronto para começar?",
    text: "Converse com a equipe pelo WhatsApp e reserve um horário de avaliação.",
    button: "Chamar no WhatsApp",
  },

  footer: {
    mapLabel: "Ver no mapa",
    mapHint: "Como chegar",
    instagramLabel: "Instagram",
    instagramHint: "Acompanhe a clínica",
    placeholderNote:
      "Protótipo. Dados de contato, equipe e números são de exemplo.",
  },
} as const;

export type Site = typeof site;
