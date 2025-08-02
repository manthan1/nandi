jQuery(".faq-q").click(function() {
  jQuery(this).next('.faq-ans').slideToggle();
  jQuery(this).toggleClass('active');
});

$(document).ready(function() {
    var owl = $('.mentors-carousel');
    owl.owlCarousel({
        margin: 5,
        nav: false,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
            items: 1
            },
            600: {
            items: 3
            },
            1000: {
            items: 3
            }
        }
    });

    var owl = $('.shopfor-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3,
                loop: false,
            },
            1000: {
                items: 3
            }
        }
    });

    var owl = $('.featured-carousel');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: false,
        responsive: {
            0: {
                items: 2,
                margin: 10,
            },
            768: {
                items: 3,
                loop: false,
                margin: 15
            },
            1000: {
                items: 3,
                margin: 30
            }
        }
    });

    var owl = $('.review-slider');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        loop: false,
        responsive: {
            0: {
                items: 2,
                margin: 10,
            },
            768: {
                items: 3,
                loop: false,
                margin: 15
            },
            1000: {
                items: 3,
                margin: 30
            }
        }
    });
});

var owl = $('.mentors-carousel');
    owl.owlCarousel({
        margin: 5,
        nav: false,
        loop: true,
        autoplay: true,
        responsive: {
            0: {
            items: 1
            },
            600: {
            items: 3
            },
            1000: {
            items: 3
            }
        }
    });

    $( document ).ready(function() {
       var heightall = $(".col-prod").height();
        $(".col-video").css("height",heightall);
    });

    $('#video1').hide()
    $('#video2').hide()

    $(document).ready(function(){
    $('#col-video1').click(function(){
        $('#video1').toggle();

    });
    $('#close1').click(function(){
        $('#video1').hide();


    });

    $('#col-video2').click(function(){
        $('#video2').toggle();

    });
    $('#close2').click(function(){
        $('#video2').hide();


    });
});
