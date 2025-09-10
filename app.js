let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let highScore = 0;

let high = document.querySelector("h2");
high.innerText = "High Score is 0";

let btnsCol = ["red","green","yellow","purple"];

let h2 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelup();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}


function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomCol = btnsCol[randomIdx];
    let randomBtn = document.querySelector(`.${randomCol}`);
    
    gameSeq.push(randomCol);
    console.log(gameSeq);



    gameFlash(randomBtn);

}

function checkAns(idx){
    
    
    if(userSeq[idx] === gameSeq[idx]){
        
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        highScore = Math.max(highScore,level);
        high.innerHTML = `Highest Score is <b>${highScore}</b>`
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br/>  Press any key to Restart.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this
    userFlash(btn);

    userCol = btn.getAttribute("id");
    console.log(userCol);
    userSeq.push(userCol);

    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btns of allBtns){
    btns.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}