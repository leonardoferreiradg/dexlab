---
description: Write or rewrite all UX copy for a screen or feature — buttons, labels, errors, and empty states.
argument-hint: "[screen or feature name]"
---

# /write-copy

Every word in the interface is a design decision. This command covers the full copy set for a screen or feature.

## Steps

1. **Establish tone** — Use `uxw-tone-voice` to confirm the product voice and how tone shifts for this context. Success copy ≠ error copy ≠ empty state copy — same voice, different tone.

2. **Write interactive copy** — Use `uxw-microcopy` to rewrite all button labels, field labels, tooltips, placeholder examples, confirmations, and helper text. No "OK," "Submit," or "Click here." Every label states the exact action it performs.

3. **Write error and validation messages** — Use `uxw-error-copy` to produce error messages in the 3-part format: what happened + why + how to fix. One message per failure mode — not a generic "something went wrong."

4. **Write empty states** — Use `uxw-empty-states` to produce copy for every empty state in scope: first use, zero results, cleared state, error empty state. Each gets: a specific message + one CTA. Not "No items found."

5. **Consistency check** — Use `uxw-clarify` to audit the full copy set for synonym pairs, banned words, and tone inconsistencies. Pick one word per concept and use it everywhere.

## Output

Complete copy set: all interactive labels, all error messages, all empty state copy. Formatted as a copy spec (element → copy) ready to hand to engineering or paste into a design file.

## Follow-up

Use `/ux-audit-copy` after implementation to verify consistency, or `/uxw-define-tone` if voice guidelines don't yet exist.
