"use strict";

const user = {
    username:"Brinjal",
    price:723,
    welcome:function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this); 
    }
}
user.welcome();
user.username="eshodha";
user.welcome();

console.log(this);
const cinneman = function() {
   
    let username = "spices";
    let prices = 121;
    console.log(this);  
};

cinneman();

const cinnemanroll = () => { 
    let username = "spices";
    let prices = 1212;
    console.log(this);  
};
cinnemanroll()

const summ = (num1,num2) =>{
    return num1+num2;
}
const sum = (num1,num2) => num1+num2;
const sume = (num1,num2) =>( num1+num2);
const sumq = (num1,num2) =>{return num1+num2};
const sumu = (num1, num2) => ({ username: "picric acid" });
sum(1,3);
summ(1,3);
sume(1,3);
console.log(sum(1,3));
console.log(summ(1,7));
console.log(sume(1,9));
console.log(sumq(1,2));
console.log(sumu(10, 20)); 
