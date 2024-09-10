const elonMusk = {
    name: "Elon Musk",
    gender: "Male",
    children: ["Nevada", "Griffin", "X Æ A-Xii", "Exa Dark Sideræl"],
    state: "Texas",
    getInfo: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Children: ${this.children.join(", ")}`);
        console.log(`State: ${this.state}`);
        console.log(this)
    }
};

elonMusk.getInfo();

function country(countryname,area,population,capital) {
    this.area=area;
    this.countryname=countryname;
    this.population=population;
    this.capital=capital,
    this.greeting = function (){
        console.log(`welcome to the ${countryname}and has a capital ${capital} contain area of 
            ${area} and a population is ${population}`);   
    } 
}
const monaco = new country("Monaco", 2.02, 39242, "Monaco");
const finland = new country("Finland", 338424, 5540720, "Helsinki");
const liechtenstein = new country("Liechtenstein", 160, 38896, "Vaduz");

console.log(monaco.constructor);
console.log(finland.constructor);
console.log(liechtenstein.constructor);

monaco.greeting();
finland.greeting();
liechtenstein.greeting();