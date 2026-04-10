---
name: responsive
description: Design interfaces that adapt to context — not just screen size, but input method, viewport orientation, and content density.
user-invocable: true
argument-hint: "[page or component name]"
---

## MANDATORY PREPARATION

Invoke /dexlab — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

## Steps

1. **Design mobile-first, enhance upward** — Start with the smallest viewport where the content still works. Add complexity as space allows. Never start desktop and shrink — you'll amputate features, not adapt them.

2. **Use content-driven breakpoints** — Not device-driven breakpoints (no `@media (max-width: 768px)` as a rule). Breakpoints go where the content breaks. Resize the browser and add a breakpoint when the layout stops working.

3. **Detect input method, not screen size** —
   ```css
   @media (pointer: coarse) { /* touch */ }
   @media (pointer: fine) { /* mouse */ }
   @media (hover: hover) { /* hover supported */ }
   ```
   A tablet with keyboard + stylus is not "mobile." A 13" touchscreen laptop is not "desktop."

4. **Adapt, don't hide** — "Display: none on mobile" is a design failure. Content hidden from mobile users was important enough to design for desktop — find the mobile-appropriate equivalent. If it truly doesn't belong on mobile, remove it from desktop too.

5. **Use container queries for components** — Components should respond to their container, not the viewport. A card in a 300px sidebar should behave differently than the same card in a 900px main column.

6. **Test with real devices, not just Chrome DevTools** — Cheap Android phone at 3G. iPad in landscape. 13" laptop at 1280px. DevTools simulates dimensions, not performance, touch physics, or rendering quirks.

## Anti-Generic

A responsive design is not a desktop design that stacks on mobile. It's a design for every context, built progressively.

## Next Steps

Start designing at 375px width (smallest common mobile). Test on real devices at 3G speed. Map all content-driven breakpoints. Verify touch targets are 44×44px minimum on all screens.
