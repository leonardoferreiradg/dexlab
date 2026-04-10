---
description: Ask the right questions, then produce a structured wireframe with real content and annotated behavior.
argument-hint: "[screen or feature to wireframe]"
---

# /wireframe

The wireframe that answers questions instead of raising them.

## Steps

1. **Ask before drawing** — Use `ui-wireframer-creator` to gather: primary purpose (the one thing users must do), user context (who arrives and in what state), real content examples, platform and technical constraints, and reference screens. No wireframe without answers to the purpose question.

2. **Define content hierarchy** — Use `ui-wireframer-creator` to list all content elements in priority order before placing anything. The wireframe layout follows this list — not the designer's preference for where things "feel right."

3. **Choose fidelity** — Lo-fi for structure validation. Mid-fi (default) for content and flow validation. Annotated mid-fi for engineering handoff.

4. **Produce the wireframe** — Use `ui-wireframer-creator` to generate the text-based wireframe with real content (no Lorem ipsum), behavior annotations on all interactive elements, and edge case documentation for each major section.

5. **Validate hierarchy** — Use `ui-visual-hierarchy` to confirm: the element that should get first attention is visually dominant, primary action is unmistakable, and secondary elements don't compete.

## Output

Mid-fi wireframe with real content, behavior annotations, and edge case documentation for each section. Delivered as structured text.

## Follow-up

Use `/r-states` to spec interactions, `/ui-design-screen` to apply visual treatment, `/audit-map-flow` to validate against the user flow.
