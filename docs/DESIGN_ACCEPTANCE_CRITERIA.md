# DESIGN_ACCEPTANCE_CRITERIA

Mode: FAIL-CLOSED  
Scope: Homepage only (EN + ES)

All mandatory checks must pass. Any single fail = overall FAIL.

## A) Hero atmosphere match (mandatory)

PASS when:
- Hero feels calm, premium, airy, and confident on first screen.
- Hero controls page mood and visual authority.

FAIL when:
- Hero feels generic, heavy, noisy, or decorative-only.
- Framer-inspired atmosphere is not perceptible.

## B) Typography hierarchy clarity (mandatory)

PASS when:
- Headline > subcopy > CTA > support content are clearly ranked.
- No ambiguity between title and body scales.

FAIL when:
- Hierarchy appears flat or confusing.

## C) Spacing rhythm quality (mandatory)

PASS when:
- Section spacing is breathable and consistent.
- No cramped clusters in hero or first two sections.

FAIL when:
- Rhythm feels tight, uneven, or visually rushed.

## D) Header/Nav integration (mandatory)

PASS when:
- Header/nav feels structurally integrated with hero composition.
- Language toggle is naturally embedded in header behavior.

FAIL when:
- Header/nav appears bolted on or detached from hero.

## E) Structural integrity vs legacy layout (mandatory)

PASS when:
- Homepage reads as design-first system using tokens/components.

FAIL when:
- Page still feels like old layout with new styling sprinkled.

## F) Token-first implementation quality (mandatory)

PASS when:
- Token usage is semantic and centralized (Tailwind + global CSS).
- Component styles are reusable and consistent.

FAIL when:
- Styling remains ad-hoc with hardcoded one-off values.

## G) Bilingual behavior integrity (mandatory)

PASS when:
- EN default and ES homepage remain functional.
- EN/ES homepage structure remains aligned.

FAIL when:
- Bilingual routing or parity is broken.

## H) Compliance guardrails (mandatory)

PASS when:
- No wallet connect, no buy/swap embeds.
- No price targets/predictions.
- No founder identities.
- No hard funding promises.
- No risky external scripts.

FAIL when:
- Any of the above appears.

## I) Build integrity and evidence completeness (mandatory)

PASS when:
- `npm run check:i18n` passes.
- `npm run build` passes.
- QA evidence clearly demonstrates homepage criteria A-H.

FAIL when:
- build/parity fails or evidence is incomplete.

## Final decision

- PASS only if A-I all pass.
- Otherwise FAIL with explicit defect list and targeted rework scope.
