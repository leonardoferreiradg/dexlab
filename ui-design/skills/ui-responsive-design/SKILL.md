---
name: ui-responsive-design
description: Design interfaces that adapt to context — not just screen size, but input method, viewport orientation, and content density.
user-invocable: true
argument-hint: "[page or component name]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/spatial-design.md` — 4pt base scale, semantic spacing tokens, container queries, visual rhythm, grid systems
- `.design/references/interaction-patterns.md` — 8 interactive states, form design, loading patterns, touch targets, optimistic UI

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If product context is already available** — via `.dexlab.md` in the project root, Project Instructions, or context established earlier in this conversation:
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered.

**If no product context is available from any of these sources:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. What is the product's brand personality — describe it with three words that would make a designer make different visual choices than if you used three different words? (e.g., "precise, trustworthy, calm" vs. "bold, playful, irreverent")
2. Who is the primary user and what is their context when they encounter this UI — rushed and mobile, focused at a desktop, exploring for the first time, returning daily?
3. What platform and visual constraints apply — existing design system or tokens to use, target devices, dark mode requirement, accessibility level (WCAG AA or AAA)?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

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
