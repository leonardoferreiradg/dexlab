---
name: product-benchmark
description: Competitive analysis focused on experience patterns, not feature matrices
user-invocable: true
argument-hint: "[project scope] [comparison criteria]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — qualitative methods, interview practices, affinity mapping, JTBD framework, synthesis

## OVERVIEW

Benchmarking is not a feature matrix. You're not building a shopping list. You're understanding what works in the space, what's standard, and where gaps exist. Choose competitors and criteria aligned to your research questions and design goals.

## STEPS

### 1. Define Comparison Criteria Aligned to Project Goals
Don't benchmark everything. Choose 4–6 dimensions:
- **Onboarding experience**: How do new users get started?
- **Core workflow**: How do users accomplish the primary task?
- **Error handling**: How are mistakes communicated?
- **Feature discovery**: How do users find advanced options?
- **Information architecture**: How is content organized?
- **Social/collaboration patterns**: If relevant, how do users share work?
Ask: "Which dimensions will inform our design decisions?"

### 2. Analyze 3–5 Competitors or References
Select thoughtfully:
- Direct competitors (same market, same goal)
- Adjacent competitors (similar patterns, different market)
- Exemplary references (not competitors, but excellent at one dimension)
For each, document:
- **Primary use case** (what is this product solving?)
- **User type** (who does it serve?)
- **Experience flow** (how does a user accomplish the main task?)
Screenshot or screen-record key flows.

### 3. Document Patterns on Each Dimension
For each criterion, across all products:
- **What's the pattern?** (e.g., most apps use step-based onboarding)
- **Variation?** (Some use tours, some use contextual hints, some assume knowledge)
- **What's standard?** (What would users expect?)
- **What stands out?** (What's unique or novel?)
Example:
- **Onboarding dimension**: Most products default to video + welcome screen. One uses interactive walkthrough. One skips onboarding entirely (assumes power users).

### 4. Identify Gaps & Opportunities
- What do all competitors do the same way? (Probably user expectations.)
- What does no one do? (Opportunity or risk.)
- Where is there clear differentiation? (Where have some succeeded distinctly?)
- What patterns frustrate users? (Look for low adoption of features, bad reviews.)
- Where is the space under-served? (Which user needs are barely addressed?)

### 5. Synthesize into Actionable Insights
Write 5–8 insights:
- **Pattern**: What's the norm or trend?
- **Why it matters**: How does this affect your design?
- **Opportunity**: What could you do differently?
- **Principle**: What design principle emerges from this?
Example insight:
- **Pattern**: All competitors use search for feature discovery.
- **Why**: Users don't explore menus; they search.
- **Opportunity**: Could we surface features based on user context before they search?
- **Principle**: Search is not discovery; contextualization is.

## OUTPUT

Deliverables:
- Comparison criteria (4–6 dimensions aligned to goals)
- 3–5 products analyzed with flows documented
- Pattern summary per dimension (what's standard, what varies, what stands out)
- Gaps and opportunities (structured as patterns + implications)
- 5–8 design insights with actionable principles

## ANTI-PATTERN

Do not create a feature matrix. "Competitor A has X, B has X, C doesn't" teaches you nothing about experience.
Do not benchmark products for different use cases. Comparing Slack to email because both are communication is useless noise.
Do not benchmark to copy. You benchmark to understand the space so you can design with intention, not emulation.

## Next Steps

→ `/brief` (incorporate benchmark insights into your design brief)
→ `/opportunity` (frame opportunities informed by competitive gaps)
