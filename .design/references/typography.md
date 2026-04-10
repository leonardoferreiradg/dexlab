# Typography Reference — Dexlab

Typography is the fastest path to brand coherence. Good typography works invisibly; bad typography screams for attention. This reference cuts through guesswork.

## Modular Scale: The Math of Relationships

Stop eyeballing sizes. Use a modular scale with intentional mathematical ratios.

**Recommended ratios:**
- **1.25** (minor third) — conservative, subtle hierarchy
- **1.333** (major third) — balanced, works for most products
- **1.5** (perfect fifth) — bold, dramatic, use when personality demands it

Base your scale at 16px (1rem). Calculate up and down:

```
Base: 16px (100%)
1.25 scale:
- Display: 32px, 40px, 50px
- Heading 1: 32px
- Heading 2: 25.6px → 26px (round to grid)
- Heading 3: 20.48px → 20px
- Body: 16px
- Small: 12.8px → 13px (keep above 12px for screen readability)
```

**Why this matters:** Arbitrary sizes create visual chaos. A modular scale forces intentional decisions and trains viewers to recognize hierarchy instantly. Every step up signals importance.

## Font Selection: Reject Defaults, Find Personality

Never use Inter, Roboto, Open Sans, DM Sans, Plus Jakarta Sans, or Montserrat without justification. These are safe. Bored. Invisible.

**Font selection procedure:**

1. **Define brand personality as a physical object.** Is your brand a weathered leather journal? A minimalist Swiss railway timetable? A hand-drawn zine? Concrete materials beat abstract adjectives.

2. **Match form to personality.**
   - Rational, systematic → geometric sans (Neue Haas Grotesk, IBM Plex Sans)
   - Warm, approachable → humanist sans (Calibre, Sohne, Grotesk)
   - Academic, deliberate → serif (Crimson Text, Lora, Trajan Pro)
   - Energetic, youthful → expressive sans (Gilroy, Space Mono, Rubik Mono One)
   - Timeless, crafted → ink-friendly serif (Lyon, EB Garamond, Tiempos)

3. **Test at actual sizes.** OpenType features matter. Kerning at 32px differs from 14px. Some fonts break at body size.

4. **Check the weights.** Do you have 400, 500, 600, 700? Weight variation beats opacity for hierarchy in product UI.

5. **Verify language support.** Portuguese demands proper cedilla (ç) handling, diacritical marks on common words (são, pão, açúcar). Many beautiful fonts fail here.

**Bad choices:**
- Using a serif for UI body text because it "looks premium" (it reads slower)
- Mixing geometric and humanist sans (visual conflict)
- Choosing display fonts that don't scale down to label sizes (wastes opportunity)

## Sizing: Marketing vs Product

Different contexts demand different strategies.

**Marketing/Editorial (fluid):**
Use CSS `clamp()` for responsive type. No breakpoints needed:

```css
h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  /* min: 32px, preferred: 5% of viewport, max: 56px */
}

p {
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  /* fluid between 16-18px */
}
```

This scales gracefully from mobile to 4K. Viewers never experience jarring jumps.

**Product UI (fixed):**
Use `rem` with 16px base. Product UIs need precision. Fluidity causes micro-interactions to feel mushy. Stick to your scale: 12px, 13px, 14px, 16px, 18px, 20px, 24px, 32px.

## Line-Height: Inverse Relationship

Line-height isn't about spacing vertically. It's about reading speed and compression.

**Rule:** Shorter lines need tighter line-height. Longer lines need generous line-height.

```
Marketing body text (75ch max):      line-height: 1.6
Blog article (65ch max):             line-height: 1.7
Product UI body (45ch max):          line-height: 1.5
Dense form labels:                   line-height: 1.4
```

**Dark mode adjustment:** Add 0.05–0.1 to light-on-dark. Reading white text on dark causes eye strain. Increased line-height creates visual breathing room.

```css
body {
  line-height: 1.6;
  color: #333 on #fff;
}

@media (prefers-color-scheme: dark) {
  body {
    line-height: 1.7; /* +0.1 */
    color: #f5f5f5 on #1a1a1a;
  }
}
```

## OpenType Features: Buy the Capability, Use It Intentionally

**Tabular numbers:** For finance UIs, use `font-feature-settings: 'tnum'`. Digits align vertically in columns, easing comparison.

```css
.price-cell {
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
}
```

**Small caps:** Legal disclaimers, abbreviations. Use `font-variant-caps: small-caps` for all-uppercase text. Improves readability by reducing visual weight.

**Fractions:** If displaying ratios or measurements, enable `'frac'`. "1/2" becomes a single, typographically correct glyph.

**Kerning:** Always on by default in modern browsers. Turn it off only for technical monospace contexts where precision matters.

## Web Font Loading: Prevent Layout Shift

FOUT (Flash of Unstyled Text) breaks layouts. Use `size-adjust` to match web fonts to system fallback metrics.

```css
@font-face {
  font-family: 'Calibre';
  src: url('calibre.woff2') format('woff2');
  size-adjust: 98%;
  /* Prevents jump when web font loads */
}
```

Set `font-display: swap` for body fonts, `font-display: fallback` for display fonts.

Measure the descent of your chosen web font in a font editor. Match the `size-adjust` to prevent reflow.

## Line Length: Cap at 65–75 Characters

This is a hard rule, not a preference.

- **Below 50ch:** Text feels choppy, eyes jump lines
- **50–65ch:** Sweet spot for body text
- **65–75ch:** Maximum for comfortable reading
- **Above 75ch:** Scientifically harder to read, slower comprehension

Use CSS container queries to enforce this:

```css
.article {
  max-width: 75ch;
  /* 75 characters of your body typeface */
}
```

On massive displays, use multi-column layout instead of stretching to full width.

## Pairing Fonts: Display + Body

A robust system needs exactly two fonts.

**Display font:** Headlines, navigation, buttons. One personality. Can be expressive.

**Body font:** Everything else. Must be highly legible. Humanist or geometric sans typically.

Avoid:
- Three or more fonts (creates visual chaos)
- Monospace as a "technical" shorthand (it's unprofessional; use `font-family: 'Courier New'` only for code blocks)
- Serif for product UI body (slower to scan)

**Good pairing logic:**
- If display is geometric, body should be humanist (contrast)
- If display is serif, body should be clean sans (breathing room)
- Weight contrast: bold display (700), regular body (400)

## Portuguese Typography Considerations

Portuguese has distinct characteristics:

**Diacriticals:**
- Common accented characters: á, é, í, ó, ú, â, ê, ô, ã, õ
- Cedilla: ç (não, açúcar, maçã)
- Verify fonts handle these without distortion or width inconsistency

**Word length:**
- Portuguese words average 1.5x longer than English
- "International" (13 chars) → "Internacional" (12 chars) — similar
- But "beautiful" (9 chars) → "formoso" or "belo" (shorter)
- Plan 15–20% more line-length than English equivalents

**Spacing around accents:**
Some fonts add unnecessary kerning before/after accented characters. Test at 14px and 32px.

## Summary: The Checklist

- [ ] Define brand personality as physical object
- [ ] Select display + body fonts with clear rationale
- [ ] Build modular scale (1.25, 1.333, or 1.5)
- [ ] Set line-height based on line length
- [ ] Enable OpenType features intentionally
- [ ] Use `size-adjust` for web fonts
- [ ] Cap body text at 65–75ch
- [ ] Add 0.05–0.1 line-height for dark mode
- [ ] Test Portuguese diacriticals and cedilla
- [ ] Verify font metrics at actual usage sizes

Typography done right is invisible. Users never think about it—they just read effortlessly and trust your brand.
