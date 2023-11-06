//Event Listeners
let btns = document.querySelectorAll("button");

for(btn of btns){
// btn.addEventListener("click", sayHello);
btn.addEventListener("dblclick", sayName);
}
function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("Barun nam hai mera");
}