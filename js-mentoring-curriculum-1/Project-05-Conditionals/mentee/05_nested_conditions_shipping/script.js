// GOAL: Practice nested if/else and logical operators (&&, ||) to compute a shipping cost.
//
// RULES (example logic):
// - Base cost by country:
//   US → 5, CA → 7, OTHER → 10
// - Add by weight:
//   If weight > 5kg add 10, else if weight > 1kg add 5, else add 0
// - Express shipping adds 15 if selected
//
// STEP 1: GET ELEMENTS
// - select#country, input#weight, select#isExpress, button#calcBtn, p#result
//
// STEP 2: LISTEN FOR CLICK
// - Parse weight as Number; validate it.
// - Read isExpress selection ("yes"/"no") and country code.
//
// STEP 3: START WITH baseCost BY COUNTRY (if / else if / else)
// - If country === "US" → baseCost = 5
// - Else if country === "CA" → baseCost = 7
// - Else → baseCost = 10
//
// STEP 4: ADD WEIGHT SURCHARGE (nested conditions)
// - If weight > 5 → add 10
// - Else if weight > 1 → add 5
// - Else → add 0
//
// STEP 5: EXPRESS OPTION
// - If isExpress === "yes" → add 15
//
// STEP 6: DISPLAY TOTAL AS A NICE MESSAGE
