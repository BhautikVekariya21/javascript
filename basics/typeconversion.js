let name ="dhruv"; // Declaring a string variable
console.log(typeof name); // Checking the type of 'name' (string)
let namenumber = Number(name); // Converting string to number
console.log(typeof name); // Checking the type again (still string)
console.log(name); // Outputting the original string value

let isloggedIn ="ratinol"; // Declaring another string variable
let boollog = Boolean(isloggedIn); // Converting string to boolean (truthy value)
console.log(typeof isloggedIn); // Checking the type (string)
console.log(isloggedIn); // Outputting the string value

let change ="2127"; // Declaring a string variable that looks like a number
let num = Number(change); // Converting string to number
console.log(typeof change); // Checking the type (still string)
console.log(isloggedIn); // Outputting the string value

let str1 = "di"; // Declaring a string variable
let str2 = "amonium"; // Declaring another string variable
let str3 = str1 + str2; // Concatenating strings
console.log(typeof str3); // Checking the type of concatenated string (string)
console.log(str3); // Outputting the concatenated string

console.log("1" + 2); // String concatenation (results in "12")
console.log(1 + "2"); // String concatenation (results in "12")
console.log("1" + 2 + 2); // String concatenation (results in "122")
console.log(1 + 2 + "2"); // Number addition followed by string concatenation (results in "32")

console.log((3 + 4) * 5 % 3); // Mathematical operation with parentheses

console.log(+true); // Unary plus converts true to 1
console.log(+""); // Unary plus converts an empty string to 0

let score = 97; // Declaring a numeric variable
score++; // Incrementing score by 1
console.log(score); // Outputting the incremented score
