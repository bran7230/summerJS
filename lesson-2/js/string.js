
const output = document.querySelector('p');

/* STEP 1: Creating Strings */
let string1 = 'Hello World'; // single quotes
let string2 = "Hello World"; // double quotes

// Note - whether you use 'single' or "double" quotes is a personal preference - try to be consistent

/* STEP 2: Escaping Characters */

let escapedString = "Hello \"World\""; // escaping double quotes
console.log(escapedString);
/* STEP 3: Concatenation */
let string3 = string1 + ' ' + string2; // concatenation

/* STEP 4: Numbers and Strings */
let number1 = 5;
let number2 = 10;
let finalstring = "3";

// numbers can be converted to strings
number1 = number1.toString();
console.log(number1);
// strings can be converted to numbers, too
number1 = parseInt(finalstring);
console.log(number1);
// and back again, if we want