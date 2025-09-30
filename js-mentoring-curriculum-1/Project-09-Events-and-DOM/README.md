## ✅ **Project 7 – Events & the DOM**

### 1. Project Overview

Create a small web page with **three buttons** and two paragraphs. When you click different buttons, the page text changes, colors update, and console messages appear.

### 2. Why You Need This

Every modern website—from Amazon’s “Add to Cart” to Google’s search bar—**listens** for user actions (events) and then updates the page (DOM manipulation). Knowing how to do this is “Web Dev 101.”

### 3. Core Concepts (with micro-examples)

| Concept                         | Beginner Definition                                   | Tiny Code Demo                                              | Everyday Analogy                                                              |
| ------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **DOM (Document Object Model)** | JavaScript’s _in-memory_ representation of your HTML. | `document.title = "New tab name"`                           | A LEGO model of your house: move a brick here, the real house (page) changes. |
| `document.getElementById()`     | Grabs _one_ element by its unique **id**.             | `const title = document.getElementById("title");`           | Looking up a friend’s phone number by their unique ID card.                   |
| `document.querySelector()`      | Grabs the **first** element matching a CSS selector.  | `const firstBtn = document.querySelector("button");`        | Asking, “Fetch me the first red apple from the basket.”                       |
| `document.querySelectorAll()`   | Returns **all** matches as a _static_ NodeList.       | `const allBtns = document.querySelectorAll(".action-btn");` | Getting _photos_ of all apples right now (the list won’t auto-update).        |
| `addEventListener("click", cb)` | Runs `cb` every time the element is clicked.          | `firstBtn.addEventListener("click", sayHi);`                | Wiring a doorbell: every press rings a sound.                                 |
| `.innerText`                    | Reads or changes the _visible_ text inside a tag.     | `message.innerText = "Hello world";`                        | Swapping out a sticky note’s message.                                         |
| `.classList.add("highlight")`   | Adds a CSS class (for styling) via JavaScript.        | `title.classList.add("highlight");`                         | Putting a fluorescent sticker on a box so it stands out.                      |

### 4. What You’ll Build (Step List)

1. Create `index.html` with an `<h1>` and **three** `<button>` elements.
2. Link `script.js` **below** the HTML so the DOM exists before JS runs.
3. In `script.js`:
   1. Grab each button using a _different_ selector method.
   2. Write `showPrimaryMessage()`, `showSecondaryMessage()`, and `dangerAlert()`.
   3. Add event listeners so each button triggers its matching function.
   4. Use `.innerText` and `.classList` to visibly change the page.
   5. Log messages to prove each function fired.
4. Open your browser’s **Console** (F12 → “Console” tab) and watch the logs as you click.

### 5. Checkpoint Questions

1. What’s the difference between `querySelector` and `querySelectorAll`?
2. Why must the `<script>` tag go **after** the HTML body for this simple project?
3. If `getElementsByClassName` returns a _live_ collection, how would adding a new `<p class="info">` in the click handler affect its `.length`?
