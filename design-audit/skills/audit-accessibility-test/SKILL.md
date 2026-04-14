---
name: audit-accessibility-test
description: Create comprehensive accessibility testing plans covering WCAG 2.2 criteria, assistive technologies, and remediation guidance.
user-invocable: true
argument-hint: "[feature or page to test]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/interaction-patterns.md` — 8 interactive states, form design, loading patterns, touch targets, optimistic UI

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If product context is already available** — via `.dexlab.md` in the project root, Project Instructions, or context established earlier in this conversation:
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered.

**If no product context is available from any of these sources:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. Who uses this product, and what is the one task they most need to complete without friction? (Not "target demographic" — what are they doing when they use this?)
2. What is the specific flow, screen, or feature being audited today? What outcome should users reach by the end of it?
3. What constraints shape what "good" looks like here — platform (mobile/web/native), accessibility requirements, or known technical limits that affect the design?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## Steps

1. **Define scope and target conformance** — Which WCAG level? AA is the legal minimum in most jurisdictions. AAA for specific high-stakes scenarios (health, finance, government). Define: which pages, which user flows, which assistive technologies.

2. **Automated testing** (catches ~30-40% of issues) —
   - Run axe-core, Lighthouse accessibility, or WAVE
   - Capture: element, violation, WCAG criterion, impact (critical/serious/moderate/minor)
   - False positives exist — verify every automated finding manually before reporting

3. **Manual keyboard testing** —
   - Navigate without mouse: Tab, Shift+Tab, Enter, Space, Arrow keys, Escape
   - Verify: logical tab order, all interactive elements reachable, no keyboard traps
   - Check: visible focus indicator on every focused element (`:focus-visible`)
   - Test: modal dialogs trap focus correctly and release on close

4. **Screen reader testing** —
   - macOS/iOS: VoiceOver (Cmd+F5 to activate)
   - Windows: NVDA (free) or JAWS
   - Test: page structure (headings, landmarks), interactive element announcements, form labels, error announcements, dynamic content updates (`aria-live`)

5. **Visual checks** —
   - Contrast: use a tool (Colour Contrast Analyser) against actual rendered colors
   - Text: passes 4.5:1 (normal), 3:1 (large/bold)
   - UI components: passes 3:1
   - Information not conveyed by color alone: add icon, pattern, or label
   - Text scales to 200% without horizontal scroll or content loss

6. **WCAG 2.2 new criteria** — Check the 4.1.3 and newer criteria added in 2.2:
   - 2.4.11: Focus Not Obscured — focused element not fully hidden by sticky headers
   - 2.4.12: Focus Not Obscured (Enhanced) — focused element fully visible
   - 2.5.7: Dragging Movements — all drag actions have pointer alternative
   - 2.5.8: Target Size — touch targets ≥24×24px (AA), ≥44×44px (best practice)
   - 3.2.6: Consistent Help — help mechanism in same location across pages

7. **Write the remediation report** — For each issue: WCAG criterion violated + element location + impact + recommended fix + implementation example. Priority by impact: critical first.

## Anti-Generic Rule

An accessibility audit that only runs Lighthouse is not an audit. Automated tools catch ~30% of real accessibility issues. The rest require human judgment.

## Next Steps

Use `ds-component-spec` to codify accessibility requirements, `ops-design-review` to validate fixes.
