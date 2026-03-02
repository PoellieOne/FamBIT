# REVISED_AGENT_TASK_BRIEF

Project: S03 - FamBIT Website V1  
Mode: CONTRACT + DESIGN CORRECTION  
Directive: Template-first layout re-architecture

## 1) Mission

Rebuild the website layout from the reference template skeleton, then map FamBIT content into that skeleton.

This is a structural reset task, not a content refresh and not a styling patch.

Reference:
- `https://modest-tools-169267.framer.app/`

## 2) Non-Negotiable Execution Rules

1. Start from template architecture (header, hero, section rhythm, footer hierarchy).
2. Remove conflicting legacy layout assumptions where needed.
3. Do not patch incrementally on top of prior structure if it blocks template parity.
4. Content adaptation is secondary to structural correctness.
5. EN/ES logic is allowed only as a minimal adaptation layer.

## 3) Required Rebuild Scope

Routes:
- `/`
- `/safety`
- `/community`
- `/roadmap`
- `/es/`
- `/es/safety`
- `/es/community`
- `/es/roadmap`

Core layout components to rebuild in template-first form:
- hero-integrated header/navigation system
- hero block with dominant banner and in-hero action hierarchy
- section rhythm wrappers (not generic repeated panels)
- card/grid zones with template-like density progression
- footer hierarchy and weight model

## 4) Mandatory Hero + Nav Architecture

Required outcome:
- Navigation is part of hero system, not detached.
- Hero is visually dominant first impression.
- CTA hierarchy in hero mirrors template logic (primary + secondary behavior).

Mandatory banner asset:
- source: `/home/ralph/PoellieOne/FamBIT/images/StockCake-Unity_Through_Diversity-3355074-standard.jpg`
- deployed: `public/images/home-main-banner.jpg`
- render on `/` and `/es/` as primary hero authority

## 5) FamBIT Mapping Rules

Map existing approved content into template structure:
- safety/verification as trust blocks replacing donation mechanics
- community rituals/values replacing causes/program placeholders
- roadmap phases replacing campaign progress structures

Do not carry over template charity copy, donation language, or external placeholder links.

## 6) Bilingual Integration Rule

- EN and ES must share the same structural skeleton.
- Language toggle lives inside header/nav system and must not break template geometry.
- No locale-specific structural drift.

## 7) Hard Scope Boundaries (Fail-Closed)

- No internal tooling/infra mentions.
- No trading guidance, price predictions, or financial promises.
- No founder identity disclosure.
- Official links must remain exact and appear on `/safety` + footer.

Official links (exact):
- `https://x.com/FamBIT_Sol`
- `https://t.me/FamBIT_Official`
- `https://pump.fun/coin/Fu8KCiAYUFN47xpRjbTPXPLHPgYRH7Xdbwc748GRpump`

## 8) Required Evidence Artifacts

Produce:
- `docs/reports/REBUILD-TEMPLATE-PARITY-REPORT.md`
- `docs/reports/REBUILD-LAYOUT-MAP.md`
- `docs/reports/REBUILD-QA-CHECKS.md`

`REBUILD-TEMPLATE-PARITY-REPORT.md` must include:
- hero/nav structural comparison table (template vs implementation)
- section rhythm comparison table
- typography hierarchy comparison table
- explicit list of removed old layout assumptions

`REBUILD-LAYOUT-MAP.md` must include:
- component tree for home + one inner page (EN and ES)
- mapping of FamBIT content blocks to template-equivalent slots

`REBUILD-QA-CHECKS.md` must include:
- `npm run check:i18n` output
- `npm run build` output
- fail-closed scan output
- screenshot index (desktop + mobile, EN + ES)

## 9) Execution Quality Bar

Expected visual verdict:
- "Template architecture adapted to FamBIT".

Rejected visual verdict:
- "Previous layout with template fragments".

## 10) Delivery Gate

Delivery is accepted only if DESIGN_ACCEPTANCE_CRITERIA passes with no failed mandatory item.
