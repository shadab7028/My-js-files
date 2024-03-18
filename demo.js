// let userDetails1 = {
//   name: "Arshad",
//   age: 24,
//   Designation: "UI Developer",
//   member: function () {
//     console.log(this.age);
//   },
// };
// userDetails1.member();

// let printDetails = function (state, country) {
//   console.log(`${this.name} ${this.country} ${state}`);
// };
// printDetails.call(userDetails1, "Maharashtra");

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);
//   console.log(fullName);




// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName: "Hege",
//     lastName: "Nilsen",
//   }
  
//   // Binding the person.fullName method to the member object
//   let fullName = person.fullName.bind(member);
  
//   // Calling the newly created fullName function
//   console.log(fullName()); // Output: "Hege Nilsen"
  

// sum (5,6)
// function sum (a,b){
//  console.log(a+b);
// } 



function manupulate (a,b,cb){
    cb(a+b);
}
manupulate (5,6,(d)=>{
    console.log(d);
})
 

