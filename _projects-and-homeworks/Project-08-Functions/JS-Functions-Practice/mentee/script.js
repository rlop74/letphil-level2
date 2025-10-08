// ==========================
// TRADITIONAL FUNCTIONS
// ==========================

// STEP 1: Create a function named sayHello that logs 'Hello!'

// STEP 2: Create a function addNumbers that adds 2 numbers and logs the result

// STEP 3: Create a function greetUser that takes a name and says hello

// STEP 4: Create a function that multiplies two numbers and logs it

// STEP 5: Create a function that logs your favorite quote

// STEP 6: Call all the functions you created above

function sayHello() {
  console.log("Hello!");
}

sayHello();

function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(1, 2));

function greetUser(name) {
  console.log("Hello user!," + name);
}
greetUser("Maria");

function multiplyNumber(a, b) {
  console.log(a * b);
}
multiplyNumber(1, 2);

function logFavoriteQuote(quote) {
  console.log(quote);
}

logFavoriteQuote("Thall shall not pass!");

// ==========================
// FUNCTION EXPRESSIONS
// ==========================

// STEP 7: Create a function expression named sayBye that logs 'Bye!'

// STEP 8: Create a function expression named subtractNumbers that subtracts 2 numbers

// STEP 9: Create a function expression named greetAgain that takes a name and says hello again

// STEP 10: Create a function expression named divideNumbers that divides 2 numbers

// STEP 11: Create a function expression named bestFood that logs your favorite food

// STEP 12: Call all the function expressions you created above

const sayBye = function () {
  console.log("Bye!");
};

sayBye();

const subtractNumbers = function (a, b) {
  console.log(a - b);
};
subtractNumbers(2, 4);

const greetAgain = function (name) {
  console.log(`Hello again, ${name}!`);
};

greetAgain("John");

const divideNumbers = function (num1, num2) {
  console.log(num1 / num2);
};
divideNumbers(10, 2);

const bestFood = function (food) {
  console.log(`My favorite food is ${food}!`);
};

bestFood("pasta");

// const favoriteQuote = logFavoriteQuote("Hi");

// favoriteQuote();

// function logFavoriteQuote() {
//   return function (quote) {
//     console.log("whatever this quote is");
//   };

// }

// ==========================
// ARROW FUNCTIONS (ES6)
// ==========================

// STEP 13: Create an arrow function named welcome that logs 'Welcome!'

const welcome = () => {
  console.log("Welcome!");
};

welcome();

// STEP 14: Create an arrow function named square that squares a number

const square = (n) => {
  console.log(n * n);
};
square(5);

// STEP 15: Create an arrow function named sayName that logs 'My name is ...'

const sayName = (name) => {
  console.log(`My name is ${name}`);
};
sayName("Maria");

// STEP 16: Create an arrow function named cube that cubes a number

const cube = (n) => console.log(n * n * n);
cube(3);

// STEP 17: Create an arrow function named dreamPlace that logs your dream vacation place

const dreamPlace = (place) => console.log(place);
dreamPlace("Greece");

// STEP 18: Call all the arrow functions you created above

// ==========================
// ANONYMOUS FUNCTIONS
// ==========================

// STEP 19: Use setTimeout with an anonymous function that logs 'This is anonymous' after 1 second

setTimeout(function () {
  console.log("This is anonymous after 1 second");
}, 1000);

// STEP 20: Use forEach on an array with an anonymous function to log each item

const arr = ["Apple", "Banana", "Cherry"];
arr.forEach((item) => {
  console.log(item);
})

// STEP 21: Use map with an anonymous function to double numbers in an array

const nums = [1, 2, 3];
const doubled = nums.map((num) => num * 2)
console.log(doubled);

// STEP 22: Use filter with an anonymous function to keep only even numbers

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = nums2.filter((num) => num % 2 === 0);
console.log(evenNums);

// STEP 23: Use reduce with an anonymous function to sum numbers in an array

const nums3 = [1, 2, 3, 4, 5];
const sum = nums3.reduce((a,b) => a + b);
console.log(sum);