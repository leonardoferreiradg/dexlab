---
name: Typeset
description: Build a personality-driven typography system with modular scale and semantic naming.
user-invocable: true
argument-hint: "[brand-context] or invoke after /shape"
---

## MANDATORY PREPARATION

Invoke `/dexlab` — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

## Typeset: Typography as Brand

Typography is how words become voice. Your type system must reflect brand personality, not play it safe.

### STEP 1: Define Type Scale and Ratio
- Choose modular ratio: 1.5 (marketing/bold), 1.33 (balanced), 1.25 (product/subtle), 1.125 (compact)
- Example at 1.33 ratio (16px base):
  - Display: 40px (×2.5)
  - H1: 32px (×2)
  - H2: 24px (×1.5)
  - H3: 18px (×1.125)
  - Body: 16px (base)
  - Small: 14px (÷1.14)
  - Caption: 12px (÷1.33)
- Calculate and document all sizes
- Plan responsive version: smaller ratio at mobile (1.2), larger at desktop (1.4)

### STEP 2: Select Fonts Following Anti-Generic Rules
- Reference `../dexlab/reference/typography.md` for selection procedure
- Reject: Inter, Roboto, DM Sans (safe defaults, not distinctive)
- Consider: Does font personality match brand tone?
  - Serious/corporate: serif, narrow sans (Crimson Text, Plex Sans)
  - Modern/tech: geometric sans (Sohne, Neue Machina)
  - Creative/expressive: distinctive sans (Grotesk, Roc Grotesk)
  - Approachable/warm: humanist sans (Calibre, Graphie)
- Load fonts: system stack as fallback, web font as primary
- Test rendering: bold weights at small sizes, regular at large
- Confirm license and subset for performance

### STEP 3: Set Up Responsive Sizing with Clamp
- Marketing/landing pages: Use CSS clamp for fluid sizing
  - `clamp(1.5rem, 3vw, 3.5rem)` for H1 (scales with viewport)
  - Use calc() to interpolate between mobile and desktop sizes
- Product/app UI: Use rem units with fixed breakpoints
  - 16px base on mobile, 18px on desktop
  - Use media queries to switch size tokens at breakpoints
- Test: 320px mobile, 768px tablet, 1440px desktop
- Ensure readable line-length: 50-75 characters (ideal ~65)

### STEP 4: Configure Line-Height, Letter-Spacing, Line-Length
- Line-height by context:
  - Headings: 1.2-1.3 (tight, confident)
  - Body text: 1.5-1.6 (readable, breathing room)
  - Dense data: 1.4 (compact but accessible)
  - Code: 1.6 (clarity)
- Letter-spacing:
  - Headlines: +0.015em to +0.03em (open, dramatic)
  - Body: 0 or +0.005em (natural)
  - All-caps: +0.05em to +0.1em (open)
  - Small text: 0 (preserve readability)
- Line-length: Constrain prose to max-width: 70ch or 1200px
- Paragraph margin: 1.5x line-height

### STEP 5: Define Typography Hierarchy
Create semantic tokens with clear usage context:

- **Display**: Largest, statement text (hero headlines, page title)
  - Size: 40-56px
  - Weight: 700
  - Usage: Page hero, major section title
  
- **Heading-1**: Major sections
  - Size: 32px
  - Weight: 700
  - Usage: Page title, section head
  
- **Heading-2**: Subsections
  - Size: 24px
  - Weight: 700
  - Usage: Card title, subsection
  
- **Heading-3**: Minor subsections
  - Size: 18px
  - Weight: 600
  - Usage: List item header, label emphasis
  
- **Body**: Main reading text
  - Size: 16px
  - Weight: 400
  - Usage: Paragraph, description, long-form
  
- **Body-small**: Supporting text
  - Size: 14px
  - Weight: 400
  - Usage: Secondary info, helper text
  
- **Caption**: Metadata, labels
  - Size: 12px
  - Weight: 500
  - Usage: Date, category, tag, small label
  
- **Code**: Technical text
  - Size: 14px (0.875em relative to context)
  - Weight: 400
  - Family: monospace
  - Usage: Code blocks, inline code

### STEP 6: Create Typography Tokens
Define CSS custom properties:

```css
/* Type scale */
--type-display: 2.5rem;
--type-h1: 2rem;
--type-h2: 1.5rem;
--type-h3: 1.125rem;
--type-body: 1rem;
--type-small: 0.875rem;
--type-caption: 0.75rem;

/* Families */
--font-serif: "Crimson Text", Georgia, serif;
--font-sans: "Sohne", -apple-system, sans-serif;
--font-mono: "JetBrains Mono", Monaco, monospace;

/* Weights */
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Line heights */
--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.7;
```

### STEP 7: Test and Refine
- Render at all sizes: mobile, tablet, desktop
- Test colors: confirm contrast on all backgrounds
- Test languages: if international, confirm script rendering
- Test weights: verify bold is noticeably heavier
- Load performance: measure web font file sizes, implement fallbacks
- Browser testing: verify rendering consistency across browsers

## Next Steps
- Use **colorize** to build color system that complements typography
- Use **craft** to implement type tokens in components
- Use **tokens** to document complete typography system
