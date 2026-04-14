---
name: id-gesture-patterns
description: Design gesture-based interactions that feel natural — not just mapped from mouse interactions to touch.
user-invocable: true
argument-hint: "[gesture type: tap, swipe, long-press, pinch]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/interaction-patterns.md` — 8 interactive states, form design, loading patterns, touch targets, optimistic UI
- `.design/references/spatial-design.md` — 4pt base scale, semantic spacing tokens, container queries, visual rhythm, grid systems

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If product context is already available** — via `.dexlab.md` in the project root, Project Instructions, or context established earlier in this conversation:
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered.

**If no product context is available from any of these sources:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. Who is the user, and what is their relationship to this product — is this a tool they use daily at work, an occasional app, a high-stakes flow (finance, health), or a first-time experience?
2. What platform or surface does this interaction live on — mobile native, responsive web, desktop app — and what input methods should be supported?
3. What specific interaction, component, or flow are we designing behavior for? What is the user trying to accomplish at this exact moment?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## Steps

1. **Audit what's touch vs. what's pointer** — Use `@media (pointer: coarse)` to detect touch. Don't assume all mobile is touch or all desktop is mouse. Surface Pros and styluses exist.

2. **Design for the primary gestures first** —
   - **Tap**: Primary action. Target ≥ 44×44px. No hover states — they don't exist on touch.
   - **Swipe**: Directional navigation or dismissal. Define axis (horizontal/vertical), threshold (minimum distance to register), and snap points.
   - **Long press**: Secondary actions. Always provide a visible alternative — not all users discover long press.
   - **Pinch/spread**: Scale. Only for content that genuinely benefits from zoom.
   - **Pull to refresh**: Only when data is time-sensitive and users need manual refresh.

3. **Define gesture affordances** — How does the user know they can swipe? Visual cues (partially visible content, drag handles, instructional overlays for first use). Not assumed.

4. **Handle gesture conflicts** — Nested scrollable areas with different axes cause gesture conflicts. Either prevent nesting or define which element takes priority at the boundary.

5. **Design the gesture feedback** — Every gesture needs immediate visual feedback: movement follows the finger (not a delay), resistance at boundaries (rubber-banding), snap to resting position on release.

6. **Provide keyboard/alternative path** — Every gesture-triggered action must also be accessible without gesture: tap target, keyboard shortcut, or visible control.

## Anti-Generic

Gesture design is not "add swipe to delete." It's designing a physical metaphor that users understand without being told.

## Next Steps

Test gestures on real touch devices and test keyboard alternatives for accessibility. Document gesture conflicts and priority rules for engineering. Validate gesture thresholds with user testing on slow devices.
