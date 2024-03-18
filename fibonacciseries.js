// fibonacci series n terms

let number = parseInt(21)
let n1 = 0, n2 = 1, nextTerm;
console.log('fibonacci Series')
for(let i = 1; i <= number; i++){
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

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








