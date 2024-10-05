// Counter object using an IIFE to create a private scope for 'count'
const counter = (function () {
    let count = 0; // Private variable, inaccessible from outside

    return {
        // Method to increment 'count' and log its value
        increment: function () {
            count++; // Increases 'count' by 1
            console.log("Counter:", count); // Logs the current value of 'count'
        },
        // Method to return the current value of 'count'
        getValue: function () {
            return count; // Returns the current value of 'count'
        }
    };
})();

// Calling the 'increment' method twice
counter.increment(); // Output: "Counter: 1"
counter.increment(); // Output: "Counter: 2"

// Logging the current value of 'count' using 'getValue'
console.log(counter.getValue()); // Output: 2


// IIFE using an arrow function that takes a parameter (name) and logs a welcome message
((name) => {
    console.log(`welcome ${name}`);
})("Brinjal"); // Output: "welcome Brinjal"


// Traditional IIFE using a named function expression
(function vinuska() {
    console.log("hello vinuska");
})(); // Output: "hello vinuska"


// IIFE using an arrow function without parameters
(() => { 
    console.log("hello vishakha"); 
})(); // Output: "hello vishakha"
