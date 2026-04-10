---
description: Create or audit a design token system — from global values to component-level tokens with consistent naming.
argument-hint: "[design system or component area to tokenize]"
---

# /tokenize

Build the shared language between design and code — or audit why the existing one is broken.

## Steps

1. **Establish naming rules** — Use `ds-naming-convention` to define the naming convention for each token tier. Global: describes raw value. Alias: describes purpose. Component: scoped to component. Agreement on naming before creating any tokens.

2. **Audit for hardcoded values** — Scan the codebase and design file for hardcoded values: `#2563eb` instead of `var(--color-primary)`, `16px` instead of `var(--space-md)`. Every hardcoded value is technical design debt. Catalog them.

3. **Create the token architecture** — Use `ds-designtokens` to build three tiers:
   - **Global**: raw values — all color, spacing, typography, radius, shadow, motion values
   - **Alias**: purpose-based mappings — primary, surface, border, text-muted, etc.
   - **Component**: scoped tokens for each component — only created when a component diverges from alias tokens

4. **Document token usage rules** — Use `ds-designtokens` to specify: which tier components reference (alias only), which tokens are theming-safe (can be overridden), which have accessibility constraints (minimum contrast — never override).

5. **Produce the token file** — Output as CSS custom properties, JSON, or Style Dictionary format depending on the project's tooling. Organized by tier, alphabetical within tier.

## Output

Complete token set across three tiers, naming convention documentation, hardcoded value audit with migration list, and usage rules for theming and accessibility.

## Follow-up

Use `/ds-create-component` to apply the token system to new components, `/ds-audit-system` to validate the full system.
