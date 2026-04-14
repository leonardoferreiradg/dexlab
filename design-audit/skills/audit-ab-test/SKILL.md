---
name: audit-ab-test
description: Design a rigorous A/B experiment — define the hypothesis, choose the metric, calculate sample size, and interpret results without fooling yourself.
user-invocable: true
argument-hint: "[hypothesis or metric to test]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — qualitative methods, interview practices, affinity mapping, JTBD framework, synthesis

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If product context is already available** — via `.dexlab.md` in the project root, Project Instructions, or context established earlier in this conversation:
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered.

**If no product context is available from any of these sources:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. Who uses this product, and what is the one task they most need to complete without friction? (Not "target demographic" — what are they doing when they use this?)
2. What is the specific flow, screen, or feature being audited today? What outcome should users reach by the end of it?
3. What constraints shape what "good" looks like here — platform (mobile/web/native), accessibility requirements, or known technical limits that affect the design?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## STEPS

1. **Write the hypothesis** — Format: "We believe that [change] will [cause] [metric] to [increase/decrease] by [amount] for [audience]." Example: "We believe that moving the CTA above the fold will increase click-through rate by 10% for new users." If you can't fill in every blank, you're not ready to test. Vague hypotheses produce ambiguous results.

2. **Define the ONE primary metric** — The metric that determines success. Not three metrics. Not a "scorecard." One. Secondary metrics exist only to catch regressions. Primary: "conversion rate." Secondary: "time-to-completion" (make sure we didn't slow people down).

3. **Calculate sample size** — Use a power calculator with: baseline conversion rate, minimum detectable effect (MDE), significance level (p=0.05), power (80%). Example: if baseline is 2% and MDE is 10% (2.2%), you might need 8,000 users per variant. Don't run tests you're underpowered for — you'll fool yourself.

4. **Define the test duration** — Run for at least one full business cycle (7 days minimum, often 14). Don't stop early because the results look good. Early stopping inflates false positives. Lock the end date before you launch.

5. **Segment the audience** — Who is included? Who is excluded? Exclude: users mid-funnel, returning users if testing first-time experience, internal users. Clear inclusion criteria prevent contamination.

6. **Interpret results without p-hacking** — If p > 0.05, you have no result. "Trending toward significance" is not significance. Document null results — they're still learning. If you check the data daily and stop when it looks good, you've committed p-hacking. Don't do it.

## ANTI-GENERIC RULES

"An A/B test that you check every day and stop when it looks good is not an experiment. It's wishful thinking with data."

"Secondary metrics that move opposite to your primary metric mean you broke something. Investigate before shipping."

## NEXT STEPS

Document the test setup: hypothesis, metric, sample size, segment, duration. Share it before launch. After results, document: metric value, p-value, primary result, secondary regressions, decision (ship/no-ship/iterate). Archive this for future reference.
