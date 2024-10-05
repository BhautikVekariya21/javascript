let index = 9; // Initialize index to 9
while (index >= 0) { // Start a while loop that continues as long as index is greater than or equal to 0
    console.log(index); // Log the current value of index
    index--; // Decrement index by 1
}

// Initialize an array of fruits
const fruit = ["apple", "berries", "watermelon", "guava", "pineapple", "strawberry", "custardapple"];
let iterator = 0; // Initialize iterator to 0
while (iterator < fruit.length) { // Continue while iterator is less than the length of the fruit array
    console.log(`value is ${iterator}: ${fruit[iterator]}`); // Log the current index and the corresponding fruit
    iterator++; // Increment iterator by 1
}

iterator = 0; // Reset iterator to 0  
while (iterator < fruit.length) { // Loop while iterator is less than the length of the fruit array
    console.log(`value is ${iterator}`); // Log the current index
    iterator = iterator + 2; // Increment iterator by 2 to skip every other fruit
}

const duck = 0; // Initialize duck to 0
do {
    console.log(`value at duck is ${duck}`); // Log the value of duck
} while (duck); // The do-while loop will run at least once; since duck is 0, it won't repeat

