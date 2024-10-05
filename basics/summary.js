const score = 98;
console.log(score); // Outputs: 98
console.log(typeof score); // "number" - `score` is a number, specifically an integer.

const science = 97.89;
console.log(science); // Outputs: 97.89
console.log(typeof science); // "number" - `science` is a number, but a floating-point type.

const exam = true;
console.log(exam); // Outputs: true
console.log(typeof exam); // "boolean" - `exam` holds a boolean value (true or false).

const what = null;
console.log(what); // Outputs: null
console.log(typeof what); // "object" - Although `null` is a primitive value, its type is known as "object" in JavaScript due to historical reasons (a known quirk).

const email = "heilsinki2gamial.com";
console.log(email); // Outputs: "heilsinki2gamial.com"
console.log(typeof email); // "string" - `email` is a string type.

const vitenary = Symbol('96564');
const visinary = Symbol('96564');

console.log(vitenary); // Outputs: Symbol(96564)
console.log(typeof vitenary); // "symbol" - `vitenary` is a symbol, a unique primitive type.

console.log(visinary == vitenary); // false - Symbols are unique, even if created with the same description.
console.log(visinary === vitenary); // false - Symbols are strictly unique, even with identical descriptions.

// Array Type

const fruit = ["apple", "berries", "watermelon", "guava", "pineapple", "strawberry", "custardapple"];
console.log(fruit); // Outputs: ["apple", "berries", "watermelon", "guava", "pineapple", "strawberry", "custardapple"]
console.log(typeof fruit); // "object" - Arrays are a type of object in JavaScript.
console.log(Array.isArray(fruit)); // true - Confirms that `fruit` is indeed an array.

// Object Type

let vegetable = {
    name: "carrot",
    season: "winter",
    price: "90",
    vitamin: "A"
};
console.log(vegetable); // Outputs the `vegetable` object.
console.log(typeof vegetable); // "object" - `vegetable` is an object containing multiple properties.
