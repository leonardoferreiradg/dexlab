---
description: Design a complete interaction — states, motion, feedback, and error handling — from first trigger to every edge case.
argument-hint: "[component or interaction to design]"
---

# /id_design-interaction

A complete interaction spec: every state is named, every transition is timed, every failure has a path forward.

## Steps

1. **Map all states** — Use `id_interaction-spec` to build the state machine: list every possible state, define transitions (current state + event → next state), and identify impossible state combinations. The diagram becomes the engineering spec.

2. **Spec motion** — Use `id_animation-principles` to define timing and easing for every transition. Apply the 100/300/500 timing rule. Exit animations run at 75% of entrance duration. No bounce or elastic easing. Only `transform` and `opacity` animate.

3. **Design feedback** — Use `id_feedback-patterns` to specify system feedback for each interaction: what the user sees immediately, what confirms the action succeeded, what signals a problem. Map to timing: <100ms (instant), 100ms–1s (loading after 300ms delay), >1s (progress indicator).

4. **Handle errors** — Use `id_error-control` to design every failure mode: network error, validation error, permission error, timeout. Each has a designed state and a recovery path. No dead ends.

5. **Define gesture behavior** (if touch-relevant) — Use `id_gesture-patterns` to spec any gesture interactions: type, threshold, affordance, conflict handling, and keyboard/pointer fallback.

## Output

Complete interaction spec: state machine diagram, motion timing table, feedback spec per state, error state matrix with recovery paths, and gesture spec if applicable.

## Follow-up

Use `/audit_full-audit` to verify the implemented interaction against the spec.
