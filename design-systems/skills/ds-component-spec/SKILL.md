---
name: ds-component-spec
description: Specify reusable components with props, states, accessibility, and edge cases.
user-invocable: true
argument-hint: "[component-name] or invoke after /craft"
---

## Component: Specification as Contract

A component spec without edge cases is a wishlist, not a spec. Document thoroughly—it saves debugging time.

### STEP 1: Define Component Purpose and Context
- Name: Specific, not generic (e.g., "Primary Button", not "Button")
- Purpose: One sentence on what it does
  - "Primary Button" → "Triggers primary action in forms, dialogs, and page-level flows"
  - "Toast Notification" → "Temporary feedback message shown bottom-right, auto-dismisses"
- Usage context: Where and when is it used?
  - Primary Button: form submit, dialog confirmation, major CTAs
  - Toast: success feedback, error alerts, status updates
- Related components: What else might be used nearby?
  - Primary Button → Secondary Button, Link Button
  - Toast → Modal, Inline Alert
- Rationale: Why does this component exist? (solving what problem?)

### STEP 2: Document Props/Variants/States

**Props** (inputs that change appearance/behavior):
```
- variant: "primary" | "secondary" | "danger" | "ghost"
- size: "sm" | "md" | "lg"
- disabled: boolean
- loading: boolean
- icon: React.ReactNode (optional)
- iconPosition: "left" | "right"
- fullWidth: boolean
- onClick: (event: MouseEvent) => void
```

**Variants** (visually distinct types):
- Primary: default action, brand color bg, light text
- Secondary: alternative action, light bg, dark text
- Danger: destructive action, red bg, light text
- Ghost: low-priority, no bg, outline or text only

**States** (responsive to user/system conditions):
- Default: ready for interaction
- Hover: user moving mouse over element
- Focus: keyboard navigation reached element
- Active: user pressed the element
- Disabled: interaction blocked, grayed out
- Loading: action in progress, spinner shown
- Visited: (for links) user has followed this before

**Size variants**:
- Small: 32px height, 12px text (compact UI, secondary actions)
- Medium: 40px height, 14px text (default, primary use)
- Large: 48px height, 16px text (hero, mobile, emphasis)

### STEP 3: Specify Accessibility Requirements

**Keyboard navigation**:
- Tab: cycles through interactive elements
- Shift+Tab: reverse
- Enter/Space: activates button
- Escape: closes dropdown/menu

**ARIA attributes**:
- `role="button"` if custom element
- `aria-pressed="true|false"` if toggle button
- `aria-disabled="true"` if disabled
- `aria-label="..."` if icon-only, describe action
- `aria-describedby="..."` if needs description (e.g., hint text)
- `aria-live="polite"` if announces state change

**Screen reader testing**:
- Button should announce: name (text or aria-label) + state (disabled, loading)
- Example: VoiceOver reads "Submit button, disabled, to activate press space" (when disabled)
- Loading state announces: "Loading, primary button" (not spinning icon alone)
- Iconography: icon-only buttons must have aria-label

**Visual indicators**:
- Focus: 2-4px outline, high contrast color
- Disabled: crossed-out cursor, opacity 0.5, no hover effect
- Active: color change or border highlight

**Color contrast**:
- Button text on button bg: 4.5:1 AA minimum
- Icon color on bg: 3:1 minimum for decorative, 4.5:1 for meaningful

### STEP 4: Define Responsive Behavior

**Mobile (320px-767px)**:
- Button height: minimum 44px (touch target)
- Button width: full available width or fixed?
- Stacking: do buttons stack vertically or side-by-side?
- Text truncation: how do long labels wrap?

**Tablet (768px-1023px)**:
- Inline buttons: 2-3 buttons fit side-by-side?
- Spacing between: increase touch gap?

**Desktop (1024px+)**:
- Behavior: unchanged from tablet

**Example responsive button group**:
- Mobile: Full-width buttons, stacked vertically
- Tablet+: Buttons inline, equal width if in group

### STEP 5: Document Edge Cases

Edge cases save debugging:

**Text length**:
- Shortest label: "Save" (4 chars)
- Longest expected: "Confirm deletion of this account" (30 chars)
- What happens if text exceeds button width?
  - Truncate with ellipsis? (rarely)
  - Wrap to 2 lines? (show how)
  - Grow button? (usually not)

**Icon behavior**:
- With text: icon on left by default, spacing = 8px
- Without text (icon-only): required aria-label
- Icons too large/small: defined sizes xs (16px), sm (20px), md (24px)

**Disabled + loading**:
- Can disabled button become loading? (No, probably)
- Can loading button become disabled? (Yes, if validation fails)
- Show both spinner + text? (Yes: "Saving...")

**Empty/missing content**:
- Empty string label: Show placeholder "Untitled" or "No title"?
- Missing icon: Graceful fallback or error?

**Very large surfaces**:
- If parent container huge (1200px width), does button grow?
  - No: limit to max-width (e.g., 200px)
  - Use layout system to position, not grow

**Keyboard+mouse combo**:
- If user tabs to button then clicks: show focus outline?
  - Yes, until mouse moves away (don't hide on click)

**High contrast mode** (OS accessibility):
- Outline strength increases
- Colors swap for maximum contrast
- Test: enable "high contrast" on Windows, verify visible

### STEP 6: Create Usage Guidelines (Do/Don't)

**Do:**
- Use primary button for main action
- Use secondary button for supporting actions
- Group related buttons: primary on right, secondary on left (LTR)
- Use consistent sizing within a section
- Include icon only if it clarifies meaning
- Pair error state with explanatory text
- Test on actual mobile device

**Don't:**
- Stack more than 2-3 buttons vertically (use menu instead)
- Use danger button for everything red (reserve for destructive)
- Icon without label unless universally understood (X, ✓, menu)
- Multiple primary buttons (one primary action per section)
- Disabled state to hide options (remove or disable with reason)
- Truncate long labels (rewrite shorter or allow wrapping)
- Use loading state for perceived slowness (only for actual async)

### STEP 7: Example Specification
```
Component: Primary Button

Purpose: Trigger primary action (submit, create, confirm)

Props:
- label: string (required)
- onClick: () => void (required)
- disabled?: boolean = false
- loading?: boolean = false
- size?: "sm" | "md" | "lg" = "md"

States:
✓ default
✓ hover (darken bg by 10%)
✓ focus (add outline)
✓ active (darken bg by 15%)
✓ disabled (opacity 0.5, no events)
✓ loading (show spinner, disable interaction)

Accessibility:
- Keyboard: Tab, Enter/Space to activate
- ARIA: aria-disabled when disabled, aria-busy when loading
- Focus: 3px outline, brand color
- Screen reader: announces "Button, [label]" + state

Responsive:
- Mobile: 44px height, 8px side padding minimum
- Desktop: 40px height, 16px side padding

Edge cases:
- Label >30 chars: allow 2-line wrap, adjust height
- Icon + label: icon left, 8px gap
- Loading + label: "Creating..." shown while loading
```

## Next Steps
- Use **tokens** to reference component tokens (button-bg, button-text)
- Use **clarify** to specify button labels and copy
- Use **accessibility-review** to test final component
