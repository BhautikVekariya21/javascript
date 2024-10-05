const isuserloggenin = true; // A constant variable indicating whether the user is logged in
const calvin = 41; // A constant variable representing a numeric value

// First conditional statement to check the value of 'calvin'
if (calvin < 40) {
    console.log(`calvin is less than 40`);   
} else if (calvin > 41) {
    console.log(`calvin is greater than 41`);   
} else {
    console.log(`calvin is ${calvin}`); // This will execute since calvin equals 41
}

// Second conditional statement to check the duration of winter
const winter = 119; 
if (winter >= 119) {
    const month = 4.97; // Declaring a variable inside the if block
    console.log(`winter is around ${month} months`);
}

// Third conditional statement to check the type of market produce
const market = "guava"; // A constant variable representing a fruit
if (market === "strawberry") {
    console.log(`market is full of ${market}`);
} else if (market === "pineapple") {
    console.log(`market is full of ${market}`);
} else if (market === "apple") {
    console.log(`market is full of ${market}`);   
} else if (market === "cherry") {
    console.log(`market is full of ${market}`); 
} else {
    console.log(`market is full of ${market}`); // This will execute since market equals guava
}

// Fourth conditional statement with multiple conditions using logical operators
const markite = "guava";
const season = "winter";

if (markite === "strawberry" && season === "summer") {
    console.log(`markite is full of ${markite} and season continues in ${season}`);
} else if (markite === "pineapple" || season === "winter") {
    console.log(`markite is full of ${markite} and season continues in ${season}`); // This will execute
} else if (markite === "apple" && season === "monsoon") {
    console.log(`markite is full of ${markite} and season continues in ${season}`);
} else if (markite === "cherry" || season === "summer") {
    console.log(`markite is full of ${markite} and season continues in ${season}`);
} else {
    console.log(`No specific condition matched. Markite is full of ${markite} and season continues in ${season}`);
}
