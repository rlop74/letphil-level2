# Loops in JavaScript — For vs While

## What is a loop?

A loop repeats an action **until a stopping point**.  
**Analogy:** Imagine stacking cups. You keep stacking **while** there are cups in the box. Or you set a device to beep **5 times** (that’s like a `for` loop with a fixed count).

---

## Two core families

### 1 `for` loop — “timer with start/stop/tick”

Use when you **know how many times** you’ll repeat.

**Pattern (syntax mini):**

```js
for (start; condition; update) {
  // repeat this
}
```

### 2 `while` loop — “keep going until…”

Use when you **don’t know the exact number** of repeats, but you **know the condition** that should be true to continue.

**Pattern (syntax mini):**

```js
while (condition) {
  // repeat this
}
```

### Bonus: `do...while`

Runs **at least once**, then keeps going while the condition is true.

---

## When to use which?

- **Use `for`** when you have a **fixed count** or clear start/stop steps
- **Use `while`** when you’re driven by a **condition** that may change in unpredictable ways
