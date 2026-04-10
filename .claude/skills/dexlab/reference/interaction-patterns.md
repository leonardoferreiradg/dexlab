# Interaction Patterns Reference — Dexlab

Interaction design is the conversation between interface and user. Every state, every delay, every animation says something. Make it coherent.

## Eight Interactive States: The Foundation

Every interactive element exists in exactly one of eight states. Know these states or your interactions will feel broken.

**1. Default**
The element at rest, ready for interaction. No hover, no focus, no action happening.

```css
.button {
  background: var(--color-primary);
  color: white;
  cursor: pointer;
}
```

**2. Hover**
User's cursor is over the element. Visual feedback that interaction is possible.

```css
.button:hover {
  background: var(--color-primary-dark);
  /* Darkening or lightening, not completely new color */
}
```

**3. Focus**
Element is keyboard-focused. Use `:focus-visible`, not `:focus`. `:focus` fires on mouse click too, causing double outlines.

```css
.button:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
}
```

**4. Active**
User is pressing the element. Quick visual feedback (milliseconds of duration).

```css
.button:active {
  transform: scale(0.98);
  /* Slight shrink, or darker shade, shows press */
}
```

**5. Disabled**
Element is unavailable. Lower opacity, different cursor, no interaction.

```css
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  /* Never change hue, just opacity */
}
```

**6. Loading**
Action is in progress. Typically a spinner, progress indicator, or disabled state.

```css
.button.loading {
  opacity: 0.8;
  cursor: wait;
  pointer-events: none;
}

.button.loading::after {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin-left: 0.5em;
}
```

**7. Error**
Action failed. Visual feedback without a new interaction state—usually overlaid messaging.

```css
.input.error {
  border-color: var(--color-error);
  background: var(--color-error-light);
}

.input.error:focus-visible {
  outline-color: var(--color-error);
}
```

**8. Success**
Action succeeded. Temporary visual feedback, often with a check icon or brief animation.

```css
.button.success {
  background: var(--color-success);
  animation: pulse-success 0.5s ease-out;
}

@keyframes pulse-success {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
```

**Rule: Every interactive element must clearly indicate all applicable states.**

If a button can be disabled, show disabled state in your design. If an input can error, design the error state. Anything less is guesswork.

## :focus-visible Over :focus

`:focus` applies when element receives focus, keyboard OR mouse.
`:focus-visible` applies only for keyboard focus.

This matters because:
- Mouse users don't need a focus outline (they can see the cursor)
- Keyboard users NEED focus indicator (they're navigating blind)
- `:focus:not(:focus-visible)` is the common hack to hide focus on mouse

**Modern approach:**
```css
.button:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 2px;
  /* Only shows for keyboard */
}
```

Don't hide focus. Keyboard navigation requires it. Make the outline clear, high contrast, positioned slightly outside the element (outline-offset).

## Progressive Disclosure: Start Simple, Reveal Complexity

Users are intimidated by options. Hide options until they're needed.

**Example: Form fields**
```html
<!-- Start simple -->
<label>Email</label>
<input type="email" required>

<!-- Reveal complexity only when needed -->
<button type="button" aria-expanded="false">Advanced options</button>
<div hidden>
  <label>Notification frequency</label>
  <select>...</select>
</div>
```

When user clicks "Advanced options," reveal the section with `hidden` removed and `aria-expanded="true"`.

**Example: Editor toolbars**
Show text color button only after user selects text. Show align buttons only when cursor is in a list. Hidden options appear contextually, not cluttering the interface.

**Benefits:**
- Reduced cognitive load (fewer options visible)
- Progressive learning (complex features appear when relevant)
- Cleaner interface (defaults handle 80% of use cases)

## Optimistic UI: Update First, Sync Later

When user clicks "Like" or "Send," don't wait for server confirmation. Update the interface immediately, then sync in the background.

```javascript
function likePost(postId) {
  // Optimistic: Update UI immediately
  updateLikeCount(postId, +1);
  updateLikeButton(postId, 'liked');
  
  // Pessimistic: Sync to server
  fetch(`/api/posts/${postId}/like`, { method: 'POST' })
    .catch(() => {
      // Revert if server fails
      updateLikeCount(postId, -1);
      updateLikeButton(postId, 'unliked');
      showError('Failed to like post');
    });
}
```

This feels instant. Users never wait for server round-trips. If sync fails, revert and show an error message.

**When NOT to use optimistic UI:**
- Destructive actions (deletion) — always confirm first
- Financial transactions — always wait for server
- Operations that require server response (generating IDs)

## Undo > Confirm for Destructive Actions

Users hate confirmation dialogs. They click "Yes" without reading, then regret. Instead, make actions reversible.

```
Instead of: "Are you sure you want to delete? [Cancel] [Delete]"
Better: "Deleted. [Undo] [OK]"
```

This pattern:
- Doesn't interrupt workflow (no modal blocking action)
- Lets users reverse mistakes instantly
- Reduces decision paralysis

**Implement undo:**
```javascript
function deleteItem(id) {
  const item = store.delete(id);
  
  showNotification(`Item deleted`, {
    action: 'Undo',
    onAction: () => {
      store.add(item);
      dismissNotification();
    },
    duration: 5000  // Auto-dismiss after 5 seconds
  });
}
```

If user doesn't click "Undo" within 5 seconds, action is committed.

**When confirmation is necessary:**
- Dangerous actions with no undo (account deletion, permissions changes)
- Financial/legal commitments (submitting a contract)
- Even then: use a clearer pattern like "Type your email to confirm deletion"

## Empty States as Onboarding, Not Failure Messages

An empty list isn't a failure. It's an opportunity to guide the user toward their first action.

```html
<!-- BAD: Empty state blaming the user -->
<div class="empty-state">
  <p>No items yet.</p>
</div>

<!-- GOOD: Empty state guiding action -->
<div class="empty-state">
  <svg class="icon"><!-- illustration --></svg>
  <h3>Start your first project</h3>
  <p>Create a new project to begin tracking your work.</p>
  <button class="button-primary">New Project</button>
</div>
```

Every empty state should have:
- Clear explanation of what should be here
- Visual context (icon or illustration)
- Call-to-action button (one primary action)
- Optional: Link to help documentation

This turns a dead end into an onboarding moment.

## Form Design: Inline Validation, Clear Errors, Smart Defaults

**Inline validation:**
Don't wait for submit to validate. Check as user types.

```javascript
input.addEventListener('blur', () => {
  if (input.value && !isValidEmail(input.value)) {
    input.classList.add('error');
    errorMessage.textContent = 'Invalid email format';
    errorMessage.hidden = false;
  } else {
    input.classList.remove('error');
    errorMessage.hidden = true;
  }
});
```

Show errors on blur, not on keystroke. Keystroke-level errors are annoying.

**Clear error messages:**
```
BAD:   "Invalid input"
GOOD:  "Email must contain '@'"

BAD:   "Error 422"
GOOD:  "This username is already taken. Choose another."
```

Errors should tell the user exactly what's wrong and how to fix it.

**Smart defaults:**
```html
<select name="country">
  <option value="">Select country</option>
  <option value="br" selected>Brazil</option>
  <!-- User's country selected by default -->
</select>
```

Pre-fill obvious values. Detect user's location, timezone, language. Every field the user doesn't have to fill is a field you saved them from.

## Loading Patterns: Skeleton, Progressive, Staggered

Users hate blank screens. Show something loading immediately.

**Skeleton screens:**
Show a gray placeholder matching the loaded layout. As content arrives, fade in real content over the skeleton.

```html
<div class="card">
  <div class="skeleton skeleton-image"></div>
  <div class="skeleton skeleton-title"></div>
  <div class="skeleton skeleton-text"></div>
</div>
```

```css
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

This is better than spinners because:
- Shows layout before content loads
- Prevents layout shift when content arrives
- Feels faster (users see progress)

**Progressive loading:**
Show critical content first, load secondary content below the fold.

```
[Header — loads immediately]
[Article content — loads immediately]
[Comments — loads in background]
[Related articles — loads in background]
```

**Staggered reveals:**
When loading a list of items, don't flash all at once. Stagger their appearance:

```css
.list-item {
  animation: fadeIn 0.3s ease-out;
  animation-delay: calc(var(--index) * 0.05s);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

Each item appears 50ms after the previous one. Feels smooth, not jarring.

## Touch Targets: 44px Minimum

Fingers aren't precise. Buttons must be at least 44×44px for comfortable touch.

```css
.button {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 16px;
  /* Ensures clickable area is large enough */
}
```

Don't confuse visual size with touch target. An icon can look 24px, but its touch target should be 44px. Use padding or `::after` pseudo-element to expand the hit area.

```css
.icon-button {
  position: relative;
  width: 24px;
  height: 24px;
}

.icon-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 44px;
  height: 44px;
  transform: translate(-50%, -50%);
  /* Invisible 44×44px hit area */
}
```

## Scroll Behavior: When to Scroll, When Not To

**Scroll when:**
- Revealing secondary content (below fold)
- Infinite scroll in feeds (measured, with pause points)
- Showing progressively loaded content

**Don't scroll when:**
- Opening modals (keep page in place)
- Submitting forms (stay on form, show inline feedback)
- Expanding/collapsing sections (let CSS handle it)

Use CSS `scroll-behavior: smooth` carefully. Smooth scroll feels nice in documentation, annoying in data-heavy apps.

**Infinite scroll gotchas:**
- Users lose their position when new content loads
- No "scroll to top" button feels worse
- Pagination gives users control

If using infinite scroll: add a "back to top" button, show progress (you're at item 47 of 150), pause loading when user scrolls up (they want to re-read).

## Summary: The Checklist

- [ ] Design all 8 states for every interactive element
- [ ] Use `:focus-visible` for keyboard navigation only
- [ ] Hide complexity until needed (progressive disclosure)
- [ ] Update UI immediately, sync in background (optimistic UI)
- [ ] Make destructive actions reversible (undo, not confirm)
- [ ] Turn empty states into onboarding
- [ ] Validate on blur, show clear errors
- [ ] Use skeleton screens, not spinners
- [ ] Stagger reveals in lists
- [ ] Minimum 44×44px touch targets
- [ ] Test scroll behavior on mobile

Interaction patterns create the feeling of an interface. Get them right and the app feels responsive and trustworthy. Get them wrong and users feel friction at every click.
