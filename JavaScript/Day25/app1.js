h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
h1.style.color= color;
resolve("Color Changed");
        }, delay);
    });
}
changeColor("blue", 1000)
.then(()=>{
    console.log("Blue color was completed");
return changeColor("orange", 1000);
})
.then(()=>{
console.log("Orange color was completed");
return changeColor("green", 1000);
})
.then(()=>{
    console.log("Green color was Completed");
})


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


