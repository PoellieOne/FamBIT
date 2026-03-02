# TB-13 Safety CTA Loop Fix

Date: 2026-03-02  
Workdir: `/home/ralph/PoellieOne/FamBIT/fambit-site-v1`

## Change applied

- Updated EN safety CTA target:
  - `src/content/en/safety.json`
  - `cta.href`: `/safety` -> `/community`
- Updated ES safety CTA target:
  - `src/content/es/safety.json`
  - `cta.href`: `/safety` -> `/community`

No template change was required.

## Build evidence

- Command: `npm run build`
- Result: success (`[build] Complete!`)

## Built output evidence (no self-loop)

Validation command extracted CTA anchor hrefs from built safety pages.

- `dist/safety/index.html`:
  - `Check verified links now` -> `/community`
- `dist/es/safety/index.html`:
  - `Verificar enlaces oficiales` -> `/es/community`

Conclusion: safety CTA routes are no longer self-referential.

## Guardrail check

- CTA wording remains non-financial and non-speculative.
