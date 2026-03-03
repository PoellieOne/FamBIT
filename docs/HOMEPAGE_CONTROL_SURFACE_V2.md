# HOMEPAGE_CONTROL_SURFACE_V2

Scope: Founder/STAM-friendly control syntax for homepage structural tuning (no code required)

## Request format

Use this sentence format:

`<Block ID>: <parameter> -> <option level> (+ optional note)`

Example:

`H-02b headline: line length -> bold (narrower); H-02d primary CTA: visual weight -> bold; ZONE A nav: glass strength -> balanced plus slightly higher contrast.`

## Block IDs for requests

- `ZONE A` = Floating sticky navigation frame
- `ZONE B` = Full-bleed hero background layer
- `B1` = Hero content container
- `H-02a` = Eyebrow
- `H-02b` = Headline
- `H-02c` = Subtext
- `H-02d` = Primary CTA
- `H-02e` = Secondary CTA
- `ZONE C` = Normal-width content section rhythm
- `ZONE D` = Full-bleed dark footer anchor

## 10 common tweak patterns STAM can request

1. `ZONE A nav: glass strength -> bold; border + shadow weight -> balanced.`
2. `ZONE A nav: vertical offset -> balanced; frame width -> balanced.`
3. `ZONE B hero: hero height -> bold; overlay darkness -> balanced.`
4. `B1 container: max width -> bold (narrower); inner spacing -> balanced.`
5. `H-02a eyebrow: visibility -> subtle.`
6. `H-02b headline: size -> bold; line length -> balanced.`
7. `H-02c subtext: width -> balanced; tone density -> subtle.`
8. `H-02d primary CTA: visual weight -> balanced; size -> balanced.`
9. `H-02e secondary CTA: presence -> balanced; contrast -> subtle.`
10. `ZONE D footer: background darkness -> bold; contrast strategy -> balanced.`

## Guarded request examples (safe defaults)

- "Make it calmer":
  - `ZONE B overlay darkness -> subtle`
  - `H-02b size -> balanced`
  - `ZONE C section spacing -> balanced`

- "Make it more premium":
  - `ZONE A glass strength -> balanced`
  - `ZONE A border + shadow weight -> balanced`
  - `ZONE D background darkness -> balanced`

- "Make the message stronger":
  - `H-02b weight -> bold`
  - `H-02d visual weight -> bold`
  - `H-02c width -> bold (shorter)`

## Interpretation rule

If a request conflicts with compliance constraints or bilingual parity, implement the nearest safe equivalent and mark the original ask as:

`intentionally excluded (internal/compliance)`
