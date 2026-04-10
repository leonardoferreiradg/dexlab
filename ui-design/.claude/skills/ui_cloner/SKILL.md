---
name: ui_cloner
description: Analyze a reference UI image, extract its design system, and use it as the visual standard for producing new screens in the same style.
user-invocable: true
argument-hint: "[image path or description of reference UI]"
model-preference: claude-opus-4
---

## MANDATORY PREPARATION

Invoke /dexlab — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

---

This skill uses vision to extract a design system from a reference UI and reproduce it precisely. The goal is not "inspired by" — it is identical visual language. Requires the user to provide one or more UI screenshots or images.

**If no image is provided:** Ask the user to share a screenshot or image of the reference UI before proceeding.

## Steps

### Step 1: Analyze the Reference UI

Examine the provided image(s) carefully and systematically. Extract and document every observable design decision:

**Typography**
- Font stack: serif, sans-serif, monospace, or display?
- Approximate sizes: what's the heading size vs body vs caption ratio?
- Weights used: light, regular, medium, semibold, bold?
- Letter spacing: tight, normal, or loose?
- Line height: compact or airy?

**Color Palette**
- Primary color: hue, saturation, lightness
- Background/surface color: pure white, off-white, tinted neutral?
- Text colors: how many levels? Primary, secondary, disabled?
- Accent color: used where? How sparingly?
- Border colors: subtle or visible?
- Extract approximate oklch or hex values for each

**Spacing and Layout**
- Base unit: appears to be 4pt or 8pt scale?
- Card/container padding: tight, moderate, generous?
- Gap between elements: what's the rhythm?
- Content max-width: constrained or full-bleed?

**Visual Treatment**
- Border radius: sharp (0), subtle (4-8px), moderate (12-16px), pill (9999px)?
- Shadows: none, subtle, pronounced?
- Borders: visible borders on cards/inputs? Weight?
- Dividers: used? Style?

**Component Style**
- Button: shape, padding, label style, hierarchy levels present
- Input fields: outlined, underlined, filled?
- Cards: elevated, outlined, flat?
- Navigation pattern: sidebar, top nav, tab bar?

**Visual Personality**
- Overall tone: minimal, bold, editorial, technical, warm, playful, dense, airy?
- Theme: light, dark, or system?

### Step 2: Build the Extracted Design System

Translate observations into a concrete spec:

```
── EXTRACTED DESIGN SYSTEM ──────────────────────────

Typography
  Font family:    [identified font or closest match]
  Scale:          heading-xl [size] / heading-lg [size] / body [size] / caption [size]
  Weights:        [weights observed]
  Line height:    [value]

Colors (approximate)
  Primary:        oklch([value])
  Surface:        oklch([value])
  Surface-subtle: oklch([value])
  Text-primary:   oklch([value])
  Text-secondary: oklch([value])
  Border:         oklch([value])
  Accent:         oklch([value])

Spacing
  Base unit:      [4px or 8px]
  Component gap:  [value]
  Section gap:    [value]
  Card padding:   [value]

Visual treatment
  Border radius:  [value]
  Shadow:         [value or none]
  Border:         [value or none]

Personality
  Theme:          [light / dark]
  Tone:           [3 words]
```

### Step 3: Validate Before Producing

**Stop and confirm** the extracted system with the user before producing anything:

> "Here's what I extracted from the reference. Before I produce new screens in this style, please confirm: [summary]. Does this match your intent? Anything to adjust?"

Do not skip this step. Incorrect extraction → wrong output → wasted effort.

### Step 4: Produce New Screens in the Extracted Style

Generate new UI using the confirmed design system as design tokens. Every decision must be traceable to an element in the reference:
- Don't improvise colors not in the palette
- Don't introduce spacing values not in the scale
- Don't use font weights not observed in the reference
- Don't add border radius values not established

Produce the new screen as working HTML/CSS (or the format appropriate to the context) using the extracted values as CSS custom properties.

### Step 5: Fidelity Check

Side-by-side comparison against the reference:

- [ ] Visual weight hierarchy matches?
- [ ] Spacing rhythm feels the same?
- [ ] Color usage proportions match?
- [ ] Component treatment is consistent?
- [ ] Typography feels the same at a glance?
- [ ] Same personality — would you believe these came from the same product?

If any check fails, identify the specific divergence and correct it before delivering.

### Step 6: Document the Style

Produce a brief style identifier the team can reference:

> "This interface uses a **[name]** aesthetic — [personality in 2-3 words] with [2 key visual characteristics]. Key values: [primary color], [border radius], [spacing base], [font stack]."

This becomes the brief for all future work in this style.

---

**Critical:** This skill requires vision capability. It only works when the user provides actual UI images or screenshots. When no image is provided, ask immediately — do not attempt to proceed from a description alone.

**Anti-generic:** "Replicating a UI is not copying — it's extracting a design system from evidence. 'Similar vibe' is not the target. Identical design language is. If someone who knows the original can't tell which screen came from where, the cloning succeeded."

## Next Steps

Use `ui_typeset` and `ui_color-system-creator` to formalize the extracted system as a proper token architecture, `ds_component-spec` to document components, or `ui_wireframer-creator` to produce new screens in the style.
