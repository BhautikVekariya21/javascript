// Creating an object representing Elon Musk
const elonMusk = {
    name: "Elon Musk", // Name property
    gender: "Male", // Gender property
    children: ["Nevada", "Griffin", "X Æ A-Xii", "Exa Dark Sideræl"], // Array of children names
    state: "Texas", // State property
    // Method to log information about Elon Musk
    getInfo: function() {
        console.log(`Name: ${this.name}`); // Logs the name
        console.log(`Gender: ${this.gender}`); // Logs the gender
        console.log(`Children: ${this.children.join(", ")}`); // Logs the children as a comma-separated string
        console.log(`State: ${this.state}`); // Logs the state
        console.log(this); // Logs the entire object
    }
};

// Call the getInfo method to log Elon Musk's information
elonMusk.getInfo(); // This will output the information about Elon Musk

// Constructor function for creating country objects
function country(countryname, area, population, capital) {
    this.area = area; // Area property
    this.countryname = countryname; // Country name property
    this.population = population; // Population property
    this.capital = capital; // Capital property
    // Method to greet and provide information about the country
    this.greeting = function() {
        console.log(`Welcome to ${this.countryname}, which has a capital of ${this.capital}, an area of 
            ${this.area} square kilometers, and a population of ${this.population}.`);
    }
}

// Creating instances of the country constructor
const monaco = new country("Monaco", 2.02, 39242, "Monaco");
const finland = new country("Finland", 338424, 5540720, "Helsinki");
const liechtenstein = new country("Liechtenstein", 160, 38896, "Vaduz");

// Logging the constructor property of each country instance
console.log(monaco.constructor); // Logs the constructor function for Monaco
console.log(finland.constructor); // Logs the constructor function for Finland
console.log(liechtenstein.constructor); // Logs the constructor function for Liechtenstein

// Call the greeting method for each country instance
monaco.greeting(); // Outputs information about Monaco
finland.greeting(); // Outputs information about Finland
liechtenstein.greeting(); // Outputs information about Liechtenstein


// Output
// When you run this code, the output will look like:

// Name: Elon Musk
// Gender: Male
// Children: Nevada, Griffin, X Æ A-Xii, Exa Dark Sideræl
// State: Texas
// { name: 'Elon Musk', gender: 'Male', children: [ 'Nevada', 'Griffin', 'X Æ A-Xii', 'Exa Dark Sideræl' ], state: 'Texas', getInfo: [Function: getInfo] }
// function country(countryname, area, population, capital) { ... }
// function country(countryname, area, population, capital) { ... }
// function country(countryname, area, population, capital) { ... }
// Welcome to Monaco, which has a capital of Monaco, an area of 2.02 square kilometers, and a population of 39242.
// Welcome to Finland, which has a capital of Helsinki, an area of 338424 square kilometers, and a population of 5540720.
// Welcome to Liechtenstein, which has a capital of Vaduz, an area of 160 square kilometers, and a population of 38896.
