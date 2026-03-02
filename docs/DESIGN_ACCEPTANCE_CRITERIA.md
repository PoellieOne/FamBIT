# DESIGN_ACCEPTANCE_CRITERIA

Mode: FAIL-CLOSED  
Scope: Layout architecture parity vs reference template

## PASS/FAIL Framework

All mandatory items must pass. Any single mandatory fail = overall FAIL.

## A) Hero + Navigation Structural Alignment (Mandatory)

- [ ] Header/nav is structurally integrated with hero composition.
- [ ] Hero is dominant first-screen visual authority.
- [ ] Primary/secondary CTA hierarchy exists inside hero logic.
- [ ] Language toggle is integrated within header/nav without structural distortion.

FAIL if:
- navigation is separated from hero
- hero appears decorative-only
- banner does not set page mood

## B) Hero Proportion and Positioning (Mandatory)

- [ ] Hero occupies proportionally dominant space comparable to reference behavior.
- [ ] Headline/support copy placement mirrors template hierarchy intent.
- [ ] Banner image treatment preserves readability and authority.

FAIL if:
- hero proportion is compressed to standard panel height
- copy hierarchy is flattened or moved out of hero context

## C) Typography Hierarchy (Mandatory)

- [ ] Visual hierarchy consistently reads: section label -> title -> support text -> list/cards.
- [ ] Heading scale progression is coherent across all routes.
- [ ] CTA prominence is consistent with template logic.

FAIL if:
- typography rank order differs materially from template model
- headings and body text carry near-equal weight

## D) Spacing Rhythm and Visual Density (Mandatory)

- [ ] Section spacing follows an intentional alternating rhythm (dense / breathable / dense).
- [ ] Card-grid and media/text alternation resembles template cadence.
- [ ] Footer has lower visual weight than hero but clear hierarchy.

FAIL if:
- pages are mostly identical stacked panels
- visual density is flat and monotone

## E) Template Atmosphere Preservation (Mandatory)

- [ ] First impression feels banner-led and editorially composed.
- [ ] Mid-page transitions preserve template-like pacing.
- [ ] Overall atmosphere is preserved after FamBIT mapping.

FAIL if:
- implementation reads as old layout with template fragments
- atmosphere mismatch is obvious in first two scroll depths

## F) Mandatory Banner Constraint (Mandatory)

- [ ] Source file exists:
  - `/home/ralph/PoellieOne/FamBIT/images/StockCake-Unity_Through_Diversity-3355074-standard.jpg`
- [ ] Deployed file exists:
  - `public/images/home-main-banner.jpg`
- [ ] Banner rendered on:
  - `/` and `/es/`

FAIL if:
- required banner absent on EN or ES home
- required banner not visually primary in hero

## G) Bilingual Structural Parity (Mandatory)

- [ ] EN and ES use the same structural skeleton.
- [ ] No locale-specific divergence in hero/nav/footer architecture.
- [ ] `npm run check:i18n` passes.

FAIL if:
- EN and ES diverge in component hierarchy
- i18n key parity fails

## H) Compliance Guardrails (Mandatory)

- [ ] Official links remain exact and present on safety + footer.
- [ ] Disclaimers remain present on safety + footer.
- [ ] No forbidden language introduced (price promises, trading guidance, manipulation cues, internal infra).

FAIL if:
- official links drift
- any forbidden language appears

## I) Build and Evidence Completeness (Mandatory)

- [ ] `npm run build` succeeds.
- [ ] Screenshot set includes EN/ES desktop+mobile for home/safety/community/roadmap.
- [ ] Parity report + layout map + QA checks documents are present and complete.

FAIL if:
- evidence bundle is incomplete
- build output does not match required routes

## Final Decision Rule

- PASS only if sections A through I all pass.
- Otherwise FAIL with explicit defect list and rework scope.
