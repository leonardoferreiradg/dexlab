---
name: Animate
description: Design motion and transitions with purpose. GPU-accelerated, accessible, and strategic.
user-invocable: true
argument-hint: "[interaction-context] or invoke after /craft foundation"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/interaction-patterns.md` — 8 interactive states, loading patterns, touch targets, optimistic UI

## Animate: Motion with Purpose

Motion can clarify or distract. Good motion guides attention, shows causality, and respects user intent. Bad motion exhausts and alienates.

### STEP 1: Define Motion Principles for Project
- From shape/context, extract: Is motion playful? Serious? Minimal? Energetic?
- Define 3-5 motion principles as rules:
  - Example 1: "Motion shows cause-and-effect, never decorative"
  - Example 2: "Entrance is quick (300ms), exit is slower (400ms)"
  - Example 3: "Micro-interactions are subtle, macro-transitions are bold"
- Document: which interactions need motion vs. instant (form validation = instant, modal open = motion)
- Plan: motion tokens for reuse (duration, easing, delay)

### STEP 2: Design Entrance and Exit Animations
- **Entrance** (element appears):
  - Standard: fade-in + slide-up
  - Duration: 300ms (standard) or 500ms (macro)
  - Easing: `ease-out` or `cubic-bezier(0.16, 1, 0.3, 1)`
  - Combines: `opacity 0→1` + `transform translateY(20px→0)`
  - Example: modal opens with fade-in + slide-down from top
  
- **Exit** (element disappears):
  - Mirror entrance but faster
  - Duration: 75% of entrance (225ms for 300ms entrance)
  - Easing: same as entrance
  - Rule: exit quick, don't linger
  - Example: modal closes with fade-out + slide-up
  
- Timing rule: 100/300/500
  - 100ms: micro-feedback (icon color change, scale pulse)
  - 300ms: standard transition (button hover, modal open)
  - 500ms: macro change (page navigation, collapse/expand)

### STEP 3: Create State Transition Animations
- **Hover states** (only on interactive elements):
  - Scale: 1.0 → 1.05 (subtle growth)
  - Duration: 150ms
  - Easing: ease-out
  - Applies to: buttons, links, cards with hover
  
- **Focus states** (keyboard navigation):
  - Always visible: 2-4px outline or glow
  - No animation needed if already prominent
  - Duration: instant (0ms)
  - Consider: high contrast for accessibility
  
- **Active/pressed states** (mouse down):
  - Scale: 1.0 → 0.98 (slight compression)
  - Duration: 100ms instant
  - No easing (linear)
  - Confirms: user action registered
  
- **Disabled states**:
  - No animation (static, de-emphasized)
  - Opacity: 0.5, cursor: not-allowed
  - No hover effects
  
- **Expandable sections**:
  - Height transition: 0 → auto (or max-height)
  - Duration: 300ms
  - Easing: ease-out
  - Rotate icon 90° in sync
  
- **Tabs/menu switching**:
  - Fade out old (200ms) + fade in new (300ms)
  - Or: slide content in direction of tab
  - Easing: ease-out

### STEP 4: Implement Loading and Feedback Animations
- **Loading spinner**:
  - Rotate 360° infinitely
  - Duration: 1s (snappy, not leisurely)
  - Easing: linear
  - Use SVG or CSS animation, not images
  
- **Skeleton loading**:
  - Pulsing opacity: 0.7 → 1.0 → 0.7
  - Duration: 1.5s
  - Easing: ease-in-out
  - Preserve layout (prevent shift)
  
- **Success animation**:
  - Checkmark with entrance: scale 0→1, fade-in
  - Duration: 400ms
  - Optional: scale 1→1.1→1 bounce (subtle)
  - Color: success color, celebratory tone
  
- **Error animation**:
  - Shake: translateX(-5px) repeated
  - Duration: 300ms (quick, not annoying)
  - Easing: ease-in-out
  - Accompanied by icon and text, not animation alone
  
- **Toast/notification**:
  - Entrance: slide-in from bottom or right
  - Duration: 300ms
  - Auto-dismiss: fade-out after 4s delay
  - Exit duration: 200ms

### STEP 5: Respect prefers-reduced-motion
- Check for `@media (prefers-reduced-motion: reduce)` support
- In reduced-motion mode:
  - Disable all animations
  - Use instant transitions (0ms)
  - Keep visual changes (color, scale) instant
  - Ensure all info still conveyed
- Example:
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
  }
  ```
- Test: enable "reduce motion" in OS settings, verify experience
- Never ignore: some users have vestibular issues; motion triggers vertigo

### STEP 6: Use Only Transform and Opacity (GPU-Accelerated)
- **Allowed** (GPU-friendly):
  - transform: translateX, translateY, scale, rotate, skew
  - opacity (fade)
- **Avoid** (CPU-expensive, causes jank):
  - width, height (use transform: scale)
  - left, right, top, bottom (use transform: translate)
  - padding, margin (use transform or size components differently)
  - box-shadow (too expensive, pre-render if needed)
  - border-radius changes
  - color transitions (usually okay, but batch with opacity)
- Example: move button right, use transform: translateX(20px), not left: 20px
- Result: 60fps motion, no dropped frames

### STEP 7: Stagger for Lists
- When animating multiple items (list, grid, cards):
  - Calculate stagger: 50-100ms offset per item
  - Total max: 300ms (don't let stagger exceed this)
  - Formula: item-index × stagger-offset = item delay
  - Item 1: 0ms delay
  - Item 2: 50ms delay
  - Item 3: 100ms delay
  - Example:
    ```css
    .card:nth-child(1) { --delay: 0ms; }
    .card:nth-child(2) { --delay: 50ms; }
    .card:nth-child(n+6) { --delay: 250ms; } /* cap stagger */
    animation: slideUp 300ms ease-out var(--delay) both;
    ```
- Effect: feels organized, not like lag
- Use for: grid reveals, list transitions, menu appearances

### STEP 8: Motion Token System
Define reusable animation tokens:

```css
/* Durations */
--motion-micro: 100ms;
--motion-standard: 300ms;
--motion-macro: 500ms;

/* Easing functions */
--motion-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--motion-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--motion-ease-linear: linear;

/* Common transitions */
--motion-fade: opacity var(--motion-standard) var(--motion-ease-out);
--motion-scale: transform var(--motion-standard) var(--motion-ease-out);
--motion-slide: transform var(--motion-standard) var(--motion-ease-out);
```

### STEP 9: Animation Checklist
- [ ] All motion serves purpose (shows causality, provides feedback)
- [ ] Uses transform and opacity only (no layout thrashing)
- [ ] Respects prefers-reduced-motion
- [ ] Exit is 75% entrance duration
- [ ] Stagger doesn't exceed 300ms total
- [ ] Loading states show progress, not anxiety
- [ ] Error animations are quick, not startling
- [ ] Success feels celebratory, not dismissive
- [ ] Hover/focus states are discoverable
- [ ] Motion is tested at 60fps (no jank)

## No Bounce, No Spring, No Elastic

Rules to reject:
- Bounce easing (cubic-bezier with overshoot): unprofessional
- Spring physics: over-bouncy, slow to settle
- Elastic effects: "wiggle" on load: distracting
- Always use ease-out or linear

## Next Steps
- Use **craft** to implement animation tokens
- Use **tokens** to document motion system
- Use **clarify** to pair animations with copy (loading text, success message)
