---
description: Create a complete user flow with all paths, decisions, and edge cases — then decide what to prototype.
argument-hint: "[user goal or feature to map]"
---

# /map-flow

Map the full interaction flow before designing the UI. Every dead end and error path is a design decision — make it explicit.

## Steps

1. **Map the flow** — Use `audit-design-flow` to build the complete diagram: entry points, happy path, decision branches, error paths, and system-initiated steps. Use standard notation: rectangle = screen, diamond = decision, arrow = transition with trigger label.

2. **Hunt for dead ends** — Use `audit-design-flow` to identify every state with no path forward. List each one. Every dead end is a design bug that must be resolved before the flow is approved.

3. **Validate edge paths** — Walk the diagram as: new user, returning user, user with no permissions, user who abandons mid-flow, user who hits an error at step 3. All must have paths forward.

4. **Identify prototype scope** — Use `audit-prototype-strategy` to select which path and which decision points need validation. Prototype the riskiest assumption — not the most polished path.

## Output

Annotated flow diagram (text-based) with all paths labeled, dead ends flagged, and a prototype brief specifying what to build and what question it answers.

## Follow-up

Use `/id-design-interaction` to spec the micro-interactions within each step.
