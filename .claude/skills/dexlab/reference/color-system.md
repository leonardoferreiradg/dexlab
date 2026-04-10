# Color System Reference — Dexlab

Color is not decoration. Color is information architecture, emotional tone, and accessibility bundled together. This reference treats it that way.

## OKLCH > HSL: Perceptual Uniformity Matters

Stop using HSL. It's broken.

HSL treats lightness linearly, but human perception is nonlinear. A 50% lightness HSL color doesn't look 50% light. It looks dimmer. This causes colors to shift in appearance when you adjust lightness.

**OKLCH fixes this.** It uses a perceptually uniform color space. Adjust L (lightness) and the perceived brightness stays stable.

```css
/* HSL: Lightness jumps around */
hsl(0, 100%, 25%)   /* darker than expected */
hsl(0, 100%, 50%)   /* brownish, not red */
hsl(0, 100%, 75%)   /* pinkish, not red */

/* OKLCH: Lightness is predictable */
oklch(45% 0.25 0)   /* deep red, truly 45% light */
oklch(60% 0.25 0)   /* medium red, truly 60% light */
oklch(80% 0.25 0)   /* light red, truly 80% light */
```

Use OKLCH for:
- All intentional color systems
- Accessible contrast calculations
- Dark mode variants
- Color scales

Use HSL only for browser fallbacks:

```css
:root {
  --brand-primary: hsl(220, 90%, 56%);
  --brand-primary-oklch: oklch(55% 0.2 250);
  /* Fallback for older browsers, primary for modern ones */
}

@supports (color: oklch(0 0 0)) {
  :root {
    --brand-primary: oklch(55% 0.2 250);
  }
}
```

## Tinted Neutrals: Subconscious Cohesion

Straight neutral grays (equal R, G, B) feel disconnected from your brand. Tint them toward your brand hue.

**Procedure:**
1. Start with your brand primary color (e.g., blue at 250°)
2. Reduce saturation/chroma to 0.005–0.01 (nearly gray, but tinted)
3. Create a neutral scale from 10% to 95% lightness

```css
/* Brand primary: oklch(55% 0.2 250) */

/* Tinted neutrals */
--neutral-50:   oklch(95% 0.005 250);   /* Almost white, blue tint */
--neutral-100:  oklch(92% 0.006 250);
--neutral-200:  oklch(85% 0.007 250);
--neutral-300:  oklch(75% 0.008 250);
--neutral-400:  oklch(60% 0.008 250);
--neutral-500:  oklch(50% 0.009 250);
--neutral-600:  oklch(40% 0.009 250);
--neutral-700:  oklch(30% 0.008 250);
--neutral-800:  oklch(20% 0.006 250);
--neutral-900:  oklch(10% 0.005 250);   /* Almost black, blue tint */
```

This creates subconscious cohesion. Everything feels intentional, even the "neutral" UI chrome.

**Why it matters:** Viewers don't consciously see the tint. They just feel that the design is unified. Backgrounds, borders, and dividers now whisper your brand instead of screaming "I'm gray."

## 60-30-10 Rule: Visual Weight, Not Pixel Count

The classic design rule applies to color, but not as absolute areas.

**60-30-10 breakdown:**
- 60% dominant color (usually neutral background or primary UI color)
- 30% secondary color (usually an accent or supporting action color)
- 10% accent color (draws eye, signals interaction or importance)

**Key: This is visual weight, not pixel count.**

A bright accent uses up its 10% allocation faster than a muted one. A large area of light neutral doesn't feel like 60% if surrounded by high-saturation color.

**Application:**
- Background (60%): Use tinted neutral at low chroma, high lightness
- Secondary elements (30%): Use brand color at moderate saturation
- Interactive elements (10%): Use bold accent at high saturation, often complementary

```
Dashboard example:
- 60%: white/off-white background (tinted neutral)
- 30%: sidebar in brand-primary at medium saturation
- 10%: status indicators (red for error, green for success)
```

Adjust saturation downward, not hue, when you need visual weight to feel smaller.

## Reduce Chroma at Extreme Lightness

Colors at 90%+ lightness with high chroma look washed out and weak. Reduce chroma as you approach white.

```css
/* BAD: High chroma at high lightness */
--subtle-success: oklch(92% 0.15 145);  /* Pale greenish-gray, unappealing */

/* GOOD: Lower chroma as lightness increases */
--subtle-success: oklch(92% 0.04 145);  /* Subtle green tint */
--medium-success: oklch(70% 0.15 145);  /* Vibrant green */
--dark-success: oklch(35% 0.18 145);    /* Deep green */
```

This creates perceptual consistency across your scale. Each step feels intentional, not washed out.

## Dark Mode: Intentional Redesign, Not Inversion

Dark mode as `filter: invert(100%)` is lazy. It breaks everything.

Dark mode demands intentional choices:

1. **Background:** Not pure black (#000000). Use oklch(15% 0.01 250) — slightly less contrast strain
2. **Text:** Not pure white. Use oklch(97% 0.01 250) — reduces eye fatigue
3. **Accent colors:** Increase lightness, reduce chroma. A bright blue (oklch(55% 0.2 250)) becomes oklch(70% 0.15 250) in dark mode
4. **Surface layers:** Create hierarchy with background layers. Dark backgrounds benefit from 2–3 gray steps (oklch(20%), 25%, 30%) to indicate depth

```css
/* Light mode */
:root {
  --bg-primary: oklch(100% 0 0);
  --bg-secondary: oklch(95% 0.005 250);
  --text-primary: oklch(10% 0.01 250);
  --text-secondary: oklch(50% 0.01 250);
  --accent: oklch(55% 0.2 250);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: oklch(15% 0.01 250);
    --bg-secondary: oklch(22% 0.01 250);
    --text-primary: oklch(97% 0.01 250);
    --text-secondary: oklch(70% 0.01 250);
    --accent: oklch(70% 0.15 250);  /* Lighter, less saturated */
  }
}
```

Dark mode users experience dark mode constantly. Optimize for their comfort, not your light mode logic.

## Anti-Pattern: Gray Text on Colored Backgrounds

This combination destroys readability.

Gray text (low contrast) on a colored background (high saturation) causes simultaneous contrast. The eye can't rest. The text feels vibrating.

**Never do:**
- Gray buttons on blue background
- Muted text on colored card backgrounds
- Disabled text on accent backgrounds

**Instead:**
- Use text color with sufficient contrast to background (4.5:1 minimum)
- If background is colored, use text at 85%+ lightness (nearly white) or 10%– lightness (nearly black)
- Never gray on color

```css
/* BAD */
.card-accent {
  background: oklch(60% 0.2 220);
  color: oklch(50% 0.01 0);  /* Gray on blue — unreadable */
}

/* GOOD */
.card-accent {
  background: oklch(60% 0.2 220);
  color: oklch(98% 0.01 0);  /* White on blue — clear */
}
```

## Token Architecture: Three Tiers

**Global tokens** describe your brand in isolation. No context.
**Alias tokens** map globals to purposes. Context appears here.
**Component tokens** apply aliases to specific UI elements. Specificity lives here.

```css
/* GLOBAL: Raw brand */
--color-primary-base: oklch(55% 0.2 250);
--color-error-base: oklch(50% 0.22 30);
--color-success-base: oklch(55% 0.18 145);

/* ALIAS: Purpose */
--color-interactive-primary: var(--color-primary-base);
--color-feedback-error: var(--color-error-base);
--color-feedback-success: var(--color-success-base);
--color-neutral-text-secondary: oklch(50% 0.01 250);

/* COMPONENT: Specific use */
--button-primary-bg: var(--color-interactive-primary);
--button-primary-text: oklch(100% 0 0);
--input-error-border: var(--color-feedback-error);
--badge-success-bg: var(--color-feedback-success);
```

This three-tier system allows you to:
- Swap brand colors without touching components (change global)
- Adapt purposes for dark mode (change aliases)
- Apply specific overrides only when necessary (use components)

## Accessibility: Real Numbers, Real Tools

Minimum contrast ratios:
- **4.5:1** for normal text (AA compliance)
- **7:1** for normal text (AAA compliance, highly recommended)
- **3:1** for large text (18px+) at AA
- **4.5:1** for UI components and graphical elements

**Use real tools. Test actual colors.**

```
https://webaim.org/resources/contrastchecker/
https://colourcontrast.cc/
```

Avoid relying on screenshots or visual estimates. Plug actual hex/OKLCH values into a tool. A color that looks "contrasty enough" might measure 3.8:1 (fails AA).

**Test with:**
- Dark mode enabled
- Light mode enabled
- Deuteranopia (red-green colorblindness)
- Protanopia (red-green colorblindness, different)
- Tritanopia (blue-yellow colorblindness)
- Achromatopsia (complete colorblindness)

Use a tool like Stark or Color Oracle to simulate.

## Anti-Patterns: The Color Hall of Shame

**Cyan on dark:** Looks "tech" but tests terribly. Cyan appears brighter than measured. Creates glowing halos.

**Purple-to-blue gradients:** Perceptually nonuniform. The gradient accelerates or decelerates depending on direction. Use hue ranges ≤60° for smooth gradients.

**Neon accents:** High saturation at high lightness (oklch(85% 0.25 0)) burns eyes. Reserve saturation for mid-range lightness (50–65%).

**Pure black/white:** #000000 and #FFFFFF are too stark. Use oklch(5% 0.01 250) and oklch(98% 0.01 250) instead. Slightly softer, still high contrast.

**Status colors as only differentiator:** Red for error, green for success — but don't rely on color alone. Include icons or text. Colorblind users won't see status.

## Summary: The Checklist

- [ ] Use OKLCH for all intentional color work
- [ ] Tint neutrals toward brand hue (chroma 0.005–0.01)
- [ ] Apply 60-30-10 rule for visual weight distribution
- [ ] Reduce chroma at extreme lightness (90%+)
- [ ] Design dark mode as intentional redesign, not inversion
- [ ] Never use gray text on colored backgrounds
- [ ] Structure tokens in three tiers: global → alias → component
- [ ] Test contrast ratios with real tools (4.5:1 minimum)
- [ ] Verify colorblind accessibility with simulation tools
- [ ] Avoid cyan-on-dark, neon accents, pure black/white

Color done right disappears into function. Users see information hierarchy and brand personality, not "colors."
