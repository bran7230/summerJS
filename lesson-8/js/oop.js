const output = document.getElementById('output');

/* STEP 1a: Create a new object using a regular function */
function createNewVehicle(make, model, color){

    let obj = {};
    obj.make = make;
    obj.model = model;
    obj.color = color;

    return obj;
}

/* STEP 1b: Use the console to create a new album object, and then invoke the function represented using .describe() */
let vehicle1 = createNewVehicle("Honda", "Cicic", "Black");

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - rewrite the above function, without returning anything. Capitalize the name of the function. */


/* STEP 2b: Use the console to create a couple of different albums, using the 'new' keyword, and again invoking the .describe() method for each one */


/* STEP 3a: Build the complete constructor for the object Album (comment out the above functions first). Include album name, artist, year, number of tracks, and description (function). */
function Vehicle(make, model, color){
    this.make = make;
    this.model = model;
    this.color = color;

    this.describe = function() {
        alert(`This vehicle is a ${this.color} ${this.make} ${this.model}.`);
    };
}

let car1 = new Vehicle("Toyota", "Corolla", "Blue");
let car2 = new Vehicle("Ford", "Mustang", "Red");
/* STEP 3b: Instantiate a new Album (or 2) based on the above constructor */



/* STEP 3c: Attempt to access the various properties of album2 or album3 using the console. */
// album2['name']
// album2['artist']
// album2.numTracks
// album2.year
/* STEP 3d: Invoke a method belonging to one of the album objects */
// album2.describe()
// album3.describe()

/* STEP 4a: Modify the describe method of the above Album constructor so that it returns a string. */

/* STEP 4b: Capture the description of one of the album objects and set it as the text for the paragraph on the page (see line 1 of this script). */


// That's it! Now on to the Lab...

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
