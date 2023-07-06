var h_1 = document.querySelectorAll("h1");



h_1.forEach(function(dets){
    dets.addEventListener("mouseenter", function(){
        dets.style.color = "white";
        dets.style.backgroundColor = "black"
    })
    dets.addEventListener("mouseleave", function(){
        dets.style.color = "black";
        dets.style.backgroundColor = "white"
    })
    
})
