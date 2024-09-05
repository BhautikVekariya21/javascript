const smb = Symbol("8923245");
const vrge = {
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
console.log(vrge.name);
console.log(vrge.location);
console.log(vrge.price);
console.log(vrge.email);
console.log(vrge.containnow);
console.log(vrge.majorproducer);

// vrge.email ="carrot@winter.com"
// Object.freeze(vrge);

vrge.email ="carrot@vitamin.com"
console.log(vrge);

vrge.greeting = function(){
    console.log("hii,shubh prabhat");   
}

vrge.greetings = function(){
    console.log(`people please eat, ${this.name}`);
}
console.log(vrge.greeting());
console.log(vrge.greetings());
console.log(typeof greeting);
console.log(typeof greetings);

console.log(typeof vrge.greeting);  
console.log(typeof vrge.greetings); 
