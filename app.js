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
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomindex = Math.floor(Math.random()*3);
    let randomcolor = btns[randomindex];
    let randombtn = document.querySelector(`.${randomcolor}`)
    gameseq.push(randomcolor);
    gameflash(randombtn);
    console.log(gameseq);
}

function checkans(index){
    console.log("current level:",level);

    if(userseq[index] == gameseq[index]){
       if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
       }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}