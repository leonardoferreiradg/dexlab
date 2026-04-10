---
description: Write a complete PRD from a defined opportunity — user stories, acceptance criteria, metrics, and constraints.
argument-hint: "[opportunity or feature to spec]"
---

# /write-prd

Produce a PRD that guides engineering without requiring a designer in every meeting.

## Steps

1. **Validate the opportunity** — Use `product-opportunity` to confirm the opportunity is well-framed before writing requirements. A PRD written for a poorly-framed problem is a precisely-specified wrong thing.

2. **Connect to North Star** — Use `product-north-star` to confirm how this PRD's success metrics connect to the team's North Star metric. If they don't connect, question whether this should be built.

3. **Write the PRD** — Use `product-prd` to produce: 3-sentence executive summary, user stories with acceptance criteria ("Given / When / Then"), non-functional requirements, explicit out-of-scope list, open questions with owners and deadlines, success metrics (primary, secondary, guardrail).

4. **Banned word check** — Review for: "intuitive," "seamless," "delightful," "powerful," "world-class," "leverage," "synergy." Each one hides unclear thinking. Replace with specifics.

## Output

PRD: executive summary, user stories with acceptance criteria, non-functional requirements, out-of-scope, open questions, and success metrics. Every requirement is testable — no requirement is vague.

## Follow-up

Use `/audit-map-flow` to validate user flows before design begins.
