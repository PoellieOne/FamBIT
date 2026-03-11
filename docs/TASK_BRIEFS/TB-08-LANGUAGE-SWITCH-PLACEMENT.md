# TB-08 Language Switch Placement (Hero Phase 2)

## Objective

Move language selector out of navigation and place it in the hero top-right corner as a minimal pill dropdown.

## Exact files to change

- `src/components/Header.astro`
- `src/components/LanguageToggle.astro` (if needed for rendering mode)
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`

## Required changes

1. Remove language selector from nav row.
2. Place language switch in hero top-right corner on homepage EN/ES.
3. Keep control style minimal:
   - small pill
   - white text
   - compact dropdown
4. Keep language behavior unchanged:
   - EN default
   - ES route support

## Definition of done

- No language selector in nav.
- Hero top-right switch visible and functional on `/` and `/es/`.
- EN/ES switching keeps route parity and current behavior.

## Must NOT change

- No hero container geometry changes.
- No nav frame geometry changes.
- No breakpoint changes.
- No STAM block ID changes.

## QA checks

1. `npm run check:i18n`
2. `npm run build`
3. Verify switch is absent from nav and present in hero top-right.
4. Verify EN->ES and ES->EN switching still works.

## Fail conditions

- Language selector remains in nav.
- Hero top-right switch missing or non-functional.
- Any structural drift in nav/hero layout.
