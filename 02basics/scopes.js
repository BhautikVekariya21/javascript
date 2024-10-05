let asw = 577;

if (true) {
    // let asw = 212; // This would create a new block-scoped 'asw' variable if uncommented
    let qwe = 89; // Block-scoped variable, only accessible inside this block
    console.log(asw); // Output: 577 (refers to the outer 'asw' because the inner 'asw' is commented out)
}

console.log(asw); // Output: 577 (refers to the 'asw' declared in the outer scope)
// console.log(qwe); // This will throw a ReferenceError because 'qwe' is block-scoped and not accessible outside the 'if' block


// Function declaration with nested inner function (closure)
function outer() {
    const name = "vishakha"; // 'name' is scoped to the 'outer' function

    function inner() {
        const namee = "vishakhapattanam"; // 'namee' is scoped to the 'inner' function
        console.log(namee); // Output: "vishakhapattanam"
        console.log(name); // Output: "vishakha" (accessing the 'name' from the outer function's scope)
        console.log(namee + name); // Output: "vishakhapattanamvishakha"
    }

    inner(); // Calling the 'inner' function
    // console.log(namee); // This will throw a ReferenceError because 'namee' is scoped to the 'inner' function
    console.log(name); // Output: "vishakha"
}

outer(); // Calls the 'outer' function


// Function declaration, so it can be called before it's defined (hoisting)
console.log(finland("heilsinki")); // Output: "heilsinki"

function finland(city) {
    return city; // Returns the city name
}


// Trying to log 'country' before it's declared (hoisting doesn't work with function expressions)
console.log(country); // Output: undefined (because 'country' is declared as a 'const' but not initialized)

// Function expression, not hoisted
const country = function norway(city) {
    return city;
};

// Trying to call 'norway' directly will throw an error because 'norway' is a named function expression and is only accessible inside 'country'
console.log(norway("oslo")); // This will throw a ReferenceError because 'norway' is not accessible in the global scope
