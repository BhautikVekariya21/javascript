// Define the Animal class
class Animal {
    // Constructor to initialize name and breed
    constructor(name, breed) {
        this.name = name; // Use the passed argument for name
        this.breed = breed; // Use the passed argument for breed
    }

    // Getter for name, returns it in uppercase
    get name() {
        return this._name.toUpperCase(); // Get _name in uppercase
    }

    // Setter for name
    set name(event) {
        this._name = event; // Set _name to the new value
    }

    // Method to handle button clicks
    handleClick() {
        console.log('Button clicked'); // Log when the button is clicked
        console.log(`Name: ${this.name}`); // Log the name (uppercase)
        console.log(`Breed: ${this.breed}`); // Log the breed
    }
}

// Create an instance of Animal
const anml = new Animal('milo', 'syberian');
console.log(anml.name); // This will print "MILO" because of the getter
console.log(anml._name); // This will print "milo", the original name stored in _name

// Define an animal object using object literal syntax
const animal = {
    _name: "kalu", // Private variable
    breed: "kalia", // Public variable
    
    // Getter for name, returns it in uppercase
    get name() {
        return this._name.toUpperCase(); // Get _name in uppercase
    },
    
    // Setter for name
    set name(event) {
        this._name = event; // Set _name to the new value
    }
};

// Demonstrate the getter for the animal object
console.log(animal.name); // Prints "KALU" in uppercase

// Set a new name using the setter
animal.name = "bhuri"; 
console.log(animal.name); // Prints "BHURI" in uppercase


// Define the Country function as a constructor
function Country(name, capitalCity) {
    this._name = name; // Private variable for name
    this._capitalCity = capitalCity; // Private variable for capital city

    // Define a getter for name using Object.defineProperty
    Object.defineProperty(this, 'name', {
        get: function() {
            return this._name.toUpperCase(); // Get _name in uppercase
        },
        set: function(value) {
            this._name = value; // Set _name to the new value
        }
    });

    // Define a getter for capitalCity using Object.defineProperty
    Object.defineProperty(this, 'capitalCity', {
        get: function() {
            return this._capitalCity.toUpperCase(); // Get _capitalCity in uppercase
        },
        set: function(value) {
            this._capitalCity = value; // Set _capitalCity to the new value
        }
    });
}

// Create an instance of Country
const monaco = new Country("Monaco", "Monaco City");

// Demonstrate the getter for the name and capital city
console.log(monaco.name); // Prints "MONACO" in uppercase
console.log(monaco.capitalCity); // Prints "MONACO CITY" in uppercase

// Set new values using the setters
monaco.name = "New Monaco"; // Set new name
monaco.capitalCity = "New Monaco City"; // Set new capital city

// Demonstrate the updated values
console.log(monaco.name); // Prints "NEW MONACO" in uppercase
console.log(monaco.capitalCity); // Prints "NEW MONACO CITY" in uppercase

// Key Points Explained:
// Class Definition:

// The Animal class demonstrates how to use getters and setters in a class to manage private properties (denoted by the _ prefix).
// Object Literal Syntax:

// The animal object uses object literal syntax and implements getters and setters similarly, but without the formal class structure.
// Constructor Function:

// The Country function is an example of a constructor function using Object.defineProperty to define properties with getters and setters, providing controlled access to the _name and _capitalCity private variables.
// Encapsulation:

// The use of getters and setters encapsulates the properties, allowing controlled access and modification while keeping the internal state private.
// Uppercase Conversion:

// Both the Animal class and Country constructor return the names and capital cities in uppercase through their respective getters, ensuring consistent formatting.
