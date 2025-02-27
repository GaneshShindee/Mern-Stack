let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","blue"]

let started=false;
let level=0;
let highestScore=0;
function highestScoreF(level){
    if(level>highestScore){
        highestScore=level;
    }
}

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;   

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)

}

function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)

}
function gameOver(){
    started=false;
    gameSeq=[];
    level=0;
    userSeq=[];
    let body=document.querySelector("body")
    body.classList.add("flashover");
    setTimeout(function(){
        body.classList.remove("flashover")
    },250)

}


function levelUp(){
    userSeq=[];

    level++;
    h2.innerText=`Level ${level}`;
    let btns=["yellow","red","green","blue"]

    let random=Math.floor(Math.random()*3);
    let randomcolor=btns[random];
    let randombtn=document.querySelector(`.${randomcolor}`)

    gameSeq.push(randomcolor);
    console.log(randomcolor);

    btnFlash(randombtn);
}

function checkAns(idx){
    // console.log(level)
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000)
        }
    }else{
        highestScoreF(level);
        h2.innerHTML=`Game over! Score : </b>${level}</b> </br> Highest Score : ${highestScore}  </br> press any key to start`
        gameOver();
        console.log("game over")
    }
}

function btnPress(){
    // console.log(this)
    let btn =this;
    userFlash(btn);
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    // console.log(usercolor)
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for( btn of allbtns){
    btn.addEventListener("click",btnPress);
}

