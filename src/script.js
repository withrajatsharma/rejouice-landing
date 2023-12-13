var tl = gsap.timeline();


const time = ()=>{
    let a =0;
  setInterval(()=>{
        if(a<100){
            a=a+Math.floor(Math.random()*20);
            document.querySelector("#loader h1").innerHTML=a+"%"
        }
        else{
            a=100;
            document.querySelector("#loader h1").innerHTML=a+"%";
            tl.to("#loader",{
                top:"-100vh",
                duration:1,
                delay:.2
                
            })
        }
    },100)
}


tl.to("#loader h1",{
    onStart:time(),
    // duration:1
})




gsap.to("#page1>h1",{
    transform: "translateX(-90%)",
    fontWeight:"100",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true
    }

})