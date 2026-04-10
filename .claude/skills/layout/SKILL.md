---
name: Layout
description: Design spatial systems, grid structures, and rhythm through intentional spacing.
user-invocable: true
argument-hint: "[breakpoints] or invoke after /shape"
---

## MANDATORY PREPARATION

Invoke `/dexlab` — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

## Layout: Spacing Creates Meaning

Spacing is grouping. Spacing is breathing. Spacing is how users understand relationships between elements. Not everything needs a card.

### STEP 1: Define Spacing Scale
- Base unit: 4px or 8px (choose one—consistency matters)
- At 4px base: xs=4, sm=8, md=12, lg=16, xl=24, xxl=32, xxxl=48, jumbo=64
- At 8px base: xs=8, sm=16, md=24, lg=32, xl=48, xxl=64, xxxl=96
- Rule: all spacing values must be multiples of base unit
- Document full scale with visual reference
- Typically use 6-8 distinct values (avoid 20-value scales—decision paralysis)

### STEP 2: Create Semantic Space Tokens
Define tokens that describe relationship, not size:

**Inset (internal padding):**
- `--space-inset-xs: 4px` (button icons)
- `--space-inset-sm: 8px` (button label padding)
- `--space-inset-md: 16px` (card content padding)
- `--space-inset-lg: 24px` (section padding)

**Stack (vertical spacing between sibling elements):**
- `--space-stack-xs: 4px` (tight, related)
- `--space-stack-sm: 8px` (grouped)
- `--space-stack-md: 16px` (distinct, same level)
- `--space-stack-lg: 32px` (separate sections)
- `--space-stack-xl: 64px` (major break)

**Inline (horizontal spacing):**
- `--space-inline-xs: 4px` (icon-text gap)
- `--space-inline-sm: 8px` (item separator)
- `--space-inline-md: 16px` (component gap)
- `--space-inline-lg: 32px` (section gap)

**Gap (grid/flex spacing):**
- Use gap property in flex/grid: `gap: var(--space-stack-md)`

### STEP 3: Design Grid System
- Choose grid columns: 12-column (most flexible), 8-column (simpler), or 6-column
- Define responsive breakpoints:
  - Mobile: 320px-767px (1-2 columns, full bleed)
  - Tablet: 768px-1023px (2-3 columns, padding)
  - Desktop: 1024px-1439px (4-6 columns, container)
  - Large: 1440px+ (full grid, max-width container)
- Gutter (space between columns): typically 16px or 32px
- Container max-width: 1200px-1440px (prevents line-length issues on ultra-wide)
- Example 12-column grid:
  - Mobile: 1 column, no gutter, full bleed
  - Tablet: 2 columns, 16px gutter
  - Desktop: 12 columns, 24px gutter
- Document grid usage: when to span full width, when to constrain

### STEP 4: Apply Container Queries for Components
- Use CSS container queries for responsive components (modern approach)
- Define containers on major layout elements:
  - `container-type: inline-size` on section containers
  - Break responsive behavior at component level, not viewport level
- Query example:
  ```css
  @container (min-width: 400px) {
    .card { display: grid; grid-template-columns: 1fr 1fr; }
  }
  ```
- Advantage: components adapt to their container, not viewport
- Fallback: viewport media queries for unsupported browsers

### STEP 5: Create Rhythm Through Varied Spacing
- Anti-pattern: uniform spacing everywhere (boring, unclear relationships)
- Principle: larger gaps separate distinct concepts, smaller gaps group related items
- Pattern example:
  - Icon to label: 8px (tight coupling)
  - Label to description: 4px (minor gap)
  - Group to next group: 16px (separation)
  - Section to section: 32px+ (major break)
- Apply consistently: if card title-to-description is 4px, keep that ratio everywhere
- Use spacing to create visual hierarchy without color or size tricks
- Test: scan the page—does spacing guide your eye to priorities?

### STEP 6: Verify Touch Targets
- Mobile touch target: minimum 44px × 44px (WCAG 2.5.5 AA)
- Desktop click target: minimum 32px × 32px
- Spacing between targets: at least 8px (prevent accidental clicks)
- Apply to:
  - Buttons (width + height)
  - Links (padding creates target size)
  - Interactive icons
  - Form inputs (height)
  - Checkbox/radio circles (should be 20-24px)
- Test: on actual mobile device, can you tap the target accurately?
- Adjust: if targets too close, add spacing; if too large, reduce padding

### STEP 7: Test Responsive Layout
- Mobile (320px):
  - Single column, full bleed
  - Touch-safe spacing and targets
  - Readable line-length (constrain width if needed)
  - No horizontal scroll
  
- Tablet (768px):
  - 2-column or flexible layout
  - Adequate gutters for readability
  - Content still accessible without zoom
  
- Desktop (1024px+):
  - Full grid available
  - Container max-width applied
  - Breathing room at sides
  
- Ultra-wide (1600px+):
  - Content constrained to readable width
  - Sidebars or additional info if relevant
  - Not stretched across full screen

### STEP 8: Document Grid Usage Guidelines
- When to use full width: hero sections, images, data tables
- When to constrain: body text, form layouts, card grids
- Column spanning rules: when cards span 2/3/4 columns
- Responsive column changes: when layout shifts from 1 → 2 → 3 columns
- Edge cases: very long headlines, code blocks, lists
- Special zones: header (fixed width?), footer (match body width)

## Spacing Do's and Don'ts

**Do:**
- Use tokens—never hardcoded values
- Vary spacing to create relationships
- Group related items with tight spacing
- Separate distinct concepts with larger gaps
- Use consistent ratios across product

**Don't:**
- Use every spacing value in the same view
- Card everything (spacing can group without borders)
- Ignore touch target minimums
- Stretch content to fit container (use max-width)
- Forget about dark mode spacing (should be identical)

## Next Steps
- Use **craft** to implement spacing tokens in components
- Use **tokens** to document grid and spacing system
- Use **animate** to define motion relative to spacing rhythm
