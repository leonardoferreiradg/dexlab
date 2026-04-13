---
description: Run a structured design critique with scoring, anti-pattern detection, and a prioritized action plan.
argument-hint: "[screen, feature, or component to critique]"
---

# /run-critique

Run a rigorous design critique that produces decisions and priorities — not opinions and post-its.

## Steps

1. **Context check** — Use the `ops-design-critique` skill to confirm design context exists. Who uses this? What is it trying to accomplish? What decisions need the critique to inform?

2. **Dual assessment** — Use `ops-design-critique` to run two independent evaluations: (a) LLM design review against visual hierarchy, IA, emotional resonance, and anti-patterns; (b) heuristic scoring across Nielsen's 10 heuristics (0–4 each).

3. **Anti-pattern verdict** — Flag AI slop tells explicitly: gradient text, glassmorphism, hero metric layouts, side-stripe borders, identical card grids. Pass or fail — no middle ground.

4. **Prioritize findings** — Tag every issue P0 (blocking) through P3 (polish). Surface top 3–5 issues. Order by impact to users, not ease of fix.

5. **Map to actions** — For each Priority Issue, assign the skill that addresses it: `id-animation-principles`, `uxw-clarify`, `ui-visual-hierarchy`, `ui-color-system-creator`, `id-error-control`, `ops-design-review`, etc.

6. **Checkpoint** — Use `ops-design-review` to schedule the follow-up review after fixes are applied.

## Output

Scored critique report: heuristics table (total /40), anti-pattern verdict, what's working (2–3 items), priority issues with P-ratings and fix recommendations, and an ordered action plan linked to specific skills.

## Follow-up

Re-run `/run-critique` after fixes to see score improve. Use `/ops-ship-handoff` when the design is approved.
