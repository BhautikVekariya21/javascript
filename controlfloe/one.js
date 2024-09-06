const isuserloggenin = true
const calvin = 41;
if (calvin<40) {
    console.log(`calivin is less than 40`);   
} else if(calvin>41){
    console.log(`calvin is grater than 41`);   
}
else{
    console.log(`calvin is ${calvin}`);
}

const winter = 119;
if(winter>=119){
    const month = 4.97;
    console.log(`winter is around ${month} months`);
}
const market = "guava";

if(market==="strawberry"){
    console.log(`market is full of ${market}`);
}
    else if(market==="pineapple"){
        console.log(`market is full of ${market}`);
    }
    else if (market==="apple"){
        console.log(`market is full of ${market}`);   
    }
    else if (market==="cherry"){
        console.log(`market is full of ${market}`); 
    }
    else{
        console.log(`market is full of ${market}`);
}

const markite = "guava";
const season ="winter"


if (markite === "strawberry" && season === "summer") {
    console.log(`markite is full of ${markite} and season continues in ${season}`);
} else if (markite === "pineapple" || season === "winter")  {
    console.log(`markite is full of ${markite} and season continues in ${season}`);
} else if (markite === "apple" && season === "monsoon") {
    console.log(`markite is full of ${markite} and season continues in ${season}`);
} else if (markite === "cherry" || season === "summer") {
    console.log(`markite is full of ${markite} and season continues in ${season}`);
} else {
    console.log(`No specific condition matched. Markite is full of ${markite} and season continues in ${season}`);
}
