---
name: audit-prototype-strategy
description: Decide what to prototype and how to build it. Prototype the riskiest assumption first at appropriate fidelity.
user-invocable: true
argument-hint: Design challenge or feature area to prototype
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — qualitative methods, assumption testing, success criteria definition
- `.design/references/interaction-patterns.md` — 8 interactive states, edge cases to prototype for

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If `.dexlab.md` exists in the project root:**
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered in that file.

**If `.dexlab.md` does not exist, or is missing the five pillars:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. Who uses this product, and what is the one task they most need to complete without friction? (Not "target demographic" — what are they doing when they use this?)
2. What is the specific flow, screen, or feature being audited today? What outcome should users reach by the end of it?
3. What constraints shape what "good" looks like here — platform (mobile/web/native), accessibility requirements, or known technical limits that affect the design?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

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
