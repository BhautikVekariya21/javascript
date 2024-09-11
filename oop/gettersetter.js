class Animal {
    constructor(name, breed) {
        this.name = name; // Use the passed argument
        this.breed = breed; // Use the passed argument
    }
    get name() {
        return this._name.toUpperCase(); // Get _name in uppercase
    }
    set name(event) {
        this._name = event; // Set _name
    }
    handleClick() {
        console.log('Button clicked');
        console.log(`Name: ${this.name}`);
        console.log(`Breed: ${this.breed}`);
    }
}

const anml = new Animal('milo', 'syberian');
console.log(anml.name); // This will print "MILO" because of the getter
console.log(anml._name); // This will print "milo"

const animal = {
    _name: "kalu",
    breed: "kalia",
    
    get name() {
        return this._name.toUpperCase(); // Get _name in uppercase
    },
    set name(event) {
        this._name = event;
    }
};


console.log(animal.name); 

animal.name = "bhuri";
console.log(animal.name); 


function Country(name, capitalCity) {
    this._name = name;
    this._capitalCity = capitalCity;

    Object.defineProperty(this, 'name', {
        get: function() {
            return this._name.toUpperCase();
        },
        set: function(value) {
            this._name = value; 
        }
    });

    Object.defineProperty(this, 'capitalCity', {
        get: function() {
            return this._capitalCity.toUpperCase();
        },
        set: function(value) {
            this._capitalCity = value;
        }
    });
}

const monaco = new Country("Monaco", "Monaco City");

console.log(monaco.name);        
console.log(monaco.capitalCity); 

monaco.name = "New Monaco";
monaco.capitalCity = "New Monaco City";

console.log(monaco.name);        
console.log(monaco.capitalCity); 
