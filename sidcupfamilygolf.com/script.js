var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+ "px"
    crsr.style.top = dets.y+ "px"
    blur.style.left = dets.x - 150 +"px"
    blur.style.top = dets.y - 150 + "px"
}) 

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})

//Animation for nav-bar
gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 1,
    height: "80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub:1
    } 
})

//Animation for Main(Black Background after scrolling)
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -40%",
        end:"top -70%",
        scrub: 1
    }
})

//Animation For About us page
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 70%",
        scrub: 2
    }
})

//Animation for cards page
gsap.from(".card",{
    x:-50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 70%",
        scrub: 2
    }
})

//Animation for colons("")
//For colon1
gsap.from("#colon1",{
    y:-50,
    x:-50,
    duration:0.5,
    stagger:0.4,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 70%",
        scrub: 2
    }
})
//For colon2
gsap.from("#colon2",{
    y:50,
    x:50,
    duration:0.5,
    stagger:0.4,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 70%",
        scrub: 2
    }
})

//Page4 h2
gsap.from("#page4-h2",{
    y:50,
    duration:0.5,
    stagger:0.4,
    scrollTrigger:{
        trigger: "#page4-h2",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 70%",
        scrub: 2
    }
})
