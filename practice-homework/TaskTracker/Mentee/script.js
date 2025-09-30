// ======================================================================
// PROJECT: TaskTracker Lite — DOM + Events
// PURPOSE: Connect JavaScript to HTML (DOM) and respond to events.
//
// ✅ REQUIRED NAMES:
//    IDs:        #taskForm, #taskInput, #addBtn, #status, #taskList, #themeBtn
//    Classes:    .header, .container, .task-item, .task-text, .btn,
//                .complete, .delete, .done
//    Variables:  form, input, statusEl, list, themeBtn
//    Functions:  addTaskItem(text), setStatus(message)
// ======================================================================

// STEP 1: Select elements by id and store in variables

// STEP 2: Add event listeners
//   - form.submit: preventDefault, validate input, call addTaskItem or setStatus
//   - themeBtn.click: toggle body.dark and aria-pressed

// STEP 3: Function addTaskItem(text)
//   - Create li.task-item
//   - Add span.task-text, button.btn.complete, button.btn.delete
//   - completeBtn toggles .done
//   - deleteBtn removes li and calls setStatus

// STEP 4: Function setStatus(message)
//   - Update statusEl.textContent

// STEP 5 (Optional): Save/load tasks with localStorage
