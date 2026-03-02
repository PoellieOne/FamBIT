# Rebuild Layout Map

Date: 2026-03-02

## Component tree - Home (EN/ES shared skeleton)

`BaseLayout`
- `hero-system`
  - `Header`
    - Brand
    - Primary nav group
    - Primary action button
    - `LanguageToggle`
  - Hero micro label
  - Hero title/subhead
  - Hero primary + secondary actions
- `main`
  - Narrative section (`atmo-panel`)
  - Mission strip (`soft-strip`)
  - Trust/safety emphasis section (`atmo-panel`)
  - Identity/legal card grid (`atmo-panel` + `story-card`)
  - Global trust panels (`VerifiedLinks`, `SafetyNotice`)
- `Footer` (multi-column hierarchy)

## Component tree - Safety (EN/ES shared skeleton)

`BaseLayout`
- `hero-system` (no detached header)
  - `Header` + hero copy + actions
- `main`
  - Narrative intro (`atmo-panel`)
  - Verified links block
  - Practical checklist strip (`soft-strip`)
  - Verification guidance (`atmo-panel`)
  - Admin rule cards (`atmo-panel` + `story-card` grid)
  - Reporting steps + CTA + trust microcopy (`atmo-panel`)
- `Footer` with links/disclaimer

## FamBIT content to template-equivalent slot mapping

| FamBIT content block | Template-equivalent slot |
|---|---|
| Home hero message + mandatory image | Dominant opening hero authority |
| Safety guidance CTA | Primary hero action |
| What-this-means bullets | Mid-density mission strip |
| Verification/admin/reporting | Trust replacement for donation mechanics |
| Community rituals/values/moderation/contribute | Program-like card clusters |
| Roadmap phases | Campaign-progress/timeline equivalent cards |
| Official links + disclaimers | Utility and legal footer hierarchy |

## EN/ES structural parity note

- EN and ES share identical layout skeleton.
- Locale differences are content labels and localized paths only.
- No locale-specific structural drift detected.
