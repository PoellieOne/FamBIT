# TB-14 Narrative-First UX Refactor

Date: 2026-03-02  
Workdir: `/home/ralph/PoellieOne/FamBIT/fambit-site-v1`

## Commands run

- `npm run check:i18n`
- `npm run build`
- `node -e '...extract CTA flow targets from dist EN/ES routes...'`
- `rg -n "...added narrative context markers..." dist/...`
- `rg -n -i "(buy now|connect wallet|price target|price prediction|roi|guaranteed returns|founder|OpenClaw|VPS|automation|\bbot\b)" src/content src/pages`

## Gate result

**PASS**

- Parity: `Parity check passed for 5 locale file pairs.`
- Build: success, 8 routes built.
- Narrative-first rules applied on EN + ES pages.

## What changed

### Templates refactored

- `src/pages/index.astro`
- `src/pages/safety.astro`
- `src/pages/community.astro`
- `src/pages/roadmap.astro`
- `src/pages/es/index.astro`
- `src/pages/es/safety.astro`
- `src/pages/es/community.astro`
- `src/pages/es/roadmap.astro`

### Content additions (necessary only)

- `src/content/en/safety.json`
- `src/content/es/safety.json`
- `src/content/en/community.json`
- `src/content/es/community.json`
- `src/content/en/roadmap.json`
- `src/content/es/roadmap.json`
- `src/content/en/site.json`
- `src/content/es/site.json`

## Explicit proof: bullets reduced and contextual text added

### `/safety` and `/es/safety`

- Kept one core bullet block immediately after narrative (`whatThisMeans`).
- Added contextual intro text before each remaining practical block:
  - verification instruction intro
  - admin rules intro
  - reporting steps intro
- Evidence in built HTML:
  - `dist/safety/index.html` contains:
    - `Before you trust any message, confirm you are looking at the right public source.`
    - `Legitimate support behavior follows clear patterns you can verify in public.`
    - `If something feels suspicious, use this simple reporting routine.`
  - `dist/es/safety/index.html` contains ES equivalents.

### `/community` and `/es/community`

- Added narrative transition intro above rituals/values/moderation/contribute.
- Added one begeleidende zin per section before list/body content.
- Evidence in built HTML:
  - `dist/community/index.html` includes:
    - `These recurring habits keep the community grounded and predictable.`
    - `Shared values help people make better decisions when conversations move fast.`
  - `dist/es/community/index.html` includes ES equivalents.

### `/roadmap` and `/es/roadmap`

- Added phase-context intro above phase cards.
- Added a short explanation sentence per phase before the 3 items.
- Kept each phase at 3 concrete items.
- Evidence in built HTML:
  - `dist/roadmap/index.html` includes:
    - `Each phase keeps one clear focus so progress stays visible and realistic.`
    - `This phase builds a shared safety baseline everyone can follow.`
  - `dist/es/roadmap/index.html` includes ES equivalents.

### `/` and `/es/`

- Maintained one primary bullet block after narrative.
- Added context sentence before CTA and intros for legal expectation blocks.

## Flow improvement proof (home -> safety -> community -> roadmap)

Extracted from built output CTA links:

- `dist/index.html` -> `Read safety guidance` -> `/safety`
- `dist/safety/index.html` -> `Check verified links now` -> `/community`
- `dist/community/index.html` -> `See roadmap progress` -> `/roadmap`
- `dist/roadmap/index.html` -> `Return to the safe home base` -> `/`

ES path flow:

- `dist/es/index.html` -> `/es/safety`
- `dist/es/safety/index.html` -> `/es/community`
- `dist/es/community/index.html` -> `/es/roadmap`
- `dist/es/roadmap/index.html` -> `/es`

## Guardrail confirmation

- No forbidden scope language found in updated source files.
- No internal details added.
- Tone remains warm, calm, growth-minded, and safety-first.
