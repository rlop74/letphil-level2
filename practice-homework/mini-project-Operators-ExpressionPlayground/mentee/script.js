/*
Mini Project — Expression Playground 

Goal
  Given two numbers, compute arithmetic, comparisons, logical results, and precedence examples; render lines in order.

Exact element ids required
  aInput, bInput, runBtn, resultList

STEP 1 — Selection
  Select the elements by id and store them with the exact names above.

STEP 2 — Parser
  Create a function named readNumber that converts a text input’s value to a number and returns the number.

STEP 3 — Compute
  Create a function named computeAll that takes numbers a and b and returns an object with keys in this exact list and order:
    sum, diff, prod, quot, mod,
    eqLoose, eqStrict, greater,
    bothEven, anyOver10, notEqual,
    precOne, precTwo

  Rules:
    sum is a + b
    diff is a - b
    prod is a * b
    quot is a / b
    mod is a % b
    eqLoose is a == b
    eqStrict is a === b
    greater is a > b
    bothEven is (a is even) and (b is even)
    anyOver10 is a > 10 or b > 10
    notEqual is not (a === b)
    precOne is a + b * 2
    precTwo is (a + b) * 2

STEP 4 — Render
  Create a function named renderResults that erases resultList, then appends list items in the key order listed above with the format Key: space Value.

STEP 5 — Handler
  When runBtn is clicked, read a and b, compute, and render.
*/
