---
description: Design and document a complete A/B experiment — from hypothesis to result interpretation.
argument-hint: "[feature or variant being tested]"
---

# /run-experiment

Structure a rigorous A/B experiment that produces real learning — not confirmation of existing beliefs.

## Steps

1. **Write the hypothesis** — Use `audit_ab-test` to produce: "We believe that [change] will cause [metric] to [direction] by [amount] for [audience]." Every blank must be filled. Incomplete hypotheses predict nothing.

2. **Define the primary metric** — Use `audit_ab-test` to identify the one metric that determines success. Secondary metrics exist only to catch regressions. Running three "primary" metrics invalidates the experiment.

3. **Calculate sample size** — Use `audit_ab-test` to compute required sample: baseline conversion × minimum detectable effect × significance (p=0.05) × power (80%). Run the numbers before launching, not after.

4. **Design the test plan** — Use `audit_usability-test` to add a qualitative companion: 5 moderated sessions to understand *why* users behave as they do, complementing the quantitative *what*.

5. **Document interpretation rules** — Use `audit_ab-test` to pre-commit: what counts as a win? What's a null result? What triggers a stop? Written before launch — not after you see the data.

## Output

Complete experiment brief: hypothesis, primary metric, sample size calculation, test duration, audience segmentation, qualitative companion plan, and pre-committed interpretation rules.

## Follow-up

After results, use `/uxr_discover` to synthesize qualitative findings into design opportunities.
