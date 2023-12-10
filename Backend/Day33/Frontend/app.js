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
// function Person(name, age){
//        this.name = name;
//        this.age= age;
//     }
//     Person.prototype.talk= function(){
//         console.log(`Hi, My name is ${this.name}`);
//     }
// let p1= new Person("Barun", 21);
// let p2= new Person("Soumitri", 21);

//creating of constructor
// class Person{
//     constructor(name, age){
//         this.name= name;
//         this.age= age;
//     }
//     talk(){
//         console.log(`Hi, My name is ${this.name}`);
//     }
// }
// let p1= new Person("Barun", 21);
// let p2= new Person("Soumitri", 23);

//inheritance
class Person{
    constructor(name, age){
        this.name= name;
     this.age= age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}
class Student extends Person{
    constructor(name, age, marks){
        console.log("Student class constructor");
        super(name, age); //Parent class constructor is being called

        this.marks= marks
    }
    
}
class Teacher extends Person{
    constructor(name, age, subject){
        console.log("Teacher class constructor");
        super(name, age); //Parent class constructor is being called
    this.subject = subject;
    }
}
let stu1= new Student("Barun", 21, 35);
let stu2= new Student("Soumitri", 21, 45);