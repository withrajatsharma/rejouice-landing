const loco = ()=>{gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();}
loco();



// cursor effect on page1
(()=>{
  
var page1Cont = document.querySelector("#page1-cont");
var cursor = document.querySelector("#cursor");
var menu = document.querySelector("nav h4");

page1Cont.addEventListener("mousemove" , (e)=>{
 
      gsap.to(cursor,{
        x:e.x,
        y:e.y,
        duration:.4
      })

})
page1Cont.addEventListener("mouseenter" , (e)=>{

      gsap.to(cursor,{
        scale:1,
        opacity:1,

      })

})
page1Cont.addEventListener("mouseleave" , (e)=>{

      gsap.to(cursor,{
        scale:0,
        opacity:0,

      })

})

menu.addEventListener("mouseenter" ,()=>{
  
  gsap.to(cursor,{
    scale:0,
    opacity:0,

  })

     
} )
menu.addEventListener("mouseleave" ,()=>{
  
  gsap.to(cursor,{
    scale:1,
    opacity:1,

  })

     
} )


})();

gsap.from("#page1-cont h1 span",{
  y:200,
  opacity:0,
  stagger:.1
})


gsap.from("#page2 p",{
  y:200,
  opacity:0,
  scrollTrigger:{
    trigger:"#page2-1",
    scroller:"#main",
    start:"top 90%",
    end:"top 80%",
    scrub:2,
   }
})

gsap.from("#page2 #line",{
  width:"0px",
  duration:1,
  opacity:0,
  scrollTrigger:{
    trigger:"#page2-1",
    scroller:"#main",
    start:"top 70%",
    end:"top 50%",
    scrub:2,
   }
})

gsap.from("#page2-2 span",{
  y:200,
  opacity:0,
  duration:.5,
  stagger:.1,
  scrollTrigger:{
    trigger:"#page2-1",
    scroller:"#main",
    start:"top 40%",
    end:"top 20%",
    scrub:2,
   }
  })