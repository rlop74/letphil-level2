# Project 02 — Variables

## What You’re Learning

- Create named storage with `let` and `const`
- Decide what should be changeable vs fixed

## Why It’s Important

- Variables keep user data, app settings, and intermediate results.
- Clear names reduce bugs and make code readable.

## Analogy

Variables are **labeled boxes** in a backpack: `const` boxes are sealed, `let` boxes can be opened and changed. `var` was an old, leaky box—easy to spill across scopes.

## Syntax Breakdown

- `let` creates a block‑scoped variable you can reassign.
- `const` creates a block‑scoped variable you **cannot** reassign.
- Avoid `var` (function-scoped, hoisting surprises).
- `let userName = "Alex"` → name, `=`, and a **string** value.

## Example snippets

```js
const MAX_ITEMS = 5;
let count = 0;
count = count + 1;
```
