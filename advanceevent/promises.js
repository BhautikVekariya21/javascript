// const promiseone = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('promise1');
//         resolve();  
//     }, 1123);
// })
// .then(function() {
//     console.log('asynchronous task executed for promiseone');
// })
// .catch(function() {
//     console.log('error occurred in promiseone');
// });

// const promisetwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('promise2');
//         resolve();  
//     }, 1121);
// })
// .then(function() {
//     console.log('asynchronous task executed for promisetwo');
// })
// .catch(function() {
//     console.log('error occurred in promisetwo');
// });
// const promisethree = new Promise((resolve,reject)=>{
//     setInterval(()=>{
//         resolve({Brussels:'Belgium',Sofia:'Bulgaria',	Santiago:'Chile'});
        
//     },97)
// })
// .then((event)=>{
//     console.log(event);  
// })

// const promisefour = new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         let error = false;
//          if (!error) {
//             resolve({Tashkent:'Uzbekistan',Ankara:'Turkey',Tunis:'Tunisia'});
//          } else {
//             reject('error,something went wrong');
//          }
//     },1);
// })
// .then((country)=>{
//     console.log(country);
//     return country.Ankara;
// })
// .then((Ankara)=>{
//     console.log(Ankara);
// })
// .catch((error)=>{
//     console.log(error);  
// })
// .finally(()=>console.log('promisefour is finally resolved or rejected'));

const promisefive = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        let errorr = false;
         if (!errorr) {
            resolve({Warsaw:'Poland',Luxembourg:'Luxembourg',Dublin:'Ireland'});
         } else {
            reject('error,something went wrong');
         }
    },1000);
})
async function asyncawait(){
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
asyncawait();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))