---
description: Create a new design system component — from naming through spec, tokens, and documentation.
argument-hint: "[component name and context]"
---

# /create-component

A component spec so complete that engineering can build it and QA can verify it without a single Slack message to the designer.

## Steps

1. **Name the component** — Use `ds-naming-convention` to define: component name (PascalCase, semantic), variant names (role-based, not appearance-based), state names (from the standard 8), token names (component-scoped, tier 3). Alignment with the existing naming convention is non-negotiable.

2. **Write the spec** — Use `ds-component-spec` to document: purpose (one sentence), when to use / when NOT to use, all props with types and defaults, all variants with use cases, all 8 states (default / hover / focus / active / disabled / loading / error / success), accessibility requirements (ARIA roles, keyboard behavior, screen reader announcements), responsive behavior, and edge cases (long text, empty data, overflow, RTL).

3. **Define tokens** — Use `ds-designtokens` to create component-level tokens: `[component-name]-[property]` → alias token. Document which tokens are overridable for theming and which have accessibility constraints that cannot be overridden.

4. **Write do/don't examples** — 3 pairs minimum. Show the specific mistake, not a generic one. "Don't use primary button for secondary actions" with a visual example, not just words.

## Output

Complete component spec: naming, props table, variants, states, accessibility, edge cases, tokens, and do/don't examples. Publishable to the design system documentation.

## Follow-up

Use `/ds-tokenize` to audit that the new tokens integrate cleanly with the existing system, `/ops-ship-handoff` to hand off to engineering.
