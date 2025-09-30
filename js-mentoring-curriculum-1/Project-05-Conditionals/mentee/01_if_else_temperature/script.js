// GOAL: Read a number from the input, then use if/else to display a clothing suggestion.
// ANALOGY: Like checking the weather in the morning to decide your outfit.

//
// STEP 1: GET ELEMENTS FROM THE PAGE
// - Use document.getElementById(...) to capture:
//   - The input with id "tempInput"
//   - The button with id "adviseBtn"
//   - The paragraph with id "result"

const tempInput = document.getElementById("tempInput");
const button = document.getElementById("adviseBtn");
const paragraph = document.getElementById("result");

//
// STEP 2: ADD A CLICK EVENT LISTENER TO THE BUTTON
// - Use element.addEventListener("click", function() { ... })
// - Inside the function, read the input's value (it's a string), then convert to a number (Number(...) or parseFloat(...)).

button.addEventListener("click", () => {
  const temp = tempInput.valueAsNumber;

  if (isNaN(temp)) {
    paragraph.textContent = "Add a valid temperature in celsius";
    return;
  }

  if (temp >= 30) {
    paragraph.textContent = "It's hot! Wear shorts";
  } else if (temp >= 20) {
    paragraph.textContent = "It's warm, A t-shirt works";
  } else {
    paragraph.textContent = "Its chilly. Grab a jacket";
  }
});

// STEP 3: WRITE THE IF / ELSE IF / ELSE DECISION
// - If temperature is >= 30 → result: "It’s hot! Wear shorts."
// - Else if temperature is >= 20 → result: "It’s warm. A t-shirt works."
// - Else → result: "It’s chilly. Grab a jacket."

// let temperature = 30;

// if(temperature is >=30, "It's hot! Wear shorts") {
//     else if(temperature is >= 20. "It's warm, A t-shirt works") {
//         else("its chilly. Grab a jacket");
//     }
// }

//
// STEP 4: DISPLAY THE MESSAGE
// - Put the final message into result.textContent so the user sees it.
//
// STEP 5 (OPTIONAL): VALIDATE INPUT
// - If the value is empty or not a number (Number.isNaN(value)), show a helpful message and return.
