// async function greet(){
//     //throw "some random error"
//     return "Hello!";
// }
// greet()
// .then((result)=>{
//     console.log("Promise was successful");
//     console.log("Result was ", result);

// })
// .catch((err)=>{
// console.log("Promise was rejected with an error", err)
// })
// let demo = async ()=> {
//     return 5;
// }

//Await
function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num= Math.floor(Math.random() * 10)+1;
            console.log(num)
        resolve();
        }, 1000);
    });
}
async function demo(){
    await getNum();
    await getNum();
    await getNum();
}