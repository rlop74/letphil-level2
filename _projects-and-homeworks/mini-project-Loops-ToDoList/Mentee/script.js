// ===================== MENTEE — INSTRUCTIONAL STEPS =====================
// Goal: Practice different types of loops by generating a to-do list.

// STEP 1 — Create an array with 5 tasks (strings).
const tasks = ["Code", "Gym", "Study", "Run", "Box"]
// STEP 2 — Select button (#btnGenerate), ul (#taskList), and p (#taskCount).
const button = document.getElementById("btnGenerate");
const ul = document.getElementById("taskList");
const p = document.getElementById("taskCount")
// STEP 3 — Add click event listener to button.
button.addEventListener("click", () => {
// STEP 4 — Inside the event:
//   - Clear the list.
    ul.value = "";
//   - Use a for loop to add tasks with prefix "(for)".
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement("li");
        li.textContent = `(for) ${tasks[i]}`;
        ul.appendChild(li);
    }
//   - Use a while loop to add tasks with prefix "(while)".
    let counter = 0;
    while (counter < tasks.length) {
        const li = document.createElement("li");
        li.textContent = `(while) ${tasks[counter]}`;
        ul.appendChild(li);
        counter++;
    }
//   - Use for...of to add tasks with prefix "(for...of)".
    for (let task of tasks) {
        const li = document.createElement("li");
        li.textContent = `(for...of) ${task}`;
        ul.appendChild(li);
    }
//   - Use forEach to add tasks with prefix "(forEach)".
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = `(forEach) ${task}`;
        ul.appendChild(li);
    })

// STEP 5 — Show total task count in #taskCount.
    p.innerHTML = `<strong>Total task count: ${tasks.length}</strong>
                   <br>
                   <em>All ${tasks.length} tasks are shown in 4 ways hence ${tasks.length * 4} bullet points</em>`;

});