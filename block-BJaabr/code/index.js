// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration


function addOne(numA, numB) {
  return String(numA + numB);
}



// - Write a Function Expression

const addOne = function add(numA, numB) {
  return String(numA + numB);
}


// - Write an Arrow Function without curly brackets(if possible)

const addOne = (numA, numB) => String(numA + numB);


// - Write an Arrow Function with curly brackets

const addOne = (numA, numB) =>{
  return String(numA + numB);
} 

// - Execute the function

addOne(21.21);


// - Execute the function and store the return value in a variable.

let returnValue = addOne(23,21);


// - What is the typeof returnValue

"number"

/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration

function substractOne(numA, numB) {
  return numA - numB;
}

// - Write a Function Expression

const substractOne = function sub(numA, numB) {
  return numA - numB;
}


// - Write an Arrow Function without curly brackets(if possible)

const substractOne = (numA, numB) => numA - numB;

// - Write an Arrow Function with curly brackets

const substractOne = (numA, numB) =>{
  return (numA - numB);
} 

// - Execute the function

substractOne(10,5);

// - Execute the function and store the return value in a variable.
let returnValue = substractOne(5);

// - What is the typeof returnValue

"undefined"

/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration

function sum (num1,num2) {
  return num1 + num2;
}


// - Write a Function Expression

const sum = function add(num1,num2) {
  return num1 + num2;
}

// - Write an Arrow Function without curly brackets(if possible)

const sum = (num1, num2) => num1 + num2;

// - Write an Arrow Function with curly brackets

const sum = (num1, num2) => {
  return num1 + num2;
}


// - Execute the function

sum(21,21);

// - Execute the function and store the return value in a variable

let returnValue = sum(42);

// - What is the typeof returnValue

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration

function square(num1) {
  return num1 * num1;
}

// - Write a Function Expression

const square = function square(num1) {
  return num1 * num1;
}

// - Write an Arrow Function without curly brackets(if possible)

const square = (num1) => num1 * num1;

// - Write an Arrow Function with curly brackets

const square = (num1) => {
  return num1 * num1;
}

// - Execute the function

square(5);

// - Execute the function and store the return value in a variable

let returnValue = square(25);

// - What is the typeof returnValue

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration

function isGreater(x,y){
  if(x > y){
    return(true);
  } else {
    return(false)
  }
}

// - Write a Function Expression

const isGreater = function (x,y) {
  if(x > y){
    return(true);
  }else {
    return(false)
  }
}

// - Write an Arrow Function without curly brackets(if possible)

const isGreater = (x,y) => x > y;

// - Write an Arrow Function with curly brackets

const isGreater = (x,y) => {
  return x > y;
}

// - Execute the function

isGreater(x,y);

// - Execute the function and store the return value in a variable

let returnValue = isGreater(x>y);

// - What is the typeof returnValue

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration

function oddOrEven(number){
  if(number % 2 === 0){
    return `${number} is even`
  }else {
    return `${number} is odd`
  }
}

// - Write an anonymous Function Expression

const oddOrEven = function (number) {
  if(number % 2 === 0){
    return `${number} is even`
  }else {
    return `${number} is odd`
  }
}

// - Write an named Function Expression

const oddOrEven = function (number) {
  if(number % 2 === 0){
    return `${number} is even`
  }else {
    return `${number} is odd`
  }
}

// - Write an Arrow Function without curly brackets (hint: use ternary operator)



// - Write an Arrow Function with curly brackets

const oddOrEven = (number) => {
  if(number % 2 === 0){
    return `${number} is even`
  }else {
    return `${number} is odd`
  }
}

// - Execute the function

oddOrEven(2)

// - Execute the function and store the return value in a variable

// - What is the typeof returnValue


