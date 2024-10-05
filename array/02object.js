// Creating an empty object 'zucchini' and dynamically adding properties
const zucchini = {};
zucchini.id = "zucch11";            // Adding an ID for the zucchini
zucchini.name = "yellow zucchinni"; // Adding a name for the zucchini 
zucchini.contain = true;            // Adding a boolean property indicating if it contains something (e.g., seeds)

// Uncomment to log the 'zucchini' object to the console
// console.log(zucchini);

// Creating a nested object 'kale' with an email and a full name
const kale = {
    email: "kale@kale.com",
    fullname: {
        userfullname: {
            firstname: "kale",  // First name property
            lastname: "Brassica oleracea var. sabellica" // Last name (scientific name)
        }
    }
};
// Uncomment to log the last name of the kale object
// console.log(kale.fullname.userfullname.lastname);

// Creating several vegetable objects with numeric keys to represent their names
const veg1 = {1: "Artichoke", 2: "Arugula", 3: "Asparagus", 4: "Bell Peppers"};
const veg2 = {5: "Beet Greens", 6: "Beets", 7: "Bok Choy", 8: "Broccoli"};
const veg3 = {9: "Broccoli Rabe", 10: "Brussels Sprouts", 11: "Butternut Squash", 12: "Cabbage (Green)"};
const veg4 = {13: "Cabbage", 14: "Carrots", 15: "Cauliflower", 16: "Celery"};
const veg5 = {17: "Chives", 18: "Collard Greens", 19: "Crookneck Squash", 20: "Daikon Radish"};
const veg6 = {21: "Dandelion Greens", 22: "Eggplant", 23: "Endive", 24: "Jicama"};
const veg7 = {25: "Green Onion", 26: "Kohlrabi", 27: "Shallots", 28: "Spinach"};

// Merging veg1 and veg2 into a new object using an object literal
const veg8 = { veg1, veg2 }; // veg8 becomes an object with veg1 and veg2 as properties

// Merging multiple vegetable objects into one using Object.assign
const veg9 = Object.assign({}, veg1, veg2, veg4); // Combines veg1, veg2, and veg4 into a new object

// Using the spread operator to merge veg1 and veg2 into a new object
const veg10 = { ...veg1, ...veg2 }; // Creates a new object with properties from both veg1 and veg2

// Creating an array of user objects with unique keys and names
const user = [
    {
        ket: 11,            // Each user object has a 'ket' property
        name: 'Tomatoes'    // and a 'name' property
    },
    {
        ket: 21,
        name: "Turnips"
    },
    {
        ket: 41,
        name: 'Spinach'
    },
];

// Logging the user array and accessing specific properties
console.log(user);                          // Logs the entire user array
console.log(user[1].name);                  // Accessing the name of the second user (Turnips)
console.log(Object.keys(user));              // Logs the keys of the user array (the array indices)
console.log(Object.values(user));            // Logs the values of the user array (the user objects)
console.log(Object.entries(user));           // Logs key-value pairs of the user array (each user's index and object)

// Checking if the 'zucchini' object has a property 'conatain' (note the typo)
console.log(zucchini.hasOwnProperty('conatain')); // Outputs: false, as the property does not exist

// Creating a unique symbol for a property
const smb = Symbol("8923245");

// Defining a more complex object 'vocal' with various properties
const vocal = {
    name: "carrot",                                           // Common name
    "scientific name": "Daucus carota",                     // Scientific name with a space in the key
    location: "china",                                       // Location of the carrot
    [smb]: "boiling",                                        // Using a symbol as a property key
    price: 90,                                               // Price property
    email: "carrot@carrot.com",                              // Email property
    containnow: false,                                       // Boolean property indicating some state
    majorproducer: ["china", "russia", "us"],               // Array of major producers
    season: "winter"                                         // Season for harvesting
};

// Using destructuring to extract properties from the 'vocal' object
const { majorproducer } = vocal;                            // Extracting the major producer array
console.log(majorproducer);                                  // Outputs: ["china", "russia", "us"]

const { majorproducer: largestproducer } = vocal;           // Renaming during destructuring
console.log(largestproducer);                                // Outputs: ["china", "russia", "us"]

const { location: loaclity } = vocal;                       // Renaming 'location' to 'loaclity'
console.log(loaclity);                                      // Outputs: "china"

const { season: seasonal } = vocal;                         // Renaming 'season' to 'seasonal'
console.log(seasonal);                                      // Outputs: "winter"
