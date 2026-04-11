---
name: Harden for Resilience
description: Design for edge cases, internationalization, errors, and permission states. If you haven't designed the error state, you haven't designed the feature.
user-invocable: true
argument-hint: Feature or design to harden for production
---

## What This Skill Does
If you haven't designed the error state, you haven't designed the feature. This skill forces resilience thinking: every happy path needs unhappy paths designed.

## STEPS

### 1. Audit Missing States
Design for all state variants, not just happy path:
- **Empty**: Zero items in a list, no results from search, blank canvas
- **Loading**: Data fetching, processing, initializing
- **Error**: API failure, network error, validation error, permission denied
- **Success**: Action completed, confirmation needed, confirmation received
- **Partial**: Some items loaded, partial data, incomplete upload
- **Offline**: No network connection, cached fallback, sync queue
- For each state, design: what's the UI? What's the message? What's the user's next action?

### 2. Check I18n Readiness
- **Text expansion**: German +30%, Finnish +40% — do layouts break?
- **RTL languages**: Arabic, Hebrew — does layout mirror? Test right-to-left alignment
- **Date formatting**: US (MM/DD/YYYY) vs EU (DD/MM/YYYY) — parameterize, don't hardcode
- **Number formatting**: Decimals (1.5 vs 1,5), thousands (1,000 vs 1.000)
- **Icons with text**: Do they still work translated? ("Delete file" + trash icon works; "Save file" + floppy disk may not)
- Specify text strings as keys, not hardcoded in design

### 3. Verify Error Handling
- **Every API call needs an error state**: form submission failure, data load failure, upload timeout
- **Every error needs a recovery path**: retry button, contact support, go back
- **Error messages**: Specific (not "Error"), actionable (tell user what to do), human-readable (not technical)
- **Form validation**: Show which field is invalid; show why; suggest fix
- **Network errors**: Offer offline mode if applicable; queue for sync
- Design the error UI: where does the message appear? Modal? Inline? Toast?

### 4. Test with Extreme Data
- **Zero items**: Empty list, empty search, no results — UI should degrade gracefully
- **One item**: Don't assume plural, pagination, or table structure
- **1000+ items**: Does performance degrade? Need pagination/virtualization?
- **Very long text**: 200 characters in a field designed for 50 — how does it behave? Truncate? Wrap? Overflow?
- **Special characters**: Emoji, accented letters, quotes, apostrophes — do they render?
- Test: mock these data sets and verify UI doesn't break

### 5. Check Permission States
- **Logged out**: What can user see? What's hidden? What prompts login?
- **No permission**: User is logged in but lacks access — show message, not blank
- **Expired session**: Session timed out — offer re-login without data loss
- **Partial permissions**: User can access some resources but not others — show what they can access
- **Admin vs user**: Different features, visibility, actions — design both roles
- Create permission matrix: user role × feature → visible/hidden/disabled

### 6. Verify Accessibility
- **Screen reader**: Semantic HTML (buttons are <button>, links are <a>), ARIA landmarks, alt text for images
- **Keyboard-only**: Tab order, focus visible, all interactions keyboard-accessible (no hover-only states)
- **Reduced motion**: Respect prefers-reduced-motion; critical animations have alternatives
- **High contrast**: Text and interactive elements meet WCAG AA (4.5:1 for body text, 3:1 for larger text)
- **Touch targets**: Buttons and links 44×44px minimum (mobile)
- Test: use keyboard only, enable screen reader, enable reduced motion

## Next Steps
Once hardened, move to **/handoff** to write developer specs with all edge cases documented.

Use **/audit** to evaluate the robustness of your hardened design systematically.
