# DESIGN_TOKENS_SPEC

Scope: Homepage design system baseline (implementable in Tailwind + global CSS)

## 1) Color tokens

```css
:root {
  --color-surface-0: #f7f9fc;
  --color-surface-1: #eef3f8;
  --color-surface-2: #e3ebf3;
  --color-ink-strong: #0f172a;
  --color-ink-body: #243247;
  --color-ink-muted: #5b6b82;
  --color-brand: #5b4df4;
  --color-brand-strong: #4337cb;
  --color-accent: #66c2a5;
  --color-border-soft: #d3ddea;
}
```

Intent:
- Surfaces remain bright, soft, non-clinical.
- Ink hierarchy avoids pure black for body text.
- Brand and accent remain controlled, not neon-dominant.

## 2) Typography tokens

```css
:root {
  --font-display: "Inter Display", "Inter", "Segoe UI", sans-serif;
  --font-body: "Inter", "Atkinson Hyperlegible", "Segoe UI", sans-serif;

  --lh-display: 1.08;
  --lh-title: 1.18;
  --lh-body: 1.6;
  --lh-meta: 1.4;

  --fs-hero: clamp(2rem, 4.8vw, 3.9rem);
  --fs-h2: clamp(1.45rem, 2.2vw, 2.1rem);
  --fs-body: 1rem;
  --fs-meta: 0.875rem;
}
```

Intent:
- Strong display presence in hero.
- Comfortable body reading line-height.
- Meta text clearly subordinate.

## 3) Spacing scale tokens

```css
:root {
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;

  --section-pad-y: clamp(2.25rem, 5vw, 4.75rem);
  --section-gap: clamp(1rem, 2vw, 1.75rem);
}
```

Intent:
- Airy vertical pacing.
- Stable section rhythm across breakpoints.

## 4) Radius + shadow tokens

```css
:root {
  --radius-sm: 0.625rem;
  --radius-md: 0.9rem;
  --radius-lg: 1.25rem;
  --radius-xl: 1.75rem;

  --shadow-soft: 0 10px 28px -20px rgba(15, 23, 42, 0.35);
  --shadow-card: 0 18px 42px -28px rgba(15, 23, 42, 0.42);
  --shadow-hero: 0 30px 80px -42px rgba(15, 23, 42, 0.52);
}
```

Intent:
- Soft premium depth.
- No hard drop-shadows.

## 5) Tailwind mapping requirements

In `tailwind.config.mjs` extend tokens with semantic names:
- `colors`: `surface`, `ink`, `brand`, `accent`, `borderSoft`
- `fontFamily`: `display`, `body`
- `borderRadius`: `sm`, `md`, `lg`, `xl`
- `boxShadow`: `soft`, `card`, `hero`
- `spacing`: include `10`, `12`, `16`, `20`

In `src/styles/global.css`:
- define token variables in `:root`
- set body defaults (`font-family`, base ink, background layers)
- provide utility classes for section rhythm and atmosphere wrappers
