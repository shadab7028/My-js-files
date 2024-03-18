// number 1
// *
// **
// ***
// **** pattern
// let n = 4
// for( i = 0; i<n; i++){
//     let str = ""
//     for(j=0; j<i+1; j++){
//     str+= "*"
//     }
// console.log(str)
// }


// number2
// *
// **
// ***
// **** pattern

// let n = 5
// for( let i = 1; i<n; i++){
//     let str = '';

//     for(let j=0; j<n -i; j++){
//         str += " ";
//     }
//     for(let k=0; k<i; k++)
// {str+= "*"}
// console.log(str)
// }

// number 3
//   *
//  **
//  ***
// **** pattern

// let n = 5
// for( i = 0; i<n; i++){
//     let str = ""
//     for(j=0; j<n-i; j++){
//     str+= " "
//     }
//     for(k=0; k<i; k++){
//         str+="*"
//     }
// console.log(str)
// }

// number  4
// ****
//   ***
//    **
//     *
// let n = 5
// for( let i = 1; i<n; i++){
//     let str = '';

//     for(let j=0; j<i; j++){
//         str += " ";
//     }
//     for(let k=0; k<n-i; k++)
// {str+= "*"}
// console.log(str)
// }


//number 5
// pyramid pattern
// let n = 7
// for(let i=1; i<=n; i++){
//     let str="";

//     for(k=1; k<=(n-i); k++){
//     str+=" " }

//     for(let j=1; j<=i; j++){
//         str+="* "
//     }
// console.log(str);
// }

// number6
// inverted pyramid

// let n = 5
// for(let i=1; i<=n; i++){
//     let str="";

//     for(let j=1; j<=i; j++){
//     str=  str + " " }

//     for(k=1; k<=(n-i); k++){
//         str= str + "* "
//     }
// console.log(str);
// }


// number7
// diamond pattern

// let n = 5
// for(let i=1; i<=n; i++){
//         let str="";
    
//         for(k=1; k<=(n-i); k++){
//         str=  str + " " }
    
//         for(let j=1; j<=i; j++){
//             str= str + "* "
//         }
//     console.log(str);
//     }    
// for(let i=1; i<=n; i++){
//     let str="";

//     for(let j=1; j<=i; j++){
//     str=  str + " " }

//     for(k=1; k<=(n-i); k++){
//         str= str + "* "
//     }
// console.log(str);
// }

// number 5
//   *
//  ***
// *****
// ******* pyramid pattern

// let n = 4
// for(let i=1; i<=n; i++){
//     let str="";

//     for(k=1; k<=n-i; k++){
//     str+= " " }

//     for(let j=1; j<i; j++){
//         str+="*"
//     } for(z=1; z<=i; z++){
//         str+="*"
//     }
// console.log(str);
// }

// number 6
// *******
// *****
//  ***
//   * inverted pyramid

// let n = 3
// for(i=0; i<=n; i++){
//     let str=""
    
//     for(j=0; j<=i; j++){
//         str+=" "
//     }
//     for(k=0;k<=n-i-1; k++){
//         str+="*"
//     }
//     for(j=0; j<=n; j++){
//        let str=""
//     }
//     for(j=0; j<=n-i; j++){
//         str+="*"
//     } console.log(str)
// }

// number 7
// *
// ***
// *****
// *******
// *****
// ***
//  * diamond pattern

// let n = 4
// for(let i=1; i<=n; i++){
//     let str="";

//     for(k=1; k<=n-i; k++){
//     str+= " " }

//     for(let j=1; j<i; j++){
//         str+="*"
//     } for(z=1; z<=i; z++){
//         str+="*"
//     }
// console.log(str);
// }
// for(i=0; i<=2; i++){
//     let str=""
    
//     for(j=0; j<=i; j++){
//         str+=" "
//     }
//     for(k=0;k<=2-i-1; k++){
//         str+="*"
//     }
//     for(j=0; j<=2; j++){
//        let str=""
//     }
//     for(j=0; j<=2-i; j++){
//         str+="*"
//     } console.log(str)
// }

// *******
// *****
//  ***
//   * inverterd pyramid new one in 2 loops optimization

// let n=4 
// for (let i = 0; i <n; i++) {
// str=''
// for (let k = 1; k < i+1; k++) {
//   str+=" "
//     }
//   for (let j = 0; j < n+3-(i*2); j++) {
//    str+="*"
//   } 
//   console.log(str)
// }

// *
// ***
// *****
// ******* pyramid in 2 loops optimization

// let n =4
// for (let i = 0; i< n; i++) {
// let str = "";
//   for (let k= 0; k<n-i ; k++) {
//     str+= " ";   
//   }for (let j= 0;  j<(i*2)+1 ; j++) {
//    str+="*" 
//   }console.log(str)
// } 

//  *
// ***
// *****
// *******
// *****
//  ***
//   *  diamond pattern (combine new one) optimization

// let n=4 
// let n1= n-1
// for (let i = 0; i< n; i++) {
// let str = "";
//   for (let k= 0; k<n-i ; k++) {
//     str+= " ";   
//   }for (let j= 0;  j<(i*2)+1 ; j++) {
//    str+="*" 
//   }console.log(str)
// }
// for (let i = 0; i <n1; i++) {
// str=''
// for (let k = 0; k < i+2; k++) {
//   str+=" "
//     }
//   for (let j = 0; j < n1+2-(i*2); j++) {
//    str+="*"
//   } 
//   console.log(str)
// }

// *******
//  *****
//   ***
//    *
//   ***
//  ***** hour glass optimization

// let n=4 
// for (let i = 0; i <n; i++) {
// str=''
// for (let k = 1; k < i+1; k++) {
//   str+=" "
//     }
//   for (let j = 0; j < n+3-(i*2); j++) {
//    str+="*"
//   } 
//   console.log(str)
// }
// for (let i = 1; i< n; i++) {
// let str = "";
//   for (let k= 1; k<n-i ; k++) {
//     str+= " ";   
//   }for (let j= 0;  j<(i*2)+1 ; j++) {
//    str+="*" 
//   }console.log(str)
// }

// pyramid pattern in if and else condition

// let n = 4
// for(i= 0; i<n; i++){
//     let str= ""
//     for(j=0; j<2*n-1; j++){
//         if(i<4){
//             if((n-i-1)<= j && j < (n+i)){
//                 str+="*"
//             } else{ str+= " "}
//         } else {str+=""}
//     } console.log(str)
// }

//    *   
//   * *  
//  *   * 
//  *     *
//   *   * 
//    * *  
//     *  hollow pattern if else condition as per sir

// let n=4 
// let n1=n-1
// for (let i = 0; i< n; i++) {
// let str = "";
//   for (let k= 0; k<n-i ; k++) {
//     str+= " ";   
//   }for (let j= 0;  j<(i*2)+1 ; j++) {
//     if(j===0 || j===i*2){str+="*" }
//     else{ str+=" " }
   
//   }console.log(str)
// }
// for (let i=0; i<n1; i++) {
// str=''
// for (let k = 0; k < i+2; k++) {
//   str+=" "
//     }
//   for (let j = 0; j < n1+2-(i*2); j++) {
//     if(j===0 || j=== n1+2-(i*2)-1){str+="*"}
//     else{str+=" "}
   
//   } 
//   console.log(str)
// }

