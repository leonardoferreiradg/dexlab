---
name: uxw-error-copy
description: Write error messages that help users recover — clear, empathetic, and specific about what went wrong and what to do next.
user-invocable: true
argument-hint: "[error type: validation/system/destructive/permission]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/interaction-patterns.md` — 8 interactive states, form design, loading patterns, touch targets, optimistic UI

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

1. **Apply the 3-part error formula** — Every error message needs:
   - **What happened**: "Your payment didn't go through."
   - **Why it happened** (when knowable): "The card number you entered doesn't match our records."
   - **How to fix it**: "Check the card number and try again, or use a different card."
   
   One sentence covering all three is ideal. Three sentences (one per element) acceptable. Never one sentence covering none.

2. **Match severity to tone** —
   - **Validation errors** (field-level): Brief, inline, non-alarming. "Must be at least 8 characters."
   - **System errors** (something broke): Direct, apologetic if ours, actionable. "We couldn't load your data. Refresh to try again."
   - **Destructive action warnings**: Clear stakes + undo option. "This will permanently delete 47 files. This can't be undone."
   - **Empty permission states**: Explain the why + offer a path. "You don't have access to this project. Ask your admin for an invite."

3. **Remove blame from user-caused errors** — "Invalid email" blames the user. "Enter a valid email address" guides the user. Same information, different relationship.

4. **Place errors close to the cause** — Inline validation goes next to the field, not at the top of the form. Page-level errors are for errors affecting the whole page.

5. **Write the recovery path** — Every error should resolve to an action. "Contact support" is a last resort. Before that: retry, undo, go back, try a different method.

6. **Test with real users** — Read errors aloud. If they sound robotic, they are. If a user can't identify the cause from the error, rewrite it.

## Next Steps

Catalog all errors in your product. Rewrite them systematically. Test recovery flows to ensure the action you suggest actually works.
