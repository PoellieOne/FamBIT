# TB-03 - Homepage Hero + Header/Nav + Section Rhythm Refactor

## Objective

Refactor homepage only to express the new design system: hero authority, integrated nav/header, and premium airy rhythm.

## Exact files to change

- `src/pages/index.astro`
- `src/pages/es/index.astro`
- `src/layouts/BaseLayout.astro` (only if needed to support homepage hero behavior)
- optional homepage-related shared classes in `src/styles/global.css`

## Definition of done

- Homepage hero clearly sets mood and hierarchy (headline/subcopy/CTA relationship).
- Nav/header feels integrated and native to first-screen composition.
- Section rhythm is airy and coherent; no cramped stacks.
- EN and ES homepage share same structure and style logic.

## Must NOT change

- No redesign of `/safety`, `/community`, `/roadmap` in this phase.
- No content rewrite outside layout presentation adjustments.
- No changes to official links logic or safety/compliance constraints.

## QA checks

- `npm run check:i18n`
- `npm run build`
- compare `/` and `/es/` for structural parity.
- confirm hero + nav integration in built HTML.
- confirm required banner remains active on EN+ES home.

## Fail conditions

- Hero mood does not read calm/premium/airy.
- Header/nav still appears bolted-on.
- Homepage feels like old layout with new styles sprinkled.
- ES homepage deviates structurally from EN homepage.
