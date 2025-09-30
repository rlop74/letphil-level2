/*
Mini Project — Shipping Quote 

Goal
  Use if/else chains, combined conditions, and a ternary to compute a simple shipping quote with a breakdown.

Exact element ids required
  weightInput, distanceInput, isMemberInput, quoteBtn, output

STEP 1 — Selection
  Select elements by id and store them with the exact names above.

STEP 2 — Base numbers
  baseFee equals 5
  perKg equals 1.2

STEP 3 — Validation
  If weight is not greater than 0 or distance is not greater than 0, show Enter valid values and stop.

STEP 4 — Distance surcharge
  Create a variable named surcharge.
  When distance is greater than 1000, surcharge equals 15.
  Otherwise when distance is greater than 500, surcharge equals 7.
  Otherwise surcharge equals 0.

STEP 5 — Oversize fee
  Create a variable named oversize that equals 10 when weight is greater than 20, otherwise 0.

STEP 6 — Member discount
  Use a variable named discountRate that equals 0.10 when isMemberInput is checked, otherwise 0.
  Compute preDiscount as baseFee plus weight multiplied by perKg plus surcharge plus oversize.
  discountAmount equals preDiscount multiplied by discountRate.
  total equals preDiscount minus discountAmount.

STEP 7 — Output
  Build exactly these lines and show them in the output area:
    Shipping Quote
    Base: $<baseFee to two decimals>
    Weight: $<weight * perKg to two decimals>
    Surcharge: $<surcharge to two decimals>
    Oversize: $<oversize to two decimals>
    Discount: -$<discountAmount to two decimals>
    Total: $<total to two decimals>

STEP 8 — Wiring
  When quoteBtn is clicked, compute and show the quote.
*/

const weightInput = document.getElementById("weightInput");
const distanceInput = document.getElementById("distanceInput");
const isMemberInput = document.getElementById("isMemberInput");
const quoteBtn = document.getElementById("quoteBtn");
const output = document.getElementById("output");

const baseFee = 5;
const perKg = 1.2;

quoteBtn.addEventListener("click", () => {
  // STEP 3
  const weight = parseFloat(weightInput.value);
  const distance = parseFloat(distanceInput.value);

  if (weight < 0 || distance < 0) {
    output.textContent = "Enter valid values";
    return;
  }
  
  // STEP 4
  let surcharge;
  
  if (distance > 1000) {
    surcharge = 15;
  } else if (distance > 500) {
    surcharge = 7;
  } else {
    surcharge = 0;
  }
  
  // STEP 5
  let oversize;

  if (weight > 20) {
    oversize = 10;
  } else {
    oversize = 0;
  }
  
  // STEP 6
  let discountRate;

  if (isMemberInput.checked) {
    discountRate = 0.10;
  } else {
    discountRate = 0;
  }

  const preDiscount = baseFee + (weight * perKg + surcharge + oversize);
  const discountAmount = preDiscount * discountRate;
  const total = preDiscount - discountAmount;

  // STEP 7
  output.textContent = `Shipping Quote
  Base: ${baseFee}
  Weight: ${weight}
  Surcharge: ${surcharge}
  Oversize: ${oversize}
  Discount: -${Math.round(discountAmount * 100) / 100}
  Total: ${Math.round(total * 100) / 100}`

  console.log(weight, distance, isMemberInput.checked);
})