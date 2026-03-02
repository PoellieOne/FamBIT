# DESIGN CONTRACT

Project: S03 - FamBIT Website V1  
Role: Gatekeeper (CONTRACT + DESIGN CORRECTION + QA)  
Reference baseline: `https://modest-tools-169267.framer.app/`

## 1) Contract Intent

This contract enforces a template-first layout architecture.

Interpretation rule:
- The reference template is not style inspiration.
- The reference template is the structural source model.

Priority order (binding):
1. Template structure
2. Template layout logic
3. Template component hierarchy
4. FamBIT content mapping
5. Minimal bilingual adaptations only

## 2) Template Decomposition (Required Structural Model)

### 2.1 Header Structure

Must replicate:
- Brand mark/logo area
- Primary navigation group
- Primary action button area
- Mobile nav behavior equivalent to template intent

Placement rule:
- Header/navigation must be integrated in the hero banner region as part of the opening composition.
- Detached top bar outside hero is non-compliant.

### 2.2 Hero Composition

Must replicate:
- Dominant full-width visual banner as first visual authority
- Headline + support copy layered over banner or in a directly attached hero content block
- Primary and secondary actions positioned in hero context

Hero role:
- Sets page mood, typographic hierarchy, spacing rhythm, and perceived trust level.

### 2.3 Navigation Placement

Must replicate:
- Navigation belongs to hero/header composition, not separate utility band.
- Language toggle must live within this header system without changing the template layout logic.

Allowed adaptation:
- Replace one low-priority nav item with EN/ES toggle if required by space, preserving visual balance.

### 2.4 Section Rhythm

Must replicate:
- Alternating section densities (intro, card grid, emphasis strip, media sections)
- Consistent vertical spacing cadence between sections
- Card-based clusters with balanced text/media ratio

Non-compliant pattern:
- Uniform stacked panels with identical treatment across all sections.

### 2.5 Footer Weight

Must replicate:
- Multi-column informational footer with clear hierarchy tiers
- Utility/legal/info groupings with lighter visual weight than hero

FamBIT adaptation:
- Keep official links + disclaimer prominence, but within template footer hierarchy.

### 2.6 Visual Density Model

Must replicate:
- Rich first screen (hero + nav + CTA + image authority)
- Mid-page mixed density (cards, metrics/blocks, editorial sections)
- Lower-page utility density (faq-like/supportive blocks and footer)

Non-compliant pattern:
- Sparse, single-style sections that preserve prior custom layout assumptions.

## 3) What Must Be Replicated Exactly

- Hero-first opening architecture with integrated navigation.
- Hero proportion dominance and visual authority (first viewport impression).
- Header/nav/CTA relationship inside hero composition.
- Section cadence logic (alternating dense and breathable blocks).
- Typographic hierarchy order:
  - micro label / section label
  - section title
  - supporting paragraph
  - supporting list/cards
- Full-page atmosphere anchored by banner-led tone.

## 4) What May Be Adapted

- Copy/content text mapped to FamBIT public-safe messaging.
- EN/ES toggle integration, as long as header architecture stays template-aligned.
- Replace donation/fundraising blocks with FamBIT-safe equivalents:
  - safety verification blocks
  - community rituals
  - trust-forward roadmap blocks
- Color accents and imagery can be FamBIT-specific while retaining template contrast logic.

## 5) What Must Not Be Changed

- Hero-nav structural relationship.
- Primary spacing scale rhythm.
- Relative typography hierarchy.
- Section ordering logic that creates the template's visual tempo.
- Banner as the dominant mood-setting element.

## 6) Known Mandatory Asset Constraint

Must use as primary home banner:
- Source: `/home/ralph/PoellieOne/FamBIT/images/StockCake-Unity_Through_Diversity-3355074-standard.jpg`
- Deployed path in site: `public/images/home-main-banner.jpg`
- Required on: `/` and `/es/`

## 7) Explicit Prohibitions

- No incremental patching of old layout assumptions.
- No hybrid architecture mixing prior custom shell as primary structure.
- No detached navigation outside hero.
- No decorative-only hero treatment.
- No template-copy text reuse.

## 8) Gatekeeper Decision Rule

If the resulting layout reads as "old site with template fragments", outcome is FAIL.
