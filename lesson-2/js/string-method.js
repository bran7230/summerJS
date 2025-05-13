var output = document.querySelector('p');
let startString = "'Hello World!'";
/* STEP 1: String Length */

output.textContent = startString + ": String length = " + startString.length + " ";

/* STEP 2: Retrieving a Specific String Character */


let charFind = startString.indexOf('W');
output.textContent += startString + ": Character at index 0 = " + startString.charAt(0) + " Charecter W index = " + charFind;

/* STEP 3: Extracting Part of a String */

output.textContent += "Subtstring or part of string = " + startString.substring(0, 5) + " ";
// Note - if the substring is not found within the string, indexOf() returns -1

// Note - if you don't specify where to end the slice, the method returns the rest of the string

/* STEP 4: Changing Case */

output.textContent += "Uppercase string = " + startString.toUpperCase() + " ";

/* STEP 5: Updating Parts of a String */

let newString = startString.replace('World', 'Universe').toUpperCase();
output.textContent += " Updated string = " + newString + " ";

console.log( 3 == "3");
console.log(3 ==="3");
