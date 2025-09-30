// ===============================
// Traditional Functions — Mentor
// ===============================

// STEP 1 — Create a function named add that takes two numbers and returns the sum.
function add(a, b) {
  return a + b;
}

// STEP 2 — Create a function named greet that takes a name and returns the string 'Hello, <name>!'
function greet(name) {
  return "Hello, " + name + "!";
}

// STEP 3 — Create a function named isAdult that takes an age and returns true if age >= 18, otherwise false.
function isAdult(age) {
  return age >= 18;
}

// STEP 4 — Create a function named maxOfThree that returns the largest of three numbers.
function maxOfThree(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

// STEP 5 — TEST: Log each function call result to the console with sample inputs.
console.log("add(2,3) ->", add(2,3));
console.log("greet('Paradosso') ->", greet("Paradosso"));
console.log("isAdult(19) ->", isAdult(19));
console.log("isAdult(12) ->", isAdult(12));
console.log("maxOfThree(5,9,1) ->", maxOfThree(5,9,1));
