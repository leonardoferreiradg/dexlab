---
name: uxw-tone-voice
description: Define a product's voice and tone — the consistent personality behind every word, and how it shifts across different moments.
user-invocable: true
argument-hint: "[product category and audience]"
---

## MANDATORY PREPARATION

Read `.design/RULES.md` — design philosophy, anti-generic rules, and Context Protocol. Required before proceeding.

**Load for this skill:**
- `.design/references/research-methods.md` — qualitative methods, interview practices, affinity mapping, JTBD framework, synthesis

## PRODUCT GUIDANCE

Before proceeding, confirm the product context that will make this skill's output non-generic.

**If `.dexlab.md` exists in the project root:**
Read it. Extract the Target Audience and the most relevant constraint or success metric for this skill. State them in one sentence each, then proceed. Do not ask questions that are already answered in that file.

**If `.dexlab.md` does not exist, or is missing the five pillars:**
Stop. Do not proceed with assumptions. Ask the following questions — wait for answers before continuing:

1. What is the product's voice — how should it sound to a user reading it at a moment of friction or uncertainty? Describe it by how it should NOT sound as much as how it should. (e.g., "direct, never apologetic" or "warm but never cute")
2. Who is the user, and what is their literacy level and context when they read this copy — expert in this domain, new to it, under stress, in a hurry?
3. What specific copy is being written or reviewed today — which screen, state, or interface element? What action or state change does it accompany?

**Rule:** If the user answers "I don't know" or leaves a question blank, name what you're assuming and why. Proceed only if the assumption is low-stakes for this skill. If the assumption would fundamentally change the output, stop and ask again more specifically.

## Steps

1. **Distinguish voice from tone** — Voice is constant: the personality of the product. Tone shifts: how that personality expresses itself in different situations. Mailchimp has one voice (friendly, plain, a little goofy). Its tone is celebratory at success, serious at errors, encouraging when users are stuck.

2. **Define voice with 3 attributes** — Each attribute needs:
   - The word: "Direct"
   - What it means: "We say exactly what we mean, without hedging or jargon."
   - What it doesn't mean: "Not blunt. Not terse. Not dismissive."
   - Example pair — We write: "You're all set." We don't write: "Your request has been successfully processed."

3. **Map tone to moments** — Define how tone shifts across the emotional journey:
   - Onboarding: welcoming, encouraging
   - Task completion: celebratory (proportionally — don't over-celebrate routine tasks)
   - Errors: empathetic, clear, never panicked
   - Warnings: direct, calm, not alarming
   - Empty states: inviting, actionable
   - Destructive actions: serious, clear stakes

4. **Write the banned list** — Words and phrases that violate the voice. Every product has them. Common: "leverage," "utilize," "seamlessly," "powerful," "world-class," "please note," "as per," "kindly."

5. **Create example rewrites** — Before/after pairs for 5-10 real interface moments. This is how voice guidelines become usable.

6. **Test against edge cases** — Read the voice guidelines, then write copy for: a payment failure, a deleted account, a 12-hour outage. If the voice holds, it's real. If it breaks under pressure, revise it.

## Anti-Generic Rule

A voice guide with only positive examples isn't a voice guide — it's a mood board. Voices reveal themselves at friction points, not just success states.

## Next Steps

Publish voice and tone guidelines as a living document. Audit the product surface quarterly. Train writers and designers to think in voice, not just copy mechanics.
