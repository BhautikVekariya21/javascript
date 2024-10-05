"use strict";

// Creating an object 'user' with properties and a method
const user = {
    username: "Brinjal", // Property to store the username
    price: 723, // Property to store the price
    welcome: function () {
        // Method to display a welcome message
        console.log(`${this.username} welcome to the website`);
        console.log(this); // 'this' refers to the current object (user)
    }
};

// Calling the 'welcome' method to display a welcome message
user.welcome();

// Changing the username and calling 'welcome' again
user.username = "eshodha";
user.welcome();

// Logging 'this' in the global scope (will refer to global object or undefined in strict mode)
console.log(this);

// Function declaration using the 'function' keyword
const cinneman = function () {
    let username = "spices"; // Local variable (not affecting the 'user' object)
    let prices = 121; // Local variable
    console.log(this); // In a normal function, 'this' refers to the global object or undefined in strict mode
};

// Calling 'cinneman' function
cinneman();

// Arrow function declaration
const cinnemanroll = () => {
    let username = "spices"; // Local variable
    let prices = 1212; // Local variable
    console.log(this); // In arrow functions, 'this' refers to the surrounding context (here, the global scope)
};

// Calling 'cinnemanroll' arrow function
cinnemanroll();

// Arrow function examples
// 1. Function with explicit 'return'
const summ = (num1, num2) => {
    return num1 + num2;
};

// 2. Function with implicit 'return'
const sum = (num1, num2) => num1 + num2;

// 3. Arrow function using parentheses for implicit return
const sume = (num1, num2) => (num1 + num2);

// 4. Arrow function with explicit 'return' but block syntax
const sumq = (num1, num2) => { return num1 + num2; };

// 5. Arrow function returning an object
const sumu = (num1, num2) => ({ username: "picric acid" });

// Calling and logging results of the functions
console.log(sum(1, 3)); // Output: 4
console.log(summ(1, 7)); // Output: 8
console.log(sume(1, 9)); // Output: 10
console.log(sumq(1, 2)); // Output: 3
console.log(sumu(10, 20)); // Output: { username: "picric acid" }
