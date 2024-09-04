const name ="dhruv";
const bloodshell = 452002;
console.log(name+bloodshell+"per ml");

console.log(`my name is ${name} is and bloodshell is ${bloodshell} per ml`);
const country = new String('hello finland');
console.log(country[0]);
console.log(country.__proto__);

console.log(country.length);
console.log(country.toUpperCase());
console.log(country.toLowerCase());
console.log(country.charAt(2));
console.log(country.indexOf('t'));

const newstring = country.substring(0,8)
console.log(newstring);

const newmen = country.slice(2,11);
console.log(newmen);

const newmenn = country.slice(-1,0);
console.log(newmenn);

const manigal = "   why not ?    "
console.log(manigal);
console.log(manigal.trim());

const url ="https://www.bing.com/search?q=github&filters=ufn%=1";
console.log(url.replace('q=', '-'));

console.log(url.includes('fil'));

console.log(country.split('-'));

console.log(country);