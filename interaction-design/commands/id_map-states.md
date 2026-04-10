---
description: Map all UI states for a component or flow as a finite state machine — explicit, complete, and impossible-state-free.
argument-hint: "[component or feature to map]"
---

# /id_map-states

Before designing anything: name every state the UI can be in and every way to move between them.

## Steps

1. **List all states** — Use `id_interaction-spec` to enumerate every state the component or flow can be in. Common set: idle, loading, success, error, empty, disabled, active, selected, expanded. Then ask: "What happens after the user deletes the last item?" Every unusual state is a state.

2. **Define transitions** — Use `id_interaction-spec` to document every transition: `[current state] + [event] → [next state]`. Every arrow in the diagram is a transition. Every unlabeled arrow is a design gap.

3. **Identify impossible states** — Which combinations can never co-exist? "Loading AND success simultaneously" is impossible. "Error AND disabled simultaneously" may be impossible. Making this explicit prevents defensive code for states that shouldn't exist.

4. **Design each state's UI** — For every named state: what does the interface look like? What actions are available? What information is shown? What is the path out? A state without a designed UI is a promise you haven't kept yet.

5. **Produce the diagram** — Text-based state diagram with states as labeled nodes and transitions as labeled arrows. Include: impossible state list, edge case states, and any open questions.

## Output

State machine: complete state list, transition table (`state + event → state`), impossible states list, and a text diagram. This is the spec for both design and engineering.

## Follow-up

Use `/id_design-interaction` to layer motion, feedback, and error handling onto the state machine.
