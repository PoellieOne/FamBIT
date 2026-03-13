# TB-22a — Mobile Nav Real-Device Diagnosis and Reconstruction Plan

## Role / Mode
Gatekeeper (S03 / FamBIT)
Mode: Research + Contract Preparation

## Mission
Produce a read-only diagnosis and reconstruction plan for remaining real-device nav defects before any implementation.

## Why this exists
Desktop/screenshot matrix can pass while real-device behavior still fails.
This brief establishes device-first truth and a deterministic rebuild plan.

## Scope
- Read-only investigation.
- No CSS or markup changes.
- Focus only on nav container geometry + button scaling behavior + language-button positioning/layer behavior.

## Required questions to answer
1. Can nav button typography and button shell (padding/border) scale together as container pressure increases?
2. Which current rules cause the left button overlap / right spill behavior on real devices?
3. Why does language-button overlap still happen in mobile cases?
4. What is the safest universal profile for language button vertical offset to prevent overlap?

## Required outputs
- Root-cause list (max 7 bullets).
- Options A/B/C for reconstruction (no patching), each with:
  - model concept
  - pros
  - risks
  - expected stability
- One recommended option.
- Concrete implementation blueprint for TB-22b (file-level + test-level).

## Constraints
- ALL CAPS remains enabled.
- No architecture drift.
- No implementation in this TB.

## Verification plan to include
- Real-device-first checks (minimum 1 physical mobile session).
- Fixed viewport matrix for reproducibility.
- Top vs scrolled checks for language behavior.
