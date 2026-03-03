# COMPONENT_SPEC

Scope: Styling and behavior contract for reusable homepage components

## 1) Header/Nav

- Spacing: horizontal padding `var(--space-6)` desktop, `var(--space-4)` mobile.
- Typography: nav items `--fs-meta`, medium weight; brand uses display family with strong weight.
- Radius/shadow: `--radius-lg`, light glass or soft panel treatment.
- Feel: integrated with hero, calm authority, never detached utility strip.

## 2) Hero Section

- Spacing: top/bottom generous (`--section-pad-y`), internal gap `--space-6` to `--space-10`.
- Typography: hero title uses `--fs-hero`, `--lh-display`; subcopy uses body line-height.
- Radius/shadow: `--radius-xl`, `--shadow-hero`.
- Feel: primary mood setter, confident and breathable.

## 3) Button - Primary

- Spacing: `px` around `--space-6`, `py` around `--space-3`.
- Typography: semibold, compact letter spacing.
- Radius/shadow: pill or `--radius-lg`, minimal shadow.
- Feel: clear and trustworthy action emphasis.

## 4) Button - Secondary

- Spacing: same footprint as primary for balance.
- Typography: same scale, lower visual weight.
- Radius/shadow: same radius, border-led styling.
- Feel: supportive action, not competing with primary.

## 5) Section Wrapper

- Spacing: vertical section padding driven by `--section-pad-y`.
- Typography: section label -> title -> paragraph ladder preserved.
- Radius/shadow: optional `--radius-lg` with `--shadow-soft`.
- Feel: airy transitions and clean pacing.

## 6) Card

- Spacing: inner padding `--space-6`, consistent gaps between cards.
- Typography: short heading + concise support text.
- Radius/shadow: `--radius-md`/`--radius-lg`, `--shadow-card`.
- Feel: soft premium utility block, not dense dashboard tile.

## 7) Trust/Notice Panel

- Spacing: compact but readable (`--space-4` to `--space-6`).
- Typography: high-clarity labels and practical copy.
- Radius/shadow: `--radius-md`, low visual aggression.
- Feel: clear safety guidance without alarmist tone.

## 8) Footer

- Spacing: multi-column with generous row gap, compact legal lines.
- Typography: section captions in meta scale, body text readable but secondary.
- Radius/shadow: subdued panel, lower weight than hero.
- Feel: reliable closing utility layer.

## 9) Language Toggle

- Spacing: compact control integrated in header cluster.
- Typography: meta/label scale, obvious active state.
- Radius/shadow: matches nav chip treatment.
- Feel: natural part of navigation, not floating control.
