// const euCountryNames = [
//     "Germany",
//     "France",
//     "Italy",
//     "Spain",
//     "Sweden"
// ];

// function Country(countryname, area, population, capital) {
//     this.countryname = countryname;
//     this.area = area;
//     this.population = population;
//     this.capital = capital;
//     this.greeting = function () {
//         console.log(`Welcome to ${this.countryname}, which has the capital ${this.capital}. It covers an area of ${this.area} km² and has a population of ${this.population}.`);
//     };
// }

// Object.prototype.fin = function () {
//     console.log('fin is present in all objects');
// };

// Array.prototype.fini = function () {
//     console.log('fini is present in all arrays');
// };

// const germany = new Country("Germany", 357022, 83166711, "Berlin");
// const france = new Country("France", 551695, 67372000, "Paris");

// germany.fin(); 
// euCountryNames.fin(); 
// euCountryNames.fini(); 

// germany.greeting(); 
// france.greeting();

const Village = {
    name: "Riverdale",
    population: 1500
};

const District = {
    name: "River District",
    numVillages: 20
};

const State = {
    name: "Sunny State",
    numDistricts: 5
};

const Country = {
    name: "Dreamland",
    numStates: 10
};

const Continent = {
    name: "Fictional Continent",
    numCountries: 50
};

District.__proto__ = Village;
State.__proto__ = District;
Country.__proto__ = State;
Continent.__proto__ = Country;

Object.setPrototypeOf(Country, State);
Object.setPrototypeOf(State, District);

console.log(Country.name); 
console.log(Country.numDistricts); 
console.log(Continent.population); 

String.prototype.trueLength = function(){
    console.log(`True length of '${this.trim()}': ${this.trim().length}`);
};

Continent.name.trueLength(); 
