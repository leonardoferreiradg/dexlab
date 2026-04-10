---
description: Design a complete screen — from content hierarchy to polished, responsive implementation.
argument-hint: "[screen name or feature]"
---

# /design-screen

From blank canvas to a screen that works, looks deliberate, and holds up at every viewport.

## Steps

1. **Wireframe first** — Use `ui-wireframer-creator` to gather context, define content priority, and produce a mid-fi wireframe with real content. Establish information hierarchy before choosing any visual treatment.

2. **Direct attention** — Use `ui-visual-hierarchy` to validate the attention order. Squint test: what's seen first? Grayscale test: does hierarchy survive without color? If not, fix structure before adding visual treatment.

3. **Apply the visual system** — Use `ui-color-system-creator` for color token application, `ui-typeset` for typography hierarchy. Both skills reference the project's design context — don't introduce values outside the system.

4. **Make it responsive** — Use `ui-responsive-design` to adapt the screen: mobile-first, content-driven breakpoints, container queries for components. Adapt the layout — don't just stack it.

5. **Check for AI slop** — The AI Slop Test: if someone saw this and said "AI made this," would they be right? Check: no side-stripe borders, no gradient text, no glassmorphism as decoration, no hero metric layout, no identical card grid, no neon-on-dark. If any apply, redesign that element.

## Output

Complete screen: wireframe, visual hierarchy analysis, responsive implementation, and AI slop verdict. Delivered as working code or annotated design spec depending on context.

## Follow-up

Use `/run-critique` to get structured feedback, `/ops-ship-handoff` when approved.
