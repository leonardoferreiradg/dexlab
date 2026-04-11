---
name: ops-design-handoff
description: Create a handoff spec that developers can implement without re-designing. Use design tokens, not pixels.
user-invocable: true
argument-hint: Design file (Figma URL) or component to hand off
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/design-ops.md` — design review process, quality gates, handoff checklist, decision log, design debt tracking
- `.design/references/interaction-patterns.md` — 8 interactive states, form design, loading patterns, touch targets, optimistic UI

## What This Skill Does
CRITICAL: Use design tokens, not raw values. Developers need the system, not a snapshot. 'var(--space-md)' not '16px'. This skill ensures your handoff is implementable and maintainable.

## STEPS

### 1. Document Visual Specs as Tokens
- Never handoff raw pixel values; use your design token system
- Document spacing: var(--space-xs), var(--space-sm), var(--space-md), etc.
- Document sizing: var(--size-sm), var(--size-md), not specific pixels
- Document colors: var(--color-primary), var(--color-error), not hex codes
- Document typography: var(--type-body), var(--type-headline), not font names + sizes
- Include token mapping table: token name → computed value (for reference)

### 2. Specify Interaction States for Every Interactive Element
- List ALL 8 states: default, hover, focus, active, disabled, loading, error, success
- Document visual changes for each state (color change, opacity, shadow, motion)
- Specify keyboard focus indicator (meets WCAG 2.1 AA contrast)
- Document disabled state (grayed out? completely hidden? aria-disabled?)
- Document loading state (spinner? skeleton? placeholder?)
- Use Figma components with states to show all variations

### 3. Document Content Specs
- Provide real copy (not "Lorem ipsum")
- Specify character limits and truncation rules
- Document how text behaves: does it wrap? truncate with ellipsis? Break to next line?
- Include examples: minimum content, typical content, maximum content
- Specify empty state content (no results, no data)
- Document error messages (specific, actionable copy)

### 4. List Edge Cases
- **Empty state**: What if there are zero items?
- **Loading state**: What if data is fetching?
- **Error state**: What if the API fails?
- **Success state**: What feedback confirms action completion?
- **Overflow**: What if text is very long? Too many items?
- **Permissions**: What if user isn't authenticated? No access?
- Provide a screenshot or mockup for each edge case

### 5. Provide Asset Delivery
- Export all icons in SVG (vector, scalable, crisp)
- Export all images at 2x resolution minimum
- Provide font files if custom typeface
- Organize assets in a structured folder
- Include a manifest: which assets are used where?
- Specify any icon naming convention

### 6. Include Implementation Notes
- Suggest approach, don't prescribe
- Example: "Uses CSS Grid for responsive layout" not "Make 3 columns"
- Call out complex interactions: "Carousel uses IntersectionObserver for lazy loading"
- Flag performance considerations: "Large data sets need virtualization"
- Note accessibility requirements that aren't visible (ARIA landmarks, roles)
- Link to relevant design decisions in your decision log

## Next Steps
After handoff, move to **/harden** to ensure edge cases and error states are fully designed before launch.

Use **/polish** to refine final details before handoff to engineering.
