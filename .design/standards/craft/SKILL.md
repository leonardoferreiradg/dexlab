---
name: Craft
description: Build with quality—the deepest design implementation skill. Execute shape direction with rigor and anti-generic principles.
user-invocable: true
argument-hint: "[shape-context] or invoke after /shape is complete"
---

## Craft: Building with Rigor

Craft is the execution phase. It takes the shape direction and builds a complete, production-grade frontend that rejects AI slop, respects users, and proves the design works.

### STEP 1: Verify Shape and Context
- Load shape output from current project
- Confirm: design direction, component hierarchy, interaction patterns, state machine
- Extract: tone, key metaphor, aesthetic constraints
- Verify anti-generic rules loaded from .dexlab.md
- Confirm: typeset, colorize, layout, animate, tokens are defined or will be created in parallel

### STEP 2: Set Up Design Foundation
- Confirm tokens are available (color, typography, spacing, motion)
- Verify type scale is responsive and semantic
- Confirm color palette includes: primary, secondary, surface, error, success, warning states
- Set up spacing scale (4px base or project standard)
- Load motion defaults: easing functions, standard durations

### STEP 3: Build Component Structure
- Create atomic components first (Button, Input, Icon, Label)
- Build composite components (Card, Form, Table, Modal)
- Implement all documented states: default, hover, focus, active, disabled, loading, error, empty, success
- Use CSS custom properties for all token values
- Ensure semantic HTML and accessibility from the start
- Set up responsive variants for each component

### STEP 4: Typography Implementation
- Reference `.design/references/typography.md` for detailed rules
- Implement type scale ratios: 1.5:1 recommended for marketing, 1.25:1 for product
- Use modular sizing: display (3.5rem), heading-1 (2.5rem), heading-2 (2rem), body (1rem), caption (0.875rem), code (0.875rem)
- Set line-height: 1.6 for body text, 1.4 for headings, 1.2 for dense data
- Set letter-spacing: +0.015em for headlines, 0 for body, +0.01em for caps
- Verify line-length: 50-75 characters for body text
- Reject Inter, Roboto, DM Sans. Font choice must reflect brand personality.
- Test font rendering at all sizes on target devices
- Confirm font-loading strategy (avoid invisible text)

### STEP 5: Color System Implementation
- Reference `.design/references/color-system.md` for token architecture
- Build palette using OKLCH color space (better than HSL for consistency)
- Create semantic tokens: primary, secondary, surface, neutral, error, success, warning, info
- Tint neutrals toward brand hue (never pure gray)
- Dark mode as intentional redesign, not inversion (separate palette)
- Test all text/background combinations: minimum 4.5:1 AA contrast
- Verify: color + contrast alone do NOT convey info (icon, pattern, text required)
- Create component-level tokens: button-bg, input-border, card-shadow, etc.

### STEP 6: Spatial Design Implementation
- Reference `.design/references/spatial-design.md` for layout rules
- Use semantic spacing tokens: xs (4px), sm (8px), md (16px), lg (32px), xl (64px)
- Spacing creates grouping—use varied spacing, not cards everywhere
- Touch targets ≥44px (mobile), ≥32px (desktop)
- Verify container queries for responsive components
- Create rhythm through consistent but intentional spacing
- Apply breathing room: don't cram content
- Test at small screens (320px), tablet, desktop, large displays

### STEP 7: Interaction and State Implementation
- Implement all defined states from shape
- Focus indicators: visible on keyboard nav, subtle on mouse
- Hover states: only on interactive elements, consistent across component family
- Active states: clear visual feedback that action was registered
- Disabled states: gray + reduced opacity, no pointer events
- Loading states: spinner or skeleton, preserve layout to avoid shift
- Error states: color + icon + text, explain what went wrong
- Empty states: guidance, not sad emoji
- Success states: celebratory tone (color, icon, optional animation)

### STEP 8: Motion and Animation Implementation
- Reference `.design/references/interaction-patterns.md` for motion and animation principles
- Use only transform and opacity (GPU-accelerated)
- No bounce, elastic, or spring easing—use cubic-bezier or ease-out
- Follow 100/300/500 timing rule: micro (100ms), standard (300ms), macro (500ms)
- Exit animations: 75% of entrance duration
- Stagger for lists: 50ms offset per item (max 300ms total)
- Respect prefers-reduced-motion: disable animations or use instant transitions
- Entrance: fade-in + slide-up (300ms)
- Exit: fade-out + slide-down (225ms)
- State changes: all properties 300ms ease-out
- Loading: infinite spinner, pulsing opacity 2s ease-in-out

### STEP 9: Accessibility and Inclusivity
- Semantic HTML: use native elements (button, a, form, fieldset)
- ARIA: only when semantic HTML insufficient (role, aria-label, aria-describedby, aria-live, aria-expanded)
- Keyboard navigation: Tab/Shift+Tab, Enter/Space, Escape, arrow keys where appropriate
- Focus management: visible focus indicators, trap focus in modals, restore focus on close
- Screen reader testing: VoiceOver (Mac), NVDA (Windows), JAWS (Windows)
- Color contrast: 4.5:1 for body text, 3:1 for large text and graphics
- Error messages: announced immediately via aria-live="polite"
- Images: alt text that conveys meaning, "" for decorative
- Form labels: associated via htmlFor, required fields marked

### STEP 10: The AI Slop Test
Run this test on the complete design:

**Would someone immediately know AI made this?** If yes, rebuild.

Red flags to audit:
- Side-stripe borders: Reject—use solid, outline, or no border
- Gradient text: Reject—poor contrast, reads like template
- Glassmorphism: Reject—blurry panels, no real functionality
- Hero metric layouts: Reject—huge number with "label below", newsfeed cards
- Identical card grids: Reject—add visual breathing, varied heights, grouping
- Neon-on-dark: Reject—harsh, immature, 2019 vaporwave
- Generic copy: Reject—"Streamline your workflow", "Powerful features"
- Overuse of gradients: Reject—reserve for 2-3 special uses (hero bg, CTA emphasis)
- Stock photo placeholders: Confirm with real content before shipping
- Iconography mismatch: Icons must match brand personality, not generic set

Anti-pattern checklist:
- [ ] No gratuitous shadows
- [ ] Spacing is intentional, not uniform
- [ ] Color palette is coherent, not random
- [ ] Typography has personality, not safety
- [ ] Components do one job well
- [ ] Loading states show progress, not anxiety
- [ ] Empty states invite action, not pity
- [ ] Error messages are helpful, not harsh
- [ ] Motion serves purpose, not distraction
- [ ] Accessibility is built-in, not added

### STEP 11: Final Quality Check
- Verify all components match shape direction
- Test on target devices: mobile, tablet, desktop, dark mode
- Run accessibility check: WCAG 2.1 AA minimum
- Confirm: all tokens used, no hardcoded values
- Review: no unused code, clean component structure
- Test: at least 3 realistic user scenarios end-to-end
- Confirm: performance (Lighthouse > 80), no layout shifts, no jank
- Document: known limitations, future improvements, edge cases

## Frontend Aesthetics Summary

**Typography:** Modular scale, semantic naming, responsive sizing, personality-matched fonts.

**Color:** OKLCH palette, semantic tokens, 4.5:1 contrast minimum, intentional dark mode.

**Layout:** Semantic spacing, varied rhythm, touch-safe targets, content-driven grouping.

**Motion:** GPU transforms, 100/300/500 timing, respects prefers-reduced-motion, purposeful stagger.

**Accessibility:** Semantic HTML, visible focus, ARIA where needed, keyboard-first, screen reader tested.

**Anti-Patterns:** No AI slop—reject gradients, glassmorphism, generic copy, neon glows, identical cards.

## Next Steps
- Use **tokens** to document and share the design system
- Use **component** to write specs for reusable pieces
- Use **clarify** to audit and improve UX copy
