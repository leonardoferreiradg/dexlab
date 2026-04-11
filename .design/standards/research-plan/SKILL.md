---
name: Research Plan
description: Plan user research systematically with focused questions, methods, and success criteria
user-invocable: true
argument-hint: "[project context] [initial research questions]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — qualitative vs quantitative, interview practices, card sorting, sample sizes, research ethics

## OVERVIEW

Research without a plan is waste. This skill structures what you need to learn, how you'll learn it, and how you'll know you succeeded. Reject default approaches ("let's interview 5 users"). Every method must solve a specific research question.

## STEPS

### 1. Define Research Questions
Write 4–6 specific questions you need answered:
- What behavior patterns exist?
- What are actual frustrations vs. assumed ones?
- Where do decisions happen in the user's context?
- What goals conflict or compete?
Be specific. "Do users like the current system?" is not a research question. "In what situations do users abandon the onboarding flow?" is.

### 2. Choose Methods Aligned to Questions
Refer to `/sessions/adoring-elegant-euler/mnt/outputs/dexlab/.claude/skills/dexlab/reference/research-methods.md`.
Match method to question:
- Observation → behavior patterns in context
- Interview → motivations, feelings, past decisions
- Survey → prevalence, frequency across population
- Testing → which design performs better
Do not default to interviews. If you need frequency data, surveys are faster. If you need context, observation beats interviews.

### 3. Define Participants
For each method:
- Recruitment criteria (who, what role, what constraints?)
- Sample size (e.g., 8–10 interviews for saturation; 200+ for survey)
- Diversity dimensions (experience level, use cases, contexts)
- Screening questions to verify fit
Example: "Users who have attempted [specific task] in last 3 months, across Android and iOS, roles ranging from casual to daily users."

### 4. Create Timeline & Logistics
- Duration of each research session
- Recruitment timeline (when do we contact, when do we conduct?)
- Data collection method (video, notes, recordings?)
- Analysis timeline (when synthesized?)
- Locations or platforms (remote, in-person, which tools?)
Be realistic about team capacity.

### 5. Define Success Criteria
What will tell you the research is sufficient?
- Saturation point (how many sessions until new patterns stop emerging?)
- Coverage (which scenarios must we cover?)
- Confidence threshold (how certain do you need to be?)
Example: "We'll conduct interviews until three consecutive sessions add no new job-to-be-done insights."

## OUTPUT

Write a 1-page research plan document including:
- 4–6 research questions
- Method(s) chosen with rationale
- Participant criteria and sample sizes
- Timeline (dates, duration, locations)
- Success criteria

## ANTI-PATTERN

Do not approve a research plan that says "let's do 5 user interviews" without linking to specific questions. Challenge every default. Demand a reason.

## Next Steps

→ `/interview` (conduct interviews from research questions)
→ `/persona` (synthesize findings into personas)
→ `/benchmark` (add competitive context to research)
