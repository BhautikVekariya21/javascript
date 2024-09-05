function greet (){
    // console.log("good morning to the cutiepie" + " looking very nice");
}

greet();

function summetion (number1,number2){
    let result = number1+number2;
    return result;
}

const summ = summetion(11,21);
// console.log(summ);

function usermessage(username="Dhruv"){
    return `${username} you are arrived`
}
// console.log(usermessage("Brinjal"))

function totalprice(value1,value2,value3,...num){
    return num
}
// console.log(totalprice(121,11,117,112,254,2112,212));

const smb = Symbol("8923245");
const vocal = {
    name :"carrot",
    "scientific name":"Daucus carota",
    location:"china",
    [smb]:"boiling",
    price:90,
    email:"carrot@carrot.com",
    containnow:false,
    majorproducer:["china","russia","us"],
    season:"winter"
}

function localhost (anyobject){
    console.log(`name is ${anyobject.name} and location is ${anyobject.location} and major producer id ${anyobject.majorproducer}`);
}
localhost(vocal);

const numstan =[99,89,97,112]

function numbr(anyarray){
    console.log(anyarray[2]);
}
console.log(numbr(numstan));
console.log(numbr([11,23,41,31]))