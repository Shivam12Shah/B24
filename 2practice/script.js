var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var slider = document.querySelectorAll("#slider")
var slid = document.querySelectorAll(".slid")
// console.log(slid);

// console.log(slider);

btn1.addEventListener("click", function(){
    slid.forEach(function(dets){
        slider.style.backgroundColor = "green";
        slider.style.left = "-450px"
    })

})