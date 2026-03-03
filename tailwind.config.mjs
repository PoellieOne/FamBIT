/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        surface: {
          0: "var(--color-surface-0)",
          1: "var(--color-surface-1)",
          2: "var(--color-surface-2)"
        },
        ink: {
          strong: "var(--color-ink-strong)",
          body: "var(--color-ink-body)",
          muted: "var(--color-ink-muted)"
        },
        brand: {
          DEFAULT: "var(--color-brand)",
          strong: "var(--color-brand-strong)"
        },
        accent: "var(--color-accent)",
        borderSoft: "var(--color-border-soft)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)"
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        hero: "var(--shadow-hero)"
      },
      spacing: {
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        6: "var(--space-6)",
        8: "var(--space-8)",
        10: "var(--space-10)",
        12: "var(--space-12)",
        16: "var(--space-16)",
        20: "var(--space-20)"
      }
    }
  },
  plugins: []
};
