---
name: uxw-empty-states
description: Design empty states that onboard, motivate, and teach — not just acknowledge that nothing is there.
user-invocable: true
argument-hint: "[empty state type: first-use/zero-results/cleared/error/no-permission]"
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

1. What is the product's voice — how should it sound to a user reading it at a moment of friction or uncertainty? Describe it by how it should NOT sound as much as how it should. (e.g., "direct, never apologetic" or "warm but never cute")
2. Who is the user, and what is their literacy level and context when they read this copy — expert in this domain, new to it, under stress, in a hurry?
3. What specific copy is being written or reviewed today — which screen, state, or interface element? What action or state change does it accompany?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## Steps

1. **Identify every empty state** — Map all screens that can appear empty: first use (no data yet), zero results (search returned nothing), cleared state (user deleted everything), error state (data failed to load), no permission (user can't see this).

2. **Write for the specific context** — Each empty state is different:
   - **First use**: Onboard, not just acknowledge. "You haven't created any projects yet. Start your first one to invite your team." + CTA.
   - **Zero search results**: Give users a way forward. "No results for 'invoice template'. Try a shorter search or browse all templates."
   - **Cleared state**: Acknowledge the action + what's next. "All notifications cleared. You're up to date."
   - **Error empty state**: Don't pretend the content doesn't exist. "Couldn't load your projects. Check your connection and try again." + retry CTA.

3. **Add a visual** — Not decorative illustration. A purposeful visual that reinforces the message. First use = something inviting action. Error = something that signals a problem without alarming.

4. **Write ONE clear CTA** — Not two. Not "Learn more" + "Get started" + "Watch tutorial." One path forward.

5. **Write in the product's voice** — An empty state in a productivity tool sounds different from one in a consumer app. Calibrate.

6. **Never write** — "Nothing to see here," "No items found," "You haven't added anything yet." These are placeholders, not empty states.

## Anti-Generic Rule

An empty state is not a UI problem to solve. It's an opportunity to help users succeed at the exact moment when they're most uncertain.

## Next Steps

Map empty states into your product roadmap. Test them with new users and users returning after a gap. These moments reveal if your onboarding and IA are working.
