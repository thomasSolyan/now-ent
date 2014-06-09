






//sticky navigation
$(document).ready(function () {

    jQuery(function ($) {
        $.supersized({
            slide_interval: 7000,
            transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
            transition_speed: 600,
            slide_links: 'false',
            slides: [
                {
                    image: 'images/slider1.jpg',
                    title: ' <h2>Love & Passionate <br> for What We Do</h2>'
                }, {
                    image: 'images/slider2.jpg',
                    title: ' <h2>Design Wise <br> Simple & Amazing</h2>'
                }, {
                    image: 'images/slider3.jpg',
                    title: '<h2>Integrity & Loyal <br> for Customer</h2>'
                }, {
                    image: 'images/slider4.jpg',
                    title: '<h2>Bunch of Creative <br> People & Idea</h2>'
                }
            ]
        });
    });

    $('.header').sticky({
        topSpacing: 0
    });

    //toggle menu
    $('.menu-btn').on('click',function(){
        $('.navigation').collapse({
            toggle: false
        });
    })

    $('body').on('click',function(){
        $('.navigation').collapse('hide');
    })

    //Page scrolling
    $('.navigation').onePageNav({
        filter: ':not(.external)',
        scrollThreshold: 0.25,
        scrollOffset: 90
    });

    // script prettyphoto
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        social_tools: false,
        deeplinking: false
    });

    //portfolio scrolling
    $(function () {
        $('.more,.more,.cat-icon').bind('click', function (event) {
            var $anchor = $('#workslist');

            $('html, body').stop().animate({
                scrollTop: $($anchor).offset().top - 89
            }, 1000, 'linear');
            event.preventDefault();
        });
    });

    //portfolio setting
    $('#about-carousel').carousel({
        interval: 6000
    });

    //team scrolling
    $(function () {
        $('.team-ajax,.team-icon').bind('click', function (event) {
            var $anchor = $('#teamlist');

            $('html, body').stop().animate({
                scrollTop: $($anchor).offset().top - 89
            }, 1000, 'linear');
            event.preventDefault();
        });
    });

});
