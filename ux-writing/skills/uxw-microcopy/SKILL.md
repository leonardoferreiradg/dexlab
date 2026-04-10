---
name: uxw-microcopy
description: Write the small copy that makes or breaks the experience — labels, tooltips, confirmations, and the words users read at decision points.
user-invocable: true
argument-hint: "[interface element type]"
---

## MANDATORY PREPARATION

Invoke `/dexlab` — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

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
