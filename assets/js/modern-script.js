// Modern Scripts for Wow Nandi

$(window).on('load', function(){
    setTimeout(() => {
       $('.loader').fadeOut();
    }, 500);
});

$(document).ready(function() {
    // Scroll-triggered animations
    const scrollElements = document.querySelectorAll(".magic-link, .product-card, .flip-card");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("scrolled");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });

    // Add scrolled class to elements already in view on page load
    handleScrollAnimation();

    // Add ripple effect to buttons
    $('.btn').on('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        },1000);
    });
});

// Add animation classes to elements for AOS library (if you were to use it)
// For now, we'll use a simple scroll-in animation with CSS
document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll('.magic-section .magic-link, .product-featured .product-card, .world-of-nandi .flip-card');

  function checkVisibility() {
    var windowHeight = window.innerHeight;
    elements.forEach(function(element) {
      var positionFromTop = element.getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});

// CSS for the simple scroll-in animation
const style = document.createElement('style');
style.innerHTML = `
  .magic-link, .product-card, .flip-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  .magic-link.visible, .product-card.visible, .flip-card.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
