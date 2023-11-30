// let arr1=[1,2,3];
// let arr2= [1,2,3];
// arr1.sayHello= ()=>{
//     console.log("Hello, I am arr");
// };
// arr2.sayHello=()=> {
//     console.log("Hello, I am arr");
// }

//factory function
// function PersonMaker(name, age){
//     const person = {
//         name : name,
//         age : age,
//         talk (){
//             console.log(`Hi my name is ${this.name}`)
//         }
//     }
//     return person;
// }
// let p1= PersonMaker("Barun", 21);
// let p2= PersonMaker("Soumitri", 21); //copy


//new Operator
//constructors - does not return anything and start with capital letter
function Person(name, age){
       this.name = name;
       this.age= age;
    }
    Person.prototype.talk= function(){
        console.log(`Hi, My name is ${this.name}`);
    }
let p1= new Person("Barun", 21);
let p2= new Person("Soumitri", 21);
