var btn  = document.querySelector("button");
var box = document.querySelector("#box");

btn.addEventListener("click", function(){
    var a = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var c = Math.floor(Math.random()*255);

    console.log(`rgb(${a}, ${b}, ${c})`);
    box.style. backgroundColor = `rgb(${a}, ${b}, ${c})`;
    
})