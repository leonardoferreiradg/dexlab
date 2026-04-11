---
name: Opportunity
description: Frame and prioritize design opportunities using research, principles, and feasibility
user-invocable: true
argument-hint: "[research findings] [journey map] [design principles]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — synthesis patterns, JTBD framework, insight-to-opportunity transformation

## OVERVIEW

An unfocused design exploration wastes time. Opportunity framing surfaces where you can create real value. You're not redesigning everything. You're identifying the 2–3 leverage points where design creates disproportionate impact on user behavior and business goals.

## STEPS

### 1. List Opportunities from Research and Journey Maps
From your research, extract every "what if" that emerged:
- **Pain points from journey maps**: Where do users struggle, hesitate, or abandon?
- **Insights from interviews**: What did users wish they could do? What confuses them?
- **Competitive gaps**: What do competitors not do well, or you could do differently?
- **Feature requests**: What did users ask for or wish existed?
- **Unexpected behaviors**: What surprised you? What contradicted your assumptions?
Don't filter yet. Write 15–20 opportunities. One of them will lead to the solution.

### 2. Frame as "How Might We..." Statements
Translate each opportunity into an HMW question:
- **Research finding**: "Users don't discover advanced features."
- **Bad HMW**: "How might we help users?" (too vague)
- **Good HMW**: "How might we surface features that users need without overwhelming them?" (specific, actionable)

**Bad HMW** (too broad): "How might we make it better?"
**Good HMW** (focused): "How might we reduce onboarding time from 10 minutes to under 3 minutes?"

**Bad HMW** (too narrow): "How might we add a button?"
**Good HMW** (opens exploration): "How might we make it obvious where to start?"

HMW statements should inspire multiple solutions, not prescribe one.

### 3. Evaluate: Impact × Feasibility × Alignment with Principles
For each HMW, score on three dimensions:

**Impact** (1–5):
- How many users affected?
- How significant is the behavior change?
- How much does it move toward success criteria?
- 5: Moves the needle significantly. 1: Nice to have.

**Feasibility** (1–5):
- Can we design and test this quickly?
- Does it require technology we don't have?
- Are there organizational barriers?
- 5: Could sketch and test in 1 week. 1: Requires major technical work.

**Alignment with Principles** (1–5):
- Does this reflect your design principles?
- Does it address the core problem in your brief?
- 5: Directly embodies 2+ principles. 1: Conflicts with principles.

### 4. Prioritize Using 2×2 Matrix or Scoring Framework
**2×2 Matrix approach**:
- X-axis: Impact (low to high)
- Y-axis: Feasibility (low to high)
- Quadrant 1 (high impact, high feasibility): Do first.
- Quadrant 2 (high impact, low feasibility): Do if resources allow; plan phasing.
- Quadrant 3 (low impact, high feasibility): Do only if time permits.
- Quadrant 4 (low impact, low feasibility): Don't do.

**Scoring approach**:
- HMW score = (Impact × 2) + (Feasibility × 1) + (Alignment × 1)
- Weights based on strategy: If innovation matters most, weight impact higher. If speed matters, weight feasibility higher.
- Rank top 5–8 opportunities.

### 5. Select Top 2–3 for Design Exploration
Not every opportunity gets explored.
- **Why these 2–3?** (What makes them high-leverage?)
- **What success looks like?** (How do you measure if the design works?)
- **What will you test?** (Interview, prototype, usability test?)
- **What's the next step?** (Who designs, when, with what constraints?)
Create an "Opportunity Brief" for each:
- HMW statement
- Why we're tackling this (research evidence, impact, alignment)
- Success criteria (behavior change or metric)
- Design approach (explore X, test with Y users)
- Timeline and owner

## OUTPUT

Deliverables:
- 15–20 opportunities extracted from research
- HMW statements for top 10
- Evaluation matrix (impact × feasibility × alignment)
- Top 2–3 prioritized opportunities with briefs
- Rationale for why these opportunities (research evidence + strategy)

## ANTI-PATTERN

HMW statements that are too broad ("How might we make it better?") or too narrow ("How might we add a button?") are equally useless.
Do not prioritize opportunities based on gut feeling. Use evaluation criteria (impact, feasibility, alignment). Gut feeling biases toward familiar problems, not leverage points.
Do not select 10 opportunities for exploration. Explore 2–3 deeply. Better to go deep on one insight than shallow on ten.

## Next Steps

→ Sketch and prototype (start design exploration on top 2–3 opportunities)
→ `/brief` (revisit brief as opportunities surface new insights)
