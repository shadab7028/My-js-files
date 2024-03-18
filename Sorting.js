
//bubble


// let a = [8, 9, 7, 6, 1,]; 
 
// for (let i = 0; i < a.length - 1; i++) { 

//     for (let j = 0; j < a.length -1 - i ; j++) { 
 
//         if (a[j] > a[j + 1]) { 
 
//            [ a[j],a[j+1]]=[a[j+1],a[j]]
 
//         } 
//     } 
// }

// console.log(a); 


//selection

// let arr = [3, 5, 1, 2];

// for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[lowest]) {
//             lowest = j;
//           }
//         }
//         if (lowest !== i) {
//             // Swap
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//           } 
//         }
        
//         console.log(arr);        // output [1, 2, 3, 5]
        

// for(let i=0;i<arr.length;i++){
//   let minimum = i;
//   for(let j=i+1;j<arr.length;j++){
//     if(arr[j]<arr[minimum]){
//       minimum = j;
//     }
//   }
//   if(minimum !==i){
//     [arr[i],arr[minimum]]=[arr[minimum],arr[i]]
//   }
// }
// console.log(arr);