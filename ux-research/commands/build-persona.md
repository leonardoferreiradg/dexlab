---
description: Build a behavioral persona from research data with JTBD mapping and empathy validation.
argument-hint: "[user segment or research findings]"
---

# /build-persona

A persona grounded in behavior, not demographics — built from evidence, not assumptions.

## Steps

1. **Build the behavioral persona** — Use `uxr_synthetic_persona` to construct the persona from research data: behavior patterns, goals, frustrations, context of use. Every attribute traced to observed behavior. Demographics are context — not the persona.

2. **Map jobs-to-be-done** — Use `uxr_jtbd` to identify the persona's functional, emotional, and social jobs. The job persists even if the product changes. The persona without a job is a character sketch, not a design tool.

3. **Validate with empathy data** — Use `uxr_empathy-map` to check the persona against the Says / Thinks / Does / Feels quadrants. Tensions between what the persona says and does are the most design-relevant insights.

4. **Define design implications** — For this persona: what must the design make easy? What must it never make harder? What would cause this user to abandon? Write 3–5 concrete design implications, not generic statements.

## Output

Persona card with behavioral attributes, JTBD mapping (functional / emotional / social), empathy quadrant, and 3–5 specific design implications. Usable in design reviews and as a sprint artifact.

## Follow-up

Use `/uxr_journey-map` to map this persona's end-to-end experience, or `/product_frame-problem` to translate persona insights into design opportunities.
