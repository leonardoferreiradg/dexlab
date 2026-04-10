---
name: Clarify
description: UX writing and microcopy. Words shape user experience as much as pixels.
user-invocable: true
argument-hint: "[product-copy] or invoke during /craft"
---

## Clarify: Writing as Design

Microcopy is usability. Microcopy is tone. Microcopy is how users know what to do next. Every word matters.

### STEP 1: Audit Existing Copy Against UX Writing Principles
- Collect all text from UI:
  - Button labels
  - Error messages
  - Help text, tooltips
  - Empty states
  - Loading messages
  - Success messages
  - Form labels, placeholders
  - Modal titles, instructions
- For each piece, ask:
  - Is it clear? (Would a new user understand?)
  - Is it active? (Verb-first or passive?)
  - Is it consistent? (Same term used elsewhere?)
  - Is it friendly? (Matches brand tone?)
  - Is it honest? (Does it set accurate expectations?)
- Flag failures for rewriting

### STEP 2: Rewrite Button Labels
- Ban these words: "OK", "Submit", "Click here", "Next", "Done", "Save"
- Replace with action-specific language:
  - Instead of "OK" → "Create account", "Confirm email", "Apply changes"
  - Instead of "Submit" → "Send feedback", "Request access", "Join waitlist"
  - Instead of "Next" → "Continue to billing", "Review order", "Add item"
  - Instead of "Done" → "Close", "Finish setup", "Return home"
  - Instead of "Save" → "Publish article", "Update profile", "Keep changes"
- Rule: button text should describe the outcome, not the action
- Example: User lands on sign-up. Button should say "Create account", not "Submit"
- Disabled button text: "Enter email to continue" (explains what's needed, not just grayed out)
- Micro-actions (icon buttons): use tooltips, not hover text

### STEP 3: Fix Error Messages
Structure: **What happened** + **Why** + **How to fix**

- Bad: "Error: invalid input"
- Good: "Password must be at least 8 characters. Try a longer one."
- Bad: "404"
- Good: "Page not found. Check the link or return to home."
- Bad: "Unauthorized"
- Good: "You need to sign in to view this. Log in or create an account."
- Rules:
  - Use present tense ("Email is required" not "Email required")
  - Be specific (which field? why invalid?)
  - Suggest fix (tell user how to resolve)
  - Use plain language (no jargon)
  - Never blame ("You forgot..." → "Please add email")
  - Use error color + icon + text (color alone insufficient)

### STEP 4: Design Empty States as Onboarding
- Empty states are not sad—they're opportunities
- Structure: **Illustration/icon** + **Headline** + **Description** + **Call to action**
- Examples:
  - Headline: "No items yet"
  - Description: "Once you add your first item, it will show up here."
  - CTA: "Add your first item"
  
  - Headline: "Inbox zero"
  - Description: "Great job! You've caught up on all messages."
  - CTA: (none—celebratory, no action needed)
  
  - Headline: "No search results"
  - Description: "Try different keywords or adjust your filters."
  - CTA: "Clear filters" or "Try another search"
- Rules:
  - Match tone to app personality
  - Provide path forward (don't dead-end)
  - Use illustrations if product uses them, but only if helpful
  - Avoid sad/apologetic tone

### STEP 5: Ensure Tone Consistency Across States
- **Success state**: Celebratory, affirming
  - "Account created! Welcome aboard."
  - "Your changes are live."
  - "All set—enjoy!"
  
- **Error state**: Empathetic, helpful
  - "Oops, something went wrong."
  - "We couldn't process that. Please try again."
  - "Give us a moment to fix this."
  
- **Loading state**: Transparent, informative
  - "Uploading your file..." (shows progress)
  - "Just a moment..." (not "Loading...")
  - "Processing your payment..." (specific)
  
- **Empty state**: Inviting, not sad
  - "Ready to get started?"
  - "Nothing here yet. Add something new."
  - "Come back later—nothing new today."
  
- **Disabled state**: Explanatory, not dismissive
  - "Finish profile to unlock messaging"
  - "You've reached your limit for today"
  - "This option isn't available for your plan"
- Document tone guide: How does this product speak?

### STEP 6: Check Terminology Consistency
- Create glossary of key terms:
  - If it's "logout", not "sign out", use consistently everywhere
  - If it's "dashboard", not "home", use consistently
  - If it's "request", not "submission", use consistently
- Audit entire product:
  - Find all instances of key terms
  - Flag inconsistencies
  - Choose one standard, update everywhere
- Special terms:
  - User vs. account vs. profile (pick one)
  - Create vs. add vs. new (pick one)
  - Delete vs. remove vs. trash (pick one)
- Noun forms:
  - If action is "publish", label is "published", message is "Published on..."
  - Maintain grammatical consistency

### STEP 7: Write Form Copy
- **Labels**: Clear, concise, no colon
  - "Email address" not "Email:"
  - "Phone number" not "Tel"
- **Placeholders**: Examples or hints, not labels
  - Placeholder: "you@example.com"
  - Placeholder: "555-123-4567"
  - Note: Placeholder disappears when typing, so label separately
- **Required field**: Mark explicitly
  - "Email address *" or use red asterisk with visible label
  - Never rely on asterisk alone
- **Help text**: Below field, smaller, secondary color
  - "At least 8 characters, including numbers"
  - "No hyphens or special characters"
  - "We'll never share this"

### STEP 8: Write Loading and Feedback Copy
- **Loading state**:
  - Show what's being done: "Uploading files..." not "Loading..."
  - Estimate if available: "About 2 minutes remaining"
  - Be honest: "This might take a while"
- **In-progress**:
  - Show step count: "Step 2 of 4: Confirm details"
  - Progress bar + copy together
- **Completion**:
  - Celebrate briefly: "Done! Your account is ready."
  - Then show next step: "Check your email to verify."
- **Feedback (tooltips)**:
  - Show on hover (not before)
  - Keep under 20 words
  - Explain button purpose if unclear: "Sort by most recent" not "Sort"

## Writing Checklist
- [ ] No "OK", "Submit", "Click here", "Next", "Done", "Save"
- [ ] All error messages include: what happened + why + how to fix
- [ ] Empty states are inviting, not apologetic
- [ ] Tone consistent: success=celebratory, error=empathetic, loading=transparent
- [ ] Terminology consistent across product
- [ ] Form labels are clear, placeholders are examples
- [ ] Help text explains constraints
- [ ] Loading state shows progress, not just "Loading..."
- [ ] All microcopy is read aloud for screen readers
- [ ] Copy matches brand voice

## Reference
- Check `.design/standards/interaction-patterns.md` for state-specific copy examples

## Next Steps
- Use **craft** to implement microcopy in components
- Use **component** to document copy requirements in specs
- Use **accessibility-review** to test screen reader experience
