# Project 05 — Conditionals

Welcome! This bundle teaches you **how programs make decisions** using JavaScript conditionals.

## What You’ll Learn

- `if`, `else if`, `else`: step-by-step decision paths
- `switch`: clean handling of fixed categories (like menu options)
- Ternary `condition ? A : B`: tiny yes/no decisions in one line
- Combining comparisons (`>`, `<`, `>=`, `<=`, `===`, `!==`) and logic (`&&`, `||`, `!`)
- Writing readable conditions and choosing the right tool for the job

## Big Picture Analogy

Think of conditionals as **traffic lights** for code:

- **Green (if true)** → do this
- **Yellow (else if)** → if not, try this other path
- **Red (else)** → none of the above worked, do the fallback

## Folder Structure

Each version includes 5 mini projects:

1. **if/else Temperature Advisor** — Suggest what to wear based on temperature.
2. **else if Grading** — Convert numeric score to a letter grade.
3. **switch Membership Tiers** — Show benefits for bronze/silver/gold.
4. **Ternary Login Label** — Display “Adult” or “Minor” based on age.
5. **Nested Conditions + Logic** — Shipping cost calculator using `&&` and `||`.

## Key Concepts (Plain-English)

- **Condition**: A question that’s answered with true/false (e.g., `age >= 18`).
- **Block `{ ... }`**: Code that runs only if the condition is true.
- **Order matters**: In an `if → else if → else` chain, the **first** true branch wins.
- **Switch**: Cleaner than many `else if`s when checking a single value against fixed labels.
- **Ternary**: Tiny shortcut for `if/else` when you need two outcomes (on/off, yes/no).
- **Logic**:
  - `&&` (AND): both must be true
  - `||` (OR): at least one is true
  - `!` (NOT): flips true ↔ false

## Example Cheatsheet

```js
// if / else if / else
if (temp >= 30) { ... }
else if (temp >= 20) { ... }
else { ... }

// switch
switch (level) {
  case "gold": ...; break;
  default: ...;
}

// ternary
const label = age >= 18 ? "Adult" : "Minor";
```

Have fun! Remember: **clear, readable conditions** make your app easier to understand and debug.
