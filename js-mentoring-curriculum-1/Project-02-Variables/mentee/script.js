/*
Project 02 — Variables 



STEP 1 — Create 8 variables with the exact names and initial values.
  Use let for values that may change; use const for values that should not change.
  Say the intended type for each in a comment (string, number, or boolean).

  1) firstName — string — Alex (use const)
  2) lastName — string — Rivera (use const)
  3) age — number — 28 (use let)
  4) isMember — boolean — true (use let)
  5) city — string — Monterrey (use let)
  6) itemsInCart — number — 3 (use let)
  7) hasCoupon — boolean — false (use let)
  8) favoriteLanguage — string — JavaScript (use const)

STEP 2 — Log each variable on its own line, in the order listed above.

STEP 3 — Update two let variables and log again:
  Increase age by 1 and set hasCoupon to true.
  Log age and hasCoupon after the change.
*/

const firstName = "Alex";
const lastName = "Maiella";
let age = 28;
let isMember = true;
let city = "chicago";
let itemsInCart = 3;
let hasCoupon = false;
const favoriteLanguage = "Javascript";

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isMember);
console.log(city);
console.log(itemsInCart);
console.log(hasCoupon);
console.log(favoriteLanguage);

age = age + 1;
hasCoupon = true;

console.log(age);
console.log(hasCoupon);
