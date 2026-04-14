---
name: ops-design-critique
description: UX-focused critique using heuristics and anti-pattern detection. Two independent assessments yielding design health score and priority issues.
user-invocable: true
argument-hint: Design file (Figma URL) or screenshot to critique
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/interaction-patterns.md` — 8 interactive states, form design, loading patterns for heuristic evaluation
- `.design/references/design-ops.md` — structured critique process, quality gates, decision log

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If product context is already available** — via `.dexlab.md` in the project root, Project Instructions, or context established earlier in this conversation:
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered.

**If no product context is available from any of these sources:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. What is the product and who is the primary user — in one sentence that a new team member would use to orient themselves?
2. What is the team structure for this work — who are the decision-makers, and where does design hand off to engineering?
3. What is the specific artifact, component, or phase this ops task covers, and what is the hard deadline or gate it must clear?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## What This Skill Does
This skill runs two independent assessments: design review (heuristics-based) and anti-pattern detection. Combined report shows health score, what's working, priority issues, and next steps.

## STEPS

### ASSESSMENT A: Design Review (Heuristics-Based)

**Nielsen's 10 Usability Heuristics — Score Each 0–4:**

1. **System Visibility & Status**: Does user know what's happening?
   - Is current state visible? Is feedback immediate? (0 = no, 4 = excellent)

2. **Match Reality**: Does the UI match user mental models?
   - Language, concepts, flows match real-world? (0 = confusing, 4 = intuitive)

3. **User Control**: Can user undo/exit/recover?
   - Emergency exits present? Undo available? (0 = trapped, 4 = full control)

4. **Error Prevention**: Does UI prevent errors?
   - Confirmations, validation, constraints in place? (0 = none, 4 = comprehensive)

5. **Error Recovery**: Are errors recoverable?
   - Clear error messages, specific solutions? (0 = cryptic, 4 = actionable)

6. **Efficiency**: Does expert user stay engaged?
   - Shortcuts, customization, power features present? (0 = none, 4 = rich)

7. **Aesthetics**: Is the design polished and on-brand?
   - Consistent, intentional, professional? (0 = rough, 4 = refined)

8. **Information Architecture**: Is content organized logically?
   - Hierarchy, grouping, labels clear? (0 = chaotic, 4 = intuitive)

9. **Cognitive Load**: Is interface simple enough to understand?
   - Clutter minimized, choices limited, focus clear? (0 = overwhelming, 4 = elegant)

10. **Emotional Resonance**: Does design feel right?
    - Tone, visual energy, personality appropriate? (0 = generic, 4 = distinctive)

**Design Health Score = (Sum of 10 scores) / 10 × 4 = out of 4**
- **4.0–3.5**: Excellent — ship as-is
- **3.4–2.5**: Good — address before launch
- **2.4–1.5**: Fair — significant fixes needed
- **1.4–0.0**: Poor — redesign required

### ASSESSMENT B: Anti-Pattern Detection

Check against all Dexlab anti-generic rules:
- **Placeholder-only labels**: "Enter name" instead of label + placeholder
- **Hover-only states**: Important info only visible on hover
- **Generic copy**: Bland, stock language ("Click here", "Submit", "Enter data")
- **Magic numbers**: Hard-coded values instead of token system
- **Unspaced walls of text**: No visual hierarchy, dense paragraphs
- **Disabled-looking affordances**: Buttons that don't look clickable
- **Missing edge case design**: Only happy path designed
- **AI slop indicators**: Stock photography, generic patterns, bland tone
- **Dark mode ignorance**: Colors only tested in light mode
- **Keyboard ignorance**: No focus states, hover-only interactions

**Anti-Pattern Verdict:**
- **Clean**: No patterns found → 4 points
- **Minor**: 1–2 found, easy to fix → 2 points
- **Significant**: 3+ found, design issue → 0 points

## COMBINED REPORT

**Design Health Score: [X]/4**
- Heuristic average: [A]/4
- Anti-pattern verdict: [B] points
- **Narrative**: One sentence on overall health

**Heuristics Table:**
```
| Heuristic            | Score | Evidence |
|----------------------|-------|----------|
| System Visibility    | 3     | Loading states present, but no progress indicator |
| Match Reality        | 3     | Familiar patterns; permission model slightly abstract |
| User Control         | 2     | No undo; hard to backtrack once submitted |
| Error Prevention     | 2     | Validation missing on email field |
| Error Recovery       | 4     | Clear error messages with next steps |
| [...]               | [...] | [...] |
| **Average**         | **3.1** | **Above average** |
```

**Anti-Patterns Verdict:**
- Placeholder-only labels: FOUND in email field → fix with /polish
- Hover-only states: FOUND in tooltip icons → fix with /polish
- Generic copy: NOT FOUND
- Magic numbers: FOUND in 3 places → fix with /handoff token mapping
- **Overall: Minor issues, mostly polish**

## PRIORITY ISSUES

List 3–5 issues by severity (P0 blocker, P1 major, P2 minor, P3 polish):

1. **[P1] User Control Gap**: No way to exit flow once form submitted
   - Impact: Users feel trapped if they make mistake
   - Fix: Add "Cancel" option with confirmation
   - Reference: /harden (error paths), /polish (interaction completeness)

2. **[P2] Placeholder-Only Labels**: Email input lacks permanent label
   - Impact: Confusing on focus
   - Fix: Add label + keep placeholder
   - Reference: /polish (interaction completeness)

3. **[P0] Keyboard Navigation**: Submit button not reachable via tab
   - Impact: Keyboard-only users can't submit
   - Fix: Ensure all buttons in tab order
   - Reference: /audit (accessibility check)

## RECOMMENDED ACTIONS

- Primary: Run **/polish** on interaction completeness and labels
- Secondary: Run **/handoff** to create token mapping and remove magic numbers
- Tertiary: Run **/harden** to add error recovery and edge case handling
- Optional: Run **/audit** for systematic accessibility check

## Next Steps
Use **/polish** to address interaction and polish issues immediately before handoff.

Use **/harden** to design error states and edge cases identified in critique.
