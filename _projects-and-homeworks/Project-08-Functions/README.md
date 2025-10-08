# 📘 README — JavaScript Function Types

Functions are like **tiny machines** in your code: you give them **inputs** (parameters), they do some **work**, and they give back an **output** (return value). There are several _styles_ for making functions. Each has a purpose.

---

## 🔹 Why Different Styles?

- Some are **hoisted** → you can call them before they appear in the code.
- Some are **shorter** to write → great for quick one-liners.
- Some are **perfect for callbacks** → used inside other functions like `map`, `filter`, `setTimeout`.
- Some change how `this` works → important in advanced coding.

---

## 1 Traditional Functions (Function Declarations)

**What:** A function written with the `function` keyword at the top level.  
**Analogy:** A **recipe card** 📜 in a cookbook — always available to use.  
**Best for:** Reusable utilities you might call anywhere in the file.  
**Key trait:** **Hoisted** (you can call them before they’re defined).

```js
function greet(name) {
  return "Hello, " + name + "!";
}

greet("Tom"); // Hello, Tom!
```

---

## 2 Function Expressions

**What:** A function stored inside a variable.  
**Analogy:** A **note on the fridge** 📝 — exists only after you put it there.  
**Best for:** Assigning functions to variables, passing them around.  
**Key trait:** **Not hoisted** (must be defined before use).

```js
const sayBye = function (name) {
  return "Bye, " + name + "!";
};

sayBye("John"); // Bye, John!
```

---

## 3 Arrow Functions (ES6)

**What:** A shorter, modern way to write functions.  
**Analogy:** A **sticky note shortcut** 📌 — quick and compact.  
**Best for:** Short utilities and array methods (`map`, `filter`, `reduce`).  
**Key trait:** **No own `this`** → inherits from the surrounding scope.

```js
const square = (n) => n * n;
const introduce = (name, city) => `${name} lives in ${city}.`;

console.log(square(5)); // 25
console.log(introduce("Alice", "South Korea")); // Alice lives in South Korea.
```

---

## 4 Anonymous Functions

**What:** A function with **no name**.  
**Analogy:** A **helper** 👷 — shows up, does the job, and leaves.  
**Best for:** One-time callbacks: `setTimeout`, `forEach`, `map`, `filter`, `reduce`.  
**Key trait:** Not reusable by name (because it doesn’t have one).

```js
setTimeout(function () {
  console.log("This runs later");
}, 500);

[1, 2, 3].map(function (n) {
  return n * 2;
}); // [2,4,6]
```

---

## ⚖️ Key Differences

| Function Type           | Hoisted? | `this` behavior       | Typical Use Case           | Reusability        |
| ----------------------- | -------- | --------------------- | -------------------------- | ------------------ |
| Traditional Declaration | ✅ Yes   | Own `this`            | General reusable utilities | ✅ Named           |
| Function Expression     | ❌ No    | Own `this`            | Store/pass as variable     | ✅ Named const let |
| Arrow Function          | ❌ No    | Inherits outer `this` | Short code, array methods  | ✅ Named const let |
| Anonymous Function      | ❌ No    | Depends on wrapper    | Quick callbacks            | ❌ Not named       |

---

const person = {
name: "John",
greet: () => {
console.log("Hi, my name is " + this.name);
}
};

person.greet() Hi, my name is john

## 💡 Tiny Syntax Cheatsheet

```js
// Arrow function one-liner
const double = (n) => n * 2;

// No parameters
const hello = () => "hi";

// Multiple parameters
const sum = (a, b) => a + b;

// Block form (explicit return)
const add = (a, b) => {
  const result = a + b;
  return result;
};
```

---

## 🏗️ When to Use Which?

- **Traditional:** Use when you want a reliable, hoisted function you can call anywhere.
- **Function Expression:** Use when storing in a variable or passing around.
- **Arrow Function:** Use for concise syntax and array methods.
- **Anonymous Function:** Use for one-off callbacks.
