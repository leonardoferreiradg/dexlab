---
name: ops-QA
description: Create QA checklists that verify implementation fidelity to design — catching regressions before they reach users.
user-invocable: true
argument-hint: "[component or feature name]"
---

## MANDATORY PREPARATION

Invoke /dexlab — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

## Steps

1. **Define QA scope** — Which screens, states, and components are in scope? Create a matrix: screen × state × device. QA without scope is infinite.

2. **Visual fidelity checks** —
   - Spacing: every margin and padding matches design tokens (not approximate)
   - Typography: font family, size, weight, line-height, letter-spacing match spec
   - Colors: use design token values, check computed values against spec
   - Icons: correct icon, correct size, correct color per state
   - Borders, shadows, radius: match spec values exactly

3. **Interactive state checks** — For every interactive element: default, hover, focus, active, disabled, loading, error, success. All 8. Not just the ones that were implemented.

4. **Responsive checks** — Test at: 320px, 375px, 768px, 1024px, 1440px. Check: no horizontal overflow, no text clipping, touch targets ≥44px, images scale correctly.

5. **Accessibility checks** —
   - Keyboard: tab through the entire feature keyboard-only. Every action reachable.
   - Focus: visible focus indicator on all interactive elements
   - Screen reader: run VoiceOver or NVDA. All interactive elements announce correctly.
   - Contrast: check computed colors against WCAG 4.5:1 (text), 3:1 (UI)

6. **Edge case checks** — Test with: empty state, single item, maximum items (100+), very long text, special characters (é, ñ, 中文), missing data/images.

7. **Generate the QA report** — For each issue: screenshot + element location + expected value + actual value + severity (P0–P3). Not prose, not "it looks off" — specific, reproducible, measurable.

## Anti-Generic Rule

A QA checklist that says "check that it looks good" is not a checklist. Every item must be verifiable by someone who didn't design it.

## Next Steps

After QA, use `ops-design-handoff` for developer spec updates, or `audit-heuristic-evaluation` for a usability pass.
