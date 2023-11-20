// let args = process.argv;
// for(let i=2; i<args.length; i++){
//     console.log("Hello and welcome to ", args[i]);
// }  

// const someValue = require("./math");
// console.log(someValue);

// const math = require("./math");
// console.log(math);
// console.log(math.sum(2,2));
// console.log(math.PI);

//exports.sum= (a,b)=> a+b;
//module.exports.sum= (a,b)=> a+b;

//export =5 //this is wrong

// const info = require("./Fruits");
// console.log(info);
// console.log(info[0].name)

import {sum, PI} from "./math.js";
console.log(sum(1,2));
console.log(PI);