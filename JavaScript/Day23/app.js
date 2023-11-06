let btns = document.querySelectorAll("button");
// console.dir(btn);
for(btn of btns){
    btn.onclick= sayHello;
    btn.onmouseenter = function(){
        console.log("You entered a button");
    }
    console.dir(btn);
    }


// btn.onclick= function(){
//     console.log("Button was Clicked");
//     alert("Button was clicked");
// }

function sayHello(){
    alert("Hello");
}
// btn.onclick= sayHello; 