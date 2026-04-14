---
name: audit-design-flow
description: Create user flow diagrams showing paths, decisions, branch logic, and dead ends — the map before the interface.
user-invocable: true
argument-hint: "[feature or user goal]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/interaction-patterns.md` — 8 interactive states, form design, loading patterns, touch targets, optimistic UI
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

## Steps

1. **Define the entry points** — Where do users begin this flow? List every entry point: direct URL, notification tap, in-product link, onboarding step. Flows with only one entry point are usually incomplete.

2. **Map the happy path first** — The primary path from start to goal completion, step by step. Every step = one user action or one system response. Don't combine actions.

3. **Add decision branches** — At every decision point: what are all possible outcomes? Minimum two branches per decision. Name each branch by the condition, not the UI element. "User has existing account" not "clicks login."

4. **Map the error and edge paths** — For every step: what can go wrong? What does the system show? What can the user do next? A flow that only shows success is a fantasy, not a diagram.

5. **Identify dead ends** — Where does a user land with no path forward? Every dead end is a design bug. Fix it in the diagram before it reaches implementation.

6. **Annotate with context** — For each step: who initiates it (user or system), what screen/state, what data is needed, what is created/changed.

7. **Validate against edge cases** — Walk the diagram as: new user, returning user, user with no permissions, user on mobile, user who abandons mid-flow.

## Notation Rules

- Rectangle = screen or state
- Diamond = decision point
- Rounded rectangle = start/end
- Arrow = transition (label with trigger)
- Red = error path
- Dashed = system-initiated

## Anti-Generic Rule

A flow diagram that only shows the happy path isn't a flow — it's a wireframe list. The value is in the branches.

## Next Steps

Use `uxr-journey-map` for emotional context, `id-interaction-spec` for micro-interaction specs per step.
