# DESIGN_ACCEPTANCE_CRITERIA_V2

Mode: FAIL-CLOSED  
Scope: Homepage structural reset only (`/` and `/es/`)

PASS requires all checks below. Any single fail => overall FAIL.

## 1) Full-bleed Hero

PASS when:
- Hero background is edge-to-edge full-bleed (100vw feel) on EN and ES homepage.
- Hero reads as one continuous banner, not boxed panel.

FAIL when:
- Hero remains constrained to boxed shell width.

## 2) Full-bleed Dark Footer Anchor

PASS when:
- Footer background is edge-to-edge full-bleed.
- Footer uses dark/near-black anchor tone and clearly closes the page.

FAIL when:
- Footer remains standard boxed card style.

## 3) Floating Sticky Navigation

PASS when:
- Nav appears as centered floating frame.
- Nav remains sticky while scrolling.
- Nav uses glass/blur overlay style (translucent + blur + subtle border/shadow).

FAIL when:
- Nav is static, non-floating, or full-width bar only.
- Sticky behavior is absent.
- Glass/blur style is absent.

## 4) Navigation Readability and Structure

PASS when:
- Nav remains readable over hero image.
- Left: `FamBIT` home link.
- Center items exactly: `Community`, `Roadmap`, `Safety`, `About`.
- Right: EN/ES language dropdown.

FAIL when:
- Readability fails over hero.
- Menu items differ from required set.
- About missing or broken without clear disabled state.
- Language control missing.

## 5) Hero Sub-Block Controlability

PASS when:
- Hero exposes identifiable, independently controllable blocks:
  - H-02a (eyebrow optional)
  - H-02b (headline)
  - H-02c (subtext)
  - H-02d (primary CTA)
  - H-02e (secondary CTA optional)

FAIL when:
- Sub-blocks are merged/opaque and cannot be targeted by STAM control requests.

## 6) EN/ES Parity Integrity

PASS when:
- EN default and ES homepage both render correctly.
- Structural parity is preserved between `/` and `/es/`.
- Language switching keeps same layout behavior.

FAIL when:
- EN/ES diverge structurally or routing breaks.

## 7) Compliance Guardrails

PASS when:
- No wallet connect.
- No buy/swap embeds.
- No price targets/predictions.
- No founder identities.
- No hard funding promises.
- No risky external scripts.

FAIL when:
- Any forbidden element appears.

## 8) Build and QA Evidence

PASS when:
- `npm run check:i18n` passes.
- `npm run build` passes.
- QA report includes proof for sections 1-7 with EN/ES screenshots and built HTML checks.

FAIL when:
- Build/parity fails or evidence is incomplete.

## Final Rule

- Overall PASS only if sections 1 through 8 pass.
- Otherwise FAIL with explicit defect list and targeted rework scope.
