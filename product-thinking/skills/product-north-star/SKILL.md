---
name: product-north-star
description: Define a North Star metric and supporting metric tree that aligns the team on what actually matters — and why.
user-invocable: true
argument-hint: "[product or user value]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — qualitative methods, interview practices, affinity mapping, JTBD framework, synthesis

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If product context is already available** — via `.dexlab.md` in the project root, Project Instructions, or context established earlier in this conversation:
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered.

**If no product context is available from any of these sources:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. What is the product and what specific user problem does it solve — described in terms of what users do differently because of it, not what it features?
2. What is the business stage and constraint — are we defining a new product, improving an existing one, or trying to fix something that is currently failing?
3. What research or evidence exists about the users? (Even rough: "we've talked to 10 customers," "we have analytics showing X," "we have no research yet")

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## STEPS

1. **Identify the core value exchange** — What does the product do for users that they can't easily get elsewhere? The North Star metric captures this at scale. Spotify's is minutes of audio listened (value: access to music). Airbnb's is nights booked (value: places to stay). What's yours? Define the user value, not the business value.

2. **Draft the North Star metric** — It must: (a) capture delivered user value, not just business value, (b) be measurable weekly or monthly, (c) lead revenue, not lag it. "Monthly Active Users" is not a North Star — it's a vanity metric. "Engaged minutes per user per month" is better because it captures actual value delivered.

3. **Build the metric tree** — Break the North Star into 3-5 input metrics. Example: if North Star = "nights booked," inputs = (listings available) × (search-to-view rate) × (view-to-book rate) × (repeat bookings). Each input drives the North Star. Each input is measurable and actionable.

4. **Assign ownership** — Each input metric has one team or person responsible for it. Growth owns search-to-view. Design owns view-to-book. Operations owns listings available. The North Star has one owner (usually product leadership). Ownership prevents diffusion.

5. **Write the North Star statement** — "We know we're delivering value when [North Star metric] grows because it means [user value being captured]." One sentence. Example: "We know we're delivering value when minutes of audio listened grows because it means more users are finding music they want to hear."

6. **Align on what's NOT the goal** — What metrics could grow while the product gets worse? Examples: support tickets up (users engaging but frustrated), session count up (users clicking more but completing less), time-on-site up (users lost, scrolling aimlessly). Name the guardrails. These are metrics that must not move in the wrong direction.

## ANTI-GENERIC RULES

"A North Star metric that the revenue team, the growth team, and the design team all interpret differently is not a North Star. It's a Rorschach test."

"If you have 7 North Stars, you have no North Star. Pick one. Make it stick for 18 months. Then reconsider."

## NEXT STEPS

Present the North Star and metric tree to your leadership team. Get consensus. Document it in a visible place (handbook, quarterly planning doc, dashboard). Revisit it quarterly. Does this still feel true? If the metric stalls, investigate before panicking. A metric plateau often precedes a plateau in user growth — this is expected. Don't abandon your North Star at the first plateau.
