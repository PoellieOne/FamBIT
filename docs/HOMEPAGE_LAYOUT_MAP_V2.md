# HOMEPAGE_LAYOUT_MAP_V2

Scope: Homepage layout architecture reset (EN + ES)  
Mode: Structural map for STAM and implementation agents

## Zone Model (A-D)

### ZONE A - Floating Nav (glass, sticky)

Purpose: Persistent orientation and language control without breaking hero mood.

Adjustable parameters:
- **Vertical offset from top**
  - subtle: near-top, minimal breathing room
  - balanced: clear offset, comfortable separation from viewport edge
  - bold: pronounced floating distance, strong premium feel
- **Frame width**
  - subtle: wide frame, close to content max width
  - balanced: medium frame, clear floating identity
  - bold: narrower frame, higher focus density
- **Glass strength (blur + translucency)**
  - subtle: low blur, high transparency
  - balanced: medium blur, medium transparency
  - bold: high blur, stronger panel presence
- **Border + shadow weight**
  - subtle: soft border, faint depth
  - balanced: visible border and soft shadow
  - bold: stronger border edge and deeper shadow for authority
- **Sticky behavior tolerance**
  - subtle: sticks with very small movement threshold
  - balanced: sticks smoothly after initial scroll
  - bold: always pinned with strong visual persistence

---

### ZONE B - Full-bleed Hero (background)

Purpose: Set homepage mood immediately with edge-to-edge visual authority.

Adjustable parameters:
- **Hero height (first-screen presence)**
  - subtle: compact full-bleed hero
  - balanced: dominant above-the-fold hero
  - bold: cinematic hero height
- **Image treatment**
  - subtle: lower contrast overlay, softer image detail
  - balanced: readable overlay with clear image identity
  - bold: stronger contrast and dramatic depth
- **Overlay darkness**
  - subtle: light darkening for gentle mood
  - balanced: moderate darkening for readability
  - bold: deep darkening for strong text authority
- **Content vertical placement**
  - subtle: centered-middle
  - balanced: slightly lower than center for narrative pacing
  - bold: lower-third placement for cinematic feel

#### B1 - Hero Content Container (max-width centered)

Purpose: Keep text/actions readable and aligned while hero remains full-bleed.

Adjustable parameters:
- **Container max width**
  - subtle: wider text measure
  - balanced: controlled readable width
  - bold: tighter measure for stronger hierarchy
- **Inner spacing**
  - subtle: compact padding
  - balanced: breathable default spacing
  - bold: spacious premium padding
- **Alignment style**
  - subtle: neutral center-left balance
  - balanced: left-aligned with structured rhythm
  - bold: strongly directed left alignment

#### H-02a - Eyebrow / small line (optional)

Purpose: Context cue before headline.

Adjustable parameters:
- **Visibility**
  - subtle: low-emphasis micro-label
  - balanced: clear supportive label
  - bold: high-emphasis line
- **Letter spacing**
  - subtle: normal uppercase spacing
  - balanced: moderate tracking
  - bold: high tracking, editorial signal

#### H-02b - Headline

Purpose: Primary message hierarchy anchor.

Adjustable parameters:
- **Size**
  - subtle: large but restrained
  - balanced: strong display size
  - bold: extra-large statement size
- **Line length**
  - subtle: wider line length
  - balanced: controlled two-to-three line rhythm
  - bold: narrow assertive measure
- **Weight**
  - subtle: semibold feel
  - balanced: bold display
  - bold: extra-bold display

#### H-02c - Subtext

Purpose: Human-readable explanation below headline.

Adjustable parameters:
- **Width**
  - subtle: wider explanatory line
  - balanced: measured paragraph width
  - bold: concise short width
- **Tone density**
  - subtle: concise sentence
  - balanced: 2 short lines
  - bold: fuller paragraph depth

#### H-02d - Primary CTA

Purpose: Main next action.

Adjustable parameters:
- **Visual weight**
  - subtle: clean solid button
  - balanced: high-contrast prominent button
  - bold: dominant primary action button
- **Size**
  - subtle: medium control
  - balanced: comfortable touch target
  - bold: larger call-to-action footprint

#### H-02e - Secondary CTA (optional)

Purpose: Alternate path without competing with primary action.

Adjustable parameters:
- **Presence**
  - subtle: hidden when not needed
  - balanced: visible outline action
  - bold: visible plus icon/arrow hint
- **Contrast**
  - subtle: low-contrast ghost button
  - balanced: readable outlined button
  - bold: stronger edge contrast

---

### ZONE C - Content Sections (normal width)

Purpose: Deliver narrative and trust blocks with controlled rhythm after hero.

Adjustable parameters:
- **Section spacing**
  - subtle: compact cadence
  - balanced: airy cadence
  - bold: highly editorial spacing
- **Panel density**
  - subtle: lighter panel framing
  - balanced: clear panel hierarchy
  - bold: stronger panel contrast and depth
- **Card radius/depth**
  - subtle: soft corners, low depth
  - balanced: medium corners, medium depth
  - bold: larger corners, stronger premium depth

---

### ZONE D - Full-bleed Dark Footer

Purpose: Close page with stable, trustworthy anchor.

Adjustable parameters:
- **Background darkness**
  - subtle: dark slate
  - balanced: near-black slate
  - bold: deep near-black anchor
- **Footer vertical padding**
  - subtle: compact anchor band
  - balanced: comfortable end-cap spacing
  - bold: spacious ceremonial end-cap
- **Contrast strategy**
  - subtle: muted text contrast
  - balanced: clear hierarchy contrast
  - bold: strong but still calm contrast
