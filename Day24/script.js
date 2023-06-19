var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var main = document.querySelector("#main");
var dag = document.querySelector("#dag");

var flag = 0

btn.addEventListener("click" , function(){
    if(flag===0){
        bulb.style.backgroundColor = "white";
        flag = 1;
        btn.innerHTML = "OFF"
        main.style.backgroundColor = "black"
        dag.style.width = "50px"
        dag.style.height = "50px"
        dag.style.backgroundColor = "gray"
    }
    else{
        flag = 0;
        main.style.backgroundColor = "white";
        btn.innerHTML = "ON";

    }
})