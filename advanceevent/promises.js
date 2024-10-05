// Promise that resolves after 1123ms and logs a message
// const promiseone = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('promise1'); // Log when promise starts resolving
//         resolve();  // Resolve the promise after delay
//     }, 1123);
// })
// .then(function() {
//     console.log('asynchronous task executed for promiseone'); // Log on successful resolution
// })
// .catch(function() {
//     console.log('error occurred in promiseone'); // Catch any error (none expected here)
// });

// Promise that resolves after 1121ms and logs a message
// const promisetwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('promise2'); // Log when promise starts resolving
//         resolve();  // Resolve the promise after delay
//     }, 1121);
// })
// .then(function() {
//     console.log('asynchronous task executed for promisetwo'); // Log on successful resolution
// })
// .catch(function() {
//     console.log('error occurred in promisetwo'); // Catch any error (none expected here)
// });

// Promise that resolves with an object after 97ms
// const promisethree = new Promise((resolve, reject) => {
//     setInterval(() => {
//         resolve({Brussels:'Belgium', Sofia:'Bulgaria', Santiago:'Chile'}); // Resolve with an object containing country capitals
//     }, 97);
// })
// .then((event) => {
//     console.log(event);  // Log the resolved object
// });

// Promise that resolves with an object, but has error-handling logic
// const promisefour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;  // Simulate error flag
//          if (!error) {
//             resolve({Tashkent: 'Uzbekistan', Ankara: 'Turkey', Tunis: 'Tunisia'}); // Resolve with capitals if no error
//          } else {
//             reject('error, something went wrong'); // Reject if error flag is true
//          }
//     }, 1); // Short timeout to resolve
// })
// .then((country) => {
//     console.log(country); // Log the resolved object
//     return country.Ankara; // Return the capital of Turkey for further chaining
// })
// .then((Ankara) => {
//     console.log(Ankara); // Log the returned Ankara value
// })
// .catch((error) => {
//     console.log(error);  // Catch and log any error
// })
// .finally(() => console.log('promisefour is finally resolved or rejected')); // Always run this after resolve or reject

// Promise that resolves with capitals and async/await handling
const promisefive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let errorr = false; // Simulate error flag
        if (!errorr) {
            resolve({Warsaw: 'Poland', Luxembourg: 'Luxembourg', Dublin: 'Ireland'}); // Resolve with an object
        } else {
            reject('error, something went wrong'); // Reject if error flag is true
        }
    }, 1000); // 1 second delay
});

// Async/await function to handle promisefive
async function asyncawait() {
    try {
        const response = await promisefive; // Wait for promise to resolve
        console.log(response); // Log the resolved value
    } catch (error) {
        console.log(error); // Log any error if the promise rejects
    }
}
asyncawait(); // Call the async function

// Fetching data from GitHub API
fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json(); // Convert the response to JSON
    })
    .then((data) => {
        console.log(data); // Log the fetched data
    })
    .catch((error) => console.log(error)); // Log any error in the fetch request
