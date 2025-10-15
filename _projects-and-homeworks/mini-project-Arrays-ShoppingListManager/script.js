
// Mini Project — Shopping List Manager 

// Goal
//   Manage a list of strings with add, remove last, and clear actions; render the list and count.

// Exact element ids required
//   itemInput, addBtn, removeBtn, clearBtn, list, countLabel

// STEP 1 — Data and selection
//   Create an empty list named items.
//   Select the elements by id and store them with the exact names above.
let items = JSON.parse(localStorage.getItem("items")) || [];
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const countLabel = document.getElementById("countLabel");

// STEP 2 — Render helper
//   Create a function named renderAll that clears the list, appends one list item per string in items, and updates countLabel to show Count: a space and the number of items.
function renderAll() {
  list.textContent = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  })
  countLabel.textContent = `Count: ${items.length}`;
}

// STEP 3 — Add
//   Create a function named handleAdd that reads trimmed text from itemInput.
//   When the trimmed text is not empty, add it to the end of items and render.
addBtn.addEventListener("click", handleAdd);

function handleAdd() {
  const trimmedItemInput = itemInput.value.trim();
  if (trimmedItemInput) {
    items.push(trimmedItemInput);
    localStorage.setItem("items", JSON.stringify(items));
  }
  renderAll();
  itemInput.value = "";
}

// STEP 4 — Remove Last
//   Create a function named handleRemove that removes the last item from items when it exists and render.
removeBtn.addEventListener("click", handleRemove);

function handleRemove() {
  items.pop();
  localStorage.setItem("items", JSON.stringify(items));
  renderAll();
}

// STEP 5 — Clear
//   Create a function named handleClear that empties items and render.
clearBtn.addEventListener("click", handleClear);

function handleClear() {
  items = [];
  localStorage.removeItem("items");
  renderAll();
}

// STEP 6 — Wiring
//   Wire addBtn to handleAdd, removeBtn to handleRemove, and clearBtn to handleClear.
//   Call renderAll once so the page reflects the current state.

renderAll();