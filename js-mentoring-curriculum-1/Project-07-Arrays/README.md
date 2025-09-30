# Project 07 — Arrays

## 📚 What You’re Learning

- How to **store ordered collections** of data (lists).
- How to **add** and **remove** items from arrays.
- The difference between **mutating** (changing the original array) vs **copying** (leaving the original intact).
- How to **search** for elements in an array.
- How to **loop/iterate** through all elements.

---

## 🌍 Why It’s Important

Arrays show up _everywhere_ in real projects:

- 🛒 **Shopping carts** → store a list of products.
- 🎵 **Playlists** → store a list of songs.
- 🔍 **Search results** → store a list of matching items.
- 📩 **Notifications** → store alerts/messages in order.

⚠️ If you don’t understand when an array is copied vs mutated, you can easily introduce bugs (like accidentally erasing a user’s cart while trying to make a copy).

---

## 🧺 Analogy

Think of an array like a **row of bins on a shelf**:

- You can **add** a new item to the end bin (`push`) or **remove** from the end (`pop`).
- You can **add** or **remove** items from the _front_ bins (`unshift` / `shift`).
- You can take a **snapshot** (`slice`) to copy the bins without moving the originals.
- You can **look through** the bins to see if something is inside (`includes`, `indexOf`).
- You can **walk down the row** one bin at a time (`for...of`) to see what’s inside.

---

## 🛠️ Syntax Breakdown

### Adding/Removing

- `push()` → add to the **end**
- `pop()` → remove from the **end**
- `unshift()` → add to the **front**
- `shift()` → remove from the **front**

### Copying vs Mutating

- `slice()` → makes a **copy** (does not change original).
- `splice()` → **mutates** the array by cutting/adding inside it.

### Searching

- `includes()` → check if a value exists (true/false).
- `indexOf()` → get the index (number) of where an item lives.

### Looping

- `for...of` → goes through values one by one.
- `.forEach()` → runs a function for each element.

---

## 💻 Example Snippets

```js
// Base array
const fruits = ["apple", "banana"];

// Copying without changing original
const moreFruits = fruits.slice();
moreFruits.push("cherry");

console.log(fruits); // ["apple", "banana"] (unchanged)
console.log(moreFruits); // ["apple", "banana", "cherry"]

// Searching
console.log(fruits.includes("banana")); // true
console.log(fruits.indexOf("apple")); // 0

// Looping
for (const fruit of fruits) {
  console.log(fruit); // prints apple, then banana
}
```

# Understanding map(), filter(), and reduce() in JavaScript

## 1. What `map()`, `filter()`, and `reduce()` are

They are **array methods** in JavaScript. That means they are built-in tools you can use **on arrays** (like `[1,2,3]`) to do something with each element.

- **`map()`** → transforms each item in the array into something new, and gives you back a new array.
- **`filter()`** → checks each item in the array, keeps only the ones that pass a test, and returns a new smaller array.
- **`reduce()`** → combines all the items in the array into a single value (like adding everything up or building an object).

---

## 2. How they relate to loops

They are **not loops by themselves**, but under the hood, they **use loops**.

Think of them as **shortcuts** or **specialized versions** of `for` loops:

- With a `for` loop, you control every step (start, end, increment, condition).
- With `map`, `filter`, and `reduce`, JavaScript handles the looping for you — you just tell it **what to do** with each item.

💡 These are often called **higher-order array methods** (that’s the official term).

---

## 3. Quick Analogy 🧰

Imagine an assembly line in a factory:

- **`map()`** = each item on the line gets painted a new color → new painted items come out.
- **`filter()`** = only items that pass the quality check stay on the line → defective ones are removed.
- **`reduce()`** = all items on the line are melted together into one big block → you end up with a single final result.

---

## 4. Code Examples

### Example with `map()`

```js
let numbers = [1, 2, 3, 4];

// Use map to double each number
let doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled);
// [2, 4, 6, 8]
```

### Example with `filter()`

```js
let numbers = [5, 12, 8, 130, 44];

// Use filter to keep only numbers greater than 10
let bigNumbers = numbers.filter(function (num) {
  return num > 10;
});

console.log(bigNumbers);
// [12, 130, 44]
```

### Example with `reduce()`

```js
let numbers = [1, 2, 3, 4];

// Use reduce to add all numbers together
let sum = numbers.reduce(function (accumulator, num) {
  return accumulator + num;
}, 0);

console.log(sum);
// 10
```

## 5. Key Takeaway

👉 They’re not “part of `for` loops.”  
Instead, they’re **array methods** that internally use looping.

You can think of them as **loop helpers** that make your code shorter, cleaner, and easier to read.
