const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el
        .getBoundingClientRect()
        .top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el
        .getBoundingClientRect()
        .top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element
        .classList
        .remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.5)) {
            displayScrollElement(el);
            
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});
// window.addEventListener("load", () => {
//     handleScrollAnimation();
// });

$('.home-featured .col-prod img').on("mouseover", function () {
    var getSrc = $(this).attr('data-src');
    $(this).attr('src', getSrc);
    console.log(getSrc);
});

$('.site-footer h3').on('click', function() {
    $(this).toggleClass('active');
    $(this).next('.footer-collaps').slideToggle();
});
$('.menu-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.nav:not(.nav-sm)').slideToggle();
});

$(window).scroll(function() {
    var theta = $(window).scrollTop() / 150 % Math.PI;
    var rotateVal = theta + 'rad';
    $('body').css({"--rotateVal": rotateVal });
});


$(window).on('load', function(){
    setTimeout(() => {
       $('.loader').fadeOut();
    }, 200);
});




// Spinner
// $("body").disableSelection();
$('.spinner').each(function(){
  var qty = $(this).find(".qty")
  $(this).find(".plus").click(function(){
       var quantity = parseInt(qty.val()) +1;
       qty.val(quantity);
       return false;
   });

  $(this).find(".minus").click(function(){
       var quantity = parseInt(qty.val()) -1;
       if(quantity < 0) quantity = 0;
       qty.val(quantity);
       return false;
   });
});

// Sticky Header JS Starts
if (jQuery(window).width() > 0) {
    jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 20) {
            jQuery("header").addClass("sticky");
        } else {
            jQuery("header").removeClass("sticky");
        }
    });
}