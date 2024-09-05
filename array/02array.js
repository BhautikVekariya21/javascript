const fruit = ["apple","berries","watermelon","guava","pineapple","strawberry","custardapple"];
const dryfruits = ["Almonds","Cashews","Walnuts","Pistachios","Hazelnuts","Brazil nuts","Macadamia nuts"];
const num = new Array(1,11,121,1123,142,214,165,212,421);

console.log(`Fruits: ${fruit}`);
console.log(`Dry Fruits:${dryfruits}`);

fruit.push(dryfruits)
console.log(dryfruits)
console.log(fruit)
console.log(fruit[7][4]);

const allfruits = fruit.concat(dryfruits)
console.log("all fruits",allfruits);

const alfruits = [...fruit,...dryfruits]

console.log(alfruits);

const timelimit = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realtimelimit = timelimit.flat(Infinity);

console.log("realtimelimit",realtimelimit);

console.log(Array.isArray("luminol"));
console.log(Array.from("sulphonic"));
console.log(Array.from({name: "sulphuric"})) // interesting

let science = 98
let social = 97
let gujrati = 89

console.log(Array.of(science, social, gujrati));