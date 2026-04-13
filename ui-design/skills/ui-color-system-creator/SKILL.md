---
name: ui-color-system-creator
description: Build a coherent, accessible color system using OKLCH with semantic tokens.
user-invocable: true
argument-hint: "[brand-colors] or invoke after /shape"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/color-system.md` — OKLCH color space, semantic token tiers, dark mode strategy, accessibility contrast ratios

## Colorize: Color as System

Color is a tool, not decoration. A proper color system ensures consistency, accessibility, and intentionality.

### STEP 1: Define Brand Colors from Context
- From .dexlab.md, extract: primary brand color, secondary color, any symbolic colors
- Document hex and intention: e.g., "primary: #3B7DFF (trust, energy)"
- Identify which colors are load-bearing vs. decorative
- Note cultural contexts: red ≠ green globally; test color meanings
- Confirm: at least 3-5 colors max in core palette (avoid generic "12 color AI default")

### STEP 2: Build Full Palette Using OKLCH
- Use OKLCH color space (better than HSL or RGB for consistency)
- OKLCH structure: Oklch(L% C H°) where L=lightness, C=chroma, H=hue
- For each brand color:
  - Extract OKLCH values
  - Create tints: increase L by 10-15% increments (900, 800, 700... 100)
  - Create shades: decrease L by 10-15% increments
  - Keep C and H constant within color family
- Example for brand blue #3B7DFF:
  - L: 50% (base)
  - L: 10% (darkest, near black)
  - L: 90% (lightest, near white)
- Reject AI defaults: flat 12-color palettes, gradients everywhere

### STEP 3: Create Semantic Token Structure
Define tokens at three levels:

**Global tokens** (color primitives):
- `--color-blue-50`, `--color-blue-100`... `--color-blue-900`
- `--color-neutral-50` through `--color-neutral-900`
- `--color-red-X`, `--color-green-X`, `--color-yellow-X` for states

**Alias tokens** (semantic meaning):
- `--color-primary`: brand primary (component-agnostic)
- `--color-secondary`: brand secondary
- `--color-surface`: backgrounds
- `--color-neutral`: text, borders
- `--color-error`: danger, negative, destructive
- `--color-success`: positive, affirmation, done
- `--color-warning`: caution, review needed
- `--color-info`: informational, neutral

**Component tokens** (specific use):
- `--color-button-primary-bg`, `--color-button-primary-text`
- `--color-button-danger-bg`, `--color-button-danger-hover`
- `--color-input-border`, `--color-input-focus`
- `--color-card-bg`, `--color-card-border`
- `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary`
- `--color-link`, `--color-link-hover`, `--color-link-visited`

### STEP 4: Tint Neutrals Toward Brand Hue
- Never use pure gray (#808080)—it feels digital and cold
- Tint neutrals by adding trace of brand hue
- Example: brand primary is warm blue → add hint of blue to grays
  - Base: `--color-neutral-500: oklch(50% 0 0)`
  - Tinted: `--color-neutral-500: oklch(50% 0.05 210)` (subtle blue shift)
- Warm brand → warm grays (hint of orange/red)
- Cool brand → cool grays (hint of blue/purple)
- Rule: If you've tinted them right, people won't notice, but it will feel intentional

### STEP 5: Design Dark Mode as Intentional Redesign
- Dark mode is NOT inverting lightness
- Create separate dark palette that serves the same roles
- Dark mode guidelines:
  - Surface: very dark, not pure black (oklch(15% ... ) for OLED; oklch(20% ...) for LCD)
  - Text primary: very light, not pure white (oklch(95% ...))
  - Text secondary: oklch(75% ...)
  - Interactive: increase saturation in dark mode (same hue, higher chroma)
  - Background: oklch(10-15% ...)
  - Surface elevated: oklch(20-25% ...)
- Test: dark mode should be as visually coherent as light mode, not just inverted
- Use CSS variable scoping: `[data-theme="dark"] { --color-surface: ... }`

### STEP 6: Test Accessibility—4.5:1 AA Minimum
- Contrast ratios: measure text/background combinations
- WCAG 2.1 AA minimum: 4.5:1 for normal text, 3:1 for large text
- Tools: use WCAG Color Contrast Checker, WebAIM Contrast Checker
- Test combinations:
  - All text colors on all background colors
  - Button text on button backgrounds
  - Input text on input backgrounds
  - Links in body text on surface
- Red flag: if a combination fails, redesign—don't accept lower contrast
- Bonus: aim for 7:1 AAA on critical UI

### STEP 7: Create Component-Level Color Tokens
Define interactive components with color-aware tokens:

**Button primary:**
- `--color-button-primary-bg: var(--color-primary)`
- `--color-button-primary-text: var(--color-surface)` (white/light background)
- `--color-button-primary-hover: var(--color-primary-700)` (darker shade)
- `--color-button-primary-active: var(--color-primary-800)`
- `--color-button-primary-disabled-bg: var(--color-neutral-200)`
- `--color-button-primary-disabled-text: var(--color-neutral-400)`

**Input fields:**
- `--color-input-bg: var(--color-surface)`
- `--color-input-border: var(--color-neutral-300)`
- `--color-input-border-focus: var(--color-primary)`
- `--color-input-text: var(--color-text-primary)`
- `--color-input-placeholder: var(--color-text-tertiary)`
- `--color-input-error-border: var(--color-error)`

**Link states:**
- `--color-link: var(--color-primary)`
- `--color-link-visited: var(--color-primary-700)`
- `--color-link-hover: var(--color-primary-800)`
- `--color-link-active: var(--color-primary-900)`

### STEP 8: Verify and Document
- Create color documentation:
  - Show each color family with all tints
  - Show semantic tokens and their use cases
  - Show component tokens and their context
  - Document contrast ratios for each combination
- Test on actual components: confirm tokens work at scale
- Measure: file size of color tokens (should be <1KB)
- Confirm: no hardcoded hex values in component CSS (all vars)

## Next Steps
- Use **craft** to implement color tokens in components
- Use **accessibility-review** to confirm contrast across product
- Use **tokens** to document color system architecture
