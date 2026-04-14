---
name: uxr-journey-map
description: Map user journeys with emotional depth, pain points, and moments of delight
user-invocable: true
argument-hint: "[persona] [scenario/context]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — qualitative methods, interview practices, affinity mapping, JTBD framework, synthesis

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If `.dexlab.md` exists in the project root:**
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered in that file.

**If `.dexlab.md` does not exist, or is missing the five pillars:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. What specific question or assumption are you trying to answer or test through this research? (Not "learn about users" — what decision will this research enable or change?)
2. Who are the research participants — describe them by behavior, not demographics. What do they actually do, and how does your product fit into that?
3. What research has already been done on this product and these users — if any? What do you already know, and what are you still guessing?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## OVERVIEW

A journey map without emotional ups and downs is a process diagram. If every step feels the same, you haven't mapped the experience. Journey maps surface where design can create delight or remove friction. They're tools for alignment, not documentation.

## STEPS

### 1. Define Journey Scope
Be specific about what you're mapping:
- **Which user?** (specific persona, not generic)
- **Which scenario?** (not "use the product"—"Sarah trying to recover a lost file" or "new user first week")
- **Start and end points?** (when does the journey begin, when does it end?)
- **Context constraints?** (rushed, collaborative, learning, high-stakes?)
Example: "Power User Patricia's journey to sharing a project with her team mid-sprint while under deadline."

### 2. Map Phases, Actions, and Touchpoints
Break the journey into 4–8 phases:
- **Phase name** (e.g., "Deciding to share", "Inviting teammates", "Confirming permissions")
- **What does the user do?** (specific actions, tools they use)
- **What happens in the product?** (system response, feedback)
- **What happens outside the product?** (Slack message, email confirmation?)
- **Touchpoints** (where does the user interact—button, form, dialog?)
Map at the level of decisions and transitions, not individual clicks.

### 3. Document Emotions at Each Phase
For each phase, ask:
- **What's the user's mental state?** (confident, uncertain, frustrated, excited?)
- **What's the friction?** (waiting, ambiguity, cognitive load, risk?)
- **What could delight them?** (clarity, speed, reassurance, surprise?)
Draw an emotion line on your map. Does it show valleys (frustration) and peaks (satisfaction)? If it's flat, you haven't captured experience.
Emotions should be grounded in research: "Users said this step confused them" or "Users felt relief when they saw the confirmation."

### 4. Identify Pain Points & Moments of Delight
**Pain points:**
- Where do users hesitate or abandon?
- Where do they get confused?
- Where do they waste time?
- What decisions feel risky?
- Where do they ask for help?

**Moments of delight:**
- Where does the product exceed expectations?
- Where do users feel progress?
- Where is surprise or humor valuable?
- Where does the product remove friction the user expected?

Annotate each with: "Research evidence: 6 users mentioned this" or "Observed in session 4."

### 5. Mark Opportunities for Improvement
For each pain point, ask:
- Could we remove this step entirely?
- Could we clarify the decision?
- Could we automate it?
- Could we provide guidance?
- Could we create a recovery path if the user gets stuck?
For moments of delight: Could we expand them? Protect them? Make them more discoverable?

## OUTPUT

Deliverables:
- Journey map visual (phases × actions × emotions × touchpoints)
- 1-page narrative for each key journey
- Emotion line showing highs and lows
- Annotated pain points (with research evidence)
- Annotated opportunities (with design implications)
- Top 3–5 opportunities prioritized by impact × feasibility

## ANTI-PATTERN

A journey map that's only happy emotions or only tasks is incomplete.
Do not map at the click level. "User clicks button, button opens dialog" is detail, not insight.
Do not assume emotions. Ground every emotional annotation in research: "When users couldn't find the button, they said..."

## Next Steps

→ `/opportunity` (frame design opportunities from journey pain points)
→ `/brief` (incorporate journey insights into your design brief)
