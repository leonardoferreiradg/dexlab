---
name: Brief
description: Create design briefs that align teams and anchor decision-making
user-invocable: true
argument-hint: "[research findings] [project context]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — research synthesis, JTBD framework, insight-to-opportunity patterns

## OVERVIEW

A design brief is your north star. It articulates the problem, constraints, and non-negotiables so every decision traces back to intent. A bad brief creates misalignment; a good one prevents thousands of wrong turns.

## STEPS

### 1. Write Problem Statement (1–2 Sentences, Specific)
Do not write "Users need better UX." That's meaningless.
Write: "Currently, new users abandon onboarding because permission dialogs appear before they understand why they're needed, creating perceived friction without clear value."
Include:
- **What's the actual problem?** (grounded in research)
- **Who experiences it?** (specific persona or segment)
- **What's the consequence?** (lost productivity, abandonment, frustration?)
Test it: If someone reads only this, do they understand the problem you're solving?

### 2. Document Context (What We Know from Research)
- **User research findings**: 3–5 key insights from interviews/testing
- **Competitive landscape**: What's the norm? Where's the gap?
- **Constraints**: Technical, brand, organizational, timeline
- **Success signals**: What behavior change would prove the design works?
- **Assumptions we're testing**: "We believe X. Design will test that."
Be concise. Use bullets. Reference your research, don't reproduce it.

### 3. Define Success Criteria (Measurable)
What will tell you the design succeeded?
- **Behavioral**: User completes X flow in Y time; reduces errors by Z%
- **Perceptual**: Users feel more confident; satisfaction score increases from X to Y
- **Adoption**: Feature used by X% of users; engagement increases by Y%
Be specific and testable. "Users are happy" is not a criterion.

### 4. Document Constraints
- **Technical**: Platform, browser support, device compatibility
- **Time**: Timeline for design, development, launch
- **Brand**: Tone, visual style, existing systems
- **Organizational**: Budget, team size, stakeholder approvals needed
- **Business**: Revenue targets, retention goals, competitive pressure
Constraints shape design. Name them explicitly so they inform, not derail.

### 5. Define 3–5 Design Principles
These are rules that guide every decision:
- **Clarity over completeness**: Prioritize showing essential information. Hide advanced options.
- **Speed over perfection**: Help users accomplish their goal, even if it's not perfect.
- **Validation before action**: Confirm high-impact decisions before commit.
- **Context before choice**: Show relevant options based on user context, not all possible options.
- **Undo before warning**: If an action is reversible, let them try it. If not, warn first.
Each principle should:
- Have a name (memorable, opinionated)
- Have a rationale (why this matters for this project?)
- Guide actual decisions (not feel decorative)

### 6. Define Anti-References (What This Should NOT Look Like)
This is powerful. Say:
- "This should NOT feel cluttered. See [example] for what to avoid."
- "This should NOT copy competitor X's approach of hiding options. We show all relevant choices."
- "This should NOT require 5 steps. Competitors average 2–3."
Anti-references prevent scope creep and misalignment.

## OUTPUT

Deliverables (2–3 pages):
- Problem statement (1–2 sentences)
- Context (research findings, competitive landscape, assumptions)
- Success criteria (behavioral, perceptual, adoption)
- Constraints (technical, time, brand, organizational)
- 3–5 design principles with rationale
- Anti-references (what to avoid)

## ANTI-PATTERN

Do not write principles that no one would disagree with. "Be intuitive" is not a principle. Everyone wants intuitive.
Do not define success as "users like it." That's too vague. Define what behavior change proves success.
Do not hide constraints. Name them. They drive design. Pretending they don't exist creates conflict later.

## Next Steps

→ `/principles` (expand design principles with decision framework)
→ `/opportunity` (frame design opportunities aligned to brief)
