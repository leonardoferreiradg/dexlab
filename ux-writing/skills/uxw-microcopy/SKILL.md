---
name: uxw-microcopy
description: Write the small copy that makes or breaks the experience — labels, tooltips, confirmations, and the words users read at decision points.
user-invocable: true
argument-hint: "[interface element type]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/interaction-patterns.md` — 8 interactive states, form design, loading patterns, touch targets, optimistic UI
- `.design/references/typography.md` — modular scale, font selection, line-height, web font loading, Portuguese-aware typography

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If product context is already available** — via `.dexlab.md` in the project root, Project Instructions, or context established earlier in this conversation:
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered.

**If no product context is available from any of these sources:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. What is the product's voice — how should it sound to a user reading it at a moment of friction or uncertainty? Describe it by how it should NOT sound as much as how it should. (e.g., "direct, never apologetic" or "warm but never cute")
2. Who is the user, and what is their literacy level and context when they read this copy — expert in this domain, new to it, under stress, in a hurry?
3. What specific copy is being written or reviewed today — which screen, state, or interface element? What action or state change does it accompany?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## Steps

1. **Audit existing copy** — Find all interface text: buttons, labels, tooltips, placeholder text, confirmation messages. Read it like a first-time user. Highlight every word that makes you pause, guess, or cringe.

2. **Apply the 4 principles** —
   - **Specific**: "Save changes" not "Save." "Delete this project permanently" not "Delete."
   - **Active**: "Create account" not "Account creation." Verbs first.
   - **Human**: "Something went wrong. Try refreshing." Not "Error code 500."
   - **Consistent**: Pick one word per concept and use it everywhere. "Remove" or "Delete" — not both.

3. **Rewrite button labels** — Every button must say exactly what clicking it does. Banned: OK, Yes, No, Submit, Confirm, Done, Close. Replace each with the action it performs.

4. **Fix placeholder text** — Placeholders disappear when typing — never use them as labels. Use them only for format examples: "e.g. +1 (415) 555-0100". Label the field separately.

5. **Write helper text proactively** — For fields that confuse users: add helper text below the label, not as placeholder. "We'll only use this to send order updates."

6. **Verify consistency** — Search for synonym pairs across the interface. "Remove" and "Delete" in the same flow? Pick one. "Workspace" and "Project" used interchangeably? That's a bug.

## Absolute Bans

"Please," "Sorry," "Oops" (insincere). "User-friendly," "Powerful," "Seamless" (meaningless). "Click here" (inaccessible).

## Next Steps

Audit the entire product surface for these patterns. Consistency across interface copy compounds the clarity gain — one rewrite feels like a fix, full consistency feels like a product improvement.
