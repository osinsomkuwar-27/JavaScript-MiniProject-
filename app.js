let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game started");
        started = true;
    }
});