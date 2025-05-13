
/* STEP 1: Number types (integer, float, and double)
declare and initialize an integer and a float, then in the console, reveal the number type with typeof(varName) */
console.log("Number Types");
let myint = 5; // integer
let myfloat = 5.5; // float
console.log(typeof (myint)); // number
console.log(typeof (myfloat)); // number
// Note - there are also different number systems: binary, octal, and hexadecimal

let mybinary = 0b101;
let myoctal = 0o101;
let myhexadecimal = 0x101;
/* STEP 2: Arithmetic operators
+ (addition), - (subtraction), * (multiplication), / (division), % (remainder or modulo), ** (exponent) */


// Try declaring and initializing a couple of variables as numbers
console.log("Arithmetic Operators");
let num1 = 5;
let num2 = 10;

console.log(num1 + num2); // 15
console.log(num1 - num2); // -5
console.log(num1 * num2); // 50
console.log(num1 / num2); // 0.5
console.log(num1 % num2); // 5
console.log(num1 ** num2); // 5^10 = 9765625


/* OR… num1 * num2 / 8 + 2 - 0.5; */

/* Keep in mind operator precedence, just like you were taught in math class (/, *, +, -)
num1 + num2 * 5 - 25 ... is not 575 ... it is 215 */

/* If you want to avoid this precedence, use parenthesis
(num1 + num2) * 5 - 25 */

/* STEP 3: Increment and decrement operators
++ and -- are mostly found inside loops to move a counter variable to the next value when needed, either up or down. */
console.log("Increment and Decrement Operators");
let numincrement = 0;

numincrement++; // increment
console.log(numincrement); // 1

numincrement--; // decrement
console.log(numincrement); // 0

// Note 1 - you cannot increment/decrement a number directly
// Note 2 - typing num++ or num-- in the console will output the number before incrementing or decrmenting - try ++num or --num, instead

/* STEP 4: Assignment Operators
= (assignment), += (addition assignment), -= (subtraction assignment), *= (multiplication assignment), /= (division assignment) */
console.log("Assignment Operators");
num1 = 5;
console.log(num1);
num1 += 1;
console.log(num1);

num1 -= 1;
console.log(num1);

num1 *= 2;
console.log(num1);

num1 /= 2;
console.log(num1);

/* STEP 5: Comparison Operators
===	(strict equality), !==	(strict-non-equality), == (equality), < (less than), > (greater than), <= (less than or equal to), >=	(greater than or equal to) */
console.log("Comparison Operators");
let num3 = 5;
let num4 = 10;
console.log(num3 === num4); // false
console.log(num3 !== num4); // true
console.log(num3 == num4); // false
console.log(num3 < num4); // true
console.log(num3 > num4); // false
console.log(num3 <= num4); // true
console.log(num3 >= num4); // false
