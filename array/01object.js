const smb = Symbol("8923245"); // Creates a unique symbol with the description "8923245"
const vrge = {
    name: "carrot", // Property: name of the vegetable
    "scientific name": "Daucus carota", // Property with a space in the key
    location: "china", // Property: location where it's grown
    [smb]: "boiling", // Symbol-keyed property (not directly accessible like regular keys)
    price: 90, // Property: price of the vegetable
    email: "carrot@carrot.com", // Property: email address for contact
    containnow: false, // Property: a boolean value
    majorproducer: ["china", "russia", "us"], // Array of major producers
    season: "winter" // Property: typical season of growth
};

// Accessing object properties using dot notation
console.log(vrge.name); // Outputs: "carrot"
console.log(vrge.location); // Outputs: "china"
console.log(vrge.price); // Outputs: 90
console.log(vrge.email); // Outputs: "carrot@carrot.com"
console.log(vrge.containnow); // Outputs: false
console.log(vrge.majorproducer); // Outputs: ["china", "russia", "us"]

// Updating an object property (email)
vrge.email = "carrot@vitamin.com"; // Modifies the email address
console.log(vrge); // Outputs the updated object with the new email

// Adding methods to the object
vrge.greeting = function() {
    console.log("hii, shubh prabhat"); // Simple greeting message
};

// Method that references the 'name' property of the object using 'this'
vrge.greetings = function() {
    console.log(`people please eat, ${this.name}`); // Uses 'this.name' to access the 'name' property
};

// Calling the object's methods
console.log(vrge.greeting()); // Outputs: "hii, shubh prabhat" and returns 'undefined'
console.log(vrge.greetings()); // Outputs: "people please eat, carrot" and returns 'undefined'

// Checking the types of the methods
console.log(typeof greeting); // Outputs: 'undefined' because there's no global variable 'greeting'
console.log(typeof greetings); // Outputs: 'undefined' because there's no global variable 'greetings'

// Checking the types of the methods attached to the object
console.log(typeof vrge.greeting); // Outputs: 'function' because 'greeting' is now a method of the object
console.log(typeof vrge.greetings); // Outputs: 'function' because 'greetings' is now a method of the object
