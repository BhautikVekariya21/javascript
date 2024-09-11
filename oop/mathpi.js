const descripter = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descripter);
console.log(Math.PI);
Math.PI=8;
console.log(Math.PI);

const rice = {
    name:"basmati rice",
    price:"300",
    majorproducer :"china,usa",

    orderrice:function(){
        console.log(`please order on amazon`);
    }
}
console.log( Object.getOwnPropertyDescriptor(rice,'name'));


Object.defineProperty(rice,'name',{
    writable: true,
    enumerable: false,
    configurable: false
})

console.log( Object.getOwnPropertyDescriptor(rice,'name'));


for (const [key,value] of Object.entries(rice)) {
    if(typeof value !=='function'){
        console.log(`${key}:${value}`);   
    }
}