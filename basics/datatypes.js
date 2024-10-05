"use strict";  // Enforces strict mode to catch common errors and unsafe actions, like undeclared variables

let name = "gemini";       // A string value
let age = 23;              // A number
let isLoggedIn = false;     // A boolean value
let state;                 // Variable declared but not initialized (so it's undefined)

console.log(typeof name);         // "string": `name` holds a string value "gemini"
console.log(typeof age);          // "number": `age` holds a number 23
console.log(typeof isLoggedIn);   // "boolean": `isLoggedIn` is a boolean with the value false
console.log(typeof state);        // "undefined": `state` is declared but not initialized, hence undefined
console.log(typeof undefined);    // "undefined": `undefined` is a primitive type and refers to a variable that hasn't been initialized
console.log(typeof null);         // "object": This is an interesting case, because `null` is a primitive value that represents "no value" or "empty", but due to a historical bug in JavaScript, `typeof null` returns "object". This is a quirk in the language.


// Key Insights:
// Data Types:

// Primitive Types: In JavaScript, the primitive types include string, number, boolean, undefined, null, symbol, and bigint. These are immutable.
// Non-primitive Types: Objects (including arrays and functions) are mutable and can hold multiple values.
// typeof Operator:

// The typeof operator returns a string indicating the type of the operand.
// Common values include "string", "number", "boolean", "undefined", "object", and "function".
// Quirk of null:

// null is a primitive value, but typeof null returns "object". This is a legacy issue in JavaScript that dates back to its early implementation.
// Despite this, null is not an object, it represents the intentional absence of any object value.
// Strict Mode:

// "use strict" enforces stricter parsing and error handling in JavaScript code.
// It prevents the usage of undeclared variables and suppresses the "silent" errors of normal mode, making debugging easier.
// This example illustrates how JavaScript handles different data types and shows one of its historical oddities (typeof null).
