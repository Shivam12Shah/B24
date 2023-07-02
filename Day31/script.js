var h_1 = document.querySelectorAll("h1");

var img = [
    {img1:"https://images.unsplash.com/photo-1586866628184-e07bda20abaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"},
    {img1:"https://images.unsplash.com/photo-1586866628184-e07bda20abaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"},
    {img1:"https://images.unsplash.com/photo-1586866628184-e07bda20abaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"},
    {img1:"https://images.unsplash.com/photo-1586866628184-e07bda20abaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"},
    {img1:"https://images.unsplash.com/photo-1586866628184-e07bda20abaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGdpcmxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"}
]



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
