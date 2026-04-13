---
name: uxr-interview-script
description: Create interview scripts and synthesize findings into patterns and key insights
user-invocable: true
argument-hint: "[research questions] [target user description]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — qualitative methods, interview practices, affinity mapping, JTBD framework, synthesis

## OVERVIEW

An interview is a structured conversation designed to reveal how users think, what they do, and why they do it. A good interview script creates space for discovery. A weak one leads with assumptions and gets yes/no answers that teach you nothing.

## STEPS

### 1. Build Interview Guide from Research Questions
For each research question from your plan, write 2–3 interview questions:
- Research question: "What triggers decision to upgrade?"
- Interview question: "Tell me about the last time you decided to upgrade to a paid version. What changed for you?"
Do not write yes/no questions. Do not ask leading questions. Open-ended only.

### 2. Structure the Flow
- **Warm-up (5 min)**: Easy, low-risk questions ("How long have you used this?"). Build rapport.
- **Core topics (25–35 min)**: 4–6 open questions ordered from general to specific. Use prompts like "tell me about a time when..." or "describe what happens when..."
- **Wrap-up (5 min)**: "Is there anything I missed?" or "What would you tell the designers?" Loose, open.
Script should be 1 page max. Memorize it so you listen, not read.

### 3. Master Key Techniques
- **Silence is your tool**. After a user answers, pause 3 seconds. They'll often say something deeper.
- **"Tell me more"** beats follow-up specifics. Let them choose what matters.
- **Avoid "why?" questions**. "What happened that led to that decision?" works better. "Why?" feels accusatory.
- **Don't nod/smile**. Neutral presence. Your reactions bias answers.
- **Take light notes**. Don't transcribe. Eyes on the participant, not the screen.
- **Record audio (with permission)**. Transcribe verbatim later for patterns.

### 4. Synthesis: Create Affinity Diagram
After all interviews (minimum 8):
- Print or digitize each quote/observation from all sessions.
- Group by theme WITHOUT imposing categories. Let patterns emerge.
- Name clusters ("Switching Costs", "Feature Discovery", "Trust Barriers").
- Count frequency. Patterns appearing in 5+ sessions are strong signals.
- Note outliers separately—sometimes 1 person reveals something critical.

### 5. Extract Key Findings with Evidence
For each finding, write:
- **Pattern description** (1 sentence)
- **Evidence** (2–3 direct quotes)
- **Sample size** (# interviews where this appeared)
- **Design implication** (what might we change based on this?)
Example:
- **Finding**: "Users don't attempt advanced features because they're afraid of breaking something."
- **Quote**: "I'm scared if I click that I'll mess up my whole project and lose hours of work."
- **Count**: 7/10 interviews
- **Implication**: Undo functionality and recovery options may unlock feature adoption.

## OUTPUT

Deliverables:
- Interview guide (1 page script with 5–6 open questions)
- Affinity diagram (visual or documented clusters)
- 5–8 key findings with quotes, count, and implications
- Raw transcript or detailed notes from all sessions

## ANTI-PATTERNS

Do not ask yes/no questions. "Do you find this feature useful?" gets "yes" or "no." No insight.
Do not ask leading questions. "Don't you think this should be faster?" biases the answer.
Do not interrupt. Wait. Let silence work.

## Next Steps

→ `/persona` (turn interview findings into behavioral personas)
→ `/journey` (map journeys grounded in interview patterns)
