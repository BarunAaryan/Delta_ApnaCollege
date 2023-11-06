// const student = {
//     name: "Barun",
//     age: 21,
//     eng: 95,
//     math: 78,
//     phy: 89,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(avg); 
//     }
// }
// console.log(student.getAvg());

//try and catch
// console.log("Hello");
// try{
//     console.log(a);
// }catch(err){
//     console.log("caught an error.. a is not define");
//     console.log(err);
// }

//Implicit returns
// const mul=(a, b)=> (a*b);
// console.log(mul(2,5));

//This arrow function
const student = {
    name: "Barun",
    marks: 98,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent scope-> window
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this); //student object   
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this); //window
        }, 2000);
    },
}
//qs 1 
const square = (n) => n * n;
//qs 2
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);
setTimeout(() => {
    clearInterval(id);
    console.log("Clear interval ran");
}, 10000);