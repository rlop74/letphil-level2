/*
Project 03 — Data Types & typeof 

Goal
  Create values of each major type and inspect them with typeof; note special cases.

STEP 1 — Create values:
  aString equals hello (string)
  aNumber equals 42 (number)
  aBoolean equals true (boolean)
  aNull equals null (null)
  anUndefined is declared but left without a value (undefined)
  anObject equals an object with key label set to sample
  anArray equals a list with values 1, 2, 3
  aFunction equals a function that returns the text hi

STEP 2 — Logs:
  Log typeof aString, typeof aNumber, typeof aBoolean, typeof aNull, typeof anUndefined, typeof anObject, typeof anArray, typeof aFunction in that order.

STEP 3 — Extra checks:
  Log whether Array check using an array checking helper returns true for anArray.
  Log a note that typeof null is the string object (historic quirk).
*/

const aString = "hello";
const aNumber = 42;
const aBoolean = true;
const aNull = null;
let anUndefined;
let anObject = { label: "sample" };
const anArray = [1, 2, 3];
function aFunction() {
  return "hi";
}

console.log(
  typeof aString,
  typeof aNumber,
  typeof aBoolean,
  typeof aNull,
  typeof anUndefined,
  typeof anObject,
  typeof anArray,
  typeof aFunction()
);

console.log(Array.isArray(anArray));

console.log("typeof null is the string object historic quirk");
