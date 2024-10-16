const planguage = {
    ".js": "JavaScript",
    ".py": "Python",
    ".java": "Java",
    ".cpp": "C++",
    ".cs": "C#",
    ".rb": "Ruby",
    ".php": "PHP",
    ".html": "HTML",
    ".css": "CSS",
    ".ts": "TypeScript",
    ".go": "Go",
    ".swift": "Swift",
    ".rs": "Rust",
    ".kt": "Kotlin",
    ".sh": "Shell",
    ".pl": "Perl",
    ".r": "R",
    ".sql": "SQL",
    ".dart": "Dart",
    ".scala": "Scala",
    ".xml": "XML",
    ".json": "JSON"
};

// Using Object.entries to iterate through the planguage object
for (const [extension, language] of Object.entries(planguage)) {
    console.log(`${extension} stands for ${language}`);
}

// Iterating over keys using Object.keys
for (const key of Object.keys(planguage)) {
    console.log(key); // This will print the extensions
}

const totaldot = [
    ".js", ".py", ".java", ".cpp", ".cs", ".rb", ".php", 
    ".html", ".css", ".ts", ".go", ".swift", ".rs", ".kt", 
    ".sh", ".pl", ".r", ".sql", ".dart", ".scala", ".xml", ".json"
];

// Iterating over totaldot array
for (const key of totaldot) {
    console.log(key); // This will print the extensions
}

const europeCountriesMap = new Map();

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

// Iterating through the Map using forEach
europeCountriesMap.forEach((code, country) => {
    console.log(`${country}: ${code}`);
});

// Alternatively, using for..of loop
for (const [country, code] of europeCountriesMap) {
    console.log(`${country}: ${code}`);
}
