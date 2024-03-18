
// nested call back or pyramid of doom 

// function getData (dataId, getNextData){
//     setTimeout(()=> {
//         console.log('shadab akbar bagwan', dataId);
//        if (getNextData){
//         getNextData();
//        };
//     },1000);  //1sec = 1000 ml sec
// }

// getData(1, () => {
//     console.log('getting data 1....');
//     getData(2 ,() => {
//         console.log('getting data 2....');
//         getData (3, () => {
//             console.log('getting data 3....');
//             getData('data fietched');
            
//         })
//     })
// })