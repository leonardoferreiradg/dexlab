---
name: design-review
description: Run a structured design review — not an opinion session, not a status update, but a decision-making meeting with clear inputs and outputs.
user-invocable: true
argument-hint: "[design artifact or meeting agenda]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/design-ops.md` — design review process, quality gates, handoff checklist, decision log, design debt tracking

## STEPS

1. **Set the context** — Share before the meeting: the problem being solved, the constraints, what decisions need to be made. No one should arrive cold. Send a one-page brief 24 hours in advance. Include: "By the end of this review, we must decide: [X] or [Y]?" This is not a soft open-ended question. This is a binary or choice.

2. **Present the work** — Walk through the design sequentially. State what you're solving, not what you built. "This solves X by doing Y" not "Here's what I made." Talk through your reasoning: what did you consider and why did you choose this direction? This gives reviewers context. They can now evaluate your logic, not just your taste.

3. **Gather structured feedback** — Use the framework: (1) What's working? (2) What concerns you? (3) What's missing? Go around the room before open discussion. This prevents one loud voice from dominating. Each person speaks once on each question. No interruptions.

4. **Separate observation from preference** — "This button is too small for touch" (observation, rooted in data or usability heuristic) vs "I prefer a bigger button" (preference, rooted in taste). Only observations drive changes. Preferences get noted and deprioritized unless they align with user needs.

5. **Make decisions, not notes** — Every concern must be resolved as: (a) We're changing it, (b) We're not changing it and here's why, or (c) We need more data before deciding. Document the decision in real time. Don't leave the room with open questions. Open questions become ambiguity, which becomes a redesign 2 weeks later.

6. **Document the outcome** — Two sentences in the design artifact: what changed and why. This is your decision log. Future you (or someone else) will need to know why this choice was made. "We simplified the onboarding flow from 5 steps to 3 because user testing showed 80% abandoned at step 4."

## ANTI-GENERIC RULES

"A review that ends with 'let's think about it' wasted everyone's time. You had 1 hour. Make the call."

"If the designer leaves a review defensive, the review was done wrong. Defensiveness means they felt attacked, not heard."

## NEXT STEPS

Implement the changes the team committed to before the next review. Track what was decided and what happened. Did the change you made actually solve the concern, or did you miss something? Use this feedback to improve your next design review.
