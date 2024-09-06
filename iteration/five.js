"use strict";

const carbonylGroups = ["aldehyde", "ketone", "carboxylic acid", "ester", "amide", "anhydride", "acid halide"];
carbonylGroups.forEach(function print(val) {
  console.log(val);  
});
console.log(" ");

carbonylGroups.forEach( (val)=> {
  console.log(val);  
});
console.log(" ");

function print(val) {
  console.log(val);  
};
console.log(" ");
carbonylGroups.forEach(print);

carbonylGroups.forEach((item, index, array) => {
    console.log(item, index, array);
  });
  
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

carbonylGroups.forEach((item) => {
    console.log(item); 
});

carbonylGroups.forEach((item) => {
    if (item && item.name) {
        console.log(item.name);
    } else {
        console.log("Missing name property or invalid item");
    }
});
