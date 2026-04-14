---
name: ds-naming-convention
description: Define naming conventions for components, tokens, and variants — the shared language between design and engineering.
user-invocable: true
argument-hint: "[design system or component library name]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

---

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If `.dexlab.md` exists in the project root:**
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered in that file.

**If `.dexlab.md` does not exist, or is missing the five pillars:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. What product is this design system for, and who are its primary users — the product's end users, and the designers/engineers who will use the system itself?
2. What is the technology stack and design tooling? (e.g., React + Figma, Vue + Tokens Studio, native iOS + Sketch)
3. What is the current state of the system — starting from scratch, formalizing something that exists informally, or migrating from a legacy system?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

Names are the API of a design system. Inconsistent names create inconsistent products. This skill establishes the naming rules that every component, token, and variant must follow.

## Steps

### Step 1: Establish Core Naming Principles

Before writing any names, agree on these four properties. Every name in the system must satisfy all four:

- **Predictable** — follows a consistent pattern. Given one name, you can guess the next.
- **Pronounceable** — used in conversation. If you can't say it, you won't use it consistently.
- **Semantic** — describes purpose, not appearance. `color-primary` is semantic. `color-blue` breaks when the brand changes.
- **Stable** — doesn't change when visual design changes. `ButtonPrimary` is stable. `ButtonBlue` is not.

### Step 2: Component Naming

Use PascalCase for components. Structure: `[Component][Variant]`.

Examples:
- `Button`, `ButtonGhost`, `ButtonDestructive`
- `Card`, `CardElevated`, `CardFlat`
- `Input`, `InputError`, `InputDisabled`

**Banned patterns:**
- `Button1`, `Button2` — meaningless
- `ButtonNew`, `ButtonV2` — version numbers don't survive refactors
- `ButtonBlue` — appearance-based names break with rebrands
- `NewButton`, `UpdatedCard` — temporal names that immediately become false

### Step 3: Token Naming — Three Tiers

Three tiers, three naming patterns. Components reference alias tokens only. Never reference global tokens directly in components.

**Tier 1 — Global tokens** (raw values, not used directly in UI):
```
color-blue-400
color-blue-600
space-4
space-8
space-16
font-size-sm
font-size-md
```

**Tier 2 — Alias tokens** (purpose-based, reference global tokens):
```
color-primary           → color-blue-600
color-primary-subtle    → color-blue-400
color-surface           → color-neutral-50
color-text-default      → color-neutral-900
space-component-gap     → space-16
space-section-gap       → space-32
```

**Tier 3 — Component tokens** (scope to specific component):
```
button-background       → color-primary
button-padding-x        → space-component-gap
card-border-radius      → radius-md
input-border-color      → color-border-default
```

### Step 4: Variant Naming

Variants describe roles or scales — never appearance.

**Size scale:** `xs`, `sm`, `md`, `lg`, `xl` — in this order, always.

**Hierarchy:** `primary`, `secondary`, `tertiary`, `ghost`, `destructive`
- `primary` = highest emphasis
- `ghost` = lowest visual weight
- `destructive` = signals irreversible action

**States:** `default`, `hover`, `focus`, `active`, `disabled`, `loading`, `error`, `success`

**Banned variant names:** `big`, `small`, `large`, `blue`, `darker`, `light-version`, `alt`

### Step 5: File and Layer Naming

Design file structure (Figma or equivalent):
```
[Category]/[Component]/[Variant]/[State]
Forms/Input/Outlined/Error
Navigation/Tab/Active
Feedback/Toast/Success
```

**Critical rule:** Component names in design files must match component names in code. Discrepancies between design and engineering names are design system debt that compounds silently.

Run a quarterly audit: compare Figma component names to codebase exports. Every mismatch is a translation cost.

### Step 6: Enforce and Document

Create a naming convention reference with:
- The rules (this document)
- Correct and incorrect examples for each rule
- A decision tree for ambiguous cases
- A migration guide for renaming existing names

Put the decision tree where decisions are made — inside the design tool and in the component library README. A convention that lives in a Notion doc nobody opens isn't a convention.

### Step 7: Audit Existing Names

Run a naming audit:
1. Export all component and token names from design file
2. Export all component names from codebase
3. Compare against convention rules
4. For each violation: document old name → new name → files affected
5. Rename in phases — one component type at a time, never all at once

Track renames in a changelog. Renames without changelogs break consumers silently.

---

**Anti-generic:** "A naming convention with only positive examples isn't a convention — it's a wish list. The banned patterns list is more valuable than the approved patterns list, because it closes the loopholes."

## Next Steps

Apply naming to `ds-component-spec` for component documentation, `ds-designtokens` for token audit, or `ops-design-review` to validate naming consistency across the system.
