const name = "dhruv";
const bloodshell = 452002;
console.log(name + bloodshell + " per ml");
// Outputs: "dhruv452002per ml". The `+` operator concatenates `name` (string), `bloodshell` (number), and another string (" per ml").

console.log(`my name is ${name} and bloodshell is ${bloodshell} per ml`);
// Outputs: "my name is dhruv and bloodshell is 452002 per ml". This uses template literals for interpolation.

const country = new String('hello finland');
console.log(country[0]);
// Outputs: "h". Accesses the first character of the string.

console.log(country.__proto__);
// Outputs: String prototype object. This shows all methods and properties available on `country`, like `charAt`, `toUpperCase`, etc.

console.log(country.length);
// Outputs: 13. The length of the string "hello finland".

console.log(country.toUpperCase());
// Outputs: "HELLO FINLAND". Converts the entire string to uppercase.

console.log(country.toLowerCase());
// Outputs: "hello finland". Converts the entire string to lowercase.

console.log(country.charAt(2));
// Outputs: "l". Gets the character at index 2 (third character) of the string.

console.log(country.indexOf('t'));
// Outputs: -1. The character 't' is not present in the string, so `indexOf` returns -1.

const newstring = country.substring(0, 8);
console.log(newstring);
// Outputs: "hello fi". `substring()` extracts characters between index 0 and 8 (not including 8).

const newmen = country.slice(2, 11);
console.log(newmen);
// Outputs: "llo finla". `slice()` extracts characters from index 2 to 11.

const newmenn = country.slice(-1, 0);
console.log(newmenn);
// Outputs: "". Since the `start` index is negative and greater than the `end` index, it returns an empty string.

const manigal = "   why not ?    ";
console.log(manigal);
// Outputs: "   why not ?    ". This is the string with leading and trailing spaces.

console.log(manigal.trim());
// Outputs: "why not ?". `trim()` removes whitespace from both ends of the string.

const url = "https://www.bing.com/search?q=github&filters=ufn%=1";
console.log(url.replace('q=', '-'));
// Outputs: "https://www.bing.com/search?-github&filters=ufn%=1". Replaces 'q=' with '-'.

console.log(url.includes('fil'));
// Outputs: true. `includes()` checks if the substring 'fil' exists in the URL, which it does in "filters".

console.log(country.split('-'));
// Outputs: ["hello finland"]. Since there is no hyphen '-' in the string, it returns the entire string as a single element in an array.

console.log(country);
// Outputs: "hello finland". The original `country` string remains unchanged.
