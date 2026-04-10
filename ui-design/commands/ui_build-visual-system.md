---
description: Build the core visual system — color, typography, and hierarchy — for a product or feature.
argument-hint: "[product or feature context]"
---

# /ui_build-visual-system

The foundation every screen is built on. Get this right and every subsequent screen is faster to produce and easier to review.

## Steps

1. **Build the color system** — Use `ui_color-system-creator` to: extract brand colors from context, build the full palette using OKLCH (perceptually uniform), create semantic alias tokens (primary, surface, border, text), tint neutrals toward the brand hue, design dark mode as an intentional redesign. Test every text/background pair for 4.5:1 AA minimum.

2. **Create the type system** — Use `ui_typeset` to: run the font selection procedure (reject training-data defaults — Inter, DM Sans, Roboto, Plus Jakarta Sans are banned), define the modular scale (1.25 ratio minimum between steps), set line-height, letter-spacing, and cap line length at 65–75ch.

3. **Validate hierarchy** — Use `ui_visual-hierarchy` to ensure color and type work together: the hierarchy must be readable in grayscale, text sizing must create genuine contrast between heading levels, and the primary action must be unmistakably primary without relying on color alone.

4. **Document as tokens** — Use `ds_designtokens` (or reference it) to output the system as CSS custom properties: color tokens, type tokens, spacing scale. The system is only a system when it's in code, not just in a design file.

## Output

Visual system spec: complete color palette with OKLCH values and token names, typography scale with font selection rationale, spacing scale, and accessibility verification. Delivered as CSS custom properties + design spec.

## Follow-up

Use `/ds_tokenize` to integrate into the design system, `/ui_design-screen` to apply to the first screens.
