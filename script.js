var crsr = document.querySelector("#cursor")
var crblur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){  //passinf delts on a function
    // console.log(dets.y) we will make a var for cursor 
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crblur.style.left = dets.x - 200 +"px"
    crblur.style.top = dets.y - 200 +"px"
})



gsap.to("#nav" , {
    backgroundColor: "#000",
    height: "105px",
    duration: 0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub: 1   //1-5 or true false 
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        sroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})