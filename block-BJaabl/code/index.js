/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/


function sayHello () {
  let name = "vandana"
  alert(`Hello ${name}`);
}
sayHello ();


/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/

function getFullName (firstName, lastName) {
  
  return `${firstName} ${lastName}`;
}
let name1 = getFullName ("John", "Snow");
let name2 = getFullName ("Nelson", "Mandela");


/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/


function addTwoNumbers (firstNum, secondNum) {
  if(typeof firstNum === 'number' && typeof secondNum === 'number'){
    return firstNum + secondNum;
  } else{
    alert("Enter valid input");
  }
} 
let num1 = addTwoNumbers (10, 22);
let num2 = addTwoNumbers (20, 32);
let num3 = addTwoNumbers(10, "100");


/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/

function calc (numA, numB, operator) {
  if(typeof numA === 'number' &&  typeof numB === 'number' && operator === 'add'){
    return numA + numB ;
  } else if(typeof numA === 'number' &&  typeof numB === 'number' && operator === 'sub'){
    return numA - numB ;
  } else if(typeof numA === 'number' &&  typeof numB === 'number' && operator === 'mul'){
    return numA * numB ;
  } else {
    alert("Enter Valid Input");
  }
}


let numA = calc(12, 12 ,'add');
let numB = calc(20, 10, 'sub');
let numc = calc(10, 10, 'mul');

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

function isLeapYear (year) {
  if(year % 4 === 0 && year % 400 === 0) {
    return true;
  } else if(year % 100 === 0 ) {
    return false;
  } else {
    return false;
  }
}

let year1 = isLeapYear(2000);
let year2 = isLeapYear(2001);


/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/

   
function getFactorial(number) {

  let factorial = 1;
  for(let i=1; i<= number; i++){
     factorial = factorial *i;
  }
  return(`The Factorial of ${number} is ${factorial}`);
}

let number = getFactorial(5);

