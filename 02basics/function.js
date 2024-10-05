// A function with a greeting message (currently commented out)
function greet() {
    // console.log("good morning to the cutiepie" + " looking very nice");
}

// Calling the 'greet' function (nothing will happen because it's commented out)
greet();

// Function to sum two numbers and return the result
function summetion(number1, number2) {
    let result = number1 + number2;
    return result;
}

// Calling the summetion function and storing the result in 'summ'
const summ = summetion(11, 21);
// console.log(summ); // Output: 32

// Function with a default parameter (username) to return a message
function usermessage(username = "Dhruv") {
    return `${username} you are arrived`;
}
// console.log(usermessage("Brinjal")); // Output: "Brinjal you are arrived"

// Function using rest parameters to collect additional arguments
function totalprice(value1, value2, value3, ...num) {
    return num; // Returning the collected arguments as an array
}
// console.log(totalprice(121, 11, 117, 112, 254, 2112, 212)); // Output: [112, 254, 2112, 212]

// Using a Symbol as a unique property in an object
const smb = Symbol("8923245");
const vocal = {
    name: "carrot",
    "scientific name": "Daucus carota",
    location: "china",
    [smb]: "boiling", // Symbol property, which won't appear in regular loops
    price: 90,
    email: "carrot@carrot.com",
    containnow: false,
    majorproducer: ["china", "russia", "us"], // Array of producers
    season: "winter"
};

// Function to log some properties of an object
function localhost(anyobject) {
    console.log(`name is ${anyobject.name} and location is ${anyobject.location} and major producer is ${anyobject.majorproducer}`);
}
// Calling the 'localhost' function with the 'vocal' object
localhost(vocal); 
// Output: "name is carrot and location is china and major producer is china,russia,us"

// Array of numbers
const numstan = [99, 89, 97, 112];

// Function to log the third element of an array
function numbr(anyarray) {
    console.log(anyarray[2]); // Accessing the element at index 2
}
// Calling 'numbr' with the 'numstan' array
console.log(numbr(numstan)); // Output: 97

// Calling 'numbr' with a different array
console.log(numbr([11, 23, 41, 31])); // Output: 41
