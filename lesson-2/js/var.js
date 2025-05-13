/* STEP 1: Declare variables
	Use a-z, 0-9, A-Z and underscores, avoiding reserved names
	All program variables are generally declared at the beginning */

let var1;
let var2;
let var3;
let var4;
let var5;
/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
var1 = 10;
var2 = "hello world";
var3 = true;
var4 = [1, 2, 3, 4, 5];
var5 = { name: "John", age: 100, city: "New" };

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */

var1 = 20;
var2 = "goodbye world";
var3 = false;
var4 = [6, 7, 8, 9, 10];
var5 = { name: "Pork", age: 30, city: "New York" };

// STEP 4: Variable types (use typeof in the console)
// Numbers
console.log(typeof (var1));
// Strings (use '' or "")
console.log(typeof (var2));
// Booleans
console.log(typeof (var3));
// Arrays
console.log(typeof (var4));
// Objects
console.log(typeof (var5));
// STEP 5: Typing (JavaScript is a loosely-typed language)