// Animations created with gsap
gsap.from(".header", { duration: 1, y: "-200px", ease: "back.out(1.7)" });
gsap.from(".background-left-top-asset", {
  duration: 3,
  delay: 1,
  x: "-400px",
  scale: 0.5,
  ease: "back.out(1.7)",
});
gsap.from(".backgroun-left-bottom-asset", {
  duration: 3,
  delay: 2,
  y: "-200px",
  scale: 0.5,
  ease: "back.out(1.7)",
});
gsap.from(".background-right-asset", {
  duration: 3.5,
  delay: 2,
  x: "-200px",
  ease: "circ.out",
});
gsap.from(".nav-links li", {
  duration: 2,
  delay: 3,
  opacity: 0,
  stagger: 0.3,
  ease: "circ.out",
});

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".brief-info-block-content",
    start: "50% bottom",
    end: "bottom bottom",
    scrub: 5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true,
  },
});

const serviceTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".service-block-content",
    start: "top bottom",
    end: "bottom bottom",
    scrub: 5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers: true,
  },
});

timeline.from(".brief-info-block-heading", {
  x: "-100%",
  opacity: 0,
  ease: "circ.out",
});

timeline.from(".brief-info-block-para", {
  x: "-100%",
  opacity: 0,
  ease: "back.out(1.7)",
});

serviceTimeline.from(".service-animation-info", {
  x: "-100%",
  opacity: 0,
  duration: 1,
  stagger: 2,
  ease: "circ.out",
});

serviceTimeline.from(".service-animation-block", {
    opacity: 0,
    duration: 1.5,
    stagger: 2,
    ease: "sine.inOut",
   
  }, '<.5');

serviceTimeline.from(".grid-right-block-img", {
  x: "300px",
  y: "100",
  opacity: 0,
  duration: 1.5,
  stagger: 2,
  ease: "circ.out",
 
}, '');


// smooth scroll via lenis
const lenis = new Lenis();
lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
