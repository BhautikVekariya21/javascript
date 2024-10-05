const europeanCountries = [
    "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", 
    "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", 
    "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", 
    "Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", 
    "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", 
    "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", 
    "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", 
    "Vatican City"
];

console.log(europeanCountries); // Output the list of European countries

for (const eu of europeanCountries) { // Iterate over each country in the list
    console.log(eu); // Output each country
}

const heilsinki = "finland"; // Initialize a string variable
for (const element of heilsinki) { // Iterate over each character in the string
    console.log(element); // Output each character
}

// Create a Map with country codes
const europeanCountriesMap = new Map([
    ["Albania", "AL"],
    ["Andorra", "AD"],
    ["Armenia", "AM"],
    ["Austria", "AT"],
    ["Azerbaijan", "AZ"],
    ["Belarus", "BY"],
    ["Belgium", "BE"],
    ["Bosnia and Herzegovina", "BA"],
    ["Bulgaria", "BG"],
    ["Croatia", "HR"],
    ["Cyprus", "CY"],
    ["Czech Republic", "CZ"],
    ["Denmark", "DK"],
    ["Estonia", "EE"],
    ["Finland", "FI"],
    ["France", "FR"],
    ["Georgia", "GE"],
    ["Germany", "DE"],
    ["Greece", "GR"],
    ["Hungary", "HU"],
    ["Iceland", "IS"],
    ["Ireland", "IE"],
    ["Italy", "IT"],
    ["Kazakhstan", "KZ"],
    ["Kosovo", "XK"],
    ["Latvia", "LV"],
    ["Liechtenstein", "LI"],
    ["Lithuania", "LT"],
    ["Luxembourg", "LU"],
    ["Malta", "MT"],
    ["Moldova", "MD"],
    ["Monaco", "MC"],
    ["Montenegro", "ME"],
    ["Netherlands", "NL"],
    ["North Macedonia", "MK"],
    ["Norway", "NO"],
    ["Poland", "PL"],
    ["Portugal", "PT"],
    ["Romania", "RO"],
    ["Russia", "RU"],
    ["San Marino", "SM"],
    ["Serbia", "RS"],
    ["Slovakia", "SK"],
    ["Slovenia", "SI"],
    ["Spain", "ES"],
    ["Sweden", "SE"],
    ["Switzerland", "CH"],
    ["Turkey", "TR"],
    ["Ukraine", "UA"],
    ["United Kingdom", "GB"],
    ["Vatican City", "VA"]
]);

europeanCountriesMap.forEach((code, country) => { // Iterate over the Map entries
    console.log(`${country}: ${code}`); // Output country name and code
});

const europeCountriesMap = new Map(); // Initialize a new Map

// Set countries and their codes
europeCountriesMap.set("Albania", "AL");
europeCountriesMap.set("Andorra", "AD");
europeCountriesMap.set("Armenia", "AM");
europeCountriesMap.set("Austria", "AT");
europeCountriesMap.set("Azerbaijan", "AZ");
europeCountriesMap.set("Belarus", "BY");
europeCountriesMap.set("Belgium", "BE");
europeCountriesMap.set("Bosnia and Herzegovina", "BA");
europeCountriesMap.set("Bulgaria", "BG");
europeCountriesMap.set("Croatia", "HR");
europeCountriesMap.set("Cyprus", "CY");
europeCountriesMap.set("Czech Republic", "CZ");
europeCountriesMap.set("Denmark", "DK");
europeCountriesMap.set("Estonia", "EE");
europeCountriesMap.set("Finland", "FI");
europeCountriesMap.set("France", "FR");
europeCountriesMap.set("Georgia", "GE");
europeCountriesMap.set("Germany", "DE");
europeCountriesMap.set("Greece", "GR");
europeCountriesMap.set("Hungary", "HU");
europeCountriesMap.set("Iceland", "IS");
europeCountriesMap.set("Ireland", "IE");
europeCountriesMap.set("Italy", "IT");
europeCountriesMap.set("Kazakhstan", "KZ");
europeCountriesMap.set("Kosovo", "XK");
europeCountriesMap.set("Latvia", "LV");
europeCountriesMap.set("Liechtenstein", "LI");
europeCountriesMap.set("Lithuania", "LT");
europeCountriesMap.set("Luxembourg", "LU");
europeCountriesMap.set("Malta", "MT");
europeCountriesMap.set("Moldova", "MD");
europeCountriesMap.set("Monaco", "MC");
europeCountriesMap.set("Montenegro", "ME");
europeCountriesMap.set("Netherlands", "NL");
europeCountriesMap.set("North Macedonia", "MK");
europeCountriesMap.set("Norway", "NO");
europeCountriesMap.set("Poland", "PL");
europeCountriesMap.set("Portugal", "PT");
europeCountriesMap.set("Romania", "RO");
europeCountriesMap.set("Russia", "RU");
europeCountriesMap.set("San Marino", "SM");
europeCountriesMap.set("Serbia", "RS");
europeCountriesMap.set("Slovakia", "SK");
europeCountriesMap.set("Slovenia", "SI");
europeCountriesMap.set("Spain", "ES");
europeCountriesMap.set("Sweden", "SE");
europeCountriesMap.set("Switzerland", "CH");
europeCountriesMap.set("Turkey", "TR");
europeCountriesMap.set("Ukraine", "UA");
europeCountriesMap.set("United Kingdom", "GB");
europeCountriesMap.set("Vatican City", "VA");

europeCountriesMap.forEach((code, country) => { // Iterate over the Map entries
    console.log(`${country}: ${code}`); // Output country name and code
});

for (const [key, values] of europeCountriesMap) { // Iterate over each entry in the Map
    console.log(`${key} :- ${values}`); // Output key-value pairs
}

const euCountries = { // Create an object with country codes
    Albania: "AL",
    Andorra: "AD",
    Armenia: "AM",
    Austria: "AT",
    Azerbaijan: "AZ",
    Belarus: "BY",
    Belgium: "BE",
    "Bosnia and Herzegovina": "BA",
    Bulgaria: "BG",
    Croatia: "HR",
    Cyprus: "CY",
    "Czech Republic": "CZ",
    Denmark: "DK",
    Estonia: "EE",
    Finland: "FI",
    France: "FR",
    Georgia: "GE",
    Germany: "DE",
    Greece: "GR",
    Hungary: "HU",
    Iceland: "IS",
    Ireland: "IE",
    Italy: "IT",
    Kazakhstan: "KZ",
    Kosovo: "XK",
    Latvia: "LV",
    Liechtenstein: "LI",
    Lithuania: "LT",
    Luxembourg: "LU",
    Malta: "MT",
    Moldova: "MD",
    Monaco: "MC",
    Montenegro: "ME",
    Netherlands: "NL",
    "North Macedonia": "MK",
    Norway: "NO",
    Poland: "PL",
    Portugal: "PT",
    Romania: "RO",
    Russia: "RU",
    "San Marino": "SM",
    Serbia: "RS",
    Slovakia: "SK",
    Slovenia: "SI",
    Spain: "ES",
    Sweden: "SE",
    Switzerland: "CH",
    Turkey: "TR",
    Ukraine: "UA",
    "United Kingdom": "GB",
    "Vatican City": "VA"
};

console.log(euCountries); // Output the euCountries object

for (const [key, values] of Object.entries(euCountries)) { // Iterate over each entry in the euCountries object
    console.log(`${key} -> ${values}`); // Output key-value pairs
}
