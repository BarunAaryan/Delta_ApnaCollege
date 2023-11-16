// let args = process.argv;
// for(let i=2; i<args.length; i++){
//     console.log("Hello and welcome to ", args[i]);
// }  

// const someValue = require("./math");
// console.log(someValue);

const math = require("./math");
console.log(math);
console.log(math.sum(2,2));
console.log(math.PI);

//exports.sum= (a,b)=> a+b;
//module.exports.sum= (a,b)=> a+b;

//export =5 //this is wrong