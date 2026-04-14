---
name: id-interaction-spec
description: Model UI behavior as a finite state machine — making every state, every transition, and every impossibility explicit before writing code.
user-invocable: true
argument-hint: "[component or flow name]"
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

1. **List all possible states** — For the component or flow being designed. Every state must be exhaustive and mutually exclusive. Common UI states: idle, loading, success, error, empty, disabled, active, selected, expanded. Don't stop at the obvious ones — "what happens after the user deletes the last item?" is a state.

2. **Define transitions** — What event causes each state change? Format: `[current state] + [event] → [next state]`. Example: `idle + user clicks submit → loading`. `loading + API returns 200 → success`. `loading + API returns 500 → error`.

3. **Identify impossible states** — Which state combinations should never exist? "Loading AND success simultaneously" is impossible. Making this explicit prevents defensive code for states that shouldn't happen.

4. **Draw the diagram** — Even a rough sketch. States as circles, transitions as arrows, events as labels. This diagram becomes the design spec, the engineering spec, and the QA test matrix simultaneously.

5. **Design for every state** — Each state needs a visual design: what does the UI look like? What actions are available? What information is shown? What's the path out of this state?

6. **Map to component code** — Use the state machine as the source of truth for implementation. Don't let the code diverge from the model.

## Anti-Generic

A component without a state machine is a component that only works in the happy path. The happy path is not the product — it's the optimistic fiction.

## Next Steps

Document each state and transition in your component specification. Share the state diagram with engineering before implementation. Test every state transition during QA, not just the happy path.
