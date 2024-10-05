// Array of EU country names
// const euCountryNames = [
//     "Germany",
//     "France",
//     "Italy",
//     "Spain",
//     "Sweden"
// ];

// Constructor function for creating country objects
function Country(countryname, area, population, capital) {
    this.countryname = countryname; // Name of the country
    this.area = area; // Area of the country in km²
    this.population = population; // Population of the country
    this.capital = capital; // Capital city of the country
    // Method to greet and provide information about the country
    this.greeting = function () {
        console.log(`Welcome to ${this.countryname}, which has the capital ${this.capital}. It covers an area of ${this.area} km² and has a population of ${this.population}.`);
    };
}

// Adding a method to the Object prototype, available to all objects
Object.prototype.fin = function () {
    console.log('fin is present in all objects');
};

// Adding a method to the Array prototype, available to all arrays
Array.prototype.fini = function () {
    console.log('fini is present in all arrays');
};

// Creating instances of the Country constructor
const germany = new Country("Germany", 357022, 83166711, "Berlin");
const france = new Country("France", 551695, 67372000, "Paris");

// Invoking the fin method on the germany object (object instance)
germany.fin(); 
// Invoking the fin method on the euCountryNames array (array instance)
// euCountryNames.fin(); // This will throw an error if uncommented, as euCountryNames is not an object.
// Invoking the fini method on the euCountryNames array (array instance)
euCountryNames.fini(); 

// Calling the greeting method for both Germany and France
germany.greeting(); 
france.greeting();

// Creating objects representing a village, district, state, country, and continent
const Village = {
    name: "Riverdale", // Name of the village
    population: 1500 // Population of the village
};

const District = {
    name: "River District", // Name of the district
    numVillages: 20 // Number of villages in the district
};

const State = {
    name: "Sunny State", // Name of the state
    numDistricts: 5 // Number of districts in the state
};

const Country = {
    name: "Dreamland", // Name of the country
    numStates: 10 // Number of states in the country
};

const Continent = {
    name: "Fictional Continent", // Name of the continent
    numCountries: 50 // Number of countries in the continent
};

// Setting up prototype inheritance
District.__proto__ = Village; // District inherits from Village
State.__proto__ = District; // State inherits from District
Country.__proto__ = State; // Country inherits from State
Continent.__proto__ = Country; // Continent inherits from Country

// This alternative way of setting prototype also works
Object.setPrototypeOf(Country, State);
Object.setPrototypeOf(State, District);

// Logging properties from different levels of the prototype chain
console.log(Country.name); // Outputs: Dreamland (from Country object)
console.log(Country.numDistricts); // Outputs: 5 (inherited from State)
console.log(Continent.population); // Outputs: undefined (as Continent has no population property)

// Adding a method to the String prototype to calculate the true length of a string
String.prototype.trueLength = function(){
    console.log(`True length of '${this.trim()}': ${this.trim().length}`);
};

// Calling the trueLength method on the name property of the Continent object
Continent.name.trueLength(); // Outputs the length of 'Fictional Continent'
