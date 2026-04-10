---
name: Design Operations & Workflow
description: Set up design review process, quality gates, handoff checklist, decision log, and design debt tracking. Lead development, don't follow it.
user-invocable: true
argument-hint: Team or project to set up ops for
---

## MANDATORY PREPARATION
Invoke /dexlab — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

## What This Skill Does
Design operations enables systematic quality and governance. This skill establishes processes, gates, and documentation so design leads development instead of chasing it.

## STEPS

### 1. Set Up Design Review Process
Create a structured critique ritual (not opinion-based):

**Weekly Design Reviews (30–45 min):**
- **Participants**: Design leads, product managers, tech lead (optional)
- **Format**: Show work-in-progress; use **/critique** framework (heuristics + anti-patterns)
- **Scoring**: Each reviewer scores 0–4 on Nielsen's 10 heuristics
- **Discussion**: Focus on evidence, not taste ("I don't like the color" vs "contrast is 2:1, needs 4.5:1")
- **Output**: Document issues with priority tags (P0, P1, P2, P3)
- **Cadence**: Same day/time weekly; async option for async teams (Figma comments with framework)

**Launch Review (before handoff):**
- Run **/audit** (technical quality, score /20)
- Run **/critique** (UX heuristics, score /40)
- Run **/polish** verification checklist
- **Gate**: Design doesn't move to engineering until audit ≥ 12/20 and critique ≥ 25/40
- Document gate approval in decision log

### 2. Define Quality Gates
Establish what must pass before shipping:

**Gate 1: Design Review Approval**
- Passes **/critique** (≥ 25/40 on heuristics, no P0 anti-patterns)
- No "I like/dislike" — use heuristics framework
- Documented in decision log

**Gate 2: Technical Audit Approval**
- Passes **/audit** (≥ 12/20)
- Accessibility ≥ 2/4, Responsive ≥ 2/4
- All P0 issues resolved, P1s documented in backlog

**Gate 3: Handoff Completeness**
- **/handoff** spec includes: tokens, all 8 states, edge cases, content specs, assets
- Developer can build without re-designing
- Checklist item: "Developer confirmed they can implement without questions"

**Gate 4: Polish Verification**
- Run **/polish** checklist: alignment, spacing tokens, interaction completeness
- All 8 states implemented in design
- No hard-coded values; no magic numbers

**Enforcement**: CI/CD can't merge engineering if design gate unchecked in decision log

### 3. Create Handoff Checklist
Before design moves to engineering:

**Design File:**
- [ ] All components use design tokens (no raw values)
- [ ] All interactive elements show 8 states (default, hover, focus, active, disabled, loading, error, success)
- [ ] Edge cases designed: empty, loading, error, permissions, overflow
- [ ] Assets exported: icons (SVG), images (2x), fonts
- [ ] Accessibility verified: focus states visible, contrast ≥ 4.5:1
- [ ] Responsive breakpoints defined

**Developer Handoff Doc:**
- [ ] Token mapping (name → computed value)
- [ ] Visual specs (spacing, sizing, colors as tokens)
- [ ] Interaction documentation (all 8 states defined)
- [ ] Content specs (copy, character limits, truncation)
- [ ] Implementation notes (suggested approach, performance considerations)
- [ ] Success criteria and known edge cases

**Sign-off:**
- [ ] Designer: "This is implementation-ready"
- [ ] Engineer: "I can build this without questions"
- [ ] PM: "This meets acceptance criteria"

### 4. Document Design Decisions
Create a decision log in shared space (Notion, GitHub wiki, or design docs):

**Format for each decision:**
```
## [ID] Decision: [What was decided]
**Date**: [YYYY-MM-DD]
**Context**: Why was this decision needed?
**Options Considered**: 
1. [Option A] — Pros, Cons
2. [Option B] — Pros, Cons
3. [Option C] — Pros, Cons
**Decision**: Option B
**Rationale**: [Why this option]
**Outcomes**: How did this play out in testing or launch?
**Linked Issues**: Figma file, GitHub issue, research notes
```

**Log entry for each:**
- Token system choices (why this scale? why 4px base?)
- Component structure (why this variant system?)
- Major UX decisions (why this interaction pattern?)
- Trade-offs made (what we gave up, why)
- Learnings from testing or feedback

**Benefits:**
- Team context: new members understand why decisions were made
- Accountability: avoid repeating mistakes or reversing decisions
- Pattern library: compound decisions into reusable principles

### 5. Identify and Track Design Debt
Create a design debt backlog (separate from feature backlog):

**Debt categories:**
- **Technical**: Hard-coded values, missing tokens, duplicate styles
- **Accessibility**: Contrast issues, missing focus states, keyboard gaps
- **Anti-patterns**: Placeholder-only labels, magic numbers, missing edge cases
- **Consistency**: Inconsistent spacing, icon styles, color usage
- **Scalability**: Brittle responsive breakpoints, rigid component structure

**Tracking:**
- Run **/audit** quarterly; log all P2/P3 issues as debt
- Tag issues: "debt/[category]"
- Prioritize by impact: P0 (blocks quality), P1 (degrades experience), P2 (technical cost), P3 (nice-to-have)
- Allocate 20% sprint capacity to debt reduction
- Review debt at planning: what can we pay down this sprint?

**Example debt log:**
```
**Design Debt**
- [P1] Button padding inconsistent (16px vs 12px) — blocks system consistency
- [P2] No loading state for list views — technical debt, needed for feature
- [P3] Form labels don't use new token scale — consistency, low impact
- [P2] Dark mode not tested on dashboard — feature gap
```

### 6. Plan Design Sprints
Design leads, not follows. Plan 1–2 sprints ahead of engineering:

**Design Sprint Cadence:**
- **Week 1–2**: Research, ideation, early prototyping (with **/prototype**)
- **Week 2–3**: Testing and validation (with **/test-plan**)
- **Week 3–4**: Refinement and handoff spec (with **/handoff** and **/polish**)
- **Week 4–5**: Engineering sprint (design supports, reviews, iterates)

**Leads development:**
- Design validates assumptions before engineering starts
- Engineering is building something proven, not guessing
- Design reviews iterations; catches divergence early

**Tools & Artifacts:**
- Design board: what's in research, prototyping, validation, ready-to-build?
- Sync points: weekly design review, pre-handoff gate, post-launch retro

## Verification Checklist

Design ops in place when:
- [ ] Weekly design review scheduled and attended
- [ ] Gate criteria documented and enforced
- [ ] Handoff checklist used before every handoff
- [ ] Decision log created and populated with 5+ decisions
- [ ] Design debt backlog created; quarterly audit scheduled
- [ ] Design sprints planned 1–2 weeks ahead of engineering

## Next Steps
Use **/audit** quarterly to measure design quality and identify debt.

Use **/critique** weekly as your structured review process.

Reference this skill quarterly to assess ops health and adjust processes.
