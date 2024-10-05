"use strict";

const carbonylGroups = ["aldehyde", "ketone", "carboxylic acid", "ester", "amide", "anhydride", "acid halide"];

// Using forEach with a named function
carbonylGroups.forEach(function print(val) {
  console.log(val);  
});
console.log(" ");

// Using forEach with an arrow function
carbonylGroups.forEach((val) => {
  console.log(val);  
});
console.log(" ");

// Defining a separate function and passing it to forEach
function print(val) {
  console.log(val);  
};
console.log(" ");
carbonylGroups.forEach(print);

// Using forEach with access to index and array
carbonylGroups.forEach((item, index, array) => {
  console.log(item, index, array);
});
console.log(" ");

// Creating an array of objects with additional properties
const organicGroups = [
    {
      name: "aldehyde",
      prefix: "formyl-",
      suffix: "-al"
    },
    {
      name: "ketone",
      prefix: "oxo-",
      suffix: "-one"
    },
    {
      name: "carboxylic acid",
      prefix: "carboxy-",
      suffix: "-oic acid"
    },
    {
      name: "ester",
      prefix: "alkoxycarbonyl-",
      suffix: "-oate"
    },
    {
      name: "amide",
      prefix: "carbamoyl-",
      suffix: "-amide"
    },
    {
      name: "anhydride",
      prefix: "none",
      suffix: "-anhydride"
    },
    {
      name: "acid halide",
      prefix: "halocarbonyl-",
      suffix: "-oyl halide"
    }
];

console.log(organicGroups);

// Iterate over carbonylGroups (array of strings)
carbonylGroups.forEach((item) => {
  console.log(item); 
});

// Iterate over organicGroups (array of objects) and safely access the 'name' property
organicGroups.forEach((item) => {
    if (item && item.name) {
        console.log(item.name);
    } else {
        console.log("Missing name property or invalid item");
    }
});
