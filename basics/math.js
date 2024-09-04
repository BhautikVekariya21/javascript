const score = 94;
console.log(score);
const balance = new Number(97);

console.log(balance.toString().length);
console.log(balance.toFixed(7));

const fnum = 1122154.154;
console.log(fnum.toPrecision(8));

const humster = 100000000000;
console.log(humster.toLocaleString());

console.log(Math);
console.log(Math.tan(30));
console.log(Math.abs(-4));
console.log(Math.ceil(8.6));
console.log(Math.floor(8.6));
console.log(Math.sign(-8));
console.log(Math.log(2));
console.log(Math.min(1,2,11,41,87,14));
console.log(Math.max(1,2,11,41,87,14));
console.log(Math.round(884255555.0155));
console.log(Math.pow(2,10));
console.log(Math.exp(-2));
console.log(Math.clz32(1123));


console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.floor(Math.random()*11)+1);

const min = 11
const max = 21

console.log(Math.floor(Math.random() * (max - min + 1)) + max)