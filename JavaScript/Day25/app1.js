h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if (num > 3) {
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`Color changed to ${color}!`)
            resolve("Color Changed");
        }, delay);
    });
}

//writing using async and await
async function demo() {
    try{

    
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("orange", 1000);
    }catch(error){
        console.log("error caught");
        console.log(error);
    }

    let a =5;
    console.log(a);
    console.log("new Number= ", a+3);
}


//using promises
// changeColor("blue", 1000)
// .then(()=>{
//     console.log("Blue color was completed");
// return changeColor("orange", 1000);
// })
// .then(()=>{
// console.log("Orange color was completed");
// return changeColor("green", 1000);
// })
// .then(()=>{
//     console.log("Green color was Completed");
// })


// setTimeout(()=>{
//     h1.style.color= color;
//     //if next color present then call the function
//     // if(nextColorChange) nextColorChange();
// }, delay);
//}
//nesting of callbacks -> callBack hell
// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000)
//     });
// });


// changeColor("green", 2000);
// changeColor("yellow", 3000);


