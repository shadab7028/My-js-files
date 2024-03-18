// this will run one by one which is eample of synchronous programing  

// Callback function definition 


// let a = "what is your name ";
// let b = "what is your age ";
// let c = "what is your favorite colour ";
// console.log(a , b , c);


// Example 1: Synchronous Callback
// function doSomethingSync() {
//     console.log("Doing something synchronously");
//      a(); // Execute the callback function
// }

// function a() {
//     console.log("Callback function executed!");

// }

// // Calling the function with a callback
// doSomethingSync(a);

// Output:
// Doing something synchronously
// Callback function executed!


//   // Example 2: Asynchronous Callback (Simulating with setTimeout)

//   function doSomethingAsync(callback) {
//     console.log("Doing something asynchronously");
//     setTimeout(function() {
//       callback(); // Execute the callback function after a delay
//     }, 500);
//   }

//   function asyncCallbackFunction() {
//     console.log("Asynchronous Callback function executed!");
//   }

//   // Calling the function with an asynchronous callback
//   doSomethingAsync(asyncCallbackFunction);

//   // Output:
//   // Doing something asynchronously
//   // (After 1 second)
//   // Asynchronous Callback function executed!





// let a = () => {
//     console.log("hello");
// }

// let v = (a) => {
//     console.log("shadab");
//     let s = () => {
//         console.log("bagwan");
//     }
//     s()
// }
// v()




// let v = (a) => {
//     console.log("shadab");
//     let s = () => {
//         console.log("bagwan");
//     }

//     // Call function s
//     s();
// }

// // Call function v
// v();


// let v = (call) => {
//     console.log("shadab");

//     call();  // Invoke the callback function

// }

// // Define a callback function
// let call = () => {
//     console.log("Callback function invoked!");
//     let b = setTimeout(() => {
//         console.log("i am Shadab");
//     }, 2000);
// }

// // Call function v with the callback
// call();
// v(call);



// function sayHi() {
//     console.log("Nice job!");
// };


// function sayHello() {
//     console.log("Hello");
// };


// function add(num1, num2, num3) {
//     console.log(num1 * num2);
//     num3()
// };

// add(9, 3, sayHello);

// add(7, 3, sayHi);

// add(7, 3, function () {
//     setTimeout(() => {
//         a = {
//             name: "Shadab",
//             age: 21,
//             add: "Kondhwa"
//         }
//         console.log(a);
//     }, 3000);
// });






// function something(call) {
//     setTimeout(function () {
//         console.log("Operation completed!");
//         call();
//     }, 1000);
// }

// function myCall() {
//     console.log("Callback function called!");
// }

// something(myCall);











// async function fatchData() {
//     setTimeout(() => {
//         console.log("Fatching Data is waiting...");
//     }, 1000);
//     // data();
// };


// let await = fatchData()
// function getData() {
//     console.log("Data fatching is completed!");
// };

// fatchData();
// getData();





// async function fetchData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("Fetching Data is waiting...");
//             resolve();
//         }, 3000);
//     });
// };

// async function getData() {
//     await fetchData();
//     setTimeout(() => {
//         let a = {
//             name: "Shadab",
//             age: 23,
//             add: "Kondhwa"
//         };
//         console.log(a);
//     }, 2000);

//     setTimeout(() => {
//         console.log("Data fetching is completed!");
//     }, 3000);

// }

// getData();



// function performAddition (a,b,cb){
//     setTimeout((c) =>{
//         cb(a+b)
//     },1000)
   
// }
// performAddition (3,8,function(sum){
//     console.log(sum);
// })