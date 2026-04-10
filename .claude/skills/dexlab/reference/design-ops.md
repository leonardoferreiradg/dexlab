# Design Operations Reference — Dexlab

Design operations is the unglamorous work that makes design at scale possible. It's not creative, but it multiplies the impact of creativity.

## Design Review Process: Structured Critique, Not Opinion Battles

Design reviews often devolve into opinion shouting matches. Prevent this with structure.

**Pre-review requirements:**
- Designer presents the problem being solved (not the solution)
- Designer shows research/data supporting the direction
- Designer has 2–3 options ready (not one "final" design)
- Attendees reviewed materials before the meeting

**During review (60 minutes max):**

1. **Silent review (5 min):** Everyone views designs silently. No talking.

2. **Designer narrative (5 min):** Designer explains problem, constraints, research. No design walk-through yet.

3. **Clarifying questions (5 min):** "What's the success metric?" "Who is the primary user?" Not "I would do it differently."

4. **Observations (20 min):** Each reviewer gives structured feedback on one option:
   - Strengths: "The layout clearly shows priority"
   - Concerns: "The color contrast doesn't meet AA"
   - Questions: "How does this behave on mobile?"
   - Not opinions: "I don't like the font"

5. **Designer synthesis (10 min):** Designer listens, takes notes. Doesn't defend or argue.

6. **Next steps (5 min):** "Try option 2 with darker backgrounds." "Test with 5 users." Specific actions, not vague feedback.

**After review:**
Designer synthesizes feedback. Only changes that ladder to the problem and research stay. "I like the font better" isn't a reason to change.

## Handoff Checklist: What Developers Actually Need

Handoff documents are often useless. Developers need exact specifications.

**Required:**
- Component name and variants (Button Primary, Button Secondary, etc.)
- Canvas/Artboard name matching code (e.g., "Button/Primary/Large")
- Padding/margin values (12px left/right, 8px top/bottom)
- Font size and weight (16px, 600 weight)
- Line-height (1.4)
- Border-radius (4px, 0px, etc.)
- Stroke width and color if present
- Colors as token names first, hex second (#EF4444, --color-error)
- States: default, hover, focus, active, disabled, loading, error, success
- Responsive behavior: does component scale? Hide? Change layout?
- Spacing: what's the padding inside? Gap between children?
- Animations: duration, easing, trigger
- Accessibility: aria-label requirements, keyboard interaction
- Related components: "Button extends from Box," links to documentation
- Design file link (Figma, etc.) with version number

**Optional but helpful:**
- Usage guidelines ("Use for primary CTAs only")
- When NOT to use this component ("Don't use for toggle switches")
- Edge cases (very long text, empty state, error state)
- Performance notes if relevant

Create a template. Make developers fill it out before shipping.

## Version Control for Design: Naming Conventions, Branching

Design files get messy without structure.

**File naming:**
```
ProjectName_v1.fig
ProjectName_v2_darkmode.fig
ProjectName_v2.1_feedback.fig
```

Version number + brief description. Not "ProjectName_FINAL_2.fig" or "ProjectName_FINAL_FINAL.fig."

**Figma branching (if using collaborative tools):**
- Main branch: production design, code is generated from this
- Feature branches: "settings-redesign," "mobile-nav," one per initiative
- Feedback branches: "v2-feedback-review," specific to review cycles

**Archive old versions.** Don't keep 47 versions in your workspace. Move outdated versions to an "Archive" file yearly.

**Timestamps matter.** "Last updated 2026-03-10" in the file description. Developers need to know if design is stale.

## Design Debt: Identify, Prioritize, Document

Design debt is like technical debt. It compounds. Address it systematically.

**Identifying design debt:**
- Inconsistent spacing (some buttons use 12px padding, others 16px)
- Color inconsistency (five shades of gray where one scale should be)
- Duplicate components (three "button-like" components doing the same thing)
- Broken states (error state designed, but success state forgotten)
- Outdated patterns (loading spinner is outdated, use skeleton screen instead)

**Prioritizing design debt:**
- High: Blocks new work or causes bugs (inconsistent inputs breaking forms)
- Medium: Slows development (multiple implementations of same component)
- Low: Cosmetic (minor spacing variations, icon style needs updating)

**Documenting design debt:**
```
DEBT ITEM: Inconsistent button padding
PRIORITY: High
IMPACT: Button states misalign, causing click misses on mobile
EFFORT: Medium (requires 4 components updated)
OWNER: Design systems lead
DUE DATE: Q2 2026
STATUS: In progress
```

Track in a spreadsheet or issue tracker. Review quarterly. Don't let debt accumulate invisibly.

## Sprint Planning for Design: Leading Sprints, Design Spikes

**Design-led sprints:**
When starting a new feature, design leads the initial sprint. Build discovery, research, conceptual wireframes—not high-fidelity mockups.

Week 1: Problem definition, user research
Week 2: Conceptual directions, low-fidelity sketches
Week 3: Prototype one direction, test with users
Week 4: Synthesize feedback, hand off to engineering

**Design spikes:**
Use when you're unsure about technical feasibility or UX direction.

"Can we build a performant infinite scroll list?" → Design + engineering spend 2 days on a prototype. Findings inform sprint planning.

"What's the minimum viable design for dark mode?" → Design spends 1 day testing colors, not building production specs.

**Sprint velocity for design:**
Design work doesn't move at engineering velocity. Plan accordingly.
- Interaction design: 1–2 screens per week
- High-fidelity mockups: 2–3 screens per week
- Design system work: varies widely

Underpromise, overdeliver. If you say "5 screens," deliver 4 and a prototype.

## Quality Gates: What Must Pass Before Shipping

Define non-negotiables. Not every detail is equally important.

**Must pass:**
- Accessibility: 4.5:1 contrast minimum, keyboard navigation works, screen reader compatible
- Mobile responsive: Touch targets ≥44px, layout doesn't break below 320px
- Error states: All user inputs have clear error messages
- Loading states: Never a blank screen while data loads

**Should pass (but not blockers):**
- Animation smoothness
- Hover states on desktop
- Light/dark mode consistency
- Copy polish (grammar, tone)

**Nice to have (can ship without):**
- Advanced animations
- Rare edge cases
- Perfectionistic tweaks

Document your gates. Reference them in code review and design review. "This doesn't pass the accessibility gate" is a blocker. "The animation is a bit slow" is not.

## Design Tokens as Shared Language

Design tokens are the bridge between design and engineering. Name them carefully.

**Three-tier structure:**
```
GLOBAL TOKENS (raw values):
--color-primary: #3B82F6

ALIAS TOKENS (purposes):
--color-button-primary-bg: var(--color-primary)

COMPONENT TOKENS (specific use):
--button-primary-bg: var(--color-button-primary-bg)
```

Global tokens change rarely (brand refresh, maybe once a year).
Alias tokens change when purposes evolve (button primary is now secondary).
Component tokens change when design changes (styling tweaks).

**Naming discipline:**
```
--{property}-{variant}-{state}-{modifier}
--color-button-primary-hover
--space-input-padding-top
--font-size-heading-2
```

Not:
```
--c1 (unclear)
--nice-blue (opinion, not purpose)
--spacing-8 (size, not purpose)
```

Tokens are documentation. Good naming means developers never have to ask "What is this?" and designers can audit consistency instantly.

## Documentation: Component Docs, Pattern Library, Decision Logs

**Component documentation:**
For each component, document:
- What it is (short definition)
- When to use (use cases)
- When NOT to use (edge cases)
- Variants (all states, sizes, types)
- Accessibility notes (ARIA, keyboard interaction)
- Code example
- Design file link

Template:
```markdown
# Button

Primary action in the interface. Invites immediate interaction.

## Usage
Use for main CTAs: "Save," "Submit," "Create."
Don't use for secondary actions (use Link instead).

## Variants
- Primary (blue, default)
- Secondary (gray outline)
- Danger (red, destructive actions)

## States
Default, Hover, Focus, Active, Disabled, Loading

## Accessibility
- aria-label="Action description" for icon-only buttons
- Keyboard: Enter/Space to activate
- Focus visible on all states
```

**Pattern library:**
Document recurring patterns, not just components.
- Form patterns (single select, multi-select, autocomplete, etc.)
- Table patterns (scrollable, sortable, filterable)
- Modal patterns (confirmation, form, info)
- Navigation patterns (sidebar, tabs, breadcrumbs)

**Decision logs:**
Decisions decay over time. You forgot why you chose OKLCH over HSL. You'll revisit the same debate in 6 months.

Document decisions:
```
DECISION: Use OKLCH color space over HSL
DATE: 2026-03-10
DECIDERS: Design lead, engineering lead
CONTEXT: Building color system for product redesign
RATIONALE: OKLCH is perceptually uniform; color scales don't shift unexpectedly
ALTERNATIVES: HSL (rejected: non-perceptual), HSV (rejected: not web-native)
OUTCOME: Shipped color system Q2 2026
REVIEW DATE: 2027-03-10 (if change needed)
```

Reference this when someone asks "Why OKLCH?" You have the answer.

## Measuring Design Impact: Task Completion, Error Rates, NPS, SUS

Design work must be measurable. Define metrics before designing.

**Task completion rate:**
Percentage of users completing a primary task (sign up, checkout, publish).
- Baseline: 72% of users complete checkout
- Target: 85% after redesign
- Measure: Analytics or usability test

**Error rate:**
Percentage of attempts that fail (invalid form submissions, broken workflows).
- Baseline: 8% of form submissions error
- Target: <2% after redesign
- Measure: Analytics or usability test

**Time on task:**
How long does a task take?
- Baseline: 3 minutes to publish an article
- Target: <2 minutes
- Measure: Usability test, product analytics

**NPS (Net Promoter Score):**
"How likely are you to recommend this product?" (0–10 scale)
- Promoters (9–10) minus Detractors (0–6) = NPS
- Baseline: 42, Target: 50 after redesign
- Measure: Survey

**SUS (System Usability Scale):**
10-question standardized questionnaire (0–100 score).
- <50: Poor usability
- 50–75: Good usability
- 75+: Excellent
- Measure: Usability test or survey

**Choose 2–3 metrics per initiative.** Don't measure everything. Focus on what matters to business.

## Summary: The Checklist

- [ ] Structure design reviews: problem → observations → next steps
- [ ] Create detailed handoff specs: tokens, states, spacing, accessibility
- [ ] Use versioning + branching for design files (not "FINAL_2")
- [ ] Track design debt systematically (priority, impact, owner)
- [ ] Lead initial sprints with research/concept before engineering builds
- [ ] Define quality gates: what must pass (accessibility), what's nice-to-have
- [ ] Use three-tier design tokens (global → alias → component)
- [ ] Document components, patterns, and decisions
- [ ] Measure: task completion, error rate, time on task, NPS, SUS
- [ ] Review metrics quarterly, adjust as needed

Design operations multiplies the impact of good design by making it scalable, consistent, and measurable. Without it, great design stays isolated.
