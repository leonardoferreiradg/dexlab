---
name: ui_wireframer-creator
description: Ask targeted questions, then produce a structured wireframe that communicates layout, hierarchy, and content decisions — before any visual design.
user-invocable: true
argument-hint: "[screen or feature to wireframe]"
---

## MANDATORY PREPARATION

Invoke /dexlab — it contains design principles, anti-generic rules, and the **Context Protocol**. Follow the protocol before proceeding.

---

Wireframes without context produce the wrong structure. This skill gathers the right information first, then produces a wireframe that communicates decisions — not just boxes.

## Steps

### Step 1: Gather Context Through Targeted Questions

Before drawing anything, ask the user these questions. Wait for answers. Do not proceed with assumptions.

**Purpose and priority:**
- "What is this screen's primary purpose? What is the ONE thing a user must be able to do here?"
- "If the user can only do one thing before leaving, what should it be?"

**User context:**
- "Who arrives at this screen? What do they already know, and what do they need to figure out?"
- "Are they in a rushed state or a deliberate state when they see this?"

**Content:**
- "What data or content will be shown? Do you have real content examples I can use?"
- "What's the maximum amount of content this screen might show? What's the minimum?"

**Constraints:**
- "Platform? (Web, iOS, Android, responsive web, desktop app)"
- "Any technical constraints affecting layout? (auth state, real-time data, pagination)"

**References:**
- "Are there screens — from this product or others — that show what this should or shouldn't be?"

If the user answers "I don't know" to the purpose question, stop. The wireframe cannot be designed without a clear answer to that question.

### Step 2: Define the Content Hierarchy

Before placing anything in a wireframe — list the content elements in priority order:

1. [Most critical — must be immediately visible]
2. [Secondary — should be easy to find]
3. [Tertiary — available but not prominent]
4. [Optional — can be hidden or de-emphasized]

The layout will follow this list. If the wireframe shows something at the top that isn't #1 on this list, that's a hierarchy error — not a stylistic choice.

### Step 3: Choose the Wireframe Level

**Lo-fi (boxes + labels only):** for validating structure and information architecture. Use when the concept is unclear or multiple structural options need comparison.

**Mid-fi (components + real copy):** for validating interaction flow and content. Use when structure is agreed and you're making layout and content decisions. **Default choice.**

**Annotated mid-fi:** mid-fi + behavior notes, edge cases, and interaction specs. Use when wireframe will be shared with engineering.

Default to mid-fi with annotations unless the user asks otherwise.

### Step 4: Produce the Wireframe

Output a structured text wireframe using box notation with **real content** — no Lorem ipsum, no placeholder text. Use realistic labels, realistic lengths, realistic amounts of data.

Example format:
```
┌─ HEADER ─────────────────────────────────────────────┐
│ [Product logo]              [Profile avatar • Name ▾] │
└───────────────────────────────────────────────────────┘

┌─ PAGE TITLE ─────────────────────────────────────────┐
│ Projects                             [+ New project] │
│ 12 projects · Last updated 2h ago                    │
└───────────────────────────────────────────────────────┘

┌─ FILTER BAR ─────────────────────────────────────────┐
│ [All ▾]  [Assigned to me ▾]  [Status: Active ▾]  [⌕] │
└───────────────────────────────────────────────────────┘

┌─ PROJECT LIST ────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────┐  │
│ │ Website Redesign Q2          [Active]  Apr 18 ▶ │  │
│ │ Assigned to: Sara, Marco, +3             5 tasks│  │
│ └─────────────────────────────────────────────────┘  │
│                                                       │
│ ┌─────────────────────────────────────────────────┐  │
│ │ Mobile App v2.0              [In review] Apr 22▶│  │
│ │ Assigned to: You, Lena              12 tasks    │  │
│ └─────────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────────┘
```

### Step 5: Add Behavior Annotations

Below each interactive element, annotate behavior:

```
[+ New project] → Opens "Create project" modal
[All ▾]         → Dropdown: All / Active / Completed / Archived
[Project card]  → Tappable: links to project detail view
[⌕]             → Expands search input inline (no new page)
```

For ambiguous interactions, present options:
```
[Profile avatar ▾] → Option A: dropdown menu in place
                     Option B: navigates to profile page
                     Which do you prefer?
```

### Step 6: Document Edge Cases

For each main section, annotate what it looks like in non-default states:

```
PROJECT LIST — edge cases:
  Empty (no projects yet):
    → Full-width empty state: "No projects yet. Create your first one to 
       invite your team." + [Create project] CTA
  Loading:
    → 3 skeleton rows, same height as project cards
  Error (failed to load):
    → "Couldn't load projects. Check your connection." [Try again]
  Single project:
    → List with one card (no special treatment)
  100+ projects:
    → Pagination: 20 per page, [← Previous] [1 2 3 …] [Next →]
```

### Step 7: Invite Structured Feedback

After presenting the wireframe, name the decisions — don't ask for open-ended reactions:

> "Here are the three main decisions in this layout:
> 1. Primary action (New project) is in the top-right, not inline with the title
> 2. Filter bar is persistent, not hidden behind a button
> 3. Project cards show assignees but hide progress by default
>
> What do you want to change?"

This produces specific, actionable feedback instead of "I'm not sure, it doesn't feel right."

---

**Anti-generic:** "A wireframe with placeholder text is not a wireframe — it's a drawing of a wireframe. Real content reveals real problems: what happens when the project name is 87 characters? What if there are 0 assignees? Placeholders hide these questions until implementation."

## Next Steps

Use `audit_design-flow` to validate the wireframe against user flows, `id_interaction-spec` to spec interactions per step, `ui_cloner` to apply a specific visual style to the wireframe, or `ui_visual-hierarchy` to verify the attention order is correct.
