//Event Listener for elemnents
// let p = document.querySelector("p");
// p.addEventListener("click", function(){
// console.log("paragraph was Clicked");
// });

// let box= document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("Mouse inside div");
// });

//this in event listener
// let btn= document.querySelector("button");
// btn.addEventListener("click", function(){
// console.dire(this.innerHTML); 
// this.style.backgroundColor= "blue";
// });

//now lets suppose we need to change the color
let btn= document.querySelector("button");
let p= document.querySelector("p");
let h1= document.querySelector("h1");
let h3= document.querySelector("h3");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor= "yellow";
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);