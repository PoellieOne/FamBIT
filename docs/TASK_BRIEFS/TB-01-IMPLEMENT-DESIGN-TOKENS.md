# TB-01 - Implement Design Tokens (Token-First)

## Objective

Implement semantic design tokens in Tailwind config and global CSS to establish the new homepage vibe baseline.

## Exact files to change

- `tailwind.config.mjs`
- `src/styles/global.css`

## Definition of done

- Token set from `docs/DESIGN_TOKENS_SPEC.md` is implemented and mapped.
- Tailwind semantic extensions exist for color/font/radius/shadow/spacing.
- Global CSS defines root tokens and baseline body/section rhythm primitives.
- No homepage structural rewrite yet.

## Must NOT change

- No page template restructuring in this TB.
- No content rewrites.
- No route or i18n behavior changes.

## QA checks

- `npm run build`
- verify compiled CSS contains expected token-driven utilities/classes.
- visual smoke check: homepage loads with new baseline tone, no broken layout.

## Fail conditions

- Tokens partially implemented or non-semantic hardcoded values dominate.
- Build fails.
- Unexpected route/i18n regressions introduced.
