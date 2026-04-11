---
name: Technical Quality Audit
description: Systematic quality audit across accessibility, performance, theming, responsive design, and anti-patterns. Score 0-20.
user-invocable: true
argument-hint: Design file (Figma URL), website URL, or codebase to audit
---

## What This Skill Does
Run a structured audit across five quality dimensions. Each dimension is scored 0–4. Total score /20 with actionable recommendations mapped to specific skills.

## STEPS

### 1. Audit Accessibility (Score 0–4)
Check each criterion and score:
- **Color contrast**: Text 4.5:1 for body, 3:1 for larger (WCAG AA) — score by compliance %
- **ARIA**: Landmarks, roles, labels present where needed — score by coverage %
- **Keyboard navigation**: All interactive elements reachable; focus visible — fully = 4, partial = 2, none = 0
- **Semantic HTML**: Proper heading hierarchy, buttons are <button>, links are <a> — fully = 4, partial = 2, none = 0
- **Alt text**: Images have descriptive alt; icons have labels — fully = 4, partial = 2, none = 0
- **Form accessibility**: Labels associated with inputs, error messages linked — fully = 4, partial = 2, none = 0
- **Average the scores** → Accessibility Score (0–4)
- **Issues found**: Tag each with P0 (blocks), P1 (major), P2 (minor), P3 (nice-to-have)

### 2. Audit Performance (Score 0–4)
- **Layout thrashing**: Avoid reading/writing DOM in loops — identify violations
- **Expensive animations**: No janky animations, respects prefers-reduced-motion — score by issues found (0 = 4, 1–2 = 2, 3+ = 0)
- **Lazy loading**: Images, components loaded on demand, not all upfront — present = 2 points
- **Bundle size**: If available, check for bloat (excessive dependencies) — large = 0, moderate = 2, optimized = 4
- **Score**: Average of findings → Performance Score (0–4)
- **Reference**: Map findings to /polish (motion) and /handoff (implementation notes)

### 3. Audit Theming (Score 0–4)
- **Hard-coded colors**: Search design file and code for raw hex/rgb values (should use tokens) — count violations
- **Dark mode**: If product supports dark mode, check token coverage — fully = 4, partial = 2, none = 0
- **Token consistency**: Do all elements use the same token? Or are similar colors repeated? — fully consistent = 4, mostly = 2, inconsistent = 0
- **Score**: Average findings → Theming Score (0–4)
- **Violations**: List each hard-coded value and suggest token replacement

### 4. Audit Responsive Design (Score 0–4)
- **Fixed widths**: No elements pinned to exact pixel widths (should flex/grid) — count violations
- **Touch targets**: Buttons/links 44×44px minimum on mobile — score by compliance %
- **Horizontal scroll**: No unintended horizontal scroll on mobile — fully = 4, present = 0
- **Text scaling**: Readable at 200% zoom; no viewport lock (meta viewport pinch-disabled) — fully = 4, partial = 2, none = 0
- **Score**: Average findings → Responsive Score (0–4)
- **Breakpoints documented**: Verify breakpoints are defined and tested

### 5. Audit Anti-Patterns (Score 0–4)
Check for Dexlab anti-generic rules:
- **Placeholder overuse**: Labels replaced by placeholder text (use both) — found = 0, not found = 4
- **Decorative accessibility**: Icons without labels, hover-only states — found = 0, not found = 4
- **Magic numbers**: Hard-coded values instead of tokens (padding: 16px vs padding: var(--space-md)) — found = 0, not found = 4
- **AI slop indicators**: Generic copy, stock photography, bland interactions — found = 0, not found = 4
- **Score**: Anti-Pattern Score (0–4)
- **Details**: For each anti-pattern found, list location and fix

## SCORING & REPORTING

**Total Score = (Accessibility + Performance + Theming + Responsive + Anti-Patterns) / 5 out of 4**
- **16–20** (A): Production-ready; minor fixes
- **12–15** (B): Ship with fixes; plan debt removal
- **8–11** (C): Significant issues; address before launch
- **0–7** (F): Blocker issues; requires redesign

**Output Format:**
```
## Audit Report
- Accessibility: 3/4 (issues: P0 color contrast on error states)
- Performance: 4/4 (well-optimized)
- Theming: 2/4 (hard-coded colors in forms)
- Responsive: 3/4 (fixed widths in modals)
- Anti-Patterns: 4/4 (clean)
**Total: 16/20 (Grade A)**

## Issues by Priority
- P0: Color contrast in error state (affects accessibility)
  → Fix with /polish color check
- P1: Hard-coded button padding
  → Fix with /handoff specs update
```

## Next Steps
Use **/critique** for design review of usability and visual hierarchy.

Use **/polish** to address specific technical refinements identified in this audit.
