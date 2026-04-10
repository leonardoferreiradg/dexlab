---
name: audit-design-flow
description: Create user flow diagrams showing paths, decisions, branch logic, and dead ends — the map before the interface.
user-invocable: true
argument-hint: "[feature or user goal]"
---

## MANDATORY PREPARATION

Invoke /dexlab — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

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
