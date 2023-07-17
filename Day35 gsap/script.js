function anime(){
    
var tl = gsap.timeline();

tl.from("#nav>h2 , #nav>h3, #nav>img", {
    y:-50,
    opacity:0,
    stagger:0.5
})


tl.from("h1", {
    opacity:0,
    duration :0.5,
    x:-50,
    stagger:0.4
})
tl.from("#main>p", {
    opacity:0,
    duration :0.5,
    x:50,
    stagger:0.4
})
tl.from("#img1",{
    x:-200,
    opacity:0,
    rotate:-40,
    duration:0.5
})
tl.from("#img2",{
    x:200,
    opacity:0,
    rotate:40,
    duration:0.5
})
tl.from("#bottom-left", {
    y:-40,
    duration:0.5,

    opacity:0

})
tl.from("#bottom>img", {
    opacity:0,
    y:-40,
    duration:0.4,
    
})
tl.to("#bottom>img", {
    y:30,
    duration:0.4,
    repeat:-1,
    yoyo:0.5
})


}
anime();