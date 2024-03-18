// function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
  
//   let person = {
//     name: 'shadab bagwan',
//   };
  
//   // Call the greet() function as if it were a method of the person object
//   greet.call(person); // "Hello, shadab bagwan!"
  
//   // Apply the greet() function to the person object with an array of arguments
//   greet.apply(person, ['shadab bagwan']); // "Hello, shadab bagwan!"
  
//   // Bind the greet() function to the person object and create a new function
//   const greetPerson = greet.bind(person);
  
//   // Call the greetPerson function
//   greetPerson(); // "Hello, shadab bagwan!"




// apply , call & bind in javascript

// call problem statement

// let userDetails = {
//   name : "shadab",
//   Age : 19,
//   Designation : "bachelor of vocational",
//   printDetails: function(){
//     console.log(this.name  )    
//   }
// }
// userDetails.printDetails(); 


// let userDetails2 = {
//   name : "bagwan",
//   Age : 20,
//   Designation : "bachelor of vocational",
 
// }
// function borrowing
// userDetails.printDetails.call(userDetails2);




// apply problem satement 


let userDetails = {
  name : "shadab",
  Age : 19,
  Designation : "bachelor of vocational",
 
}
let printDetails= function(state,country){
  console.log(this.name+" "+state+" "+ country);   
}

printDetails.call(userDetails,"Satara"+" "+"India"); 


let userDetails2 = {
  name : "bagwan",
  Age : 20,
  Designation : "bachelor of vocational",
 
}
// function borrowing
// call
printDetails.call(userDetails2,"Satara","India");

// apply
printDetails.apply(["Satara","India"]);

// bind
let newfun = printDetails.bind(userDetails2,"Satara","India");
newfun();