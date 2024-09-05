const fruit = ["apple","berries","watermelon","guava","pineapple","strawberry","custardapple"];
const num = new Array(1,11,121,1123,142,214,165,212,421);
console.log(num[1]);
console.log(fruit[4]);
fruit.push("Mango");
fruit.push("grapes");
console.log(fruit);
fruit.push("cashews");
fruit.pop();
console.log(fruit);
fruit.unshift("orange");
fruit.shift();
console.log(fruit);


console.log("Fruit",fruit);

const ffruit = fruit.slice(1, 3)
console.log("FFruit",ffruit);
console.log("Fruit",fruit);

const dffruit = fruit.splice(1, 3)
console.log("DFFruit",dffruit);
console.log("Fruit",fruit);