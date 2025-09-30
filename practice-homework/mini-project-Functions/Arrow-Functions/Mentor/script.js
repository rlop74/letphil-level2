// ===============================
// Arrow Functions — Mentor
// ===============================

// STEP 1 — Make a constant addArrow assigned to an arrow function that returns a+b.
const addArrow = (a, b) => a + b;

// STEP 2 — Make a constant squareArrow that returns n*n (use concise one-line form).
const squareArrow = n => n * n;

// STEP 3 — Make a constant describeArrow that takes (name, city) and returns a sentence.
const describeArrow = (name, city) => `${name} lives in ${city}.`;

// STEP 4 — Make a constant maxArrow that returns the max of two numbers using a conditional (?:).
const maxArrow = (a, b) => (a > b ? a : b);

// STEP 5 — TEST: Log calls to each arrow function with sample values.
console.log("addArrow(1,9) ->", addArrow(1,9));
console.log("squareArrow(5) ->", squareArrow(5));
console.log("describeArrow('Jocelin','CDMX') ->", describeArrow('Jocelin','CDMX'));
console.log("maxArrow(8,12) ->", maxArrow(8,12));
