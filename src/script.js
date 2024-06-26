// const loco = ()=>{gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();}
// loco();

// LENIS
// better smooth scrolling than locomotive
// increase or decrese duration value to change smoothness values on website
// first connect the lenis cdn than add this code from line 39 to 52 and what i suggest is try to remember it so that no need to visit it again and again for diff websites.




































const lenis = new Lenis({
  duration: 2.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// cursor effect on page1
(() => {
  var page1Cont = document.querySelector("#page1-cont");
  var cursor = document.querySelector("#cursor");
  var menu = document.querySelector("nav h4");

  page1Cont.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x,
      y: e.y,
      duration: 0.4,
    });
  });
  page1Cont.addEventListener("mouseenter", (e) => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Cont.addEventListener("mouseleave", (e) => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });

  menu.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
  menu.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
})();

(() => {
  var page5Cont = document.querySelector("#page5");
  var cursor2 = document.querySelector("#cursor2");

  page5Cont.addEventListener("mousemove", (e) => {
    gsap.to(cursor2, {
      x: e.x,
      y: e.y,
      duration: 0.4,
    });
  });
  page5Cont.addEventListener("mouseenter", (e) => {
    gsap.to(cursor2, {
      scale: 1,
      opacity: 1,
    });
  });
  page5Cont.addEventListener("mouseleave", (e) => {
    gsap.to(cursor2, {
      scale: 0,
      opacity: 0,
    });
  });
})();

gsap.from("#page2 p", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2-1",
    scroller: "body",
    start: "top 90%",
    end: "top 80%",
    scrub: 2,
  },
});

gsap.from("#page2 #line", {
  width: "0px",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2-1",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from("#page2-2 span", {
  y: 200,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page2-1",
    scroller: "body",
    start: "top 40%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from("#page4-2 p", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4-2",
    scroller: "body",
    start: "top 80%",
    end: "top 70%",
    scrub: 2,
    // markers:true,
  },
});

gsap.from("#page4 #line", {
  width: "0px",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page4-2",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 2,
  },
});

gsap.from("#page4-3 ", {
  y: 200,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page4-2",
    scroller: "body",
    start: "top 50%",
    end: "top 40%",
    scrub: 2,
    // markers:true
  },
});

gsap.from("#page6-1 p", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page6-1",
    scroller: "body",
    start: "top 80%",
    end: "top 70%",
    scrub: 2,
    // markers:true,
  },
});

gsap.from("#page6 #line", {
  width: "0px",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page6-1",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 2,
  },
});

gsap.from("#page6-2 ", {
  y: 200,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page6-1",
    scroller: "body",
    start: "top 50%",
    end: "top 40%",
    scrub: 2,
    // markers:true
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  freeMode: {
    enabled: true,
    momentumBounce: true,
  },
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 8000,
});

var time = gsap.timeline();

time.from("#text-wrap h3", {
  opacity: 0,
  x: 100,
  duration: 0.5,
  stagger: 0.2,
});
time.to("#text-wrap h3", {
  opacity: 0,
  x: -100,
  duration: 0.5,
  stagger: 0.2,
  delay: 0.3,
});
time.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 0.2,
  display: "none",
});

time.from("#page1-cont h1 span", {
  y: 100,
  opacity: 0,
  duration: 0.3,
  stagger: 0.12,
  delay: -0.5,
});

gsap.from("#footer-top", {
  y: -500,
  duration: 1,
  opacity: -1,
  scrollTrigger: {
    trigger: "#footer-top",
    scroller: "body",
    start: "50% 80%",
    end: "200% 8%",
    scrub: 3,
  },
});
gsap.from("#footer-down", {
  opacity: 0.5,
  scrollTrigger: {
    trigger: "#footer-down",
    scroller: "body",
    scrub: 2,
  },
});
gsap.from("#footer-text h1 span", {
  y: -200,
  opacity: 0,
  duration: 2,
  stagger: 0.4,
  delay: 1,
  scrollTrigger: {
    trigger: "#footer-text",
    scroller: "body",
    start: "0%% 80%",
    end: "18% 80%",
    // markers:true,
    scrub: 4,
  },
});
