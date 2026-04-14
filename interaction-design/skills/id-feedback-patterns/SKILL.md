---
name: id-feedback-patterns
description: Design system feedback that tells users what happened, what's happening, and what to do — across every interaction type.
user-invocable: true
argument-hint: "[interaction type: click, submit, upload, load]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/interaction-patterns.md` — 8 interactive states, form design, loading patterns, touch targets, optimistic UI

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If `.dexlab.md` exists in the project root:**
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered in that file.

**If `.dexlab.md` does not exist, or is missing the five pillars:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. Who is the user, and what is their relationship to this product — is this a tool they use daily at work, an occasional app, a high-stakes flow (finance, health), or a first-time experience?
2. What platform or surface does this interaction live on — mobile native, responsive web, desktop app — and what input methods should be supported?
3. What specific interaction, component, or flow are we designing behavior for? What is the user trying to accomplish at this exact moment?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## Steps

1. **Map the feedback matrix** — Every interaction type × every state:
   - Button click: loading → success / error
   - Form submit: validation → loading → success / error
   - Data load: skeleton → content / error
   - File upload: progress → success / error
   - Destructive action: warning → loading → confirmation / error

2. **Choose the right feedback pattern** —
   - **Inline feedback**: For inputs and forms. Close to the cause.
   - **Toast/snackbar**: For system-level actions (saved, copied, deleted). Transient, non-blocking.
   - **Modal/dialog**: For decisions that can't be undone. Blocking. Use sparingly.
   - **Progress indicator**: For operations >1s. Show progress when you can, spinner when you can't.
   - **Skeleton screens**: For initial content loads. Better than spinners — sets layout expectations.
   - **Optimistic UI**: For fast operations where errors are rare. Update immediately, sync in background.

3. **Timing rules** —
   - < 100ms: No feedback needed — feels instantaneous
   - 100ms–1s: Show loading state after 300ms delay (prevents flash for fast responses)
   - 1s–10s: Progress indicator, estimated time if possible
   - > 10s: Background task, notify on completion

4. **Design success states that aren't annoying** — Don't celebrate every button click. Success feedback should match the weight of the action. Saving a note ≠ confetti. Completing an onboarding flow = appropriate celebration.

5. **Make feedback accessible** — Don't rely on color alone. Use icon + color + text. Ensure screen readers announce state changes via ARIA live regions.

6. **Test timing with real network conditions** — Throttle to 3G in DevTools. Fast Wi-Fi hides all timing problems.

## Next Steps

Build a feedback pattern library mapped to interaction types. Test 300ms delay thresholds on production network. Verify ARIA announcements with screen readers. Validate success tone matches product voice.
