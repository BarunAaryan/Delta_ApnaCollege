//Promises
// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }
// savetoDb("Apna college", 
// () => {
//     console.log("Success: Your data was saved: ");
//     savetoDb("Hello World",
//         () => {
//             console.log("Success2: data2 saved");
//             savetoDb("Shraddha", ()=>{
//                 console.log("Success3: data3 saved");
//             }, ()=>{
//                 console.log("Failure3: weak connection");
//             })
//         },
//         () => {
//             console.log("Failure2: weak connection");
//         }
//     );
// },
//     () => {
//         console.log("Failure: weak connection. data not saved");
//     }
// );

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("Success: Data was saved");
//         } else {
//             reject("Failure: Weak Connection");
//         }
//     });
// }

//Then and catch
// let request= savetoDb("Apna College"); //req = promise object
// console.log(request);
// request.then(()=>{
//     console.log("Promise was Resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Promise was rejected") 
//     console.log(request);
// })

// savetoDb("Apna College")
// .then((result) => {
//     console.log(" DATA 1 saved Promise was Resolved");
//     console.log(result);
//     return savetoDb("Hello World")
// })
// .then((result) => {
//     console.log(" DATA 2 saved Promise was Resolved");
//     console.log("Result of promise",result);
//     return savetoDb("Barun ILY");
// })
// .then((result)=>{
//     console.log("Data 3 was saved");
//     console.log("Result of promise",result);
// })
//     .catch((error) => {
//         console.log("Promise was rejected")
//         console.log("Error of promise",error);
//     })