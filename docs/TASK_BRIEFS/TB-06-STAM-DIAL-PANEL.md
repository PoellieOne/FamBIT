# TB-06 - STAM Design Dial Panel (Command Generator)

## Objective

Implement Design Dial Panel on `/_stam/home` that generates STAM tweak commands without live-editing production CSS.

## Exact files to change

Required:
- `src/stam/homepage-block-index.v2.json`
- `src/pages/_stam/home.astro` (or component composition used by this route)
- `src/components/stam/DesignDialPanel.*` (new)
- `src/components/stam/BlockOverlay.*` (new/updated)
- STAM-specific style file(s)

Optional:
- utility files for command formatting/validation under `src/stam/*`

## Definition of done

- Panel appears on `/_stam/home` and is usable.
- User can select a block by clicking its label.
- Panel shows supported parameters for selected block.
- Each parameter offers exactly 3 states:
  - subtle
  - balanced
  - bold
- Panel generates correct command string for selected block and states.
- Copy button copies generated command.
- No live mutation of public styling is performed.

## Must NOT change

- Do not expose panel on public routes.
- Do not implement production CSS live-edit engine.
- Do not bypass security and crawler constraints from TB-05.

## QA steps

1. `npm run check:i18n`
2. `npm run build`
3. Open `/_stam/home` (authenticated via Access).
4. Select multiple blocks and verify parameter availability.
5. Verify generated command format:
   - includes valid section/component IDs
   - includes only supported parameters
   - values restricted to subtle/balanced/bold
6. Verify copy-to-clipboard output correctness.
7. Verify panel disabled state when no block selected.

## Fail conditions

- Dial panel cannot generate valid command text.
- Unsupported parameter/value combinations are allowed.
- Missing block selection linkage.
- Any STAM UI visibility leak to public routes.
