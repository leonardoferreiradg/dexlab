---
description: Prepare a complete design-to-development handoff package — specs, assets, edge cases, and QA checklist.
argument-hint: "[feature or component ready for handoff]"
---

# /ship-handoff

Produce a handoff package a developer can execute without the designer being present.

## Steps

1. **Design review gate** — Use `ops_design-review` to confirm the design has passed its last review checkpoint. Handoff starts only when the design is approved — not when it's "almost done."

2. **Generate visual specs** — Use `ops_design-handoff` to document: all spacing values as design tokens (not px), typography specs per text style, color values as token references, border radius and shadow values, component states (all 8: default, hover, focus, active, disabled, loading, error, success).

3. **Document interactions** — Use `ops_design-handoff` to specify: animation timing and easing, transition triggers, gesture behaviors, loading sequences, error recovery paths.

4. **Cover edge cases** — Use `ops_design-handoff` to list: empty states, maximum content scenarios, long text behavior, missing data handling, permission-gated states.

5. **Create QA checklist** — Use `ops_QA` to generate the implementation verification checklist: visual fidelity, interactive states, responsive breakpoints, accessibility, edge cases. This checklist is what the developer self-verifies and the designer signs off on.

6. **Document open questions** — List any unresolved decisions with owners and deadlines. Nothing proceeds to engineering with unresolved design questions.

## Output

Handoff spec + QA checklist. The spec covers every visual and interaction decision using token references. The QA checklist gives developers clear pass/fail criteria for each requirement.

## Follow-up

After implementation, run `/audit_full-audit` to verify implementation quality before release.
