const num = 23; // Declaring a constant variable 'num' with a numeric value
let str = "engine"; // Declaring a block-scoped variable 'str' with a string value
var pass = 11215; // Declaring a function-scoped variable 'pass' with a numeric value
city = "Halstatt"; // Declaring a global variable 'city' without a keyword (not recommended)

console.log(num); // Outputting the value of 'num'
console.log(str); // Outputting the value of 'str'
console.log(pass); // Outputting the value of 'pass'
console.log(city); // Outputting the value of 'city'

// Displaying the variables in a table format
console.table([num, str, pass, city]);
