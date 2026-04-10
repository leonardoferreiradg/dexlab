# Research Methods Reference — Dexlab

Research isn't optional. Designing without user research is guessing. Guessing fails. This reference cuts through methodology noise and gets to action.

## Qualitative vs Quantitative: Know When to Use Each

**Qualitative:** Why? How? What's the story?
- Interviews (1-on-1 conversations)
- Usability testing (watching users struggle)
- Diary studies (tracking behavior over time)
- Card sorting (understanding mental models)

Use qualitative when you need to understand the "why." You'll find edge cases, mental models, and frustrations that surveys miss.

**Quantitative:** How many? How often? What's the scale?
- Surveys (scaled responses from many users)
- Analytics (tracking actual behavior)
- A/B testing (comparing two approaches)
- Heatmaps (where users click/scroll)

Use quantitative to measure and validate. Numbers tell you if something is a real problem (1% of users) or widespread (47% of users).

**The mix:** Start qualitative (5–8 interviews), identify patterns, then validate quantitatively (500–1000 survey responses).

## Interview Best Practices: Ask, Listen, Don't Lead

Interviews are conversations, not interrogations.

**Structure:**
1. **Rapport (5 min):** Chat about the user's day, role, context. No script.
2. **Open questions (20 min):** "Tell me about how you currently handle X." Not "Do you like feature Y?"
3. **Probing (10 min):** Dig into contradictions. "You said X, but earlier you mentioned Y. Tell me more."
4. **Closing (5 min):** "Anything else I should know?" Often the best insights come here.

**Rule: Don't fill silence.**
User pauses after you ask a question. Resist the urge to rephrase or explain. Count to 10 in your head. They'll fill the silence with actual thinking.

**Avoid:**
- Leading questions: "You probably find our dashboard confusing?" → "How do you feel about our dashboard?"
- Yes/no questions: "Do you use this feature?" → "Tell me how you use this feature."
- Jargon: "Are you familiar with OAuth?" → "How do you normally sign into apps?"
- Multi-part questions: "What's your workflow and what tools do you use?" → Ask one, then follow up.

**Record everything.** Audio + video. Transcribe if possible. You'll miss nuance in the moment.

## Affinity Diagram: Clustering Findings

You've done 8 interviews. Now what? Affinity diagramming clusters findings into themes.

**Process:**
1. **Extract observations:** Each interview yields ~20–40 observations. Write one per sticky note.
   - "User took 3 minutes to find the settings button"
   - "User opened the sidebar three times looking for help"
   - "User mentioned price twice, first worried, then satisfied"

2. **Spread them out:** Put all notes on a wall or virtual board. Read each once.

3. **Group by theme:** Without a predefined structure, move notes into clusters. Let patterns emerge.
   - "Navigation confusing" might include notes about sidebar, search, and menu
   - "Trust issues" might include privacy concerns, support contact, social proof

4. **Name clusters:** Once grouped, name the theme. "User doubts credibility" is better than "stuff about trust."

5. **Prioritize:** Which themes appeared across multiple interviews? Those matter. Single mentions are edge cases.

**Output:** 5–8 core themes with supporting evidence. Now you have structure for design decisions.

## Jobs-to-be-Done: Reframe the Problem

"Users need a calendar app" is wrong. Users have jobs:

**Functional job:** Coordinate schedules with others, avoid double-booking.

**Emotional job:** Feel in control, reduce anxiety about forgetting.

**Social job:** Show I'm organized, respect others' time, appear professional.

Interview process shifts:
- Don't ask "What calendar app do you use?"
- Ask "Tell me about a time you were double-booked. What happened?"
- Ask "How do you tell your boss you're unavailable?"
- Ask "When did you last miss an important meeting? How did you feel?"

Jobs-to-be-Done reframes the problem from "We need better UI" to "Users need to feel confident in their schedules."

Design against jobs, not features.

## Persona Anti-Patterns: Avoid These Traps

**Anti-pattern 1: Demographics-only personas**
"Sarah, 34, software engineer, lives in SF, married, likes coffee."

This describes nobody. It's not actionable. It might describe hundreds of people with different needs.

**Anti-pattern 2: Edge-case-as-primary**
"Meet Alex, the power user who uses 47 features daily."

Maybe 2% of users are power users. Design for the median, not the outlier.

**Anti-pattern 3: Fantasy personas**
Creating personas from assumption, not research. "Probably users care about speed" without talking to users.

**Better approach: Behavioral personas based on research**

From your affinity diagram, create 2–3 personas tied to actual findings:

```
PERSONA: Jess, the Scheduler
GOALS: Stay organized, coordinate with team
FRUSTRATIONS: Can't see team's availability, gets distracted by notifications
BEHAVIORS: Plans on Sunday, checks calendar 3×/day
REPRESENTATIVE QUOTE: "I use the sidebar constantly to see who's free"
```

This is tied to research. You've heard "I use the sidebar constantly" in interviews. Design for Jess, and you're designing for the real users you talked to.

## Synthesis: From Observations to Insights to Opportunities

Affinity diagramming gives you themes. Now move from "what we saw" to "what it means" to "what to do."

**Observations:** Raw findings
- "User opened Settings 4 times"
- "User didn't see the notification icon"
- "User complained about email digest frequency"

**Insights:** Interpreted meanings
- Users struggle to locate settings because they expect it in a different location
- Visual hierarchy doesn't emphasize notifications
- Default email frequency doesn't match user preferences

**Opportunities:** Design interventions
- Move Settings to a more discoverable location (hamburger menu, not footer)
- Increase notification icon prominence (larger, color accent)
- Allow email frequency customization in onboarding

Move deliberately through each layer. Don't jump from observation to solution. Insights are the bridge.

## Bias Awareness: Know Your Blind Spots

You can't eliminate bias. You can acknowledge and mitigate it.

**Confirmation bias:** Looking for evidence that confirms what you already believe.
- Mitigation: Actively search for disconfirming evidence. "What did I hear that contradicts this?"

**Survivorship bias:** Only talking to users who stuck around.
- Mitigation: Interview users who abandoned your product. Why'd they leave?

**Sampling bias:** Recruiting only tech-savvy users, or only from your network.
- Mitigation: Recruit through non-obvious channels. Post on Reddit, reach out to community forums.

**Authority bias:** Believing the loudest voice in the room.
- Mitigation: Record all interviews equally. Data > opinion.

**Availability bias:** Remembering recent interviews more clearly.
- Mitigation: Transcribe and review notes immediately, not weeks later.

## Research Ethics: Consent, Anonymization, Vulnerable Populations

**Consent:** Users must agree to participate. Explain what you'll do with data, who'll see recordings, how long you'll keep them.

**Anonymization:** In reports and notes, use initials or pseudonyms, not real names. "User A said..." not "Sarah said..."

**Vulnerable populations:** Special care for minors, people with disabilities, economically disadvantaged groups. Get explicit informed consent. Don't pressure.

**Data handling:** Store recordings securely. Delete when done (usually after 6 months). Don't share raw recordings with the entire company.

**Right to withdraw:** If a user says "stop recording," stop immediately. They can withdraw consent anytime.

This isn't bureaucracy. It's respect.

## Card Sorting and Tree Testing: Understanding Mental Models

**Card sorting:** Understand how users categorize information.

Give users 30–50 cards with labels ("Settings," "Profile," "Billing," etc.). Ask them to group into categories and name the groups.

Output: Users naturally grouped things differently than you expected. Design navigation to match user logic, not your internal structure.

**Tree testing:** Validate navigation structure before building.

Create a text-based version of your sitemap/navigation. Ask users to find specific tasks ("Where would you go to change your password?").

Output: Users either found the right place (good structure) or got lost (redesign needed).

Both methods are cheaper than building and discovering your structure is wrong.

## Sample Sizes: Nielsen's 5-User Rule and Beyond

**Nielsen's finding:** Testing with 5 users reveals ~80% of usability issues. Testing with 10 reveals ~90%. Testing with 15 reveals ~95%. Diminishing returns hard.

**For interviews:** 5–8 users often surface core patterns. More than 12 rarely adds new themes.

**For surveys:** 30–50 minimum to identify real patterns. 100+ for statistical confidence.

**For A/B testing:** Calculate sample size based on baseline conversion rate and effect size you want to detect. Use a power calculator.

Don't obsess over "n=30 is statistically significant." Six interviews revealing three core jobs-to-be-done is better than 100 survey responses confirming what you already know.

The quality and depth of research matters more than sample size.

## Research Methods by Question

**"What are users trying to do?"**
→ Interviews, diary studies

**"How do users currently solve this?"**
→ Interviews, contextual inquiry (visiting their environment)

**"What are we missing?"**
→ Interviews, support ticket analysis

**"Does our solution address the problem?"**
→ Usability testing, A/B testing

**"How many users have this problem?"**
→ Surveys, analytics

**"What's our user breakdown?"**
→ Analytics, surveys

**"Do users understand our mental model?"**
→ Card sorting, tree testing

**"What's our competitive advantage?"**
→ Comparative user testing (test ours vs. competitor)

Match method to question. Avoid researching the answer when you should be measuring it.

## Summary: The Checklist

- [ ] Start with qualitative (5–8 interviews) to understand why
- [ ] Follow with quantitative (500+ survey or A/B test) to validate at scale
- [ ] Use open questions, silence, avoid leading language
- [ ] Cluster findings with affinity diagramming
- [ ] Reframe problems as jobs-to-be-done (functional, emotional, social)
- [ ] Build personas from research, not assumptions
- [ ] Move from observations → insights → opportunities
- [ ] Acknowledge bias (confirmation, survivorship, sampling, authority)
- [ ] Respect research ethics (consent, anonymization, data handling)
- [ ] Use card sorting and tree testing for information architecture
- [ ] Remember: 5 users reveal 80% of issues; beyond 12, diminishing returns
- [ ] Match research method to question, not the reverse

Research answers design questions. Without it, you're designing for yourself. With it, you're designing for users.
