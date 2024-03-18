
// // Bubble sort Implementation using Javascript
 
// // Creating the bblSort function
// function bblSort(arr) {
 
//     for (var i = 0; i < arr.length; i++) {
 
//         // Last i elements are already in place  
//         for (var j = 0; j < (arr.length - i - 1); j++) {
 
//             // Checking if the item at present iteration 
//             // is greater than the next iteration
//             if (arr[j] > arr[j + 1]) {
 
//                 // If the condition is true
//                 // then swap them
//                 var temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
 
    // Print the sorted array
//     console.log(arr);
// }
 
// // This is our unsorted array
// var arr = [234, 43, 55, 63, 5, 6, 235, 547];
 
// // Now pass this array to the bblSort() function
// bblSort(arr);


// let a = [234, 43, 55, 63, 5, 6, 235, 547];
// for(i=0; i<a.length; i++){
//     for(j=0; j<a.lenght-i; j++){

//         if(a[j]>a[j+1]){

//             [a[j],a[j+1]] = [a[j+1],a[j]]
//         }

//     }
//     console.log(a);
// }

// ******Bubble Sort******

// let arr = [234, 43, 55, 63, 5, 6, 235, 547]

//     let len = arr.length

//     for(let i = 0; i < len; i++){
//         for(let j = 0; j < len - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j + 1] = temp;
//             }
//         }
       
//     }
//     console.log(arr)



// let a = [78, 98, 87, 67, 10, 23, 5]; 
 
// for (let i = 0; i < a.length; i++) { 
//     for (let j = 0; j < a.length - i ; j++) { 
 
//         if (a[j] > a[j + 1]) { 
 
//            [ a[j],a[j+1]]=[a[j+1],a[j]]
 
//         } 
//     } 
 
// }
// console.log(a); 

// var a = 6;
// var b = 11;
// var c = a; 
// a = b;
// b = c; 

// console.log(a,b)

// let x = [78, 98, 87, 67, 10, 23, 5];
// let c = x[0];
// x[0]= x[1];
// x[1] = c;
// console.log(x)

// ******* Bubble Sort *******     78, 98, 87, 67, 10, 23, 5

// let a = [-2,-1,-159,0,3]; 
 
// for (let i = 0; i < a.length; i++) { 
//     for (let j = 0; j < a.length -i ; j++) { 
 
//         if (a[j] > a[j + 1]) { 
 
//            [a[j],a[j+1]]=[a[j+1],a[j]]
 
//         } 
//     } 
 
// }
// console.log(a); 



//************ selection sort algorithm *****************



// let a = [9, 7, 5, 1]

// for(let i= 0; i<a.lenght - 1; i++) {
//     let minIndex = i;

//     for(let j= i+1; j<a.lenght; j++)
//     {

//         if (a[j] < a[minIndex] )
//            {
//             minIndex = j;
//         }
//     }
//     if(a[minIndex] < a[i]) {
//         [a[i],a[minIndex]] = [a[minIndex],a[i]];
//     }
    
// }
// console.log(a);


// let arr = [3, 5, 1, 2]; 
 
// for (let i = 0; i < arr.length - 1; i++) { 
//   let minIndex = i; 

//   for (let j = i + 1; j < arr.length; j++)
//    { 
//     if (arr[j] < arr[minIndex]) { 
//       minIndex = j; 
//     } 
//   } 
  
//   if (arr[minIndex]< arr[i]) { 
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; 
//   } 
// } 
 
// console.log(arr);
































