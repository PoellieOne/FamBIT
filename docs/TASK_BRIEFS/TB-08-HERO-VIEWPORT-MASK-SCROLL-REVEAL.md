# TB-08 - Hero Viewport Fill + Dark Mask + Scroll Reveal

## Objective

Ensure homepage opens as a full-screen hero experience and reveals body content only after scroll, with template-inspired dark mask treatment over the hero image.

## Exact files to change

- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`
- optional: `src/pages/index.astro`, `src/pages/es/index.astro` (only if hero props need extension)

## Required changes

1. Hero must fill full viewport height at page open (`min-height: 100vh` behavior on home EN/ES).
2. Main homepage content should begin below first viewport so user scrolls into it.
3. Add deliberate dark mask/overlay over hero image (not flat dimming only):
   - readability-focused
   - atmosphere-preserving
4. Maintain legibility for nav + hero text + CTA on top of masked image.

## Definition of done

- On `/` and `/es/`, hero is full-screen on load.
- Non-hero content is encountered after scroll, not competing in first viewport.
- Dark mask effect visibly deepens lower/critical reading zones.
- CTA and nav remain readable against image + mask.

## Must NOT change

- No content rewrite.
- No change to nav item names or language behavior.
- No changes to STAM access/crawler controls.

## QA checks

1. `npm run check:i18n`
2. `npm run build`
3. Verify hero viewport behavior in EN/ES desktop + mobile screenshots.
4. Verify first viewport does not show body section crowding.
5. Verify contrast/readability in hero for nav + headline + CTA.

## Fail conditions

- Hero fails to occupy first viewport.
- Body content visibly intrudes in initial hero viewport.
- Mask effect absent or too weak to support readability.
- Nav/hero text contrast becomes unreadable.
