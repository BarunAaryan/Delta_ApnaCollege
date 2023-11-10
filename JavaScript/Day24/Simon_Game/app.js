let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
    // console.log("game started")
    //step 1 
    if (started == false) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userbtnFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function levelUp() {
    userSeq= [];
    level++;
    h2.innerText = `Level ${level}`;

    //random button choose
    let randIndx = Math.floor(Math.random() * 3);
    let randColor = btns[randIndx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    console.log(randIndx);
    console.log(randColor);
    console.log(randbtn);

    gameFlash(randbtn);
}

function checkAns(idx){
    console.log("curr level : ", level);
    //let idx = level-1;
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(), 1000);
        }
        console.log("Same Value");
    }else{
        h2.innerHTML = `Game Over press! Your score was<b>${level}</b> <br> Press any key to start`;
        document.querySelector="body".style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector="body".style.backgroundColor="white";
        }, 150);
        
        reset();
    }
}

function btnPress(){
    //which button was pressed
    console.log(this);
    let btn = this;
    userbtnFlash(btn);

    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns= document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq= [];
    userSeq=[];
    level=0;
}
//make a highest score and tracker such that the highest score gets tracked and remains in the screen