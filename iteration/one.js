const fruit = ["apple", "berries", "watermelon", "guava", "pineapple", "strawberry", "custardapple"];

for (let index = 0; index < fruit.length; index++) {
    const element = fruit[index];
    console.log(element);
}
// This loop iterates over the fruit array and logs each fruit to the console

for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(" \n");
}
// This nested loop generates a multiplication table from 0 to 10. It prints each multiplication result, followed by a new line after each row of results.

for (let i = 10; i > 0; i--) {
    for (let j = 10; j > 0; j--) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(" \n");
}
// This nested loop generates a reverse multiplication table from 10 to 1, producing results in descending order.

for (let index = 0; index < fruit.length; index++) {
    const element = fruit[index];
    console.log(element);
    
    if (element == "guava") {
        break; // Exits the loop when 'guava' is encountered
    }
}
console.log("\n");
// This loop logs each fruit until it encounters "guava." At that point, it breaks out of the loop and does not log "guava" or any subsequent fruits.

for (let index = 0; index < fruit.length; index++) {
    const element = fruit[index];
    if (element == "guava") {
        continue; // Skips 'guava' and continues with the next iteration
    }
    console.log(element);
}
// This loop logs all fruits except "guava." When it encounters "guava," it uses continue to skip logging that fruit and moves to the next iteration.

// Output
// apple
// berries
// watermelon
// guava
// pineapple
// strawberry
// custardapple

// 0 * 0 = 0
// 0 * 1 = 0
// ...
// 10 * 10 = 100

// 10 * 10 = 100
// ...
// 1 * 1 = 1

// apple
// berries
// watermelon

// pineapple
// strawberry
// custardapple
