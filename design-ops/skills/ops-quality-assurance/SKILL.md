---
name: ops-quality-assurance
description: Create QA checklists that verify implementation fidelity to design — catching regressions before they reach users.
user-invocable: true
argument-hint: "[component or feature name]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/design-ops.md` — design review process, quality gates, handoff checklist, decision log, design debt tracking
- `.design/references/interaction-patterns.md` — 8 interactive states, form design, loading patterns, touch targets, optimistic UI

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If `.dexlab.md` exists in the project root:**
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered in that file.

**If `.dexlab.md` does not exist, or is missing the five pillars:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. What is the product and who is the primary user — in one sentence that a new team member would use to orient themselves?
2. What is the team structure for this work — who are the decision-makers, and where does design hand off to engineering?
3. What is the specific artifact, component, or phase this ops task covers, and what is the hard deadline or gate it must clear?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

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
