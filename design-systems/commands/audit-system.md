---
description: Audit an existing design system for naming consistency, token coverage, documentation completeness, and component quality.
argument-hint: "[design system to audit]"
---

# /audit-system

Surface the debt, prioritize the work, and produce a backlog — not a report nobody reads.

## Steps

1. **Naming audit** — Use `ds_naming-convention` to check all component and token names against the convention. Flag: appearance-based names, version numbers in names, design/code name mismatches, and ambiguous names.

2. **Token coverage audit** — Use `ds_designtokens` to identify: hardcoded values in components, missing alias tokens for common patterns, tokens in the design file not in code (or vice versa), and tokens used outside their intended tier.

3. **Component completeness audit** — Use `ds_component-spec` to check each component for: missing states (especially loading and error), undocumented variants, missing accessibility documentation, missing edge case coverage.

4. **Prioritize the debt backlog** — Classify every finding:
   - **P0**: Breaks product or fails accessibility
   - **P1**: Inconsistency that creates confusion across teams
   - **P2**: Missing documentation, won't cause bugs but slows adoption
   - **P3**: Nice-to-fix polish

5. **Produce the backlog** — Format each item: finding + component/token + P-rating + recommended fix + effort estimate (S/M/L). Ordered by priority. Ready to put into sprint planning.

## Output

Design system audit report: naming issues, token gaps, component completeness scores, and a prioritized debt backlog. Shareable with engineering and product leadership.

## Follow-up

Use `/ds_tokenize` to address token gaps, `/ds_create-component` to fill missing component specs.
