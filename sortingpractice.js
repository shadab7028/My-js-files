// ****bubble sorting algorithm****

// let a= [8,6,8,2,1,3,4,2]

//   for( i=0; i<a.length; i++){

//     for(let j=0; j<a.length-i; j++){

//       if ( a[j] > a[j+1]){

//         [a[j],a[j+1]] = [a[j+1], a[j]];

//       }
//     }
//   }

// console.log(a);

// ****ṣelection sorting****

// let a = [8,6,8,2,1,3,4,2]

// for( let i=0; i < a.length - 1; i++){

//   let minIndex = i
//   {
//     for (j = i + 1; j < a.length; j++){

//       if(a[j] < a[minIndex]){
//         minIndex = j;

//       }
//     }

//     if(a[minIndex] < a[i]){

//       [a[i], a[minIndex]] = [a[minIndex],a[i]];

//     }
//   }
// }
// console.log(a)

// ****bubble sorting****

// let a = [-2,-1,-159,0,3];

// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length -i ; j++) {

//         if (a[j] > a[j + 1]) {

//            [a[j],a[j+1]]=[a[j+1],a[j]]

//         }
//     }

// }
// console.log(a);

// ****selection sorting*****

// let a = [-2,-1,-159,0,3]

// for( let i=0; i < a.length - 1; i++){

//   let minIndex = i
//   {
//     for (j = i + 1; j < a.length; j++){

//       if(a[j] < a[minIndex]){
//         minIndex = j;

//       }
//     }

//     if(a[minIndex] < a[i]){

//       [a[i], a[minIndex]] = [a[minIndex],a[i]];

//     }
//   }
// }
// console.log(a)

// function Bubblesort(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }

// console.log(ssort(a));

// ********** sorting array question***********

// const unsorttedArray = [20, 21, 16, 9, 14, 64, 82, 33, 52, 7];
// console.log("un sorted Array", unsorttedArray.toString());
// console.log(unsorttedArray.length);

// function applySort(a) {
//   let array1 = [];
//   let array2 = [];
//   let array3 = [];

//   for (let num of a) {
//     if (num % 2 === 0) {
//       array1.push(num);
//     } else if (num % 3 === 0) {
//       array2.push(num);
//     } else {
//       array3.push(num);
//     }
//   }

//   array1 = bubblesort(array1);
//   array2 = bubblesort(array2);

//   let temp = [];
//   for (let i = 1; i <= a.length; i++) {
//     if (i % 3 !== 0) {
//         if(array1.length > 0){
//             temp.push(array1.shift());
//         }
//     } else {
//         if(array2.length > 0){
//             temp.push(array2.shift());
//         }
//     }
//   }
//   temp = [...temp, ...array3];

//   return temp;
// }

// function bubblesort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// const sortedArray = applySort(unsorttedArray);
// console.log("Sorted Array", sortedArray.toString());
// console.log(sortedArray.length);
