---
description: Design gesture interactions for a touch-first surface — affordance, thresholds, feedback, conflicts, and fallbacks.
argument-hint: "[gesture or touch interaction to design]"
---

# /design-gesture

Gesture design is not adding swipe-to-delete. It's designing a physical metaphor that users understand without instruction.

## Steps

1. **Detect input context** — Use `id-gesture-patterns` to confirm which input methods are in scope. `@media (pointer: coarse)` = touch. `@media (pointer: fine)` = mouse/stylus. Don't assume all mobile is touch or all desktop is pointer.

2. **Define the gesture** — Use `id-gesture-patterns` to specify: gesture type (tap, swipe, long press, pinch, pull-to-refresh), axis (horizontal / vertical / both), threshold (minimum distance/duration to register), and snap points (where does it rest on release).

3. **Design the affordance** — Use `id-gesture-patterns` to define how users know they can perform this gesture: partially visible content, drag handles, instructional overlay on first use. Never assume users will discover gestures without a visual cue.

4. **Spec feedback** — Use `id-feedback-patterns` to define: movement follows finger immediately (no lag), resistance at boundaries (rubber-banding), snap animation on release, haptic feedback (if platform supports). Every gesture needs immediate physical feedback.

5. **Handle conflicts** — Use `id-gesture-patterns` to identify gesture conflicts: nested scrollable areas with different axes, swipeable cards inside a paged scroll. Define which element takes priority at each boundary.

6. **Provide the fallback** — Use `id-error-control` to define the non-gesture path: tap target, keyboard shortcut, or visible control. Every gesture action must be accessible without gesture.

## Output

Gesture spec: gesture type, axis, threshold, affordance design, feedback spec, conflict resolution, and accessibility fallback. Ready to implement and test on device.

## Follow-up

Use `/audit-accessibility-test` to verify the fallback path is accessible, `/audit-full-audit` to test on real touch devices.
