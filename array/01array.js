const fruit = ["apple", "berries", "watermelon", "guava", "pineapple", "strawberry", "custardapple"];
const num = new Array(1, 11, 121, 1123, 142, 214, 165, 212, 421);

// Accessing elements in the 'num' and 'fruit' arrays by index
console.log(num[1]);  // Outputs: 11
console.log(fruit[4]);  // Outputs: "pineapple"

// Adding elements to the 'fruit' array using push()
fruit.push("Mango");   // Adds "Mango" to the end of the array
fruit.push("grapes");  // Adds "grapes" to the end of the array
console.log(fruit);    // Outputs the updated 'fruit' array with "Mango" and "grapes"

// Removing the last element of the 'fruit' array using pop()
fruit.push("cashews"); // Adds "cashews" to the array
fruit.pop();           // Removes the last element ("cashews")
console.log(fruit);    // Outputs the array after the pop() operation

// Adding and removing elements at the start of the 'fruit' array
fruit.unshift("orange");  // Adds "orange" to the beginning of the array
fruit.shift();            // Removes the first element ("orange")
console.log(fruit);       // Outputs the array after unshift and shift operations

// Original 'fruit' array after modifications
console.log("Fruit", fruit);  // Outputs the current state of the 'fruit' array

// Using slice() to create a new array 'ffruit' with a portion of 'fruit'
const ffruit = fruit.slice(1, 3);  // Slices from index 1 to 3 (non-inclusive)
console.log("FFruit", ffruit);     // Outputs: ["berries", "watermelon"]
console.log("Fruit", fruit);       // The original 'fruit' array remains unchanged

// Using splice() to remove elements from 'fruit' and modify it in-place
const dffruit = fruit.splice(1, 3);  // Removes 3 elements starting from index 1
console.log("DFFruit", dffruit);     // Outputs: ["berries", "watermelon", "guava"]
console.log("Fruit", fruit);         // The original 'fruit' array is now modified
