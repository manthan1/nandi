// Modern Scripts for Wow Nandi

gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Hero Section Animations
gsap.to(".parallax-bg", {
    scrollTrigger: {
        scrub: true
    },
    y: (i, target) => -ScrollTrigger.maxScroll(document.body) * 0.2,
    ease: "none"
});

gsap.from(".hero-title", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power4.out",
    stagger: 0.2
});

gsap.from(".hero-subtitle", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power4.out",
    delay: 0.5
});
