const fruit = ["apple","berries","watermelon","guava","pineapple","strawberry","custardapple"];

for (let index = 0; index < fruit.length; index++) {
    const element = fruit[index];
    console.log(element);
}

for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
        console.log(`${i} * ${j} = ${i*j}`); 

    }
    console.log(" \n");
}
for (let i = 10; i>0 ; i--) {
    for (let j = 10; j >0; j--) {
        console.log(`${i} * ${j} = ${i*j}`); 

    }
    console.log(" \n");
}
for (let index = 0; index < fruit.length; index++) {
    const element = fruit[index];
    console.log(element);
    
    if(element =="guava"){
        break;
    }
}
console.log("\n");

for (let index = 0; index < fruit.length; index++) {
    const element = fruit[index];
    if(element=="guava"){
        continue;
    }
    console.log(element)
}