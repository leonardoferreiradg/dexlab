---
name: audit-heuristic-evaluation
description: Evaluate an interface against Nielsen's 10 usability heuristics — systematic, severity-rated, and actionable.
user-invocable: true
argument-hint: "[interface or flow to evaluate]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/interaction-patterns.md` — 8 interactive states, form design, loading patterns, touch targets, optimistic UI
- `.design/references/design-ops.md` — design review process, quality gates, handoff checklist, decision log, design debt tracking

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If `.dexlab.md` exists in the project root:**
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered in that file.

**If `.dexlab.md` does not exist, or is missing the five pillars:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. Who uses this product, and what is the one task they most need to complete without friction? (Not "target demographic" — what are they doing when they use this?)
2. What is the specific flow, screen, or feature being audited today? What outcome should users reach by the end of it?
3. What constraints shape what "good" looks like here — platform (mobile/web/native), accessibility requirements, or known technical limits that affect the design?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## STEPS

1. **Define scope** — Which flows or screens are being evaluated? Scope prevents drift and makes findings comparable across evaluators. Example: "Checkout flow from cart to confirmation" not "everything." Scope is your boundary. Stay in it.

2. **Score each heuristic (0–4)** using this scale:
   - 0 = Doesn't apply or excellent
   - 1 = Cosmetic issue only
   - 2 = Minor usability problem
   - 3 = Major usability problem (important to fix)
   - 4 = Usability catastrophe (imperative to fix)

   The 10 heuristics:
   1. Visibility of system status
   2. Match between system and real world
   3. User control and freedom
   4. Consistency and standards
   5. Error prevention
   6. Recognition rather than recall
   7. Flexibility and efficiency of use
   8. Aesthetic and minimalist design
   9. Help users recognize, diagnose, and recover from errors
   10. Help and documentation

3. **Document specific violations** — For each score ≥ 2: what exactly is wrong, where it appears, and the impact on users. Example: "Heuristic 9, score 3: Error message 'Invalid input' on payment form doesn't say which field failed or how to fix it. Users are stuck and abandon checkout."

4. **Prioritize by severity** — Severity 4 issues first, then 3, then 2. Don't let 10 severity-1 issues bury one severity-4 issue. A catastrophe beats noise.

5. **Write actionable recommendations** — Not "improve error messages." Specific: "Rewrite the payment error from 'Invalid input' to 'Card number must be 16 digits.' Show the failing field highlighted in red."

6. **Produce a summary table** — Heuristic | Score | Top Issue | Recommendation. Include 3-5 rows max for severity ≥ 2. This table is your executive summary.

## ANTI-GENERIC RULES

"If every heuristic scores 0–1, you didn't evaluate the interface — you validated your assumptions."

"Severity scores are objective. If you scored a heuristic 2 but the interface is unusable without fixing it, you scored wrong. Rescore."

## NEXT STEPS

Share the summary table with the product team. Prioritize which severity-3 and 4 issues to fix in the next sprint. Implement one and re-evaluate to confirm the fix works. Document the before/after.
