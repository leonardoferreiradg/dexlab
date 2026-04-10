---
description: Analyze a reference UI image and produce new screens that precisely match its design language.
argument-hint: "[reference UI image or description]"
---

# /clone-ui

Extract a design system from evidence. Produce new screens indistinguishable in style from the original.

## Steps

1. **Provide the reference** — The user must supply one or more screenshots or images of the reference UI. If no image is provided, ask before proceeding. Analysis from description alone produces approximation, not precision.

2. **Extract the design system** — Use `ui-cloner` to systematically analyze: typography (fonts, scale, weights), color palette (approximate oklch values for each role), spacing (base unit, rhythm, card padding), visual treatment (border radius, shadows, borders), and visual personality (theme, tone, density).

3. **Validate extraction** — Present the extracted spec to the user for confirmation before producing any new screens. Incorrect extraction = wrong output. This step is not optional.

4. **Produce new screens** — Use `ui-cloner` to generate new UI in the confirmed style. Every value traceable to the reference. No improvisation outside the extracted system.

5. **Fidelity check** — Run the side-by-side checklist: visual weight hierarchy, spacing rhythm, color proportions, component treatment, typographic feel. If any check fails, identify the specific divergence and correct it.

## Output

Extracted design system spec + new screen(s) produced in the reference style. Fidelity verdict confirming the new screens match the original's design language.

## Follow-up

Use `/ui-build-visual-system` to formalize the extracted system as a proper token architecture, `/ds-create-component` to document components from the reference.
