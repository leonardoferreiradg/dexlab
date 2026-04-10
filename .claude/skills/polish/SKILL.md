---
name: Polish & Refinement
description: Final refinement pass. Polish is not decoration—it's the difference between 'works' and 'feels right'.
user-invocable: true
argument-hint: Design file (Figma URL) or component to polish
---

## MANDATORY PREPARATION
Invoke /dexlab — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

## What This Skill Does
Polish is not decoration. It's the difference between "works" and "feels right." This skill forces precision: alignment, consistency, completeness, and refined interaction.

## STEPS

### 1. Alignment Check
Verify all elements align to grid (usually 4px or 8px):
- **Text baselines**: Aligned to grid, not just eyeballed
- **Component edges**: All left/right edges aligned; top/bottom aligned
- **Spacing between elements**: Consistent gaps (using token values)
- **Icon alignment**: Centered within their bounding box
- Tool: Use Figma's alignment tools; show grid overlay
- Fix: Move elements 1–2px if needed; no magic positioning

### 2. Spacing Consistency
Verify all spacing uses tokens (no raw pixel values):
- **Padding**: Inside buttons, cards, containers → use var(--space-md)
- **Margins**: Between elements → use var(--space-sm), var(--space-md)
- **Gap**: Inside grids and flex containers → use tokens
- **Audit**: Find any spacing values that don't match token scale
- **Fix**: Replace with nearest token (don't create new tokens for polish)
- Result: Every spacing value traces back to token system

### 3. Interaction Completeness
Verify all 8 states for every interactive element:
- **Default**: Base appearance
- **Hover**: Visual feedback (color, shadow, scale) — desktop only
- **Focus**: Keyboard focus indicator (outline, 2–3px, meets contrast) — all inputs
- **Active**: While clicking/pressing
- **Disabled**: Grayed out or removed; cursor: not-allowed; aria-disabled
- **Loading**: Spinner or skeleton while waiting
- **Error**: Red indicator or error state styling
- **Success**: Green or confirmation state
- Checklist: Create a state matrix for buttons, inputs, links, toggles
- Verify: Hover and focus states are visually distinct; disabled isn't clickable

### 4. Typography Check
- **Hierarchy**: Headlines > subheadings > body — distinct scales
- **Line-length**: Body text 50–75 characters per line (readability)
- **Line-height**: 1.4–1.6 for body; 1.2 for headlines (breathing room)
- **Orphans/widows**: Fix single words or letters stranded on new lines
- **Font smoothing**: Subpixel rendering consistent (avoid thin, hard-to-read text)
- **Emphasis**: Bold/italic used intentionally, not overused
- Fix: Adjust letter-spacing, line-height, or font weight for polish

### 5. Color Check
- **Hard-coded colors**: Every color references a token (var(--color-primary))
- **Contrast**: All text and interactive elements meet WCAG AA (4.5:1 body, 3:1 large)
- **Dark mode**: Test every color in dark mode; ensure contrast there too
- **Semantic**: Error is red/alert color, success is green, info is blue (consistent)
- **Overuse**: Too many colors? Consolidate to 5–7 core colors
- Tool: Use contrast checker (WebAIM); test dark mode via browser DevTools
- Fix: Adjust saturation or luminance; select better tokens

### 6. Motion Check
- **Timing**: Transitions 200–300ms (not instant, not sluggish)
- **Easing**: cubic-bezier(.25, .1, .25, 1) for easing in/out (not linear)
- **Reduced motion**: All animations have a no-motion fallback (prefers-reduced-motion)
- **Jank**: Test on low-end devices; no 60fps drops
- **Purpose**: Every animation communicates something (not decorative)
- Fix: Adjust timing, add easing curves, test on slow devices

### 7. Code Cleanup
If you're in code (CSS/JSX):
- **Unused styles**: Remove dead CSS rules
- **Duplicates**: Consolidate repeated properties
- **Magic numbers**: Replace with variables (--font-size-lg not 18px)
- **Comments**: Add why, not what (why this z-index? why this breakpoint?)
- **Naming**: Use semantic class names (.button-primary not .btn-blue)
- Tool: Use CSS linter (stylelint) or IDE warnings

## Verification Checklist

Before considering polish complete:
- [ ] All elements aligned to grid
- [ ] All spacing values are tokens
- [ ] All 8 states designed for interactive elements
- [ ] Typography hierarchy clear and consistent
- [ ] All colors are tokens; contrast verified
- [ ] Motion respects prefers-reduced-motion
- [ ] No hard-coded values, magic numbers, or duplicate code
- [ ] Design reviewed for balance and visual coherence

## Next Steps
Once polished, move to **/handoff** to create developer spec with all refinements documented.

Use **/ops** to establish a design review gate that requires polish completeness before shipping.
