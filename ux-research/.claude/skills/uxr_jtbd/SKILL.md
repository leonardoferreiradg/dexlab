---
name: uxr_jtbd
description: Map user Jobs-to-Be-Done with functional, emotional, and social dimensions — and the outcome expectations that define success.
user-invocable: true
argument-hint: "[product area or user segment]"
---

## MANDATORY PREPARATION

Invoke /dexlab — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

---

JTBD reframes user understanding around progress, not profiles. Users don't buy products — they hire them to make progress in their lives. This skill surfaces what progress they're trying to make.

## Steps

### Step 1: Gather Research Inputs

JTBD analysis requires real data: interview transcripts, support tickets, sales calls, churn interviews. The job is discovered, not invented.

The core JTBD statement format:
> "When I [situation], I want to [motivation], so I can [expected outcome]."

Collect at least 5-10 instances before proceeding. One user's story is anecdote. Ten is a pattern.

### Step 2: Identify the Main Job

The core functional job: what progress is the user trying to make? Not what feature they use — what outcome they're hiring the product to achieve.

Bad: "Users want to send messages."  
Good: "Users want to stay aligned with their team without meetings interrupting their flow."

Spotify's job: "Help me feel the right emotion for this moment." Not "play music."

Write the main job in one sentence. If you need more than one sentence, you have two jobs.

### Step 3: Map the Three Job Dimensions

Every job has three layers — all three must be addressed for the product to feel complete:

**Functional** — the practical task to complete.  
"Organize my team's work so nothing falls through the cracks."

**Emotional** — how they want to feel while doing it.  
"Feel in control. Not anxious about what I might be forgetting."

**Social** — how they want to be perceived by others.  
"Look organized and on top of things to my manager and teammates."

Most products address functional. Great products address all three. The emotional and social layers are where switching costs live.

### Step 4: Define Desired Outcomes

Outcomes are the metrics users use to measure job success. Format:

> [Direction] + [metric] + [context]

Examples:
- "Minimize the time it takes to find what I assigned to someone else."
- "Increase the likelihood that I remember commitments I made in meetings."
- "Reduce the anxiety I feel about missing a deadline."

Each job has 5-20 outcomes. More outcomes = more specific job understanding. These become the inputs to prioritization — score each by importance and satisfaction to find underserved opportunities.

### Step 5: Identify Switching Triggers

What causes someone to hire a new solution? Four forces:

- **Push** — pain with the current solution that drives them away
- **Pull** — something attractive about the new solution that draws them in
- **Anxiety** — fear about switching (learning curve, data migration, team buy-in)
- **Habit** — inertia with the current way of working

Understanding all four explains why users adopt and why they churn. Most teams only address Pull. Products that address Push + Pull while minimizing Anxiety + Habit win.

### Step 6: Map the Job Executor Journey

The sequence of steps the user takes to complete the job — before, during, and after using the product:

1. **Before** (defining the job): How do they identify that the job needs to be done? What triggers it?
2. **During** (doing the job): What steps do they take? What tools? Where does your product fit?
3. **After** (evaluating the outcome): How do they know the job was done successfully? What's the next job?

Where does the product fail to help? These gaps are design opportunities.

### Step 7: Translate to Product Opportunities

For each underserved outcome (high importance + low satisfaction):
- What product change would improve satisfaction?
- What would make this outcome easier to achieve?
- What prevents users from achieving it today?

JTBD outcomes are the most reliable input to prioritization frameworks. They're stable — user outcomes don't change as fast as user preferences for specific features.

---

**Anti-generic:** "JTBD is not a persona replacement. Personas describe who users are. JTBD describes what progress they're trying to make. A 35-year-old project manager and a 28-year-old freelancer can share the exact same job. Demographics don't predict jobs."

## Next Steps

Use `product_opportunity` to frame JTBD outcomes as design opportunities, `product_prd` to translate to requirements, or `uxr_synthetic_persona` to layer behavioral profiles onto the job map.
