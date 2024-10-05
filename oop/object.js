
// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.


// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.


// Function to multiply a number by 8
function mul(num) {
    return num * 8; // Returns the product of num and 8
}

// Call the mul function with the argument 11
console.log(mul(11)); // Output: 88

// Log the prototype of the mul function (will be an empty object)
console.log(mul.prototype); // Output: {}

// Constructor function for creating user objects
function creatuser(username, score) {
    this.username = username; // Set the username
    this.score = score; // Set the score
}

// Add an increment method to the creatuser prototype
creatuser.prototype.increment = function() {
    this.score++; // Increment the score by 1
}

// Add a printme method to the creatuser prototype
creatuser.prototype.printme = function() {
    console.log(`Score of ${this.username} is ${this.score}`); // Print the user's score
}

// Create two instances of creatuser
const kelvin = new creatuser("kelvinpipes", 97); // Instance with username 'kelvinpipes' and score 97
const kelvins = new creatuser("kelvinpies", 94); // Instance with username 'kelvinpies' and score 94

// Increment the scores of both users
kelvin.increment(); // Score of kelvin increases from 97 to 98
kelvins.increment(); // Score of kelvins increases from 94 to 95

// Print the scores of both users
kelvin.printme(); // Output: Score of kelvinpipes is 98
kelvins.printme(); // Output: Score of kelvinpies is 95

// Output
// Running this code will yield:
// 88
// {}
// Score of kelvinpipes is 98
// Score of kelvinpies is 95
