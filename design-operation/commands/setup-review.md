---
description: Set up a structured design review process with criteria, checkpoints, and approval flows.
argument-hint: "[project or team context]"
---

# /setup-review

Design reviews that produce decisions — not comfort, not consensus, not more feedback loops.

## Steps

1. **Define review stages** — Use `ops-design-review` to establish when reviews happen: (a) Direction review at lo-fi/concept stage, (b) Design review at mid-fi with interaction specs, (c) Handoff review at final with QA checklist. Not every design needs all three.

2. **Set entry criteria** — Use `ops-design-review` to define what must be true before a review happens: "Design context is documented. The problem being solved is written in one sentence. At least one alternative direction was explored." Reviews without entry criteria become status updates.

3. **Define the review format** — Use `ops-design-review` to structure the session: (a) presenter states the problem and constraints, (b) structured feedback round (working / concerns / missing), (c) decision on each concern (fix / keep with rationale / needs data), (d) documented outcome.

4. **Create the approval flow** — Who has final say? At what stage? Document: designer proposes, lead approves direction, PM approves scope, engineering lead approves technical feasibility. Decision rights must be explicit before the review starts.

5. **Set up the QA gate** — Use `ops-QA` to create the pre-handoff checklist that must pass before design is marked as approved. QA is not a post-handoff activity.

## Output

Review process documentation: stages, entry criteria, session format, approval RACI, and QA gate requirements. Shareable with the team as a working agreement.

## Follow-up

Use `/ops-ship-handoff` once a design passes its handoff review.
