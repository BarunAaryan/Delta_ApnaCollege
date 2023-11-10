// function hello(){
//     console.log("Inside hello Function");
//     console.log("Hello");
// }
// function demo(){
// console.log("Calling hello function");
// hello();
// }
// console.log("Calling demo function");
// demo();
// console.log("Done Bye");

function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two()+ one();
    console.log(ans);
}
three();