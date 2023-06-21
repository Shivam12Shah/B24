var btn = document.querySelector("button");
var h1 = document.querySelector("h1")

var flag = 0;

btn.addEventListener("click", function () {
    h1.innerHTML = "My name is shivam";
    h1.style.fontFamily = "fantasy";
    h1.style.color = "red";
    btn.style.fontFamily = "fantasy";
   
})