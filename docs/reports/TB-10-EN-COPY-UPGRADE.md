# TB-10 EN Copy Upgrade

Date: 2026-03-02  
Workdir: `/home/ralph/PoellieOne/FamBIT/fambit-site-v1`

## Scope Completed

- Updated EN narrative copy in:
  - `src/content/en/home.json`
  - `src/content/en/safety.json`
  - `src/content/en/community.json`
  - `src/content/en/roadmap.json`
  - `src/content/en/site.json` (legal/disclaimer labels)
- Updated page templates only to render new text fields:
  - `src/pages/index.astro`
  - `src/pages/safety.astro`
  - `src/pages/community.astro`
  - `src/pages/roadmap.astro`
  - `src/pages/es/index.astro`
  - `src/pages/es/safety.astro`
  - `src/pages/es/community.astro`
  - `src/pages/es/roadmap.astro`

## Build and parity evidence

- `npm run check:i18n` -> `Parity check passed for 5 locale file pairs.`
- `npm run build` -> success, static output, 8 routes built.

## Per-route verification (EN)

### `/` Home

- Headline: present (`hero.title`)
- Subhead: present (`hero.subhead`)
- Narrative presence: present (2 short paragraphs in `narrative.paragraphs`)
- What this means bullets: present (4 bullets in `whatThisMeans.items`)
- Non-financial CTA: present (`cta.label`: "Read safety guidance")
- Trust microcopy: present (`trust.microcopy`)

### `/safety`

- Headline: present (`hero.title`)
- Subhead: present (`hero.subhead`)
- Narrative presence: present (2 short paragraphs in `narrative.paragraphs`)
- What this means bullets: present (4 bullets in `whatThisMeans.items`)
- Non-financial CTA: present (`cta.label`: "Check verified links now")
- Trust microcopy: present (`trust.microcopy`)
- Extra required blocks: present
  - Anti-scam checklist (`whatThisMeans.items`)
  - Official links verification instruction (`verification.instruction`)
  - Admin behavior rules (`adminRules.items`)
  - Reporting steps (`reporting.steps`)

### `/community`

- Headline: present (`hero.title`)
- Subhead: present (`hero.subhead`)
- Narrative presence: present (2 short paragraphs in `narrative.paragraphs`)
- What this means bullets: present (4 bullets in `whatThisMeans.items`)
- Non-financial CTA: present (`cta.label`: "Support safe onboarding")
- Trust microcopy: present (`trust.microcopy`)
- Extra required blocks: present
  - 3-5 rituals (`rituals.items`: 4)
  - Community values (`values.items`)
  - Moderation stance (`moderation.body`)
  - How to contribute (`contribute.items`)

### `/roadmap`

- Headline: present (`hero.title`)
- Subhead: present (`hero.subhead`)
- Narrative presence: present (2 short paragraphs in `narrative.paragraphs`)
- What this means bullets: present (4 bullets in `whatThisMeans.items`)
- Non-financial CTA: present (`cta.label`: "Follow public progress")
- Trust microcopy: present (`trust.microcopy`)
- Extra required blocks: present
  - Max 3 phases (`phases`: 3)
  - Per phase exact 3 items (`phases[*].items`: 3 each)
  - No price/listing/partnership promises (negative promises explicit in copy)

## CTA list (EN)

- Home: `Read safety guidance`
- Safety: `Check verified links now`
- Community: `Support safe onboarding`
- Roadmap: `Follow public progress`

## Trust microcopy list (EN)

- Home: `Trust is built by verification, not urgency.`
- Safety: `Pause, verify, then decide.`
- Community: `Healthy culture is a daily safety practice.`
- Roadmap: `Visibility builds trust when words and actions stay aligned.`

## Guardrails included in EN content

- Short disclaimer set present in `src/content/en/site.json`:
  - `No investment advice.`
  - `No guarantees.`
- "What we are / What we are not" section present in `src/content/en/site.json` and rendered on home.
