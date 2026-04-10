---
description: Transform an ambiguous problem into a structured design brief with clear principles and success criteria.
argument-hint: "[rough problem statement or opportunity area]"
---

# /frame-problem

Turn "we need to improve X" into a brief the team can design from.

## Steps

1. **Benchmark the space** — Use `product_benchmark` to map how 3–5 competitors or references handle this problem. Identify patterns (what's standard) and gaps (what's missing).

2. **Frame the opportunity** — Use `product_opportunity` to translate research and benchmarking into prioritized "How Might We" statements. Score by: user impact × feasibility × strategic alignment.

3. **Write the brief** — Use `product_brief` to produce: one-sentence problem statement, research context, success criteria (measurable), constraints (technical, time, brand), and anti-references (what this must NOT look like).

4. **Derive design principles** — Use `product_principles` to write 3–5 opinionated principles from the brief. Each must be specific enough that someone could use it to reject a design direction.

## Output

Design brief with problem statement, opportunity framing, measurable success criteria, constraints, and 3–5 actionable design principles. Ready to brief a designer or start a sprint.

## Follow-up

Use `/product_write-prd` to translate the brief into engineering requirements, or `/plan-sprint` to kick off a design sprint.
