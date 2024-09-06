let num =[0,1,2,3,4,5,6,7,8,9,10,11,21]

const seven = num.map((increment)=>{return increment+11})

console.log(seven);

const chaining = num.map((increment)=> increment+11)
                    .map((subst)=> subst-4)
                    .map((multuli)=> multuli*11)
                    .map((increment)=> increment+11)
                    .filter((us)=>us>111)

console.log(chaining);
                    