// //For each
// let arr= [1,2,3,4,5];
// let print = function(el){
// console.log(el);
// };
// arr.forEach(print);

// //or
// arr.forEach(function(el){
// console.log(el);
// });
// //or
// arr.forEach((el)=>{
// console.log(el);
// }); 

//for each 2
// let students=[{
//     name: "Barun",
//     marks: 98,
// }, 
// {
// name: "Trisha",
// marks: 56,
// }, 
// {
// name: "Barkha",
// marks: 78,
// }];
// arr1.forEach((student)=>{
//     console.log(student.marks);
// });
// let gpa= students.map((el)=>{
// return el.marks/10;
// });
// console.log(gpa);
//map
// let num = [1,2,3,4];
// let double = num.map((el)=>{
// return el*2;
// });
// console.log(double);

//Filter 
// let nums= [1,2,3,4,5,6,7,8,9,10];
// let ans = nums.filter((el)=>{
// return el%2==0; //even -> true
// });
// console.log(ans);

//Reduce element
// let nums= [1,2,3,4];
// let finalVal= nums.reduce((res, el)=> res + el);
// console.log(finalVal);

//Maximum in Array→ using reduce
// let arr =[1,4,2,5,6,7,9,2];
// let max = arr.reduce((max , el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

//Practice questions 
//q1
// let nums = [10, 20, 30, 40];
// let ans = nums.every((el) => el % 10 == 0);
// console.log(ans);
// //q2
// function getMin(nums) {
//     let min = nums.reduce((min, el) => {
//         if (min < el) {
//             return min;
//         } else {
//             return el;
//         }
//     });
//     return min;
// }
// console.log(getMin(nums));

// function sum(a=2, b){
//     return a+b;
// }
// sum(1,3); //4
// sum(1); //a=1, b=undefined

//spread object literals
// const data={
//     email: "barunaryan@gmail.com",
//     password: "abcd",

// };
// const dataCopy={...data, id:123, country: 'India'};
// console.log(dataCopy);

// //
// let arr=[1,2,43,5]; //val
// let obj1={...arr}; //obj stores key and value
// console.log(obj1);
// let obj2={..."Barun"};
// console.log(obj2);

//Rest 
// function sum(...args){
//     //arguments
//     for(let i=0; i<args.length; i++)
// {
//     console.log("You gave us: ", args[i]);
// }}
// console.log(sum(1,2,3,4));

// //argumement is a collection in js even if it is not defined we can use it
// function min(){
//     console.log(arguments);
// }
// console.log(min(1,3,5,6,7));

// function min1(...args){
//     return args.reduce((min, el)=>{
//         if(min>el){
//             return el;
//         }else{
//             return min;
//         }
//     })
// }
// console.log(min1(1,23,233,4));

//destructuring
//mixing descturing with rest
// let names=["Tony", "bruce", "Peter", "Steve", "Barun", "trisha", "barkha"];
// let [winners, runneup, ...others]= names;
// console.log(others);

//Destructuring for Objects
const student={
    name:"Barun",
    age: "21",
    class: 12,
    subjects: ["hindi", "english", "math", "science"],
    username: "barun!123",
    password: "abscd"
};
// let username= student.username;
// let password= student.password;
// let {username, password}= student;
// //searching for username inside student object
// console.log(username);
// let {username: user, password: secret}= student;
// //now username is stored inside user
// console.log(secret); 
// let {username: user, password: secret, city= "Mumbai"}= student;
// //if nothing in city -> city set defauot to mumbai

