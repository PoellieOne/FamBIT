# TB-02 - Component Class Layer and Reusable Component Refactor

## Objective

Create a reusable `@layer components` style layer and refactor shared UI components to consume tokens and component classes.

## Exact files to change

- `src/styles/global.css` (add `@layer components` classes)
- `src/components/Header.astro`
- `src/components/LanguageToggle.astro`
- `src/components/Footer.astro`
- optional: `src/components/VerifiedLinks.astro`, `src/components/SafetyNotice.astro` (only if needed for style consistency)

## Definition of done

- Reusable classes exist for header/nav, hero content shell, buttons, cards, section wrappers, footer.
- Shared components use these classes rather than scattered one-off utility stacks.
- Header/nav feels integrated and coherent with hero atmosphere.

## Must NOT change

- No full homepage section reordering yet.
- No cross-page redesign beyond shared component styling.
- No copy/content scope changes.

## QA checks

- `npm run check:i18n`
- `npm run build`
- verify header/footer and language toggle render consistently in EN+ES routes.

## Fail conditions

- Component styles remain fragmented and not token-driven.
- Header/nav still feels bolted-on.
- Any bilingual behavior regression.
