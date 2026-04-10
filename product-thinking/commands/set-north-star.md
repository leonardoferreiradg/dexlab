---
description: Define the product's North Star metric and build the supporting input metric tree.
argument-hint: "[product or product area]"
---

# /set-north-star

Align the team on what actually matters — before defining any feature or success metric.

## Steps

1. **Define the North Star** — Use `product-north-star` to identify the core value exchange: what progress does this product help users make? Write the North Star metric in one sentence. It must: capture delivered user value (not just business value), be measurable weekly or monthly, and lead revenue rather than lag it.

2. **Build the metric tree** — Use `product-north-star` to break the North Star into 3–5 input metrics. Each input metric has one owner. Example: North Star = "sessions completed" → inputs: bookings made × show-up rate × repeat booking rate.

3. **Establish design principles** — Use `product-principles` to derive 3–5 principles from the North Star. Principles should clarify trade-offs: "When in doubt, prioritize task completion over feature discovery."

4. **Identify guardrail metrics** — Use `product-north-star` to name metrics that could grow while the product gets worse. These are monitored but never optimized for directly.

## Output

North Star statement, input metric tree with owners, design principles derived from the metric, and guardrail metric list. One-page document the entire team can reference.

## Follow-up

Use `/product-frame-problem` to validate that specific initiatives connect to the North Star before framing them as design problems.
