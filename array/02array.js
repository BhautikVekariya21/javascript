// Initializing two arrays: 'fruit' and 'dryfruits'
const fruit = ["apple", "berries", "watermelon", "guava", "pineapple", "strawberry", "custardapple"];
const dryfruits = ["Almonds", "Cashews", "Walnuts", "Pistachios", "Hazelnuts", "Brazil nuts", "Macadamia nuts"];
const num = new Array(1, 11, 121, 1123, 142, 214, 165, 212, 421);

// Printing out the 'fruit' and 'dryfruits' arrays
console.log(`Fruits: ${fruit}`);  // Outputs the 'fruit' array as a string
console.log(`Dry Fruits: ${dryfruits}`);  // Outputs the 'dryfruits' array as a string

// Adding the entire 'dryfruits' array as the last element of the 'fruit' array
fruit.push(dryfruits);
console.log(dryfruits);  // Outputs the unchanged 'dryfruits' array
console.log(fruit);  // Outputs the 'fruit' array, now containing 'dryfruits' as an element at index 7

// Accessing an element within the nested array (dryfruits)
console.log(fruit[7][4]);  // Outputs: "Hazelnuts" (5th element of the 'dryfruits' array)

// Using 'concat()' to merge 'fruit' and 'dryfruits' arrays
const allfruits = fruit.concat(dryfruits);
console.log("all fruits", allfruits);  // Outputs a new array with 'fruit' and 'dryfruits' combined

// Using the spread operator to merge 'fruit' and 'dryfruits'
const alfruits = [...fruit, ...dryfruits];
console.log(alfruits);  // Outputs a new merged array using the spread operator

// Using 'flat()' to flatten a deeply nested array 'timelimit'
const timelimit = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realtimelimit = timelimit.flat(Infinity);  // Flattens all levels of nested arrays
console.log("realtimelimit", realtimelimit);  // Outputs the flattened array: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Checking if a value is an array using 'Array.isArray()'
console.log(Array.isArray("luminol"));  // Outputs: false (as it's a string, not an array)
console.log(Array.from("sulphonic"));  // Outputs: ['s', 'u', 'l', 'p', 'h', 'o', 'n', 'i', 'c'] (creates an array from the string)
console.log(Array.from({ name: "sulphuric" }));  // Outputs an empty array [] (as 'Array.from' requires an iterable object)

// Creating an array using 'Array.of()' with individual values
let science = 98;
let social = 97;
let gujrati = 89;
console.log(Array.of(science, social, gujrati));  // Outputs: [98, 97, 89] (creates an array of individual values)
