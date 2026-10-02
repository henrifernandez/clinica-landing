import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        brass: "var(--brass)",
        "wa-dot": "var(--whatsapp-dot)",
        scrim: "var(--scrim)",
        glass: "var(--glass)",
        "on-accent": "var(--on-accent)",
        "on-accent-muted": "var(--on-accent-muted)",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lead: "var(--text-lead)",
        h1: "var(--text-h1)",
        h2: "var(--text-h2)",
        h3: "var(--text-h3)",
        h4: "var(--text-h4)",
        "h4-lg": "var(--text-h4-lg)",
        logo: "var(--text-logo)",
        quote: "var(--text-quote)",
        "quote-lg": "var(--text-quote-lg)",
        stat: "var(--text-stat)",
        cta: "var(--text-cta)",
      },
      spacing: {
        "1": "var(--space-1)",
        "2": "var(--space-2)",
        "3": "var(--space-3)",
        "4": "var(--space-4)",
        "5": "var(--space-5)",
        "6": "var(--space-6)",
        "8": "var(--space-8)",
        "10": "var(--space-10)",
        "12": "var(--space-12)",
        "16": "var(--space-16)",
        "20": "var(--space-20)",
        "24": "var(--space-24)",
        "30": "var(--space-30)",
      },
      borderRadius: {
        photo: "var(--radius-photo)",
        surface: "var(--radius-surface)",
        pill: "var(--radius-pill)",
      },
      maxWidth: { container: "var(--container)" },
      transitionTimingFunction: {
        "out-expo": "var(--ease-out-expo)",
        "out-quint": "var(--ease-out-quint)",
        in: "var(--ease-in)",
      },
      transitionDuration: {
        micro: "var(--dur-micro)",
        hover: "var(--dur-hover)",
        fill: "var(--dur-fill)",
      },
    },
  },
  plugins: [],
};

export default config;
