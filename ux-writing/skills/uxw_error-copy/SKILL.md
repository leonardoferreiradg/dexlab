---
name: error-copy
description: Write error messages that help users recover — clear, empathetic, and specific about what went wrong and what to do next.
user-invocable: true
argument-hint: "[error type: validation/system/destructive/permission]"
---

## MANDATORY PREPARATION

Invoke `/dexlab` — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

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
