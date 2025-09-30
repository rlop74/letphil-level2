// ===============================
// Anonymous Functions — Mentor
// ===============================

// STEP 1 — Use setTimeout with an anonymous function to log 'Done!' after 500ms.
setTimeout(function() {
  console.log("Done!");
}, 500);

// STEP 2 — Make an array of numbers and use forEach with an anonymous function to log each double.
[1,2,3,4].forEach(function(n) {
  console.log("double:", n * 2);
});

// STEP 3 — Use map with an anonymous function to return numbers squared.
const squared = [2,3,4].map(function(n) {
  return n * n;
});
console.log("squared ->", squared);

// STEP 4 — Use filter with an anonymous function to keep only strings longer than 3 letters.
const items = ['pen','book','AI','tool'];
const longOnly = items.filter(function(str) {
  return str.length > 3;
});
console.log("longOnly ->", longOnly);

// STEP 5 — Use reduce with an anonymous function to sum an array; log the result.
const total = [5,10,15].reduce(function(acc, n) {
  return acc + n;
}, 0);
console.log("sum ->", total);
