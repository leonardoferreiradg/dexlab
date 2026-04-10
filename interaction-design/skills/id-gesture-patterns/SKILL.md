---
name: id-gesture-patterns
description: Design gesture-based interactions that feel natural — not just mapped from mouse interactions to touch.
user-invocable: true
argument-hint: "[gesture type: tap, swipe, long-press, pinch]"
---

## MANDATORY PREPARATION

Invoke /dexlab — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

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
