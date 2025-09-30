/*
Project 04 — Operators & Expressions 

Goal
  Use arithmetic, comparison, logical, and string operators; observe precedence.

STEP 1 — Numbers
  n1 equals 10, n2 equals 3.
  sum equals n1 plus n2.
  diff equals n1 minus n2.
  prod equals n1 times n2.
  quot equals n1 divided by n2.
  mod equals the remainder of n1 divided by n2.

  

STEP 2 — Compare
  eqLoose checks if the number 5 is loosely equal to the text "5".
  eqStrict checks if the number 5 is strictly equal to the text "5".
  greater checks whether 10 is greater than 7.

STEP 3 — Logic
  andResult equals true and false.
  orResult equals true or false.
  notResult equals the negation of false.

STEP 4 — Strings
  first equals Hello
  last equals World
  joined equals first, a comma and a space, then last, then an exclamation mark.
  template equals the same content using a template literal approach.

STEP 5 — Precedence
  precOne equals 2 plus 3 times 4.
  precTwo equals open parenthesis 2 plus 3 close parenthesis times 4.

STEP 6 — Logging order
  Log results in this order:
  sum, diff, prod, quot, mod, eqLoose, eqStrict, greater, andResult, orResult, notResult, joined, template, precOne, precTwo.
*/

const n1 = 10,
  n2 = 3;

let sum = n1 + n2;

let diff = n1 - n2;

let prod = n1 * n2;

let quot = n1 / n2;

let mod = n1 % n2;

let eqLoose = 5 == "5";
let eqStrict = 5 === "5";
let greater = 10 > 7;

andResult = true && false;
orResult = true || false;
notResult = !false;

const first = "Hello";
const last = "World";
const joined = first + "," + last + "!";
const template = `${first}, ${last}!`;

precOne = 2 + 3 * 4;
precTwo = (2 + 3) * 4;

console.log(
  sum,
  diff,
  prod,
  quot,
  mod,
  eqLoose,
  eqStrict,
  greater,
  andResult,
  orResult,
  notResult,
  joined,
  template,
  precOne,
  precTwo
);
