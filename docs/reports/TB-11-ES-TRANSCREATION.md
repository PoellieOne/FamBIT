# TB-11 ES Transcreation

Date: 2026-03-02  
Workdir: `/home/ralph/PoellieOne/FamBIT/fambit-site-v1`

## Evidence Commands

- `npm run check:i18n`
- `npm run build`

Results:

- Key parity: `Parity check passed for 5 locale file pairs.`
- Build: success, static output, 8 routes built.

## Short language review note per page

### Home (`src/content/es/home.json`)

- Copy now reads as natural, warm Spanish with neutral register.
- Tone remains calm and practical, aligned with EN intent.
- Flow improved by replacing literal constructions with conversational phrasing.

### Safety (`src/content/es/safety.json`)

- Safety guidance is direct and actionable for public users.
- Admin behavior and reporting steps are concrete, ordered, and easy to follow.
- Wording prioritizes clarity over legal or technical jargon.

### Community (`src/content/es/community.json`)

- Culture framing now sounds more idiomatic and less literal.
- Moderation and contribution language is practical, respectful, and non-hype.
- Ritual/value statements are concise and broad-region understandable.

### Roadmap (`src/content/es/roadmap.json`)

- "Roadmap" was transcreated to "hoja de ruta" for better naturalness in Spanish.
- Messaging keeps realistic expectations and avoids speculative framing.
- Phase items remain specific, public-facing, and non-financial.

### Site labels (`src/content/es/site.json`)

- Legal/supporting labels were polished for neutral Spanish flow.
- Core disclaimers remain clear and aligned with EN intent.

## Examples of deliberate non-literal transcreation

1. EN: "where growth stays human" -> ES: "donde crecer sigue siendo humano"
   - Kept intent and warmth; avoided rigid word order.
2. EN: "without hype" -> ES: "sin ruido"
   - Better idiomatic fit in neutral Spanish.
3. EN: "roadmap" -> ES: "hoja de ruta"
   - Natural public-language equivalent.
4. EN: "The goal is not speed" -> ES: "La meta no es responder rapido"
   - Keeps meaning while sounding native.
5. EN: "Support safe onboarding" -> ES: "Apoyar integracion segura"
   - Preserved CTA intent with a clearer neutral-Spanish expression.

## Confirmation: safety instructions are practical and clear

- Checklist is explicit:
  - `Verifica los enlaces aqui antes de actuar.`
  - `Los admins nunca envian DM primero.`
  - `Nunca compartas tu frase semilla ni claves privadas.`
  - `No es asesoramiento financiero`
- Verification instruction tells users exactly where to trust links.
- Admin rules specify what legitimate behavior looks like.
- Reporting steps provide a clear 3-step action path.

## Guardrail confirmation

- EN/ES key parity maintained.
- No forbidden terms detected in ES content scan used for TB-11 run.
- Official links remain exact in built output (`dist/es/safety/index.html`).
