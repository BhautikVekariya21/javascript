// Falsy Values
// Falsy values in JavaScript include:
// - false
// - 0
// - -0
// - BigInt 0n
// - "" (empty string)
// - null
// - undefined
// - NaN

// Truthy Values
// Truthy values are values that evaluate to true in a boolean context, including:
// - "0" (non-empty string)
// - 'false' (non-empty string)
// - " " (whitespace string)
// - [] (empty array)
// - {} (empty object)
// - function(){} (function)

const lamp = []; // An empty array
if (lamp) { // Evaluating the truthiness of 'lamp'
    console.log(`lamp`); // This will be logged because the empty array is truthy
    console.log(this); // 'this' will refer to the global object (or undefined in strict mode)
} else {
    console.log("lamp does not have any value");
}

if (lamp.length === 0) { // Checking if the length of 'lamp' is zero
    console.log("lamp length is zero"); // This will be logged since 'lamp' is empty
}

const lamputin = {}; // An empty object
if (lamputin) { // Evaluating the truthiness of 'lamputin'
    console.log(`lamp`); // This will be logged because the empty object is truthy
    console.log(this); // 'this' will refer to the global object (or undefined in strict mode)
} else {
    console.log("lamp does not have any value");
}

// Checking if the object is empty
if (Object.keys(lamputin).length === 0) { // Using Object.keys() to check for keys in 'lamputin'
    console.log("object is empty"); // This will be logged since 'lamputin' has no keys
    console.log(this); // 'this' will refer to the global object (or undefined in strict mode)
} else {
    console.log("lamp does not have any value");
}

// Nullish Coalescing Operator (??)
// This operator returns the right-hand operand when the left-hand operand is null or undefined

let value = 0; // Assigning 0 to 'value'
let result = value ?? 10; // 'result' will be 0 since 'value' is not null or undefined
console.log(result); // Output: 0

let finalresult = "usa" ?? null; // 'finalresult' will be "usa"
console.log(finalresult); // Output: "usa"

let fidalresult = undefined ?? null; // 'fidalresult' will be null since 'undefined' is nullish
console.log(fidalresult); // Output: null

let fifalresult = 10 ?? 5; // 'fifalresult' will be 10 since it is not nullish
console.log(fifalresult); // Output: 10

let ifalresult = 1 ?? 0; // 'ifalresult' will be 1 since it is not nullish
console.log(ifalresult); // Output: 1

let season = "winter"; // Assigning "winter" to 'season'
// Ternary operator to check if 'season' equals "winter"
console.log(season == "winter" ? "yes" : "no"); // Output: "yes"
