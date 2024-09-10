
// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

function mul(num){
    return num*8;
}

console.log(mul(11));
console.log(mul.prototype);

function creatuser(username, score) {
    this.username = username;
    this.score = score;
}

creatuser.prototype.increment = function() {
    this.score++;
}

creatuser.prototype.printme = function() {
    console.log(`Score of ${this.username} is ${this.score}`);
}

const kelvin = new creatuser("kelvinpipes", 97);
const kelvins = new creatuser("kelvinpies", 94);

kelvin.increment();
kelvins.increment();

kelvin.printme(); 
kelvins.printme(); 
