---
name: product-principles
description: Define opinionated design principles that guide decisions and prevent scope creep
user-invocable: true
argument-hint: "[research findings] [brand context] [design brief]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If `.dexlab.md` exists in the project root:**
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered in that file.

**If `.dexlab.md` does not exist, or is missing the five pillars:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. What is the product and what specific user problem does it solve — described in terms of what users do differently because of it, not what it features?
2. What is the business stage and constraint — are we defining a new product, improving an existing one, or trying to fix something that is currently failing?
3. What research or evidence exists about the users? (Even rough: "we've talked to 10 customers," "we have analytics showing X," "we have no research yet")

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## OVERVIEW

A design principle that no one would disagree with is useless. "Be intuitive" is not a principle. "Speed over completeness" is. Good principles are opinionated stances that surface trade-offs and guide hard decisions. They should create constructive tension.

## STEPS

### 1. Review Research Findings and Brand Context
Gather:
- **Key insights from user research**: What do users value? What frustrates them?
- **Competitive patterns**: What differentiates your approach?
- **Brand voice and values**: What does your organization stand for?
- **Constraints discovered**: What trade-offs shape this project?
- **User goals and pain points**: What are they optimizing for?
Ask: "What values must guide design for this to succeed?" Not "what sounds good," but "what must be true?"

### 2. Draft Principles That Are Opinionated
Brainstorm 8–10 potential principles. Test each:
- **Does someone disagree with it?** (If not, it's not a principle.)
- **Does it guide a hard decision?** (If it doesn't help choose between options, it's not useful.)
- **Is it grounded in research or strategy?** (If it's a guess, remove it.)
- **Would you choose differently without it?** (Does it actually change behavior?)
Examples of weak principles: "Be user-friendly," "Think big," "Be inclusive"
Examples of strong principles: "Protect user data over feature completeness," "Assume users are smart but busy," "Make mistakes easy to undo"

### 3. For Each Principle, Define Four Components
**Name**: Memorable, declarative (e.g., "Speed over completeness", "Trust through transparency")

**Description**: 1–2 sentences explaining the principle's intent.
Example: "Speed over completeness: Users accomplish their primary goal faster, even if advanced features aren't discoverable. We show essential, hide optional."

**This means...**: 2–3 concrete implications. Specific design decisions this principle enables.
Example: "This means we surface search over browsing menus. We default to smart guesses over asking users to configure. We automate routine tasks."

**This does NOT mean...**: 2–3 explicit boundaries. What this principle doesn't justify.
Example: "This doesn't mean hiding critical information. This doesn't mean assuming all users have the same goal. This doesn't mean ignoring edge cases."

### 4. Test Principles Against Real Decisions
Walk through a design decision the team has debated:
- "Which principle applies here?"
- "Does it point toward one choice?"
- "Would someone using a different principle choose differently?"
If a principle doesn't illuminate the decision, reword it or remove it. If multiple principles conflict, that's good—name the tension.

Example decision: "Should we show an onboarding tutorial?"
- Principle "Speed over completeness" suggests: skip tutorial, show help contextually only.
- Principle "Assume users are smart but busy" suggests: optional tutorial; don't force it.
- Principle "Trust through transparency" suggests: explain how data flows before asking permission.
These work together. If they conflicted, you'd refine or remove one.

### 5. Limit to 3–5 Principles
Not 10. Not 7. Three to five.
- Fewer principles force clarity and prioritization.
- Too many create conflict without guidance.
- Each principle should be meaningful. If you haven't cited it in a design decision, question whether you need it.
Ruthlessly cut. "Nice to have" principles become noise.

## OUTPUT

Deliverables:
- 3–5 design principles (final list)
- For each: name, description, "this means...", "this does NOT mean..."
- Decision framework showing how principles apply to key design scenarios
- Traceability: which research finding or strategic goal informed each principle?

## ANTI-PATTERN

Do not write principles that are universally agreed. If everyone nods yes, you have decorative statements, not principles.
Do not create principles without grounding them in research or strategy. Guesses masquerading as principles are worse than no principles.
Do not have more than 5 principles. Each additional principle after 5 decreases usefulness and increases team confusion.

## Next Steps

→ `/opportunity` (use principles to prioritize design opportunities)
→ `/brief` (integrate principles into your design brief)
