// function hello(){
//     console.log("Hello");
// }
// hello();
// function printName(){
//     console.log("My name is Barun Aaryan");
// }
// printName();

// function print1to5(){
//     for(let i=0; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();

// function poem(){
//     console.log("Twinkle, Twinkle Little Star");
//     console.log("How, I wonder what you are");
// }
// poem();

//Function to roll a dice
// function dice(){
//     console.log(Math.floor(Math.random()*6)+1);
// }
// dice();

//Function with Argument
// function printName(name, age){
//     console.log("My name is " +name);
//     console.log("My age is "+ age);
//     console.log(`My name is ${name} and age is ${age}`);
// }
// printName("Barun", 21);

//Avg of 3 numbers
// function avg(num1, num2, num3){
//     console.log(`The average of the three numbers are ${(num1+num2+num3)/3}`);
// }
// avg(23, 34, 45);

//Multiplication table
// function multi(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// multi(5);

//sum of n
// function getSum(n){
//     let sum =0; 
//     for(let i=1; i<=n; i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(getSum(7));

// function that returns concatenation of all strings in an array
// let str =["hi", "Hello", "Bye", "!"];
// function concat(str){
//     let result= "";
//     for(let i=0; i<str.length; i++){
//         result+= str[i];
//     }
//     return result;
// }
// console.log(concat(str));

//Higher order function returns


function oddOrEven(request){
    if(request=="odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request = "even"){
        let even= function(n){
            console.log(n%2==0);
        }
        return even;
    }else{
        console.log("wrong Request");
    }
}
let request = "odd"; //even