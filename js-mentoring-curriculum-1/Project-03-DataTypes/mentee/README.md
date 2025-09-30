# Project 03 — Data Types & typeof

## What You’re Learning

- Recognize strings, numbers, booleans, null, undefined, objects, arrays, and functions
- Use `typeof` and `Array.isArray` wisely

## Why It’s Important

- Type awareness prevents subtle bugs (e.g., adding numbers vs concatenating strings).
- APIs expect specific shapes—knowing types helps validation and debugging.

## Analogy

Think of **pantry containers**: flour (number), labels (string), a switch (boolean), an empty labeled jar (`null`), a missing jar (`undefined`), a drawer (object), a tray of slots (array), and a blender (function).

## Syntax Breakdown

- `typeof 42` → "number"; `typeof "hi"` → "string"
- `typeof null` → "object" (historic quirk)
- `Array.isArray([])` → `true`

## Example snippets

```js
typeof "hello"; // "string"
typeof 42; // "number"
typeof null; // "object" (quirk)
Array.isArray([1, 2, 3]); // true
typeof function () {}; // "function"
```
