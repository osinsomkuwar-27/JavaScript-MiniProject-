let gameseq = [];
let userseq = [];
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game started");
        started = true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);    
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);    
}

function levelup(){
    level++;
    h2.innerText = `Level ${level}`;

    let randomindex = Math.floor(Math.random()*3);
    let randomcolor = btns[randomindex];
    let randombtn = document.querySelector(`.${randomcolor}`)
    console.log(randomindex);
    console.log(randomcolor);
    console.log(randombtn);
    gameflash(randombtn);
}

function btnpress(){
    console.log(this);
    let btn = this;
    userflash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}