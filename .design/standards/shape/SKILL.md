---
name: Shape
description: Pre-code design direction and planning. Define WHAT to build and WHY before touching code.
user-invocable: true
argument-hint: "[project-context] or invoke with .dexlab.md loaded"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

## Shape: The Thinking Phase

Shape is where you decide WHAT to build and WHY. Skip this and you're decorating, not designing.

### STEP 1: Review Context
- Load `.dexlab.md` from the project root
- Identify: brand personality, user needs, business goals, constraints
- Note the anti-generic rules for this project
- Extract: target audience, primary use cases, success metrics

### STEP 2: Define Design Direction
- Write 2-3 sentences on tone and aesthetic (e.g., "serious but approachable", "minimalist with personality")
- Identify one key metaphor or conceptual framework guiding the design
- List 3-5 reference designs (NOT to copy, but to understand direction)
- Define: Do we lead with typography? Data? Color? Motion?

### STEP 3: Sketch Information Architecture
- Map the page/app structure in plain text
- Identify primary sections and secondary information
- Show information hierarchy: what must be seen first, second, third
- Note which content is conditional or state-dependent
- Identify modal vs. in-page patterns

### STEP 4: Plan Component Hierarchy
- List major components top-down (Page → Section → Component → Sub-component)
- Mark which are atomic, which are composite
- Identify shared vs. unique components
- Note opportunities for consistency and reuse

### STEP 5: Define Key Interactions and States
- Map: hover, focus, active, disabled, loading, error, empty, success states
- Specify which interactions are required vs. delight
- Note state transitions: how does the UI respond to user action?
- Identify accessibility constraints: focus indicators, keyboard nav, screen reader text

### STEP 6: Document Decisions and Rationale
- Write down why you chose this direction over alternatives
- Note constraints and trade-offs
- Call out open questions for stakeholder review
- Link to token/typography/color direction (will be defined in later skills)

## Next Steps
- Use **craft** to implement the plan
- Use **typeset** to define the typography system
- Use **colorize** to build the color system
