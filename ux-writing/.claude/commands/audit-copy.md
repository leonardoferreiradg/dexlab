---
description: Audit existing interface copy for consistency, clarity, and tone alignment — with specific rewrites.
argument-hint: "[feature, screen, or component to audit]"
---

# /audit-copy

Read the interface like a first-time user and fix every word that makes them pause, guess, or cringe.

## Steps

1. **Inventory all copy** — Collect every string in scope: button labels, field labels, tooltips, placeholder text, error messages, empty states, confirmation messages, notification copy, help text. No copy is too small to audit.

2. **Clarity audit** — Use `uxw_clarify` to flag: vague labels ("Save," "OK," "Done"), inconsistent terminology (same concept named two ways), passive voice, technical jargon in user-facing copy, and sentences that make assumptions about what the user already knows.

3. **Tone audit** — Use `uxw_tone-voice` to evaluate tone against the product's voice guidelines. Flag: copy that's too formal for a casual product, too casual for a high-stakes context, inconsistent personality across states.

4. **Error copy audit** — Use `uxw_error-copy` to evaluate all error messages: does each state what happened + why + how to fix? Are any errors vague ("Invalid input," "Something went wrong," "Error 500")?

5. **Empty state audit** — Use `uxw_empty-states` to evaluate empty states: does each have a specific message + one CTA? Does first-use copy teach the interface rather than just acknowledge emptiness?

6. **Produce the rewrite list** — Format: `[Element] | [Current copy] | [Rewrite] | [Reason]`. Every flagged item gets a specific fix — no "consider improving" without showing what improvement looks like.

## Output

Copy audit report: inventory, issues by category (clarity / tone / error / empty state), and a complete rewrite list in table format. Actionable without designer involvement.

## Follow-up

Use `/uxw_write-copy` to produce a fresh copy set if the audit reveals systemic issues rather than isolated fixes.
