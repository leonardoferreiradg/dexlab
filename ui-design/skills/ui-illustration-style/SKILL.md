---
name: ui-illustration-style
description: Define an illustration style guide with visual language, usage rules, and consistency standards — so illustrations feel like a system, not a collection.
user-invocable: true
argument-hint: "[product context or brand direction]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/color-system.md` — OKLCH color space, semantic token tiers, dark mode strategy, accessibility contrast ratios

---

Illustrations without a defined style are decoration. With a defined style, they're a communication system. This skill produces the rules that make every illustration feel intentional and consistent.

## Steps

### Step 1: Audit Current State

If illustrations already exist — collect them all in one view before defining anything. Ask:
- Do they share the same stroke weight?
- Do they use the same color palette?
- Is the level of detail consistent?
- Do human figures share the same representation style?
- Does perspective feel consistent?

If yes to all: you have a style to document. If not: you have a collection, not a system. Define the style from scratch using the brand context, not from averaging what exists.

### Step 2: Define Style Parameters

Make explicit decisions on each dimension. No ambiguity — every parameter gets a specific value, not a direction:

**Line style:** flat (no stroke), outlined (stroke-based), semi-flat, isometric, sketch/hand-drawn  
**Stroke weight:** `[value]px` — consistent across all illustrations at base size  
**Corner treatment:** sharp, subtle radius, fully rounded  
**Color palette:** which tokens from the product color system? Illustrations use the same palette — never introduce new colors outside the system  
**Human representation:** realistic, abstracted, geometric, inclusive (diverse body types, skin tones, abilities), no people  
**Detail level:** minimal (near-icon complexity), moderate (spot illustrations), rich (hero illustrations)  
**Perspective:** flat 2D, subtle depth, isometric, mixed  
**Shadow/depth:** none, flat shadow, subtle elevation

Write these down as a spec, not as adjectives. "Warm and friendly" is not a spec. "2px stroke, rounded corners radius 4, uses color-primary and color-surface-subtle only" is a spec.

### Step 3: Define Usage Rules

Where does each illustration type appear and what are the rules for each?

**Hero illustrations** — landing pages, onboarding, empty states for key features
- One per view, maximum
- High detail level
- Always paired with a headline — never standalone decoration

**Spot illustrations** — tooltips, feature callouts, secondary empty states, confirmation screens
- Simple, minimal detail
- Reusable across contexts
- Size: contained within a defined bounding box (never free-floating)

**Inline / icon-adjacent** — inline with body text, small UI moments
- Minimal complexity — close to icon-level
- Must be visually consistent with the icon system in stroke and weight

**What illustrations are NOT for:**
- Background decoration with no meaning
- Padding empty space that should be designed differently
- Replacing copy that should be written

Every illustration must communicate something. If you can remove it without losing information, it shouldn't be there.

### Step 4: Specify Accessibility Requirements

Illustrations are invisible to screen readers unless explicitly handled:

- **Meaningful illustrations** (communicates content or state): provide descriptive `alt` text. Not "illustration of person at desk" — describe what it communicates: "Empty state: no projects created yet."
- **Decorative illustrations** (adds visual interest only): `aria-hidden="true"` — zero screen reader impact
- **Never embed critical information inside an illustration** — text in images is inaccessible and untranslatable
- Test that removing the illustration loses no information for a keyboard-only user

### Step 5: Create the Reference Set

Produce 3-5 reference illustrations that demonstrate the style across different contexts:
- One hero illustration
- One spot illustration
- One at minimal/icon-adjacent complexity

These are the benchmark. Every future illustration is evaluated against these — not against the brief, not against the designer's preferences, against these specific references.

### Step 6: Write the Contribution Guide

How does a new illustration get added to the system?

- Who creates it? (in-house, outsourced, AI-assisted?)
- Who approves it? (design lead, brand team?)
- What file format is accepted? (SVG, exported from Figma?)
- Where does the source file live?
- What's the review checklist? (stroke weight, colors, accessibility)
- How are deprecated illustrations retired?

Without governance, every new hire or vendor produces something that diverges. The contribution guide closes that gap.

---

**Anti-generic:** "Illustration style is not 'we like the Notion vibe.' It's a set of explicit parameters that any illustrator can follow and produce results indistinguishable from each other. Without the parameters, every new illustration is a judgment call — and judgment calls don't scale."

## Next Steps

Use `ds-component-spec` to document illustration as a design system component with usage rules, `ops-design-review` to evaluate new illustrations against the style guide, or `ui-visual-hierarchy` to ensure illustrations support — and don't compete with — content hierarchy.
