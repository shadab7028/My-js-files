
// // while loop
// let counter = 0
// while(counter <10){
//     counter++
//     console.log(counter)
    
// }

// // // do while loop
// let  a = 0
// do{console.log(a);
// a++}
// while(a<10)

// for loop

// for  (let  i = 0; i<10; i++){
//     console.log(i)
// }



// fibonacci series up to n term
// let number = parseInt(21)
// let n1 = 0, n2 = 1, nextTerm;
// console.log('fibonacci Series')
// for(let i = 1; i <= number; i++){
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }



// fibonacci series up to certain number

// let number = parseInt(15)
// let n1 = 0, n2 = 1, nextTerm;
// console.log('Fibonacci Series')
// console.log(n1)
// console.log(n2)
// nextTerm = n1 = n2;
// while (nextTerm <= number){
//     console.log(nextTerm);
//     n1 = n2
//     n2 = nextTerm;
//     nextTerm = n1 + n2
// }

// let n = 7
// let j =  0
// for(let  i = 2; i<= n-1; i++){
//     if(n% i == 0){
//         j= j+1
//     }
// }
// if (j == 0){
// console.log( n + " is prime")}
// else ( j >= 0){
//     console.log(n + " is not prime")
// }

// series
// let num1 = 2
// let add = 3
// for(i=2; i<=10; i++){
//     console.log(num1)
//     num1=  add + num1
// }

// let n = 4
// for( i = 0; i<n; i++){
//     let str = ""
//     for(j=0; j<i+1; j++){
//     str+= "*"
//     }
// console.log(str)
// }

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

// star pattern

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

// let n = 5
// for( let i = 1; i<n; i++){
//     let str = "";

//     for(let j=0; j<n -i; j++){
//         str += " ";
//     }
//     for(let k=0; k<i; k++)
// {str+= "*"}
// console.log(str)
// }

// let n = 5
// for(let i=1; i<=n; i++){
//     let str="";

//     for(k=1; k<=(n-i); k++){
//     str=  str + " " }

//     for(let j=1; j<=i; j++){
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

// number 5 pattern pyramid

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

// diamond pattern

// let n=4
// for(let i=0;i<n;i++){
//     let str = ""

//     for(l=0; l<n-i; l++){
//         str +=" "
//     }
 
//     for(j=0;j<=i;j++){
//         str += "*"

//     }
//     for(k=1;k<i+1;k++){
//         str += "*"
//     }
    
//     console.log(str)
// }

// for(i=0; i<=n-1; i++){
//     let str =""

//     for(j=0; j<=i+l; j++){
//         str+=" "
//     }
//     for(k=0; k<=2-i-1; k++){
//         str+="*"
//     } 

//     for(j=0; j<=2; j++){
//     let str =""
//     }
//     for(j= 0; j<=2-i; j++){
//         str+= "*"
//     }
// console.log(str);
// }

// hourglass pattern

// let n= 4
// for(i=0; i<=n; i++){
//     let str =""

//     for(j=0; j<=i; j++){
//         str+=" "
//     }
//     for(k=0; k<=n-i-1; k++){
//         str+="*"
//     } 

//     for(j=0; j<=n; j++){
//     let str =""
//     }
//     for(j= 0; j<=n-i; j++){
//         str+= "*"
//     }
// console.log(str);
// }


// for(let i=0;i<=n;i++){
//     let str = ""

//     for(l=0; l<=n-i; l++){
//         str +=" "
//     }
 
//     for(j=0;j<=i;j++){
//         str += "*"

//     }
//     for(k=1;k<i+1;k++){
//         str += "*"
//     }
    
//     console.log(str)
// }

// diamond pattern
// let n = 3
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

// let n = 4
// for(i=0; i<n; i++){
//     let str= ""
//     for(j=0; j<(n+i); j++) {
//         if(j<n-(i+1)){
//             str+=" "
//           }else{str+="*";}
//         }
//         console.log(str)
// }

// inverted pyramid new in 2 loops optimization

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

// pyramid pattern optimization

// let n =4
// for (let i = 0; i< n; i++) {
// let str = "";
//   for (let k= 0; k<n-i ; k++) {
//     str+= " ";   
//   }for (let j= 0;  j<(i*2)+1 ; j++) {
//    str+="*" 
//   }console.log(str)
// } 

// diamond pattern in new method optimization
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


// hour glass optimization method

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

// pyramid pattern in if else condition

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


// let n = 4
// for(i= 0; i<n; i++){
//     let str= ""
//     for(j=0; j<2*n-1; j++){
//         if(i<4){
//             if((n-i-1)<= j && j < (n+i)){
//                 str+="*"
//             } else{ str+= " "}
//         } else {str+=""}
    
//    str+="*" } console.log(str)
// }

// number pattern (a)

// let n = 4
// for(i=0; i<n; i++){
//     let str=""
//     for(j=1; j<=i+1; j++){
//     str+= j }
//     console.log(str)
// }

// number pattern (d)
// let n = 4
// for(i=0; i<n; i++){
//     let str=""
//     for(k=0; k<n-i; k++){
//         str+=" "
//     }
//     for(j=1; j<=i+1; j++){
//     str+= j }
//     console.log(str)
// }

// number pattern (b)

// let n = 4
// for(i=0; i<n; i++){
//     let str=""
//     for(j=1; j<=n-i; j++){
//         str+= j }
//     for(k=0; k<n-i; k++){
//         str+=" "
//     }
//     console.log(str)
// }

// number pattern (c)

// let n = 4
// for(i=0; i<n; i++){
//     let str=""
//     for(k=0; k<i; k++){
//         str+=" "
//     }
//     for(j=1; j<=n-i; j++){
//         str+= j }
    
//     console.log(str)
// } 

// simple number pyramid pattern
// let n =4
// for (let i = 0; i< n; i++) {
// let str = "";
//   for (let k= 0; k<n-i ; k++) {
//     str+= " ";   
//   }for (let j= 1;  j<=(i*2)+1 ; j++) {
//    str+= j
//   }console.log(str)
// } 

// hallow pattern

// let n = 4
// let n1 = 3
// for(i=0; i<=n; i++){
//     let str = ""
//     for(j=n; j>=1; j--){
//         if(i==j){
//             str+= "*"
//         } else{
//             str+=" "
//         }
//     } 
// for(k=2; k<=n; k++){
//         if(i==k){
//             str+="*"
//         }else { str+= " "}
//     }
// console.log(str)
// }
// for(i=n1; i>=1; i--){
//   let str= ""
//   for(j=n; j>=1; j--){
//     if(i==j){
//       str+="*"
//     }else{ str+=" "}
//   } for(k=2; k<=n; k++){
//     if(i==k){
//       str+="*"
//     }else{ str+=" "}
//   } console.log(str)
// }


// inverted number pyramid pattern
// let n = 4; 
// for (let i=0; i<n; i++) { 
//     let str = ""; 
     
//     for (let j=0; j<i; j++) { 
//         str += " "; 
//     } 
//     for (let k=1; k<=n-i; k++) { 
//         str += k; 
//     }
//     for (let z=n-i-1; z>=1; z--) { 
//         str += z; 
//     } 
//     console.log(str); 
// }

// number pyramid as per sir
// let n=4
// for(i=0; i<n; i++){
//   let str = ""
//   for(j=1; j<n-i; j++)
//   { str+= " "}
//   for(z=1; z<=i+1; z++){
//     str+= z
//   }
// for(k=i; k>0; k--){
//   str+= k
// } console.log(str)
// }

// need to check
// let n=4
// let n1=3
// for(i=0; i<n1; i++){
//   let str = ""
//   for(j=0; j<n1-i; j++)
//   { str+= " "}
//   for(z=1; z<=i+1; z++){
//     str+= z
//   }
// for(k=i; k>0; k--){
//   str+= k
// } console.log(str)
// }
// for(i=0; i<n; i++){
//   let str = ""
//   for(j=0; j<n-i; j++)
//   { str+= " "}
 
//   for(k=1; k<=n-i; k++){
//     str+= k
//   }
//   for(z=n-i-1; z>=1; z--){
//     str+= z
//   }
//  console.log(str)
// }

// hour glass number pattern

// let n = 4;
// for (let i=0; i<n; i++) { 
//     let str = ""; 
//     for (let j=0; j<i; j++) { 
//         str += " "; 
//     } 
//     for (let k=1; k<=n-i; k++) { 
//         str += k; 
//     } 
//     for (let z=n-i-1; z>=1; z--) { 
//         str += z; 
//     } 
//     console.log(str); 
// }
// for(i=1; i<n; i++){
//   let str = ""
//   for(j=1; j<n-i; j++)
//   { str+= " "}
//   for(z=1; z<=i+1; z++){
//     str+= z
//   }
// for(k=i; k>0; k--){
//   str+= k
// } console.log(str)
// }


// const items = ['Books', 'Pen', 'Pencil']
// const [y] = [... items]
// // console.log(x)
// console.log(y)
































































