// Function that returns a Promise
// function doSomethingAsync() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = 2; // Simulating a successful operation
//       if (success) {
//         resolve("Operation successful!");
//       } else {
//         reject("Operation failed!");
//       }
//     }, 1000); // Simulating an asynchronous operation that takes 2 seconds
//   });
// }

// // Using the Promise
// doSomethingAsync()
//   .then((result) => {
//     console.log(result); // Output if the operation is successful
//   })
//   .catch((error) => {
//     console.log(error); // Output if the operation fails
//   });


// function divideNumbers(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error("Division by zero is not allowed.");
//         }

//         const result = a / b;
//         return result;
//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// }

// // Example usage
// console.log(divideNumbers(10, 2)); // Output: 5
// console.log(divideNumbers(8, 0)); // Output: Error: Division by zero is not allowed.



// try {
//     // Code that might throw an error
//     let result = 6 + abc;
//     console.log(result); // This line won't be executed if an error occurs
// } catch (error) {
//     // Code to handle the error
//     console.error("error mil gaya", error.message);
// }/* finally {
//     // Code that will be executed regardless of whether an error occurred or not
//     console.log('Finally block executed');
// }*/




// try {
//     let result = 6 + a;
//     console.log(result);
// }
// catch (error) {
//     console.log("error mil gaya", error.message);
// }







// const myPromise = new Promise((resolve, reject) => {
//   // Asynchronous operation, for example, a setTimeout
//   console.log("Adnan");
//   setTimeout(() => {
//     const success = true;

//     if (success) {
//       resolve("Operation completed successfully!");
//     } else {
//       reject("Operation failed!");
//     }
//   }, 2000); // 2 seconds ka asynchronous operation simulate kar rahe hain
// });

// // Use of Promise
// myPromise
//   .then((result) => {
//     // Promise completd
//     console.log("completed:", result);
//   })
//   .catch((error) => {
//     // Promise failed
//     console.error("Failed:", error);
//   })
//   .finally(() => {
//     // Yeh block hamesha chalega chahe Promise pura ho ya fail ho
//     console.log("Finally block run");
//   });






// const myPromise = new Promise((resolve, reject) => {
//   console.log("Adnan");
//   setTimeout(() => {
//     console.log("again hello");
//   }, 2000);
//   setTimeout(() => {
//     resolve();
//     console.log(" hello");
//   }, 200);
// });
// myPromise
//   .then((result) => {
//     console.log("completed:", result);
//     // console.log("completed");
//   })

// const myPromise = new Promise((resolve, reject) => {
//   console.log("Adnan");
//   setTimeout(() => {
//     console.log("again hello");
//   }, 2000);
//   setTimeout(() => {
//     console.log(" hello");
//     resolve(); // Call resolve to fulfill the promise
//   }, 200);
// });

// myPromise.then((result) => {
//   console.log("completed");
// });




// // Function that returns a Promise to simulate fetching data from an API
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation (e.g., API call)
//     setTimeout(() => {
//       const data = {
//         id: 1,
//         name: 'John Doe',
//         age: 25,
//       };

//       // Simulate a successful response
//       reject(data);

//       // If there's an error, you can use reject(error) instead of resolve(data)
//       // For example:
//       // reject(new Error('Failed to fetch data'));
//     }, 2000); // Simulating a delay of 2000 milliseconds
//   });
// }

// // Using the Promise
// fetchData()
//   .then((result) => {
//     console.log('Data fetched successfully:', result);
//     // You can perform further operations with the fetched data here
//   })
//   .catch((error) => {
//     console.error('Error fetching data:', error.message);
//     // Handle errors or show an error message to the user
//   });



// let promise = new Promise((resolve, reject) => {
//   alert("I am an alert in promise")
//   resolve(56)
// })


// console.log("hello one");
// setTimeout(function () {
//   console.log("hello two in 2 sec");
// }, 2000);
// console.log("hello" + "hello three");

// console.log(promise);




// let p1 = new Promise((resolve, reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
//     console.log("I am a promise and i am resolved ");
//     resolve(true)
//   }, 2000);
// });

// let p2 = new Promise((resolve, reject) => {
//   console.log("promise is pending");
//   setTimeout(() => {
//     console.log("I am a promise and i am rejected ");
//     reject(new Error("i am an error"))
//   }, 2000);
// });

// console.log(p1, p2)


// let p1 = new Promise((resolve, reject) => {
//   // console.log("promise is pending");
//   setTimeout(() => {
//     // console.log("I am a promise and I am resolved ");
//     resolve(true)
//   }, 2000);
// });

// let p2 = new Promise((resolve, reject) => {
//   // console.log("promise is pending");
//   setTimeout(() => {
//     // console.log("I am a promise and I am rejected ");
//     reject(new Error("I am an error"));
//   }, 2000);
// });

// // console.log(p1, p2);
// p1.then((result) => {
//   console.log(result);
// }

// );


// p2.catch((error) => {
//   console.log("some error occurred in p2");
// })


// // Function that returns a promise with a delayed resolution
// function delayedMessage(message, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(message);
//     }, delay);
//   });
// }

// // Using the promise
// delayedMessage("Hello, after 2 seconds!", 2000)

//   .then((result) => {
//     console.log(result); // Output: Hello, after 2 seconds!
//   })
//   .catch((error) => {
//     console.error('Error:', error.message);
//   })
//   .finally(() => {
//     console.log("catch block run");
//   });

// function age(message, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(message)
//     }, delay);
//   });
// };

// age("hello adnan", 2000)
// .then((result) => {
//   console.log(result);
// })
//   .catch((error) => {
//     console.error("Error :", error.message);
//   })
//   .finally(() => {
//     console.log("block of code run");
//   });



// function name(message, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("How are you");
//     }, delay);
//     resolve(message)
//   });
// }

// name("Ansari", 2000).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.error("Error :", error.message)
// })
//   .finally(() => {
//     console.log("Hello");
//   });


// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve("done!"), 2000);
// });

// // resolve runs the first function in .then
// promise.then(
//   result => console.log(result), // shows "done!" after 1 second
//   error => console.log(error) // doesn't run
// )
//   .finally(() => {
//     console.log("great job");
//   })



// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("job done!")
//   }, 2000);
// });

// promise.then(
//   result => console.log(result),
//   error => console.log(error)
// );




// let user1 = "User1 completed!";
// let user2 = "User2 completed!";

// let user = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(user1)
//   }, 2000);


// });

// let User = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(user2)
//   }, 3000);
// });

// user.then(
//   result => console.log(result),
// );

// User.then(
//   result => console.log(result),
// );


// User 1
// let user1Promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("User 1 completed.");
//   }, 2000);
// });

// // User 2 (starts after User 1 completes)
// let user2Promise = user1Promise.then((result) => {
//   // console.log(result); // Output: User 1 completed.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User 2 completed.");
//     }, 2000);
//   });
// });

// // Using the promises
// user1Promise.then((result) => {
//   console.log(result); // Output: User 1 completed.
// });

// user2Promise.then((result) => {
//   console.log(result); // Output: User 2 completed.
// });



// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("resolved after 2 sec")
//     resolve(56)
//   }, 2000);
// })
//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("resolved p2")
//       }, 2000);
//     });
//   })
//   .then((value) => {
//     console.log("we are done!");
//     return 2
//   }).then((value) => {
//     setTimeout(() => {
//       console.log("Now we are done!");
//     }, 2000);
//   });


// let p1 = new Promise((resolve, reject) => {
//   console.log(" hey i am not resolved")
//   setTimeout(() => {
//     resolve(1)
//   }, 2000);
// })

//   .then(() => {
//     console.log("conratulations this promise is resolved");
//   })

//   .then(() => {
//     console.log("hurry up!");
//   })






// ******* Promises ***** 
 
// let p1 = new Promise((resolve , reject) =>{ 
//     console.log("Promised is Pending") 
//     setTimeout(() => { 
//         console.log('I am a promise and am fulfilled') 
//         resolve(true) 
        
//     }, 5000); 
// }) 
 
// let p2 = new Promise((resolve , reject) =>{ 
//     console.log("Promised is Pending") 
//     setTimeout(() => { 
//         console.log('I am a promise and  i am rejected') 
//         reject(new Error("error SHADAB")) 
        
//     }, 2000); 
// }) 
// console.log(p1 , p2) 
 
 
// ****.then****** 
 
// let p1 = new Promise((resolve , reject) =>{ 
//     console.log("Promised is Pending") 
//     setTimeout(() => { 
//         // console.log('I am a promise and am fulfilled') 
//         resolve(true) 
        
//     }, 5000); 
// }) 
 
// let p2 = new Promise((resolve , reject) =>{ 
//     console.log("Promised is Pending") 
//     setTimeout(() => { 
//         // console.log('I am a promise and  i am rejected') 
//         reject(new Error("I am error")) 
        
//     }, 5000); 
// }) 
// p1.then((value) =>{ 
//     console.log(value) 
// }) 
// p2.then((value) =>{ 
//     console.log(value) 
// }) 
 
// **.catch***** 
 
let p1 = new Promise((resolve , reject) =>{ 
    console.log("Promised is Pending") 
    setTimeout(() => { 
        // console.log('I am a promise and am fulfilled') 
        resolve(true) 
        
    }, 1000); 
}) 
 

let p2 = new Promise((resolve , reject) =>{ 
    console.log("Promised is Pending") 
    setTimeout(() => { 
        // console.log('I am a promise and  i am rejected') 
        reject(new Error("I am error")) 
        
    }, 1000); 
}) 
p1.then((value) =>{ 
    console.log(value) 
}) 
 
p2.catch((error) =>{ 
    console.log("some error found in p2") 
})


// example 

// let promise = new promise ((resolve, reject) =>{
//     console.log('i am promise ');
//     resolve('success')
//     reject('some error')
//     / 
// })

  

// const getpromise = () => {
//    return new Promise ((resolve, reject)=> {
//         console.log("i am a promise");
//         resolve ("success");
//     })
// }

// let promise = getpromise();
// promise.then (() => {
//     console.log("promise full fill");
// })


