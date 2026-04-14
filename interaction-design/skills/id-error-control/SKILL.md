---
name: id-error-control
description: Design comprehensive error handling — every failure mode has a designed state, a clear message, and a recovery path.
user-invocable: true
argument-hint: "[feature or flow name]"
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

1. Who is the user, and what is their relationship to this product — is this a tool they use daily at work, an occasional app, a high-stakes flow (finance, health), or a first-time experience?
2. What platform or surface does this interaction live on — mobile native, responsive web, desktop app — and what input methods should be supported?
3. What specific interaction, component, or flow are we designing behavior for? What is the user trying to accomplish at this exact moment?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## Steps

1. **Map all failure modes** — For every user action that touches an external system: what can go wrong? Network failure, timeout, validation error, permission error, server error, session expiry, rate limiting. Every one needs a designed state.

2. **Design the error hierarchy** —
   - **Inline validation**: Field-level, immediate, non-blocking. Appears as user types (with debounce) or on field blur.
   - **Page-level errors**: Affect the whole view. Appear at the top, dismiss when resolved.
   - **Toast/snackbar**: Transient feedback for actions. Auto-dismiss after 4-5s. Include undo for destructive actions.
   - **Full-page errors**: 404, 500, offline, no permission. Each has its own design — not the same "something went wrong" page.

3. **Write the recovery path for each error type** —
   - Network error → Retry button
   - Validation error → Field focus + inline message
   - Permission error → Link to request access or explanation
   - Session expired → Redirect to login + preserve destination
   - Not found → Search or browse path
   - Server error → Retry + status page link

4. **Prevent errors before they happen** — Disable unavailable options with an explanation. Warn before destructive actions. Validate format before submission. Show character limits before users hit them.

5. **Design the error copy** — Use the error-copy skill. Short version: specific cause + how to fix it. Never "invalid input" without context.

6. **Test error states in reviews** — Show the error states in design reviews, not just the happy path. Error states ship if they're designed. They also ship if they're not.

## Next Steps

Build error state checklist for each user-facing flow. Include recovery paths in QA. Test network degradation with throttling tools. Verify error messages with users, not assumptions.
