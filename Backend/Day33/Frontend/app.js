// let arr1=[1,2,3];
// let arr2= [1,2,3];
// arr1.sayHello= ()=>{
//     console.log("Hello, I am arr");
// };
// arr2.sayHello=()=> {
//     console.log("Hello, I am arr");
// }

//factory function
function PersonMaker(name, age){
    const person = {
        name : name,
        age : age,
        talk (){
            console.log(`Hi my name is ${this.name}`)
        }
    }
    return person;
}
let p1= PersonMaker("Barun", 21);
let p2= PersonMaker("Soumitri", 21); //copy