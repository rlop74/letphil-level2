// GOAL: Convert a numeric score into a letter grade using else-if steps.
//
// STEP 1: GET PAGE ELEMENTS
// - Grab input#scoreInput, button#gradeBtn, p#result

const scoreInput = document.getElementById("scoreInput");
const gradeBtn = document.getElementById("gradeBtn");
const result = document.getElementById("result");

//
// STEP 2: LISTEN FOR CLICKS ON THE BUTTON
// - Read the input value, convert to Number.
// - If it's not a valid number or not within 0–100, show a friendly error message and stop.
gradeBtn.addEventListener("click", () => {
  const input = Number(scoreInput.value);
  if (Number.isNaN(input) || input <= 0 || input >= 100) {
    result.textContent = "Please enter a valid input";
    return;
  }

  if (input >= 90) {
    result.textContent = "Grade: A";
  } else if (input >= 80) {
    result.textContent = "Grade: B";
  } else if (input >= 70) {
    result.textContent = "Grade C";
  } else if (input >= 60) {
    result.textContent = "Grade: D";
  } else {
    result.textContent = "Grade: F";
  }
});

//
// STEP 3: ELSE IF CHAIN (ORDER MATTERS)
// - If score >= 90 → "Grade: A"
// - Else if score >= 80 → "Grade: B"
// - Else if score >= 70 → "Grade: C"
// - Else if score >= 60 → "Grade: D"
// - Else → "Grade: F"
//
// STEP 4: UPDATE result.textContent WITH THE FINAL MESSAGE
