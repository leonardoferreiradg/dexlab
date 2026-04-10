# Spatial Design Reference — Dexlab

Space is the first language of design. Before color, before type, space tells the viewer what matters, what's grouped, what's interactive. Mess up spacing and nothing else fixes it.

## The 4pt Base Scale: Why Not 8pt?

Design systems typically use 8pt scales. This is wrong for screen design.

**Why 4pt instead:**
- 12px is the minimum readable body text. An 8pt scale forces 16px, 24px, 32px—you skip 12, 14, 18, 20, 28.
- 12px is essential. It's needed for small labels, helper text, timestamps, badges.
- 14px bridges 12 and 16. It's the body text for compact UIs (dashboards, data tables).
- 4pt scale gives you: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64px.

This flexibility matters. You're not stretching 8pt padding to 12px, settling for 16px, or living with bad hierarchy because 24px felt too big.

```css
:root {
  /* Spacing scale */
  --space-xs: 0.25rem;    /* 4px — micro spacing, letter-spacing */
  --space-sm: 0.5rem;     /* 8px — tight component spacing */
  --space-md: 1rem;       /* 16px — standard padding/margin */
  --space-lg: 1.5rem;     /* 24px — section spacing */
  --space-xl: 2rem;       /* 32px — major section breaks */
  --space-2xl: 2.5rem;    /* 40px — page-level spacing */
  --space-3xl: 3rem;      /* 48px — hero sections */
}
```

Apply this ruthlessly. Every spacing decision references the scale. No arbitrary 13px margins. No "feels right" adjustments.

## Semantic Token Naming: Communicate Purpose

Name spacing tokens by purpose, not by size.

```css
/* BAD: Size-based naming */
--spacing-8: 8px;
--spacing-16: 16px;
--spacing-24: 24px;

/* GOOD: Purpose-based naming */
--space-component-inner: var(--space-sm);   /* Padding inside components */
--space-component-gap: var(--space-md);     /* Gap between elements */
--space-section: var(--space-lg);           /* Between sections */
--space-page-edge: var(--space-xl);         /* Page margin */
```

This forces you to think about why you're adding space, not just how much. Later, when you decide "sections should be tighter," you change one variable, not twelve arbitrary values.

## Gap Over Margins: The Core Pattern

Stop using margins between siblings. Use `gap` in a flex or grid container.

**Margins cause:**
- Margin collapse (vertical margins fold into each other — causes bugs)
- Asymmetrical spacing (last child margin doesn't apply)
- Requires `:last-child` rules and margin-reset cruft

**Gap solves this:**
- Explicit, even spacing between all children
- No collapse behavior
- Works in flex and grid (grid is now standard)

```css
/* BAD: Margin hell */
.list-item {
  margin-bottom: var(--space-md);
}

.list-item:last-child {
  margin-bottom: 0;
}

/* GOOD: Gap */
.list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.list-item {
  /* No margins needed */
}
```

Use gap everywhere:
- Between list items
- Between form fields
- Between grid columns/rows
- Between buttons in a button group

Margins only for individual element breathing room, not sibling spacing.

## Container vs Viewport Queries: Know the Difference

**Container queries** describe component context. "This card is in a narrow sidebar."
**Viewport queries** describe global context. "The screen is 480px wide."

**Container queries for components:**
```css
@container (min-width: 400px) {
  .card-description {
    columns: 2;
    /* Only when card has room */
  }
}
```

**Viewport queries for pages:**
```css
@media (min-width: 768px) {
  .hero {
    grid-template-columns: 1fr 1fr;
    /* Only when entire viewport allows */
  }
}
```

Use container queries first. They're portable. A component works correctly in any context—sidebar, main content, modal—without viewport-aware hacks.

Viewport queries for layout structure, container queries for component adaptation.

## Self-Adjusting Grids: auto-fit and minmax

Stop hardcoding grid column counts. Use `auto-fit` and `minmax` to create responsive grids without breakpoints.

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-md);
}
```

This reads as: "Create as many columns as fit. Each column is at least 280px wide, but grow to fill space equally."

At 1000px width with 280px min, you get ~3 columns. At 500px, ~1 column. At 1600px, ~5 columns. No breakpoints, no magic numbers, pure responsive math.

**When to adjust:**
- minmax minimum should equal your smallest content (usually a card width)
- Gap is included in the calculation, so account for it
- Test at extreme widths (320px, 1920px) to verify behavior

This pattern scales. Add it to every grid in your system.

## Visual Rhythm: Varied Spacing, Not Uniform

Uniform spacing is static, boring, and hard to parse.

Create visual rhythm by varying spacing intentionally:

```
Section title (h2)
  ↓ --space-sm   (tight to content)
Paragraph content
  ↓ --space-lg   (breathing room before next)
Related image
  ↓ --space-md   (tighter after image)
Subheading (h3)
  ↓ --space-sm   (tight, hierarchical)
Paragraph content
  ↓ --space-xl   (big break before next major section)
New section title (h2)
```

Large jumps signal section transitions. Tight spacing signals related items. Your eye navigates by rhythm, not by looking at heading levels.

**The rule:** Space size = content relationship strength.

- Tightest: Related items (label and input, title and description)
- Medium: Component boundaries (card to card)
- Large: Conceptual breaks (section to section)

## Cards Are Overused: Space Creates Grouping Naturally

Stop wrapping everything in cards with borders and drop shadows. Space does the grouping job.

```css
/* Overdesigned: Cards everywhere */
.card {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: var(--space-md);
  background: var(--color-bg-secondary);
}

/* Subtle: Space handles grouping */
.content-group {
  padding: var(--space-lg);
  background: transparent;
  border: none;
  border-left: 4px solid var(--color-brand);
  /* Visual weight comes from spacing and accent, not border */
}
```

Space creates visual grouping through:
- Increased gap around the group
- Shared background color (if needed)
- Accents or icons for visual clarity

This is lighter, more sophisticated, and easier to adapt to dark mode.

**When cards actually matter:**
- Clickable, interactive surfaces that benefit from a clear hit target
- Significantly different content needing visual separation
- Very high density layouts where spacing alone fails

Otherwise, lean on space first.

## Optical Adjustments: The Detail That Matters

Perfect mathematical spacing doesn't always look perfect.

**Text needs negative top margin:**
Descenders (g, y, p, j) create visual weight below the baseline. Top-aligned text appears misaligned. Add a small negative margin-top.

```css
h2 {
  margin-top: -0.15em;
  /* Pulls heading up slightly to account for descender visual weight */
}
```

**Play icons shift right:**
A play icon (►) is optically shifted right because of its triangular shape. Shift it left by 2–4px:

```css
.play-icon {
  margin-left: -2px;
}
```

**Light text needs tighter line-height:**
Light font-weight creates visual gaps. Reduce line-height by 0.05–0.1:

```css
.light-text {
  font-weight: 300;
  line-height: 1.5;  /* Instead of 1.6 */
}
```

These micro-adjustments are invisible to most viewers. They only know "this looks right." That's the goal.

## Asymmetry as Design: Not Chaos

Asymmetrical spacing is more interesting than symmetrical grids. Use it intentionally.

```css
/* Boring: Symmetrical */
.hero {
  padding: 60px;
  gap: 60px;
}

/* Interesting: Asymmetrical */
.hero {
  padding-top: 80px;
  padding-bottom: 60px;
  padding-left: var(--space-page-edge);
  padding-right: var(--space-2xl);
  gap: 32px;
}
```

Asymmetry works because:
- It draws the eye (humans seek balance)
- It creates visual weight distribution
- It feels intentional, not accidental

Pair asymmetry with clear hierarchy. Unbalanced layout + confusing hierarchy = chaos.

## Summary: The Checklist

- [ ] Use 4pt scale (4, 8, 12, 16, 20, 24, 32, 48px)
- [ ] Name spacing tokens by purpose, not size
- [ ] Replace margins with `gap` for sibling spacing
- [ ] Use container queries for components, viewport for pages
- [ ] Build responsive grids with `auto-fit` and `minmax`
- [ ] Create rhythm through varied spacing, not uniform
- [ ] Prefer space over cards for grouping
- [ ] Apply optical adjustments (negative margins for text, icons)
- [ ] Use asymmetry intentionally with clear hierarchy
- [ ] Test spacing at mobile, tablet, and desktop

Space is invisible design. When it works, nobody notices. When it fails, everybody notices. Be ruthless about getting it right.
