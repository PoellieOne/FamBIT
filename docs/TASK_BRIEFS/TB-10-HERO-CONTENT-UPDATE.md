# TB-10 Hero Content Update (Hero Phase 2)

## Objective

Update hero content, text positioning, and CTA styling per Phase 2 direction without changing hero structure.

## Exact files to change

- `src/layouts/BaseLayout.astro`
- `src/content/en/home.json`
- `src/content/es/home.json`
- `src/styles/global.css`

## Required content/styling updates

### Eyebrow (H-02a)

- Text: `COMMUNITY WITH A COIN`
- Style:
  - color `#02B649`
  - uppercase
  - small caps feel
  - letter spacing `+5%`

### Headline (H-02b)

Text (line break allowed):

`Family helps family.`  
`Real-world missions funded together.`

Style:
- white
- bold
- large display
- compact line spacing

### Subtext (H-02c)

Text:

`FamBIT is a community where people support real-world missions together through transparent rules and shared participation.`

Style:
- soft white/light gray
- no crypto jargon additions

### Text position

- Anchor hero text block bottom-left
- max width `620px`
- left alignment only

### CTA (H-02d)

Primary label: `Explore missions`
- background `#02B649`
- white text
- rounded

Secondary label: `Start a mission`
- transparent background
- white border

Hover for CTA family:
- subtle green glow

### Trust microcopy (H-02e)

`Transparent rules • Community driven • No hype`

Style:
- small text
- soft white

## Definition of done

- All hero texts and styles updated as specified.
- Text block clearly bottom-left anchored and not centered.
- CTA visual hierarchy and hover behavior implemented.
- EN/ES parity preserved.

## Must NOT change

- No hero layout structure changes.
- No hero container geometry changes.
- No nav frame structure changes.
- No breakpoint changes.
- No STAM block ID changes.

## QA checks

1. `npm run check:i18n`
2. `npm run build`
3. Verify H-02a..H-02e content in EN/ES output.
4. Visual check for bottom-left anchor and max-width behavior.
5. Verify CTA styles and green-glow hover.

## Fail conditions

- Hero text appears centered.
- Required text strings not present.
- CTA style requirements not met.
- Any structural modifications beyond content/styling/positioning scope.
