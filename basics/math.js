const score = 94;
console.log(score);  // Outputs: 94. This is a basic integer output.

const balance = new Number(97);
console.log(balance.toString().length);  // Outputs: 2. Converts the number to string and returns its length ("97" has 2 characters).
console.log(balance.toFixed(7));         // Outputs: "97.0000000". Formats the number with 7 decimal places.

const fnum = 1122154.154;
console.log(fnum.toPrecision(8));  // Outputs: "1122154.2". Specifies the number of total digits (integer + decimal) to show, rounding if necessary.

const humster = 100000000000;
console.log(humster.toLocaleString());  // Outputs: "100,000,000,000". Converts the number to a string with commas to separate thousands for easier readability.

console.log(Math);  // Outputs: Math object with all its methods and constants (e.g., Math.PI, Math.random(), Math.sqrt(), etc.).

console.log(Math.tan(30));  // Outputs: -6.405331196646276, the tangent of 30 radians (not degrees).
console.log(Math.abs(-4));  // Outputs: 4, the absolute value of -4.
console.log(Math.ceil(8.6));  // Outputs: 9. Rounds up to the next whole number.
console.log(Math.floor(8.6));  // Outputs: 8. Rounds down to the previous whole number.
console.log(Math.sign(-8));    // Outputs: -1. Returns the sign of the number (-1 for negative, 1 for positive, 0 for zero).
console.log(Math.log(2));      // Outputs: 0.6931471805599453, the natural logarithm (base e) of 2.
console.log(Math.min(1,2,11,41,87,14));  // Outputs: 1. Returns the smallest number from the arguments.
console.log(Math.max(1,2,11,41,87,14));  // Outputs: 87. Returns the largest number from the arguments.
console.log(Math.round(884255555.0155));  // Outputs: 884255555. Rounds to the nearest integer (down because .0155 is closer to 0).
console.log(Math.pow(2,10));              // Outputs: 1024. Calculates 2 raised to the power of 10 (2^10).
console.log(Math.exp(-2));                // Outputs: 0.1353352832366127. Returns e^(-2), where e is Euler's number (~2.718).
console.log(Math.clz32(1123));            // Outputs: 21. Counts leading zero bits in the 32-bit binary representation of the number.

console.log(Math.random());  // Outputs: A random decimal between 0 (inclusive) and 1 (exclusive), e.g., 0.5749303435694733.
console.log(Math.random() * 100);  // Outputs: A random number between 0 and 100, e.g., 47.35108745269183.
console.log(Math.floor(Math.random() * 11) + 1);  // Outputs: A random integer between 1 and 11 (inclusive).

const min = 11;
const max = 21;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // Outputs: A random integer between 11 and 21 (inclusive).
