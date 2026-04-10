---
description: Define voice and tone guidelines with attributes, examples, and a banned word list.
argument-hint: "[product name or context]"
---

# /define-tone

The voice guide that actually gets used — because it shows what to write, not just how to think.

## Steps

1. **Define voice attributes** — Use `uxw-tone-voice` to produce 3 voice attributes. Each attribute has: the word, what it means in practice, what it does NOT mean, and a before/after example pair. "Direct" is a voice attribute. "Friendly" without a definition is not.

2. **Map tone to moments** — Use `uxw-tone-voice` to define how tone shifts across the emotional journey: onboarding (welcoming), task completion (proportionally celebratory), errors (empathetic, never panicked), warnings (serious, not alarming), empty states (inviting, actionable), destructive actions (clear stakes).

3. **Write example rewrites** — Use `uxw-microcopy` and `uxw-error-copy` to produce 10+ before/after copy pairs that demonstrate the voice in real interface moments. This is the most usable part of any voice guide.

4. **Create the banned list** — Use `uxw-tone-voice` to list words and phrases that violate the voice. Minimum: "leverage," "utilize," "seamlessly," "powerful," "world-class," "please note," "kindly," "oops," "uh oh."

5. **Test against pressure** — Apply the voice to: a payment failure message, a deleted account confirmation, a 4-hour outage notification. If the voice holds under pressure, it's real. If it breaks, revise the attributes before publishing.

## Output

Voice and tone guide: 3 voice attributes with definitions and examples, tone spectrum across 6 interface moments, 10+ rewrite examples, banned word list. Ready to share with design, content, and engineering teams.

## Follow-up

Use `/uxw-audit-copy` to apply the new voice guide to existing copy immediately.
