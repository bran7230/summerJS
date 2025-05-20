const output = document.querySelector('ul');

/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
let myArray =["string", true, 100, [5 , "hello"]];
output.textContent = myArray
/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
output.textContent = `The first element of the array inside my array is: ${myArray[3][0]}`;
// You can also change a particular element
myArray[1] = false;
// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
myArray[3][1] = "test";
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
let total = myArray.length + myArray[3].length;
// output.textContent =`There are ${myArray.Length} elements in myArray`;
output.textContent =`There are a total of ${total} elements in myArray`;
output.textContent = "";
// In particular, looping through arrays
for(let i = 0; i < myArray.length; i++){
    let listItem = document.createElement('li');
    output.append(listItem);
    //check if element is an array
    if(Array.isArray(myArray[i]))
    {
        let childList = document.createElement('ul');
        listItem.append(childList);
        for(let k = 0; k < myArray[i].length; k++){
            let childItem = document.createElement('li');
            childList.append(childItem);
            childItem.textContent = `${myArray[i][k]}, `; 
        }
    }
    else{
   
    listItem.textContent = `${myArray[i]}, `;
    }
    
};
/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let myString = "Toronto maple leafs, Chicago blackhawks, New York Rangers, Montreal Canadiens";
// Output one of the array items
let myStringArray = myString.split(", ");
console.log(myStringArray);
// Output the last element of the array
console.log(`Last element of the array is ${myStringArray[myStringArray.length - 1]}`)
/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
let myOrigString = myStringArray.toString();
let newString = myStringArray.join(" | ");
/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */
myStringArray.push("Boston Bruins");
// Adding one or more items to an array with push()

// If you would like to capture how many elements are in the array after you have edited it, then…
let myStringArrayLength = myStringArray.push("Pittsburgh Penguins", "New Jersey Devils");
// Removing an item from an array with pop()
//myStringArray.pop();
// pop() returns the item that was removed, rather than the length of the updated array, so…
let removedElement = myStringArray.pop();

// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
myStringArray.shift();
myStringArray.unshift()
// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()
myStringArray.splice(2, 1, "Florida Panthers", "Tampa Bay Lightning");
/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */