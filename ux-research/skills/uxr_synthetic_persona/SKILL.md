---
name: Persona
description: Build user personas grounded in observed behavior, not demographics
user-invocable: true
argument-hint: "[interview findings] [behavior patterns]"
---

## MANDATORY PREPARATION

Invoke /dexlab — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

## OVERVIEW

A persona without behavioral data is fiction, not design. Demographics alone (age, gender, job title) create stereotypes. Every persona attribute must be traceable to observed behavior from research. Build personas to make research patterns actionable for design.

## STEPS

### 1. Gather Behavioral Data from Research
From interviews, surveys, and observation, extract:
- **What does this person do?** (actual actions, workflows, tools they use)
- **When and where?** (context: alone, with team, at desk, mobile, high-stress?)
- **What do they try to avoid?** (friction points, effort, risk)
- **What are they trying to accomplish?** (jobs-to-be-done, not goals)
- **What constraints affect them?** (time, skill, resources, policies)
Do not start with "Sarah, age 32." Start with "Sarah uses the tool while multitasking, never in full focus."

### 2. Identify Behavior Patterns & Motivations
Cluster similar behaviors across research participants:
- Do 5+ people use the product the same way? That's a behavior pattern.
- Do 3+ people mention the same frustration? That's a motivation or barrier.
- What goals conflict? (e.g., "I want speed AND safety" creates design tension.)
- What's surprising—behavior that contradicts your assumptions?
Link every pattern to evidence: "7 users mentioned this" or "observed in 3 sessions."

### 3. Define Goals, Frustrations, Context
For each persona, articulate:
- **Primary goal**: What are they trying to do right now? (Not "use the product well"—something concrete.)
- **Secondary goals**: What else matters to them?
- **Frustrations**: What stops them? (Not "bad design," but "I can't find where I saved my file.")
- **Context of use**: Where, when, under what constraints? (Rushed? Collaborative? Distracted?)
- **Confidence level**: Where are they skilled? Where do they second-guess themselves?

### 4. Create Persona Narrative with Real Quotes & Scenarios
Write 1-page narrative for each persona:
- **Name** (memorable, not realistic—use placeholder names like "Power User Patricia")
- **Role/context** (e.g., "Product manager juggling 3 projects")
- **Behavior snapshot** (1 paragraph of typical day/workflow)
- **Goals & motivations** (3–4 bullets)
- **Frustrations & barriers** (3–4 bullets with quotes)
- **Key insights** (what would delight this person?)
- **Design principle for this persona** (how should we build for them?)
Include 2–3 direct quotes from research. Show the persona in action: "When Sarah has a deadline in 2 hours, she skips the tutorial and jumps to the essentials..."

### 5. Validate Against Research Data
Before finalizing:
- Can you map each persona attribute back to interview evidence?
- Do 3+ research participants match this persona's pattern?
- Would you make the same design decision for all participants in this cluster?
- Are you assuming behavior not observed? (Red flag: "probably," "likely," "I bet.")
Personas with weak grounding are worse than useless—they misdirect design.

## OUTPUT

Deliverables (per persona):
- 1-page narrative with name, context, behaviors, goals, frustrations
- 2–3 key quotes from research
- Behavior patterns with evidence count
- Context of use (when, where, constraints)
- Design principles specific to this persona
- Traceability: which research sessions informed this persona?

## ANTI-PATTERN

A persona without behavioral data is fiction. If you can't point to "8 interviews showed this behavior," remove it.
Do not use demographics as defining traits. "Sarah is 28" tells you nothing. "Sarah must complete her work in 30-minute blocks between meetings" tells you everything.
Do not write "Bob is tech-savvy." Useless. Instead: "Bob reads documentation and writes scripts to automate his workflow."

## Next Steps

→ `/journey` (map journeys for each persona)
→ `/opportunity` (frame design opportunities grounded in persona frustrations)
