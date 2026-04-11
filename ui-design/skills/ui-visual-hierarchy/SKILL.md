---
name: ui-visual-hierarchy
description: Establish clear visual hierarchy through size, weight, color, spacing, and position — directing attention without telling users where to look.
user-invocable: true
argument-hint: "[screen or component]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/typography.md` — modular scale, font selection, line-height, web font loading, Portuguese-aware typography
- `.design/references/color-system.md` — OKLCH color space, semantic token tiers, dark mode strategy, accessibility contrast ratios
- `.design/references/spatial-design.md` — 4pt base scale, semantic spacing tokens, container queries, visual rhythm, grid systems

## Steps

1. **Map the attention order** — For every screen: what should users notice first, second, third? Write it down before designing. If you can't articulate the intended reading order, the hierarchy will be accidental.

2. **Apply the five hierarchy tools** —
   - **Size**: the single most powerful tool. 2× size = dramatically more weight. Don't be timid — create real contrast, not 10% differences.
   - **Weight**: bold for emphasis, regular for body, light for supporting. Don't use more than 3 weight levels per page.
   - **Color**: high-saturation, high-contrast for primary; muted for secondary; near-invisible for tertiary. The hierarchy must survive grayscale.
   - **Space**: elements with more space around them read as more important. Tight grouping = lower hierarchy. Breathing room = elevated importance.
   - **Position**: top-left to bottom-right reading order (LTR). Top = important. Centered = premium or focal. Right = action (in western layouts).

3. **Test the squint test** — Squint at the screen until it blurs. What do you see first? What disappears? The answer should match your intended attention order. If it doesn't, the hierarchy is broken.

4. **Check the grayscale test** — Remove all color. Does the hierarchy survive? If the primary action only stands out because it's blue, it fails color blindness and dark mode simultaneously. Use size, weight, or space as primary differentiators.

5. **Reduce until it breaks** — Remove elements one by one. Stop when removing something changes the meaning. Everything that remains should have been there from the start.

6. **Apply rhythm through repetition** — Once you establish a visual pattern (heading size, card structure, spacing rhythm), repeat it consistently. Visual rhythm creates comfort. Breaking it intentionally creates emphasis. Breaking it accidentally creates confusion.

## Key Principle

Visual hierarchy is not "make the important thing bigger." It's designing a directed experience where attention flows with the user's intent. If everything is emphasized, nothing is.

## Next Steps

Use `ui-typeset` to lock in the type hierarchy, `ui-color-system-creator` for the color hierarchy.
