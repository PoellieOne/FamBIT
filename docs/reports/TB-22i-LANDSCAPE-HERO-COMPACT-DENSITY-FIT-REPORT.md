# TB-22i - Landscape Hero Compact Density Fit

## Changed files list
- `src/styles/global.css`
- `docs/reports/TB-22i-hero-metrics.json`
- `docs/reports/screenshots/tb22i/*`

## Exact before/after values (landscape-only rules)

Applied only in:
- `@media (max-width: 64rem) and (max-height: 30rem) and (orientation: landscape)`

### Hero typography
- `.c-hero-eyebrow`
  - `font-size`: `1rem` -> `0.82rem`
  - `letter-spacing`: `0.054em` -> `0.045em`
- `.c-hero-headline`
  - `margin-top`: `0.7rem` -> `0.35rem`
  - `font-size`: `clamp(2.3rem, 5.4vw, 4.25rem)` -> `clamp(1.55rem, 4.2vw, 2.15rem)`
  - `line-height`: `1.08` -> `1.03`
- `.c-hero-headline-sub`
  - `margin-top`: `0.6rem` -> `0.2rem`
  - `font-size`: `0.78em` -> `0.66em`
  - `line-height`: `1.16` -> `1.12`
- `.c-hero-subtext`
  - `margin-top`: `1.2rem` -> `0.55rem`
  - `max-width`: `620px` -> `31rem`
  - `font-size`: `1rem` -> `0.84rem`
  - `line-height`: `1.6` -> `1.34`
- `.c-hero-microcopy`
  - `margin-top`: `1.1rem` -> `0.45rem`
  - `font-size`: `0.8125rem` -> `0.66rem`
  - `line-height`: default -> `1.24`

### Hero spacing / density
- `.c-home-hero-inner`
  - `padding`: `1.25rem` -> `0.8rem 0.95rem 0.6rem`
- `.c-hero-copy-block`
  - `max-width`: `min(75%, 760px)` -> `min(63%, 34rem)`
- `.c-hero-cta-wrap`
  - `margin-top`: `2.375rem` -> `0.8rem`
  - `gap`: inherited -> `0.45rem !important`
- `.c-hero-cta`
  - `padding`: inherited utility sizing -> `0.44rem 0.85rem !important`
  - `font-size`: inherited utility sizing -> `0.74rem !important`

## Validation summary
- Compact landscape viewport used: `915x412`
- EN + ES tested in top (`scrollY=0`) and scrolled (`scrollY=320`) states.
- Measured outcomes (`docs/reports/TB-22i-hero-metrics.json`):
  - `noNavHeroOverlap` (top): PASS (both locales)
  - `heroTextFullyVisible` (top): PASS (both locales)
  - `noTextClip` (top): PASS (both locales)
  - Hierarchy preserved (headline > subtext and headline > eyebrow): PASS
  - Nav constraints preserved (single-row, inter-button >= 4, edge-gap >= 4, no nav/lang overlap): PASS

## Screenshot evidence
- `docs/reports/screenshots/tb22i/en-compact-landscape-top.png`
- `docs/reports/screenshots/tb22i/en-compact-landscape-scrolled.png`
- `docs/reports/screenshots/tb22i/es-compact-landscape-top.png`
- `docs/reports/screenshots/tb22i/es-compact-landscape-scrolled.png`

Frame with nav + full hero text block in same view:
- `docs/reports/screenshots/tb22i/en-compact-landscape-top.png`
- `docs/reports/screenshots/tb22i/es-compact-landscape-top.png`

## Build checks
- `npm run build`: PASS
- `npm run check:i18n`: PASS

## Final verdict
- PASS: compact landscape hero density now fits without nav/hero overlap, without text clipping, and without regressing nav/language constraints.
