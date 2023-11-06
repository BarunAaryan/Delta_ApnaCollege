const max = prompt("Enter the max Number");
console.log(max);
const random = Math.floor(Math.random() * max) + 1;
console.log(random);
let guess = prompt("Guess the Number");
while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }
    
    if (guess == random) {
        console.log("You are right! Congrats Random number was ", random);
        break;
    }else if(guess<random){
        guess=prompt("Your guess was too small, Please try again");
    }else{
        guess=prompt("Your guess was too large, Please try again");
    }
}