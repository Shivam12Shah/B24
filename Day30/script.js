var main = document.querySelector("#hero");
var cursor = document.querySelector("#circle")
var h1 = document.querySelector(".h1");
var body = document.querySelector("body")

main.addEventListener("mousemove", function(dts){
    // alert("fsdfs")
    cursor.style.top = `${dts.y}px `
    cursor.style.left = `${dts.x}px `
})
h1.addEventListener("mouseenter", function(){
    cursor.style.scale = 10
})

h1.addEventListener("mouseleave", function(){
    cursor.style.scale = 1
})