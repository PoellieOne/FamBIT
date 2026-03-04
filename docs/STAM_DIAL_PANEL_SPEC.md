# STAM_DIAL_PANEL_SPEC

Scope: STAM Design Dial Panel on `/_stam/home`  
Mode: STAM enablement, command generation only

## 1) Objective

Provide a no-code control panel that helps STAM generate valid tweak commands per homepage block.

Panel output is text commands only; no live style editing in this phase.

## 2) Panel Inputs

Source of truth:
- `src/stam/homepage-block-index.v2.json`

Panel reads:
- block ID
- block name
- supported parameters for that block
- allowed scale values (`subtle`, `balanced`, `bold`)

## 3) Panel Controls

### Block selection

- click block outline or label to select active block
- selected block state is clearly visible

### Parameter controls (3-state toggles)

For supported parameters:
- spacing density
- contrast level
- card softness
- CTA dominance
- typography weight
- layout width

Each control supports exactly:
- subtle
- balanced
- bold

No free-text scale values allowed.

## 4) Command Generation

Generated format:

`<Section ID> <Component ID>: <parameter> -> <subtle|balanced|bold> (optional note)`

Multi-control example:

`S-02 C-02d: typography weight -> bold; layout width -> balanced. S-02 C-02f: CTA dominance -> bold.`

Panel actions:
- `Copy Block ID`
- `Copy Command`
- `Reset Selection`

## 5) Validation Rules

- command cannot generate unknown block IDs
- command cannot generate unsupported parameters for selected block
- command cannot generate values outside subtle/balanced/bold
- if no block selected, `Copy Command` remains disabled

## 6) Accessibility and usability

- keyboard navigable block selection and toggles
- visible focus states
- clear active/selected indicators
- readable contrast on STAM overlay theme

## 7) Non-goals

- No persistence backend required
- No authentication UI inside panel (Access handled upstream)
- No public route exposure
