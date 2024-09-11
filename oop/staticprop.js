class Animal {
    constructor(name) {
        this.name = name;
    }

    logName() {
        console.log(`Animal Name: ${this.name}`);
    }

    static createSpeciesId() {
        return `Animal-001`;
    }
}

const dog = new Animal("Dog");
// console.log(dog.createSpeciesId()) // Will throw an error because createSpeciesId is static

class Cat extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    logBreed() {
        console.log(`Breed: ${this.breed}`);
    }
}

const persianCat = new Cat("Persian", "Persian Cat");
console.log(Cat.createSpeciesId()); // Static method is accessed through the class
// console.log(persianCat.createSpeciesId())
persianCat.logName();
persianCat.logBreed();
