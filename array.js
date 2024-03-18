// *****old method*****
// let subject = new Array ("marathi ", "hindi ", "english ")
// console.log(subject)

// *****Recent method of array*****
// let subject = ["Marathi ", "Hindi ", "English ", "Math ", "Science "]

// console.log(subject [1])

// *****Example of reecent array method*****
// let subject = ["Marathi ", "Hindi ", "English ", "Math ", "Science ", 40, 60]

// console.log(subject [6])

// *****update method in array*****
// let subject = ["Marathi ", "Hindi ", "English ", "Math ", "Science "]
// subject [1] = "Urdu"
// console.log(subject [1])

// *****OJECT IN ARRAY*****
// let person = {
//     firstName: "Tahir",
//     lastName: "Pathan",
//     age: 32
// }
// console.log(person)

// *****change in property value*****
// let person = {
//     firstName: "Tahir",
//     lastName: "Pathan",
//     age: 32
// }
// person.firstName = "Mohammad"
// console.log(person)

// *****adding in object property*****
// let person = {
//     firstName: "Tahir",
//     lastName: "Pathan",
//     age: 32
// }
// person.email = "@gmail.com"
// console.log(person)

// *****deleting in property*****
// let person = {
//     firstName: "Tahir",
//     lastName: "Pathan",
//     age: 32
// }
// delete person.lastName
// console.log(person)

// *****how to check property in true or false*****
// let person = {
//     firstName: "Tahir",
//     lastName: "Pathan",
//     age: 32
// }
// console.log( "age" in person)

// *****for in object property for indentify the property and value*****
// let person = {
//     firstName: "Tahir",
//     lastName: "Pathan",
//     age: 32
// }
// for( key in person){
//     console.log(key + " :"+ person[key])
// }

// *****how to define array in object*****
// let person = {
//     firstName: "Tahir",
//     lastName: "Pathan",
//     age: 32,
//     hobbies : ["listening Music ", "Outing ", "reading "]
// };
// // console.log(person)
// console.log(person.hobbies[0])

// *****how to define a object in object*****
// let person = {
//     firstName: "Tahir",
//     lastName: "Pathan",
//     age: 32,
//     hobbies : ["listening Music ", "Outing ", "reading "],
//     living : {
//         "city" : "Pune",
//         "state" : "Maharashtra",
//         "country" : "India"
//     }    
//     }
//    console.log(person)
// console.log(person.living.city)

// *****how to declare a function in object*****
// let person = {
//     firstName: "Tahir",
//     lastName: "Pathan",
//     age: 32,
//         salary : function(){
//             return 200000
//         }
//     }
//     console.log(person)
//    console.log(person.salary())

// **** how to combine the properties in object****
// let person = {
//     firstName: "Tahir",
//     lastName: "Pathan",
//     age: 32,
//         fullName : function(){
//             return this.firstName+" "+this.lastName
//         }
//     }
//      console.log(person)
//    console.log(person.fullName())

// *******ARRAY METHODS*******
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
// console.log(software[1])

// *****how to check Length in array method*****
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
// console.log(software.length)

// *****how to add elements in last*****
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
// software.push("Python")
// console.log(software)

// *****how to add elements in first*****
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
// software.unshift("Python")
// console.log(software)

// *****how to delete last elements*****
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
// software.pop();
// console.log(software)

// *****how to delete last elements*****
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
// software.shift(2)
// software.splice(1 , 1);
// console.log(software)

// *****how to delete first elements*****
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
// software.shift();
// console.log(software)

// *****how to delete middle elements*****
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
// software.splice(1, 2);
// console.log(software)

// *****how to blank whole array elements*****
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
// // software = [ ]
// console.log(software)

// *****how to check position of elements*****
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
//  let position = software.indexOf("Photoshop");
// console.log(position)

// *****how to split the elements*****
// let text = "My Name is Tahir Pathan"
// let wordarray =  text.split(' ')
// console.log(wordarray)

// *****how to join the elements*****
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
//  let textarray = software.join(' ')
// console.log(textarray)

// *****how to join more than one elements*****
// let software = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
// let software2 = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
// let software3 = ["Illustrator ", "Photoshop ", "Corel ", "Design "]
//  let newsoftware= software.concat(software2 , software3)
// console.log(newsoftware)

// *****multi dimentional array how to define a array in array*****
// let software = [
//     ['Illustrator', '1 month'],
// ['Photoshop', '2 month'],
// ['Corel', '3 month ']
// ];
// console.log(software[1])

// *****Math Object*****
// let x = 5.7
// console.log(x)

// *****1st Property of Math Round*****
// let x = Math.round(5.3);
// console.log(x)

// *****2nd Property highest value print*****
// let x = Math.ceil(5.1);
// console.log(x)

// *****3rd Property lowest value print*****
// let x = Math.floor(5.9);
// console.log(x)

// *****4th Property not counting point value*****
// let x = Math.trunc(5.9);
// console.log(x)

// *****5th Power propeerty*****
// let x = Math.pow(5, 10);
// console.log(x)

// *****6th Squar root propeerty*****
// let x = Math.sqrt(100);
// console.log(x)

// *****7th minimum and maximum propeerty*****
// let x = Math.min(100, 50, 40, 200);
// console.log(x)

// let x = Math.max(100, 50, 40, 200);
// console.log(x)

// *******Date Method*******
// let d = new Date();
// console.log(d)

// *******Only Date Method*******
// let d = new Date();
// console.log(d.toDateString())

// *******Only year Method*******
// let d = new Date();
// console.log(d.getFullYear())

// *******Only month Method*******
// let d = new Date();
// console.log(d.getMonth())

// *******rest of the Method*******
// console.log(d.getDate())
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())
// console.log(d.getMilliSeconds())
// console.log(d.getTime())
// console.log(d.getDay())

// *******Own date Method*******
// let d = new Date("November 28 2023");
// console.log(d)

// *******Set date Method*******
// let d = new Date();
// d.setDate(20);
// d.setFullYear(2023);
// console.log(d)

// *******Set Method*******
// d.setDate()
// d.setFullYear()
// d.setHour()
// d.setMilliSeconds()
// d.setMinutes()
// d.setMonth()
// d.setSeconds()
// d.setTime()


// let arr = [1,2,3,4,5];

// console.log(arr.splice(0,2));



































































