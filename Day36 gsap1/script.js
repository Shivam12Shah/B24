gsap.from("#page2 img", {
    width:"30%",
    duration:1.3,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 0%",
        end:"top -50%",
        pin:true,
        scrub:2,
        markers:true
    }
})