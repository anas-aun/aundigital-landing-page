gsap.registerPlugin(ScrollTrigger);

const masterTl = gsap.timeline();

// 1. Text Mask Video Animation (3 seconds)
masterTl.to(".video-mask", {
  scale: 1.5,
  opacity: 0,
  duration: 3,
  ease: "power2.inOut",
  onComplete: () => {
    gsap.set(".text-mask-section", { className: "text-mask-section hidden" });
  }
});

// 2. Hero Section Reveal on Scroll
ScrollTrigger.create({
  trigger: ".hero-section",
  start: "top 80%",
  onEnter: () => {
    gsap.set(".hero-bg-video", { className: "hero-bg-video active" });
    const heroTl = gsap.timeline();
    heroTl
      .to(".hero-section__title", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      })
      .to(".hero-section__subtitle", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5")
      .to(".hero-section__awards", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5")
      .to(".hero-section__right", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5");
  }
});

// Animated-switch text cycling
const switchList = document.querySelectorAll(".switch-list li");
let currentIndex = 0;

function cycleText() {
  gsap.to(switchList[currentIndex], {
    opacity: 0,
    y: -20,
    duration: 0.5,
    onComplete: () => {
      gsap.set(switchList[currentIndex], { display: "none" });
      currentIndex = (currentIndex + 1) % switchList.length;
      gsap.set(switchList[currentIndex], { display: "block", opacity: 0, y: 20 });
      gsap.to(switchList[currentIndex], { opacity: 1, y: 0, duration: 0.5 });
    }
  });
}

setInterval(cycleText, 3000);

// Initialize AOS (if used)
if (typeof AOS !== "undefined") {
  AOS.init();
}