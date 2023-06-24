

var main = document.querySelector("#main");
var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var h1 = document.querySelector("h1");


img1.addEventListener("mousemove", function(){
    main.style.backgroundColor = "red"
    img2.setAttribute("src", "https://images.unsplash.com/photo-1593412544031-ffedb2876ed6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80")
    h1.innerHTML = "Lo bhai kaam ho gaya"
})
img1.addEventListener("mouseout", function(){
    main.style.backgroundColor = "gray"
    h1.innerHTML = "lo bhai lawde bhi lag gaye"
    img2.setAttribute("src", "https://images.unsplash.com/photo-1533729590644-695ded775a63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGtvcmVhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60")
})