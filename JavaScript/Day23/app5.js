// let inp= document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//     console.log("key= ",event.key);
//     console.log("code= ",event.code);
//     console.log("Key was pressed")
// });
// inp.addEventListener("keydown", function(event){
//     console.log("code= ", event.code);
//     if(event.code=="ArrowUp"){
//         console.log("character moves forward");
//     }else if(event.code=="ArrowDown"){
//         console.log("Character moves Downward");
//     }
//     else if(event.code=="ArrowLeft"){
//         console.log("Character moves Left");
//     }
//     else if(event.code=="ArrowRight"){
//         console.log("Character moves Rightward");
//     }
// });

//Form events
// let form= document.querySelector("form");
// form.addEventListener("submit", function(){
//     event.preventDefault();
// alert("form submitted");
// });

//Extracting Data
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event){
// event.preventDefault();
// let user= document.querySelector("#user");
// let pass= document.querySelector("#pass");

// console.log(user.value);
// console.log(pass.value);
// alert(`Hi ${user.value}, your password is set to ${pass.value}`);

// });
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event){
// event.preventDefault();
// console.dir(form);

// let user= this.elements[0]; //form.elements[0]
// let pass= this.elements[1];

// console.log(user.value);
// console.log(pass.value);
// alert(`Hi ${user.value}, your password is set to ${pass.value}`);

// });

//More Events
let form= document.querySelector("form");
form.addEventListener("submt", function(event){
event.preventDefault();
});

let user= document.querySelector("#user");
user.addEventListener("change", function(){
    console.log("Input chnaged");
    console.log("Final Value=", this.value);
});
user.addEventListener("input", function(){
    console.log("Input event");
    console.log("Final Value=", this.value);
});

//activity
let inp= document.querySelector("#text");
let p= document.querySelector("p");
inp.addEventListener("input", function(){
    console.log(inp.value);
p.innerText= inp.value;
})
