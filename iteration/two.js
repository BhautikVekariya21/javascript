let index = 9;
while (index >= 0) {
    console.log(index);
    index--;
}

const fruit = ["apple", "berries", "watermelon", "guava", "pineapple", "strawberry", "custardapple"];
let iterator = 0;
while (iterator < fruit.length) {
    console.log(`value is ${iterator}: ${fruit[iterator]}`);
    iterator++;
}

iterator = 0;  
while (iterator < fruit.length) {
    console.log(`value is ${iterator}`);
    iterator = iterator + 2;
}

const duck = 0;
do {
    console.log(`value at duck is ${duck}`);
} while (duck);
