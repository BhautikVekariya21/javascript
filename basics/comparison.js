// Basic comparison operators
console.log(2 > 1);         // true: 2 is greater than 1
console.log(2 >= 1);        // true: 2 is greater than or equal to 1
console.log(2 < 1);         // false: 2 is not less than 1
console.log(2 == 1);        // false: 2 is not equal to 1
console.log(2 != 1);        // true: 2 is not equal to 1

// Type coercion in comparisons
console.log("2" > 1);       // true: "2" is coerced to the number 2, which is greater than 1
console.log("02" > 1);      // true: "02" is also coerced to the number 2, which is greater than 1

// Comparing null with numbers
console.log(null > 0);      // false: null is coerced to 0 in numeric context, so false
console.log(null == 0);     // false: null is not loosely equal to 0
console.log(null >= 0);     // true: null is coerced to 0, so true

// Comparing undefined with numbers
console.log(undefined == 0); // false: undefined is not loosely equal to 0
console.log(undefined > 0);   // false: undefined cannot be coerced to a number for comparison
console.log(undefined < 0);   // false: same reasoning as above

// Strict equality comparison (no type coercion)
console.log("2" === 2);      // false: strict equality checks both value and type; string "2" is not the same as number 2
