
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const lamp = []
if(lamp){
    console.log(`lamp`);
    console.log(this);
}else{
    console.log("lamp does not have any value");
}

if(lamp.length===0){
    console.log("lamp length is zero");
}


const lamputin = {}
if(lamp){
    console.log(`lamp`);
    console.log(this);
}else{
    console.log("lamp does not have any value");
}
if(Object.keys(lamp)===0){
    console.log("object is empty");
    console.log(this);
}else{
    console.log("lamp does not have any value");
}

// Nullish Coalescing Operator (??): null undefined

let value = 0;
let result = value ?? 10;
console.log(result); 

let finalresult = "usa" ?? null
console.log(finalresult);
let fidalresult = undefined ?? null
console.log(fidalresult);
let fifalresult = 10 ?? 5
console.log(fifalresult);

let ifalresult = 1 ?? 0
console.log(ifalresult);

let season = "winter";
console.log(season=="winter"?"yes":"no");
