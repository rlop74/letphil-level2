// Goal: Practice Events & DOM by wiring up interactions in a small app.

// -----------------------------------------------------------------------
// STEP A — SELECT ELEMENTS
// - Select by id: btnIncrement, countValue
// - Select by id: btnTheme
// - Select by id: taskInput, prioritySelect, priorityLabel, btnAdd, taskList
// - Select by id: demoForm, nameInput, formMsg
// - Select by id: hoverCard

const btnIncrement = document.getElementById("btnIncrement")
const countValue = document.getElementById("countValue")
const btnTheme = document.getElementById("btnTheme")
const taskInput = document.getElementById("taskInput")
const prioritySelect = document.getElementById("prioritySelect")
const priorityLabel = document.getElementById("priorityLabel")
const btnAdd = document.getElementById("btnAdd")
const taskList = document.getElementById("taskList")
const demoForm = document.getElementById("demoForm")
const nameInput = document.getElementById("nameInput")
const formMsg = document.getElementById("formMsg")
const hoverCard = document.getElementById("hoverCard")

// -----------------------------------------------------------------------
// STEP B — CLICK: COUNTER
// - Add a click listener to btnIncrement
// - Read current number from countValue (parseInt)
// - Increase by 1 and put it back (textContent)

let currentCount = localStorage.getItem("counter") || 0;

btnIncrement.addEventListener("click", () => {
    let count = parseInt(currentCount);
    count++;
    localStorage.setItem("counter", count.toString());
    addCount();

});

function addCount() {
    // real time update -- get a fresh copy of the currentCount every time its called
    currentCount = localStorage.getItem("counter") || 0;
    countValue.textContent = currentCount;
}

addCount();

// -----------------------------------------------------------------------
// STEP C — THEME TOGGLE
// - Add a click listener to btnTheme
// - Toggle the "dark" class on <body> using classList.toggle

let theme = localStorage.getItem("theme") || "light";

btnTheme.addEventListener("click", () => {
    // toggle class every click
    document.body.classList.toggle("dark");

    // on click, update localStorage to opposite theme
    if (theme === "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// toggle "dark" class on refresh if theme is "dark"
if (theme === "dark") {
    document.body.classList.toggle("dark");
}

// -----------------------------------------------------------------------
// STEP D — INPUT + CHANGE + ENTER KEY
// - Add an input listener to taskInput (optional: show live length/preview)
// - Add a change listener to prioritySelect to update priorityLabel to "Priority: X"
// - Add a keydown listener to taskInput that checks if key === "Enter"; if so, call addTask()

const taskPreview = document.getElementById("taskPreview");

// input event listener to show live length/preview
taskInput.addEventListener("input", (event) => {
    taskPreview.innerHTML = `Last letter typed: ${event.data} <br /> Typed so far: ${taskInput.value}`;
});

// change listener to update priorityLabel
prioritySelect.addEventListener("change", () => {
    priorityLabel.textContent = `Priority: ${prioritySelect.value}`;
});

// keydown listener to check how task is entered -- enter vs ctrlKey + enter
taskInput.addEventListener("keydown", (event) => {
    // if only spaces were added, keep button disabled
    if (taskInput.value.trim() === "") {
        btnAdd.disabled = true;
    } else {
        btnAdd.disabled = false;
    }

    // order matters for this so it doesn't run "Enter" all the time
    if (event.ctrlKey && event.key === "Enter") {
        addTask("ctrlEnter");
        // return;
    } else if (event.key === "Enter") {
        addTask("Enter");
    }
});

// disable add button if input is empty
if (taskInput.value === "") btnAdd.disabled = true;

// -----------------------------------------------------------------------
// STEP E — CREATE TASK ELEMENTS
// - Write a function addTask() that:
//   * Reads values from taskInput and prioritySelect
//   * Creates a new <li>, sets text to the task
//   * Creates a <span class="badge"> for the priority and appends it
//   * Creates a <button> "Delete" with a data-action="delete"
//   * Appends <li> to taskList
//   * Clears taskInput and focuses it again

let taskStorage = JSON.parse(localStorage.getItem("tasks")) || [];

/*
    * the addTask function compiles creates the li with all its requirements, makes
      it as an object and it updates localStorage by adding the currentTask object
    * this function is only called from the taskInput keydown listener 

    * @param {string} key - this parameter comes from the taskInput keydown listener
    * @returns {null} none
*/
function addTask(key) {
    let taskInputValue = taskInput.value.trim();

    // alert user if input is empty
    if (taskInputValue === "") {
        alert("Please enter task");
        return;
    }

    let prioritySelectValue = prioritySelect.value;

    // use the value of prioritySelect to set span.textContent if !"ctrlEnter"
    priority = key === "ctrlEnter" ? "High" : prioritySelectValue;

    // put current task as object and including id
    let task = {
        name: taskInputValue,
        priority: priority,
    }

    // add task to localStorage array and update taskStorage localStorage
    taskStorage.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskStorage));
    renderTasks();

    taskInput.value = "";
    taskInput.focus();
}

function renderTasks() {
    // get fresh copy of taskStorage
    taskStorage = JSON.parse(localStorage.getItem("tasks")) || [];

    //
    let id = 0;

    // clear taskList first
    taskList.textContent = "";
    // loop through localStorage array
    taskStorage.forEach(task => {

        // li element 
        const li = document.createElement("li");
        li.textContent = task.name;
        li.setAttribute("taskId", id);
        id++;
        taskList.appendChild(li);

        // create span element, get value of prioritySelect
        const span = document.createElement("span");
        span.textContent = task.priority;
        span.classList.add("badge");
        li.appendChild(span);

        // setup delete button and add to li
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.setAttribute("data-action", "delete");
        
        li.appendChild(deleteBtn);
    });
}

renderTasks();

// -----------------------------------------------------------------------
// STEP F — EVENT DELEGATION FOR DELETE
// - Add one click listener to taskList (the <ul>)
// - Inside, check if event.target has data-action="delete"
// - If yes, remove the parent <li>
taskList.addEventListener("click", (event) => {
    if (event.target.getAttribute('data-action') === "delete") {
        taskStorage = JSON.parse(localStorage.getItem("tasks"));
        // remove li associated with delete button visually
        event.target.parentElement.remove();

        // update localStorage
        // get the data-id attribute
        let idToDelete = event.target.parentElement.getAttribute("taskId");

        // delete from taskStorage array and update localStorage
        taskStorage.splice(idToDelete, 1);
        // console.log(taskStorage);
        // console.log(taskList);
        localStorage.setItem("tasks", JSON.stringify(taskStorage));
    }
});

// -----------------------------------------------------------------------
// STEP G — FORM SUBMIT (PREVENT DEFAULT)
// - Add submit listener to demoForm
// - Use event.preventDefault() to stop page reload
// - Build a friendly text using nameInput.value and show it in formMsg
// - Optionally clear the input

let formOutput = localStorage.getItem("formOutput") || "";

demoForm.addEventListener("submit", () => {
    // prevent page refresh after form submission
    event.preventDefault();

    // update formMsg.textContent visually
    formMsg.textContent = nameInput.value;

    // update formOutput localStorage
    localStorage.setItem("formOutput", nameInput.value);

    // clear input
    nameInput.value = "";
})

// render form with latest update of formOutput localStorage
function renderForm() {
    formOutput = localStorage.getItem("formOutput")
    formMsg.textContent = formOutput;
}

// call renderForm() on load/reload
renderForm();

// -----------------------------------------------------------------------
// STEP H — MOUSEOVER / MOUSEOUT
// - Add mouseover listener to hoverCard to add class "highlight"
// - Add mouseout listener to remove class "highlight"

hoverCard.addEventListener("mouseover", () => {
    hoverCard.classList.add("highlight");
})

hoverCard.addEventListener("mouseout", () => {
    hoverCard.classList.remove("highlight");
})

// -----------------------------------------------------------------------
// STEP I — BONUS IDEAS
// - Disable Add button when input is empty (use .disabled = true/false) -- done
// - Pressing Ctrl+Enter adds a task with "High" priority automatically -- done
// - Persist tasks to localStorage and load them on page load -- done

