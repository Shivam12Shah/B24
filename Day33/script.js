
var botm = document.querySelector("#botm");

var top = document.querySelector("#top")
var timer = 60;
var scrore = 0;
function bubbleCreate(){
    botm.innerHTML = "";
    for(var i=0; i<90; i++){
        var rn= Math.floor(Math.random()*10);
        botm.innerHTML += `<div class="bubble">${rn}</div>`
    }
    
}

function startTimer(){
    setInterval(function(){
        timer--;
        if(timer>=0){
            document.querySelector("#timmer-div").textContent = `${timer}`;
        }
    },1000)
}


function getHit(){
    document.querySelector("#hit").textContent = `${Math.floor(Math.random()*10)}`
}


function score(){
    scrore+=10;
    document.querySelector("#score").textContent = `${scrore}`
}


bubbleCreate();
getHit();
startTimer();