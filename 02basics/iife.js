const counter = (function () {
    let count = 0; 

    return {
        increment: function () {
            count++;
            console.log("Counter:", count);
        },
        getValue: function () {
            return count;
        }
    };
})();

counter.increment(); 
counter.increment(); 
console.log(counter.getValue());

((name)=>{
    console.log(`welcome ${name}`)
})("Brinjal");

(function vinuska(){
    console.log(`hello vinuska`)
})();

