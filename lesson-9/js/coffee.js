const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee{
    size;
    isDecaf;
    
    constructor(size, isDecaf){
        this.size = size;
        this.isDecaf =isDecaf ? 'decaf' : 'caffeinated';
    }

    serveIt(){
        let cup = document.createElement("img");
        cup.setAttribute("alt", "A cup of coffee");
        
        if(this.isDecaf){
            cup.setAttribute("src", "../lesson-9/images/coffee-cup-green.svg");
        } else{
            cup.setAttribute("src", "summerJS/lesson-9/images/coffee-cup-purple.svg")
        }

        switch(this.size){
            case 'small':
                cup.setAttribute("height", "100");
                break;
            case 'medium':
                cup.setAttribute("height", "150");
                break;
            case 'large':
                cup.setAttribute("height", "200");
                break;
            default:
                cup.setAttribute("height", "150");
        }

        cup.setAttribute("title", `A ${this.size} sized ${this.isDecaf} coffee`);
        output.appendChild(cup);
        
    }
}
/* STEP 2: Instatiate a coffee based on the above constructor function */
let brandonCoffee = new Coffee('medium', false);
brandonCoffee.serveIt();
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */
class Latee extends Coffee{
    qtyCream;
    qtySugar;

    constructor(size, isDecaf, qtyCream, qtySugar){
        super(size, isDecaf);
        this.qtyCream = qtyCream;
        this.qtySugar = qtySugar;
    }

    latteDesc(){
        alert (`A ${this.size} sized ${this.isDecaf} latte with ${this.qtyCream} cream and ${this.qtySugar} sugar.`);
    }
}
/* STEP 6: Create a new instance of the Latte object */
/* STEP 7: Call up the latteDesc() method for the above created Latte instance */
let brandonLatte = new Latee('large', true, 2, 1);
brandonLatte.latteDesc();
/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
