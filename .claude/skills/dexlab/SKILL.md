---
name: dexlab
description: Dexlab is a modular design framework that orchestrates the full product design lifecycle — from discovery to evolution. It enforces design rigor, rejects generic output, and ensures every decision is grounded in context. Use as the foundation for all design work. Call with 'init' for project setup, 'craft' for end-to-end design, or invoke phase-specific skills directly.
user-invocable: true
argument-hint: "[init|craft|phase]"
license: MIT
---

# Dexlab: A Modular Design Framework

## Philosophy

Design is decision-making, not decoration. Every line, color, interaction, and transition must answer a question rooted in user need. Dexlab rejects the notion that design excellence comes from taste or trends. It comes from understanding—deep, contextual, specific understanding—and then making intentional choices that compound across every phase of the product lifecycle.

We design for people, not for the industry. This means rejecting template personas, cookie-cutter journey maps, and generic design systems that could describe any product. Your users have real jobs to do, real frustrations, real moments of delight. Design that ignores this is noise.

Context drives everything. You cannot infer what to build by reading code or staring at wireframes. Code tells you what was decided, not why. The "why" lives in your users' world: their constraints, their mental models, their alternatives. Dexlab forces you to gather this context before you build. This is the Context Protocol, and it is non-negotiable.

Quality compounds. A poor decision in Discovery cascades into Define, then Design, then Deliver. Dexlab measures rigor at each phase and ensures coherence across all five. This is the Design Rigor Score—a way to track whether your work is building something great or just something shiny.

## Context Protocol

Before you design anything, you must load context. This is mandatory. You cannot skip it. You cannot infer it.

**Required Context (the Five Pillars):**
- **Target Audience**: Who are the actual users? What is their job, goal, or problem? Demographics alone are not sufficient. You need behavioral data: what do they do, what tools do they use, what are their alternatives?
- **Use Cases**: What are the specific situations where your product will be used? When, where, with whom, under what constraints?
- **Brand Personality**: How should the product feel and communicate? What is the emotional tone? What principles guide decisions when direction is ambiguous?
- **Project Constraints**: What are the real limits? Budget, timeline, team capability, technical debt, organizational goals. Constraints shape great design; ignoring them produces fantasy.
- **Success Metrics**: How will you know the design worked? Not "increase engagement"—that is vague. Concrete metrics tied to user behavior or business outcome.

**Check Order (Priority):**
1. Load any instructions already provided (loaded instructions take precedence)
2. Look for `.dexlab.md` in the project root (your context file)
3. If neither exists, run `/dexlab init` to gather context

**Critical Rule:** You cannot infer user needs by reading the codebase. Code tells you what was built, not who it's for. A login screen doesn't tell you if your users struggle with password recovery. A dashboard doesn't tell you if your users check it daily or monthly. Ask the people. Run Discovery.

## The Five Phases

Every design project follows the same lifecycle. Each phase has defined goals, deliverables, and quality gates. Each phase has associated skills (invokable as sub-commands). Move sequentially. Don't skip Discovery and jump to Design. Design without Define is decoration.

**Discovery** — Understand the problem space. Research, synthesize, identify patterns.
- Skills: research-plan, interview, persona, benchmark
- Deliverable: Research synthesis, validated assumptions, opportunity landscape
- Gate: Can you articulate the user's job in their own words?

**Define** — Frame the solution space. Set boundaries, establish principles, align on the prize.
- Skills: journey, brief, principles, opportunity
- Deliverable: Design brief, user journey with pain points, principles, constraint map
- Gate: Does the team agree on what success looks like?

**Design** — Create the solution. Shape the architecture, craft the interface, establish the system.
- Skills: shape, craft, typeset, colorize, layout, animate, clarify, component, tokens
- Deliverable: High-fidelity designs, interaction specs, design system, component library
- Gate: Can a developer build this without asking questions?

**Deliver** — Ship and validate. Build prototypes, run tests, hand off to engineering, harden against edge cases.
- Skills: prototype, test-plan, handoff, harden
- Deliverable: Validated prototype, test results, implementation guide, edge case coverage
- Gate: Does the shipped product match intent? Are edge cases documented?

**Evolve** — Maintain and improve. Audit the shipped product, critique decisions, polish rough edges, systematize operations.
- Skills: audit, critique, polish, ops
- Deliverable: Quality audit, critique synthesis, prioritized polish roadmap, design ops charter
- Gate: Is the product getting better, or just aging?

## Anti-Generic Rules

Generic design output is lazy design output. These rules are absolute. Breaking them requires justification.

**RULE 1: No Persona Without Behavioral Data**
Personas grounded only in demographics (age, income, job title) are fiction. Real personas emerge from research: what do users actually do? What tools do they use? What are their frustrations? What are their workarounds? If your persona doesn't include at least two behavioral patterns backed by research, you haven't done Discovery.

**RULE 2: No Journey Map Without Pain Points AND Moments of Delight**
A journey map is a stakeholder document, not a sequence diagram. It must answer: where does the user struggle? Where do they succeed? Where is the emotional arc? If your journey is a flat line, you haven't understood the experience. Include specific emotional states and the design interventions that address them.

**RULE 3: No Design System Without Usage Context**
A design system is not a parts catalog. It is a language for making decisions. Every component, token, and pattern must be paired with its context: when is it used? what problem does it solve? what are the constraints? A system without context is a maintenance burden.

**RULE 4: No Handoff Without Edge Cases**
Edge cases are not afterthoughts. They are where your design's rigor is tested. What happens when the name is very long? When there is no data? When the user has no internet? When there are 1000 items? Document these explicitly. Don't let engineering guess.

**RULE 5: No Critique Without Actionable Next Steps**
A critique that says "this doesn't feel right" is feedback, not direction. Every critique must pair observation with a specific, achievable next action. Example: "The error message is too technical. Rewrite it as: 'Your password needs 8+ characters.' and test with 3 users."

## Design Rigor Score

Quality is not subjective. Measure it. The Design Rigor Score is applied at the end of each phase. It has five dimensions, each scored 0-4. Maximum score: 20.

**Context Depth (0-4)**
- 0: No research; decisions are guesses
- 2: Research exists but is shallow; assumptions are not validated
- 4: Deep research; every decision traces back to user insight; assumptions are tested

**Intentionality (0-4)**
- 0: Decisions appear arbitrary; "I thought it looked good"
- 2: Some decisions are justified; others are inherited from templates
- 4: Every decision can be articulated; trade-offs are documented; alternatives were considered

**Specificity (0-4)**
- 0: Output is generic; could apply to any product
- 2: Output has some product specificity but includes template patterns
- 4: Output is distinctly yours; every pattern, color, word reflects your users and brand

**Craft (0-4)**
- 0: Execution is careless; spelling errors, misaligned type, color conflicts
- 2: Execution is competent; minor issues remain
- 4: Execution is precise; every detail is intentional; polish is evident

**Coherence (0-4)**
- 0: Parts don't fit together; contradictory rules and patterns
- 2: Parts fit together loosely; some disconnects between phases
- 4: All parts reinforce each other; system is coherent from Discovery through Deliver

**Rating Bands:**
- 16-20: Production-ready. Ship this.
- 12-15: Good bones, minor refinement needed.
- 8-11: Significant work remains.
- 0-7: Start over.

## Init Mode

When called with `init`, Dexlab explores your project and gathers context.

**Sequence:**
1. Explore project artifacts: README, existing design files, codebase structure, product docs
2. Ask you focused questions: Who is your user? What is their job? What problem are you solving? How will you measure success? What are your hard constraints?
3. Create `.dexlab.md` with a Design Context section capturing the Five Pillars
4. Summarize the key principles that will guide all work
5. Propose the design roadmap (which phase to start, estimated timeline, success criteria)

**Output:**
- `.dexlab.md` file (version control this; update as context evolves)
- Design roadmap
- Context summary (1-2 paragraphs)
- Ready to move into Discovery or any specific phase

## Craft Mode

When called with `craft`, Dexlab runs a streamlined end-to-end design pass. Use this when context is already loaded (from a prior `init` or existing `.dexlab.md`).

**Sequence:**

**Shape** — Plan the approach
- Review `.dexlab.md` to confirm context
- Map use cases to design phases
- Identify quick wins and risks
- Set success criteria for this pass

**Build** — Implement with quality
- Execute the design phase (or phases if doing a full cycle)
- Create artifacts: wireframes, flows, systems, components
- Document decisions and trade-offs
- Gather feedback if time permits

**Audit** — Verify the work
- Run the Design Rigor Score
- Check each Anti-Generic Rule
- Verify coherence across phases
- Identify gaps and next actions

**Output:**
- Design artifacts (Figma, specs, system)
- Rigor Score with rationale
- Next steps and polish roadmap

## Using Dexlab Skills

Dexlab is modular. You can invoke phase-specific skills directly:

```
/dexlab research-plan [your question]
/dexlab persona [name]
/dexlab brief [project]
/dexlab shape [challenge]
/dexlab craft [component]
/dexlab prototype [feature]
/dexlab audit [what to evaluate]
```

Each skill is scoped to its phase. Each skill enforces the Context Protocol and Anti-Generic Rules. Each skill contributes to the overall Design Rigor Score.

Start with `init` to load context, then move through phases sequentially, or jump to a specific phase skill as needed.

## Quality Checks

Before calling any deliverable "done," ask:
- Can I trace this output back to user insight or research?
- Is this decision documented and justified?
- Would someone outside this project understand why I made this choice?
- Is this specific to our users and brand, or could it apply to any product?
- Are edge cases covered?
- Does this work with the rest of the system?

If you answer "no" to any question, it's not done. Keep iterating.

Design is craft. Dexlab is the discipline that makes craft scalable and repeatable. Use it.
