// Get the property descriptor for Math.PI
const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter); // Log the descriptor of Math.PI
console.log(Math.PI); // Log the current value of Math.PI

// Attempting to change the value of Math.PI (this will not work)
Math.PI = 8; // Math.PI is a read-only property
console.log(Math.PI); // Log the value of Math.PI after the attempt to change it

// Define a rice object with properties and a method
const rice = {
    name: "basmati rice",
    price: "300",
    majorProducer: "china, usa", // Fixed typo from 'majorproducer' to 'majorProducer'

    // Method to order rice
    orderRice: function () {
        console.log(`Please order on Amazon`);
    }
};

// Get the property descriptor for the 'name' property of the rice object
console.log(Object.getOwnPropertyDescriptor(rice, 'name')); // Log descriptor of rice.name

// Define new property descriptor for 'name' to make it writable, non-enumerable, and non-configurable
Object.defineProperty(rice, 'name', {
    writable: true,   // Allows the property to be changed
    enumerable: false, // Will not show up in enumerations (like for..in or Object.entries)
    configurable: false // Cannot delete or reconfigure the property
});

// Log the updated property descriptor for 'name'
console.log(Object.getOwnPropertyDescriptor(rice, 'name')); // Log descriptor after modification

// Iterate over the properties of the rice object
for (const [key, value] of Object.entries(rice)) {
    // Check if the value is not a function
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`); // Log key-value pairs that are not functions
    }
}
