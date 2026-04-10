---
name: Test Plan Design
description: Plan usability testing that reveals whether your assumptions are wrong. 5 participants find 80% of issues.
user-invocable: true
argument-hint: Feature or design to test, or prototype to validate
---

## MANDATORY PREPARATION
Invoke /dexlab — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

## What This Skill Does
A test that confirms what you already believe is not a test. This skill forces you to write tasks that could prove you wrong, then interpret results fairly.

## STEPS

### 1. Define Test Objectives
- What decisions does this test inform?
- Don't say "test usability" — be specific
- Examples: "Does the permission model confuse users?" or "Will users find the search feature?"
- List 2–3 decisions that depend on this test's results
- Document what success looks like and what failure means

### 2. Choose Test Method
- **Moderated remote**: Watch user faces, ask follow-ups, observe where they struggle
- **Moderated in-person**: Richer observation, pick up on hesitation and body language
- **Unmoderated (Maze, UserTesting)**: Scalable, less rich, good for quick validation
- **A/B test**: When you have traffic, compare two designs directly
- **Decision rule**: Moderated for new features (you need the why), unmoderated for refinements

### 3. Write Task Scenarios
- Write realistic scenarios that match actual user contexts
- Avoid leading language ("try the new button" — don't telegraph the solution)
- Include success criteria: what does completion look like?
- Write 3–5 core tasks; add 1–2 edge case tasks (empty state, error recovery)
- Don't ask opinions; observe behavior
- Example: "You want to invite your team. Go ahead and do that." Not "Try the invite feature."

### 4. Define Metrics
- **Task completion**: Did they finish the task? (yes/no)
- **Time on task**: How long did it take? (average, outliers)
- **Errors**: Where did they get stuck or make mistakes?
- **Satisfaction**: Post-task: "How easy was that?" (5-point scale)
- **Success threshold**: Define before testing — "4 out of 5 complete the task unassisted"

### 5. Recruit 5 Participants
- Five users find ~80% of usability issues; diminishing returns after
- Define participant criteria: who's your actual user? (role, experience, context)
- Recruit from actual user base or users of competitive products
- Incentivize ($25–$75 depending on session length)
- Schedule over 2–3 days to catch patterns early

### 6. Create Post-Test Questions
- Ask about specific moments: "What did you think when you saw [screen]?"
- Ask about confidence: "Would you use this feature?" (not "did you like it?")
- Ask about pain points: "What was confusing?"
- Avoid leading questions
- Save opinion questions for last; let behavior speak first

## Next Steps
Run the test with **/handoff** guidance on how to interpret results and communicate findings.

Use **/harden** to test edge cases and error states alongside task completion.
