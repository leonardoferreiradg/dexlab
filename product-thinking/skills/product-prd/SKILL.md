---
name: product-prd
description: Write a Product Requirements Document that actually guides development — specific, testable, and free of "intuitive" and "seamless."
user-invocable: true
argument-hint: "[feature or product]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — qualitative methods, interview practices, affinity mapping, JTBD framework, synthesis
- `.design/references/design-ops.md` — design review process, quality gates, handoff checklist, decision log, design debt tracking

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

## STEPS

1. **Executive summary** (3 sentences max) — What problem are we solving, for whom, and how will we know we've solved it? Example: "Users cannot find their reservation confirmation emails. We're adding a dedicated 'Reservations' tab in the account section. Success = 90% of users find their reservation in < 30 seconds."

2. **User stories with acceptance criteria** — Format: "As a [specific user], I want [specific action] so that [specific outcome]." Acceptance criteria: "Given [context], when [action], then [outcome]." Each story must be independently testable. Bad: "As a user, I want a better experience." Good: "As a logged-in user, I want to see my last 10 reservations in reverse-chronological order so that I can quickly find my next trip."

3. **Non-functional requirements** — Performance: "Page loads in < 2s on 3G." Accessibility: "WCAG 2.1 AA." Security: "PII never stored in localStorage." Browser support: "Chrome, Firefox, Safari, Edge (last 2 versions)." These are requirements, not aspirations.

4. **Out of scope** — Explicitly list what this PRD does NOT cover. Examples: "Mobile app," "Notifications," "Search by location." This prevents scope creep more than any meeting. Be clear. Be brief.

5. **Open questions** — Unresolved decisions with owners and deadlines. Format: "Who decides the pricing model? [Name] by [date]." "Do we show ads to free users? [Name] by [date]." If a question stays open 2 weeks past its deadline, escalate.

6. **Success metrics** — Primary: what moves the needle (e.g., "reservation find time < 30 seconds"). Secondary: what we're watching (e.g., "support tickets about reservations"). Guardrail: what we won't let fall (e.g., "no regression in account page load time").

## BANNED WORDS

"Intuitive," "seamless," "delightful," "world-class," "best-in-class," "leverage," "synergy," "robust," "scalable." These words mean nothing and hide unclear thinking. Say what you mean.

## ANTI-GENERIC RULES

"A PRD with 20 pages of flowcharts and 0 user stories is design theater. Write stories first."

"If your success metric is 'users love it,' you have no metric. Measure behavior, not sentiment."

## NEXT STEPS

Share the PRD with engineering and design for a 2-hour kickoff. Answer questions live. Don't revise the PRD during engineering — flag changes as change requests. Update the document only after implementation if reality requires it.
