# TB-11 Navigation Logo Integration (Hero Polish Phase 3)

## Objective

Replace nav text wordmark with the provided logo image while preserving one-row nav structure and existing frame geometry.

## Asset source

- `/home/ralph/PoellieOne/FamBIT/fambit-site-v1/images/FamBIT_Transparent_400.png`

## Exact files to change

- `src/components/Header.astro`
- `src/styles/global.css`
- `public/images/*` (copy logo to stable public path if needed)

## Required changes

1. Replace visible text brand (`FamBIT`) with logo image only.
2. Logo remains homepage link.
3. Responsive logo heights:
   - desktop: 40-44px
   - tablet: 34-38px
   - mobile: 28-32px
4. Logo must never exceed nav container height.
5. Hover effect on logo:
   - scale `1.05`
   - subtle glow using `#02B649`

## Must NOT change

- No nav frame position changes.
- No hero structure changes.
- No STAM block ID changes.

## QA checks

1. `npm run build`
2. EN/ES screenshot checks for logo sizing on desktop/tablet/mobile.
3. Verify logo click routes home correctly.
4. Verify hover effect behavior.

## Fail conditions

- Text wordmark still visible instead of logo.
- Logo exceeds nav frame height.
- Logo not linked to homepage.
- Any structural layout shift.
