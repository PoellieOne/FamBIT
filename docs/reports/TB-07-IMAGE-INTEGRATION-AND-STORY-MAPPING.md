# TB-07 Image Integration and Story Mapping

Date: 2026-03-02  
Workdir: `/home/ralph/PoellieOne/FamBIT/fambit-site-v1`

## Status

PASS

## Image map applied

- Home hero (mandatory): `public/images/home-main-banner.jpg`
  - Routes: `/`, `/es/`
  - Visual role: primary banner anchor above-the-fold.
- Community culture visuals:
  - `public/images/community-garden-circle.jpg`
  - `public/images/community-kids-garden.jpg`
  - Routes: `/community`, `/es/community`
- Roadmap supporting visual:
  - `public/images/roadmap-community-sunset.jpg`
  - Routes: `/roadmap`, `/es/roadmap`
- Safety page: no extra image added (intentionally excluded to keep clarity-first anti-scam reading flow).

## Mandatory banner proof

- Required source image is deployed to `public/images/home-main-banner.jpg`.
- Banner rendered on both EN and ES home routes.
- Built HTML proof references:
  - `dist/index.html` includes `src="/images/home-main-banner.jpg"`
  - `dist/es/index.html` includes `src="/images/home-main-banner.jpg"`

## Alt text checklist

- EN home banner: `Community members standing together outdoors`
- ES home banner: `Miembros de la comunidad reunidos al aire libre`
- EN community image 1: `Community members standing in a supportive circle outdoors`
- ES community image 1: `Miembros de la comunidad reunidos en un circulo de apoyo al aire libre`
- EN community image 2: `Adults and children gardening together as a learning community`
- ES community image 2: `Personas adultas y ninas y ninos trabajando juntos en un jardin comunitario`
- EN roadmap image: `A group gathered at sunset symbolizing shared long term direction`
- ES roadmap image: `Grupo reunido al atardecer que simboliza una direccion compartida a largo plazo`

## Responsive evidence (desktop + mobile)

Screenshots proving image loading and layout stability:

- `docs/reports/screenshots/tb07/en-home-desktop.png`
- `docs/reports/screenshots/tb07/en-home-mobile.png`
- `docs/reports/screenshots/tb07/en-community-desktop.png`
- `docs/reports/screenshots/tb07/en-community-mobile.png`
- `docs/reports/screenshots/tb07/en-roadmap-desktop.png`
- `docs/reports/screenshots/tb07/en-roadmap-mobile.png`
- `docs/reports/screenshots/tb07/es-home-desktop.png`
- `docs/reports/screenshots/tb07/es-home-mobile.png`
- `docs/reports/screenshots/tb07/es-community-desktop.png`
- `docs/reports/screenshots/tb07/es-community-mobile.png`

## Technical guardrail checks

- Build path image references resolved:
  - `/images/home-main-banner.jpg` -> exists in `dist`
  - `/images/community-garden-circle.jpg` -> exists in `dist`
  - `/images/community-kids-garden.jpg` -> exists in `dist`
  - `/images/roadmap-community-sunset.jpg` -> exists in `dist`
- No `.xcf` in runtime path (`public`, `dist`).
- No remote hotlinks used.

## Performance note (no severe regression)

Lighthouse spot-check after integration:

- `docs/reports/lighthouse-tb07-home-en.json`
  - Performance 99, Accessibility 100, Best Practices 100, SEO 92, LCP 2103 ms
- `docs/reports/lighthouse-tb07-community-en.json`
  - Performance 99, Accessibility 100, Best Practices 100, SEO 92, LCP 2103 ms

Conclusion: no severe performance regression introduced by added local images.

## Story mapping summary

- Home banner + narrative: togetherness and identity.
- Community visuals: care, participation, intergenerational learning.
- Roadmap visual: stability and long-term direction without financial cues.
- Overall message remains trust/safety first and non-speculative.
