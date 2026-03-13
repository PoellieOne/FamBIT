# TB-22b — Mobile Nav Scale-Set and Language-Offset Stabilization

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Contract + Design Governance + QA

## Mission
Implement a stable mobile nav profile where button content scales as a set under container pressure and language-button overlap is prevented via a robust lower offset profile.

## Scope
- CSS-only implementation.
- Keep current architecture and ALL CAPS.
- Apply changes to existing nav token/geometry model.

## Required behavior

### 1) Scale-set behavior (container pressure)
- Nav button **font-size + padding + border shell** must scale together (same profile), not independently.
- Goal: prevent left overlap/right spill while preserving button identity.

### 2) Container geometry integrity
- `logo + menu buttons` remain centered as one set.
- Internal side air remains positive and stable.
- Inter-button min gap floor remains >= 4px.

### 3) Language-button anti-overlap profile
- If smart breakpoint logic is not 100% reliable, enforce a generally lower vertical profile on mobile/tablet.
- Language-button must not overlap nav container.
- Z-layer profile remains below nav where specified.
- Scroll behavior must remain stable (no drift/push artifacts).

## Hard constraints
- Single-row nav only.
- No clipping/ellipsis.
- No hero layout regression.
- No markup refactor.

## Acceptance criteria
- Real-device mobile test shows:
  - no nav button spill/overlap
  - no nav-language overlap
  - centered nav set remains visually intact
- Matrix checks remain PASS for EN/ES top+scrolled states.

## Fail conditions
FAIL if:
- first/last button breaches container
- logo/button overlap appears
- language button overlaps nav in any mobile/tablet target
- gap floor < 4px
- scroll instability appears

## Verplichte oplevering
- Changed files list.
- Exact before/after values for:
  - nav scale-set tokens (font/padding/border-shell)
  - container spacing/margins
  - language offset + z-layer per breakpoint
- Report: `docs/reports/TB-22b-MOBILE-NAV-SCALESET-LANG-OFFSET-STABILIZATION-REPORT.md`
- Evidence screenshots: `docs/reports/screenshots/tb22b/`
- Build checks:
  - `npm run build`
  - `npm run check:i18n`
- Explicit note from real-device validation (PASS/FAIL).
