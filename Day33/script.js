
var botm = document.querySelector("#botm");

var top = document.querySelector("#top")
for(var i=0; i<89; i++){
    var rn= Math.floor(Math.random()*10);
    botm.innerHTML += `<div class="bubble">${rn}</div>`
}

botm.addEventListener("click", function(dets){
    console.log(dets.target);
})
var scr =60;
setTimeout(() => {
    console.log(60 - 1 );
},500);