---
description: Plan and run a usability test — from task writing to findings report.
argument-hint: "[design or prototype to test]"
---

# /usability-test

Produce a test plan that generates real user insight — not confirmation of what the team already believes.

## Steps

1. **Define objectives** — Use `audit-usability-test` to write: what decisions will this test inform? What would we change based on results? If the answer is "nothing — we just want to validate," the test isn't needed.

2. **Write test tasks** — Use `audit-usability-test` to produce realistic task scenarios. Format: "You're a [specific user] and you need to [specific goal]. Please try to do that." No leading questions. No steps hidden in the task prompt.

3. **Set success criteria** — Use `audit-usability-test` to define per-task: task completion rate threshold, maximum acceptable time-on-task, error rate limit.

4. **Recruit 5 participants** — Use `audit-usability-test` to write recruitment criteria. 5 users find 80% of critical usability issues. More participants answer "how many" not "what's wrong."

5. **Accessibility check** — Use `audit-accessibility-test` to layer a basic accessibility check alongside the usability test. Same sessions, additional observation layer.

## Output

Complete test plan: objectives, task scripts (5–7 tasks), success metrics, participant criteria, facilitation guide, and observation checklist.

## Follow-up

After sessions, use `/uxr-usablity-plan` to synthesize findings into insights and opportunities.
