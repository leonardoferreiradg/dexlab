---
name: Prototype Strategy
description: Decide what to prototype and how to build it. Prototype the riskiest assumption first at appropriate fidelity.
user-invocable: true
argument-hint: Design challenge or feature area to prototype
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — assumption testing, success criteria, sample sizes
- `.design/references/interaction-patterns.md` — 8 interactive states, edge cases to prototype for

## What This Skill Does
Prototyping everything at high fidelity is waste. This skill forces prioritization: identify the ONE assumption that would kill your design if wrong, then build the minimum to test it.

## STEPS

### 1. Define What Needs Validation
- List all risky assumptions (not features)
- Example: "Users will understand the permission model" is riskier than "button label clarity"
- Rank by impact: which assumption, if wrong, breaks the entire design?
- Document: the assumption, why it's risky, what evidence would validate or invalidate it

### 2. Choose Fidelity Level
- **Low fidelity** (sketches, wireframes): Test information architecture, flows, task completion
- **Medium fidelity** (interactive wireframes): Test workflows, state transitions
- **High fidelity** (production-like visuals): Test visual hierarchy, emotional response, polish only when necessary
- Decision rule: Only go high-fidelity if you're testing visual or interaction details, not flow

### 3. Select Prototype Method
- **Paper/whiteboard**: Fastest for flow validation
- **Figma interactive**: Good for testing navigation and sequences
- **Code prototype**: When you need real interaction complexity or API integration
- **Wizard of Oz**: When backend doesn't exist yet (human simulates system)
- **Video walkthrough**: For demo, not testing

### 4. Define Success Criteria Before Building
- What behavior or feedback confirms the assumption is valid?
- What would falsify it?
- Don't include "looks good" — be measurable
- Example: "5/6 participants complete the flow without guidance" not "users like it"

### 5. Plan Test Scenarios
- Write 3–5 realistic tasks that would reveal if the assumption is wrong
- Avoid leading language
- Include edge cases (empty state, error, permission denied)
- Document what you're observing: actions, confusion points, time on task

## Next Steps
Once you have a prototype, move to **/test-plan** to design usability testing that validates your assumptions.

If you need to understand all edge cases before building, start with **/harden** to design resilience.
