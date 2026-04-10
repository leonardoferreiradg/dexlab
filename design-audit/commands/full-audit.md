---
description: Run a full design audit — heuristics, accessibility, and flow validation in one pass.
argument-hint: "[feature or page to audit]"
---

# /full-audit

Systematic quality check across usability, accessibility, and interaction flow — producing a scored report with prioritized fixes.

## Steps

1. **Heuristic evaluation** — Use `audit_heuristic-evaluation` to score Nielsen's 10 heuristics (0–4 each, total /40). Document specific violations at severity 2+.

2. **Accessibility audit** — Use `audit_accessibility-test` to check WCAG 2.2 AA: contrast ratios, keyboard navigation, screen reader behavior, touch targets, and WCAG 2.2-specific criteria.

3. **Flow audit** — Use `audit_design-flow` to validate the user flow: happy path completeness, decision branches, error paths, and dead ends.

4. **Synthesize findings** — Merge all three assessments. Tag every issue P0–P3. Highlight where multiple audits flag the same element — those are priority fixes.

5. **Produce the report** — Overall scores, top 5 issues with recommended skills to address each, and a phase-ordered action plan.

## Output

Unified audit report: heuristics score (/40), accessibility verdict (pass/fail per criterion), flow completeness verdict, full issue list by severity, and recommended commands to address each.

## Follow-up

Use `/audit_run-experiment` to test proposed fixes with real users before implementing all of them.
