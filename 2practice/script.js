var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var slider = document.querySelectorAll("#slider")
var slid = document.querySelectorAll(".slid")
// console.log(slid);

// console.log(slider);
var value = 0


btn2.addEventListener("click", function () {
    if(value<0){
        value += 100
        slid.forEach(function (dets) {
            // console.log(dets);
            dets.style.transform = `translate(${value}%, 0)`;
            console.log(value);
    
    
        })
    }
    else{
        console.log("aa gaye mder");
    }

})

btn1.addEventListener("click", function () {
    if(value > -500){
        value -= 100
        slid.forEach(function (dets) {

            // console.log(dets);
            dets.style.transform = `translate(${value}%, 0)`;
            console.log(value);
    
        })
    }
    else{
        console.log("bhag ja mac");
    }
})

