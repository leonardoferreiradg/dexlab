---
name: ds-designtokens
description: Create and maintain the design token system—the shared language between design and code.
user-invocable: true
argument-hint: "[token-architecture] or invoke after design systems defined"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/color-system.md` — OKLCH color space, semantic token tiers, dark mode strategy, accessibility contrast ratios
- `.design/references/typography.md` — modular scale, font families, line-height, letter-spacing tokens
- `.design/references/spatial-design.md` — 4pt base scale, semantic spacing tokens, gap patterns
- `.design/references/interaction-patterns.md` — 8 interactive states, motion tokens context

## Tokens: Shared Language

Tokens are the shared language between design and code. Inconsistent tokens create inconsistent products.

### STEP 1: Define Token Architecture—Global → Alias → Component

Three-tier token hierarchy ensures consistency and maintainability:

**Tier 1: Global tokens** (primitives, rarely used directly in code)
- Base values with no context
- Example: `--color-blue-500: #2563eb`
- Example: `--space-4: 4px`
- Example: `--font-sans: "Sohne", system-ui, sans-serif`
- Storage: `tokens/global.css` or `tokens/primitives.json`

**Tier 2: Alias tokens** (semantic, frequently used)
- Maps global tokens to purpose
- Example: `--color-primary: var(--color-blue-500)`
- Example: `--color-background: var(--color-neutral-50)`
- Example: `--space-inset-md: var(--space-16)`
- Storage: `tokens/aliases.css`

**Tier 3: Component tokens** (specific use, imported into components)
- Maps aliases to components
- Example: `--button-primary-bg: var(--color-primary)`
- Example: `--button-primary-text: var(--color-surface)`
- Example: `--input-border-color: var(--color-neutral-300)`
- Storage: `tokens/components.css` or per-component file

Rule: Code uses **component tokens** or **alias tokens**, never global tokens directly.

### STEP 2: Create Color Tokens
Reference `.design/standards/colorize/SKILL.md` for full color system.

**Global color tokens**:
```css
--color-primary-50: oklch(95% 0.1 240);
--color-primary-100: oklch(90% 0.15 240);
--color-primary-500: oklch(55% 0.3 240);
--color-primary-900: oklch(20% 0.25 240);

--color-neutral-50: oklch(98% 0 0);
--color-neutral-500: oklch(55% 0 0);
--color-neutral-900: oklch(15% 0 0);

--color-error-500: oklch(60% 0.25 25);
--color-success-500: oklch(65% 0.25 140);
--color-warning-500: oklch(70% 0.2 70);
```

**Alias tokens** (semantic):
```css
--color-bg-surface: var(--color-neutral-50);
--color-bg-elevated: var(--color-neutral-100);
--color-text-primary: var(--color-neutral-900);
--color-text-secondary: var(--color-neutral-600);
--color-text-tertiary: var(--color-neutral-400);
--color-interactive-primary: var(--color-primary-500);
--color-interactive-danger: var(--color-error-500);
--color-border-default: var(--color-neutral-300);
--color-border-focus: var(--color-primary-500);
```

**Component tokens** (specific use):
```css
--button-primary-bg: var(--color-interactive-primary);
--button-primary-text: var(--color-surface);
--button-primary-hover: var(--color-primary-600);
--button-danger-bg: var(--color-interactive-danger);
--button-danger-text: white;

--input-border: var(--color-border-default);
--input-border-focus: var(--color-border-focus);
--input-bg: var(--color-bg-surface);

--card-bg: var(--color-bg-elevated);
--card-border: var(--color-border-default);

--link-color: var(--color-interactive-primary);
--link-hover: var(--color-primary-600);
--link-visited: var(--color-primary-700);
```

### STEP 3: Create Typography Tokens
Reference `.design/standards/typeset/SKILL.md` for full typography system.

**Global type tokens** (font families):
```css
--font-family-sans: "Sohne", -apple-system, system-ui, sans-serif;
--font-family-serif: "Crimson Text", Georgia, serif;
--font-family-mono: "JetBrains Mono", Menlo, monospace;

--font-weight-400: 400;
--font-weight-500: 500;
--font-weight-600: 600;
--font-weight-700: 700;

--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.7;

--letter-spacing-normal: 0;
--letter-spacing-wide: 0.05em;
```

**Alias tokens** (semantic):
```css
--type-display: 3.5rem;
--type-h1: 2.5rem;
--type-h2: 1.75rem;
--type-h3: 1.25rem;
--type-body: 1rem;
--type-body-sm: 0.875rem;
--type-caption: 0.75rem;
--type-code: 0.875rem;

--type-family-display: var(--font-family-serif);
--type-family-body: var(--font-family-sans);
--type-family-code: var(--font-family-mono);

--type-weight-heading: var(--font-weight-700);
--type-weight-body: var(--font-weight-400);
```

**Component tokens** (specific usage):
```css
--heading-1-size: var(--type-h1);
--heading-1-weight: var(--type-weight-heading);
--heading-1-line-height: var(--line-height-tight);
--heading-1-family: var(--type-family-display);

--body-size: var(--type-body);
--body-weight: var(--type-weight-body);
--body-line-height: var(--line-height-normal);
--body-family: var(--type-family-body);

--button-label-size: var(--type-body-sm);
--button-label-weight: var(--font-weight-600);
```

### STEP 4: Create Spacing Tokens
Reference `.design/standards/layout/SKILL.md` for full spacing system.

**Global spacing tokens** (multiples of 4px base):
```css
--space-0: 0;
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

**Alias tokens** (semantic):
```css
--space-xs: var(--space-1);     /* tight coupling */
--space-sm: var(--space-2);     /* grouped items */
--space-md: var(--space-4);     /* default gap */
--space-lg: var(--space-8);     /* section separation */
--space-xl: var(--space-12);    /* major break */

--inset-xs: var(--space-2);
--inset-sm: var(--space-3);
--inset-md: var(--space-4);
--inset-lg: var(--space-6);

--gap-xs: var(--space-2);
--gap-sm: var(--space-3);
--gap-md: var(--space-4);
--gap-lg: var(--space-8);
```

**Component tokens**:
```css
--button-padding-x: var(--inset-md);
--button-padding-y: var(--inset-sm);
--button-icon-size: 1.25rem;
--button-icon-gap: var(--space-2);

--input-padding-x: var(--inset-md);
--input-padding-y: var(--inset-sm);
--input-border-radius: 0.375rem;

--card-padding: var(--inset-lg);
--card-gap: var(--gap-md);
```

### STEP 5: Create Motion Tokens
Reference `.design/standards/animate/SKILL.md` for full motion system.

**Global motion tokens**:
```css
--duration-100: 100ms;
--duration-300: 300ms;
--duration-500: 500ms;

--easing-out: cubic-bezier(0.16, 1, 0.3, 1);
--easing-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--easing-linear: linear;

--transition-fast: 100ms var(--easing-out);
--transition-standard: 300ms var(--easing-out);
--transition-slow: 500ms var(--easing-out);
```

**Alias tokens**:
```css
--motion-fade: opacity var(--transition-standard);
--motion-scale: transform var(--transition-standard);
--motion-slide: transform var(--transition-standard);
--motion-color: color var(--transition-standard);
```

**Component tokens**:
```css
--button-hover-transition: background-color var(--transition-fast);
--button-scale-hover: scale(1.05);
--button-scale-active: scale(0.98);

--input-border-transition: border-color var(--transition-fast);

--modal-entrance-duration: var(--duration-300);
--modal-exit-duration: 225ms;
```

### STEP 6: Define Naming Conventions

**Naming rules**:
- Use kebab-case (--color-primary-bg, not --colorPrimaryBg)
- Start with category (--color-, --space-, --font-)
- Add semantic level (--color-primary- for alias, --button-primary- for component)
- End with property (--button-primary-bg)
- Structure: `--[category]-[semantic]-[property]`

**Categories**:
- --color-*
- --space-*
- --font-*
- --type-*
- --duration-*
- --easing-*
- --shadow-*
- --border-*

**Semantic levels** (when applicable):
- Primary, secondary, danger, success, warning
- xs, sm, md, lg, xl
- display, h1, h2, body, caption
- Default, hover, focus, active, disabled

**Example hierarchy**:
```
--color-blue-500 (global)
--color-primary (alias)
--button-primary-bg (component)

--space-4 (global)
--space-md (alias)
--button-padding-x (component)
```

### STEP 7: Document Token Usage Rules

**Rule 1: Use component tokens in component code**
```css
.button { 
  background: var(--button-primary-bg);
  padding: var(--button-padding-x) var(--button-padding-y);
}
```

**Rule 2: Use alias tokens in layout/utility code**
```css
.section {
  padding: var(--space-lg);
  gap: var(--gap-md);
}
```

**Rule 3: Never hardcode values**
```css
/* ❌ Don't */
.button { background: #2563eb; padding: 12px 16px; }

/* ✅ Do */
.button { 
  background: var(--button-primary-bg);
  padding: var(--button-padding-x) var(--button-padding-y);
}
```

**Rule 4: Update tokens, not component styles, for systematic changes**
```css
/* ✅ Change brand color once */
--color-primary-500: oklch(55% 0.3 200); /* from 240 */

/* Automatically updates all components using --button-primary-bg etc */
```

### STEP 8: Export and Sync Tokens

**Format options**:
- CSS custom properties (.css file)
- JSON (design-tokens format)
- SCSS/LESS variables (legacy)
- JavaScript objects (for runtime theming)

**Storage structure**:
```
tokens/
├── global.css       (primitives)
├── aliases.css      (semantic)
├── components.css   (component-specific)
├── dark-mode.css    (dark theme overrides)
└── tokens.json      (source of truth)
```

**Sync strategy**:
- Design tool (Figma, Tokens Studio) as single source of truth
- Export tokens to JSON
- Generate CSS/JSON/JS from single export
- CI pipeline: regenerate tokens on every commit
- Never hand-edit exported tokens

### STEP 9: Token Maintenance Checklist

- [ ] No hardcoded values anywhere in codebase
- [ ] All tokens documented with usage context
- [ ] Naming consistent (kebab-case, clear hierarchy)
- [ ] Tokens validated: no orphaned tokens, all tokens used
- [ ] Dark mode tokens paired with light mode
- [ ] Component tokens derived from alias tokens
- [ ] Token changes tracked in version control
- [ ] Token export regenerated before shipping
- [ ] Design tool tokens synced with code tokens

## Next Steps
- Use **craft** to verify token usage in components
- Use **design-system** to audit and document system
- Use **component** to tie tokens to specific components
