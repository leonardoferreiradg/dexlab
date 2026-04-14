---
name: ops-sprint-plan
description: Plan a design sprint — structure goals, define activities, assign outputs, and align the team before the week begins.
user-invocable: true
argument-hint: "[challenge statement]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/design-ops.md` — design review process, quality gates, handoff checklist, decision log, design debt tracking

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If product context is already available** — via `.dexlab.md` in the project root, Project Instructions, or context established earlier in this conversation:
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered.

**If no product context is available from any of these sources:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. What is the product and who is the primary user — in one sentence that a new team member would use to orient themselves?
2. What is the team structure for this work — who are the decision-makers, and where does design hand off to engineering?
3. What is the specific artifact, component, or phase this ops task covers, and what is the hard deadline or gate it must clear?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## STEPS

1. **Define the challenge** — What question must this sprint answer? Write it as a testable hypothesis. Bad: "Improve onboarding." Good: "We believe that removing the 3-step registration wall will increase day-1 retention by 15%." The challenge is your filter. Every activity in the sprint should connect to it.

2. **Set success criteria** — What outcome ends the sprint? Define measurable signals: prototype test completion rate, task success rate, time-on-task. These are not "we hope users like it." They are pass/fail gates. You need 3-5 criteria, not one ambiguous goal.

3. **Map activities by day** — Day 1: Understand (map, expert interviews, HMW). Day 2: Diverge (lightning demos, sketching). Day 3: Decide (voting, storyboard). Day 4: Prototype. Day 5: Test. Each day has a clear output. Each activity blocks the next.

4. **Assign ownership** — Each activity has one owner. Not a team, not "we". One person. That person runs the activity, makes the call if things are unclear, documents the output. Shared ownership is diffused ownership.

5. **Prepare assets and logistics** — Book users for Day 5 before Day 1. No test participants means no sprint. Secure any reference materials (competitor screenshots, analytics, past research). Confirm meeting rooms and tools. Logistics undone = sprint delayed.

6. **Define a decider** — Who has final say when the team is split? One person, named before the sprint starts. Their role is to cut debate, not to make every decision, but to decide when the team is stuck.

## ANTI-GENERIC RULES

"A design sprint without a testable hypothesis is a workshop. Workshops produce post-its, not decisions."

"If the sprint ends with 'we should do more research,' the sprint failed. A sprint produces either a prototype to test or a decision to pursue differently."

## NEXT STEPS

Document the sprint plan in a shared space your team can reference during the week. Day 1: review the challenge and success criteria with the full team before you start. Track whether each day produced its output. Adjust only if evidence, not intuition, demands it.
