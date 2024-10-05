// Class definition for Animal
class Animal {
    constructor(name) {
        this.name = name; // Set the name of the animal
    }

    logName() {
        // Method to log the animal's name
        console.log(`Animal Name: ${this.name}`);
    }

    static createSpeciesId() {
        // Static method that returns a species ID
        return `Animal-001`;
    }
}

// Creating an instance of the Animal class
const dog = new Animal("Dog");
// console.log(dog.createSpeciesId()) // This line would throw an error because createSpeciesId is a static method and cannot be called on instances

// Class definition for Cat that extends Animal
class Cat extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent constructor with the name
        this.breed = breed; // Set the breed of the cat
    }

    logBreed() {
        // Method to log the breed of the cat
        console.log(`Breed: ${this.breed}`);
    }
}

// Creating an instance of the Cat class
const persianCat = new Cat("Persian", "Persian Cat");

// Accessing the static method through the Cat class
console.log(Cat.createSpeciesId()); // Outputs: Animal-001

// console.log(persianCat.createSpeciesId()) // This line would also throw an error, similar to the previous one

// Logging the name and breed of the persianCat instance
persianCat.logName(); // Outputs: Animal Name: Persian
persianCat.logBreed(); // Outputs: Breed: Persian Cat

// Output
// When you run this code, the output will be:

// Animal-001
// Animal Name: Persian
// Breed: Persian Cat
