---
name: id-interaction-spec
description: Model UI behavior as a finite state machine — making every state, every transition, and every impossibility explicit before writing code.
user-invocable: true
argument-hint: "[component or flow name]"
---


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
