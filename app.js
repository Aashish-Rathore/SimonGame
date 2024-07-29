let gameSeq = [];
let userSeq = [];

let btns=["yellow","red","green","purple"]

let started = false;
let level=0;

let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flask");
    setTimeout(function(){
        btn.classList.remove("flask");
    },1000);
}

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;

    let randInx=Math.floor(Math.random()*3);
    let randColor=[randInx];
    let random = document.querySelector(`.${randColor}`);
    btnFlash();
}
