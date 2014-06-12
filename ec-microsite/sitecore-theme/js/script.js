
$(document).ready(function () {
    $.supersized({
        slide_interval: 7000,
        transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 600,
        slide_links: 'false',
        slides: [
            {image: 'images/slider1.jpg'},
            {image: 'images/slider2.jpg'},
            {image: 'images/slider3.jpg'},
            {image: 'images/slider4.jpg'}
        ]
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

    $('.more,.cat-icon').bind('click', function (event) {
        var $anchor = $('#workslist');

        $('html, body').stop().animate({
            scrollTop: $($anchor).offset().top - 89
        }, 1000, 'linear');
        event.preventDefault();
    });

    //portfolio setting
    $('#about-carousel').carousel({
        interval: 6000
    });

    $('.team-ajax,.team-icon').bind('click', function (event) {
        var $anchor = $('#teamlist');

        $('html, body').stop().animate({
            scrollTop: $($anchor).offset().top - 89
        }, 1000, 'linear');
        event.preventDefault();
    });

    (function ($) {
        $.support.placeholder = ('placeholder' in document.createElement('input'));
    })(jQuery);

    //fix for IE7 and IE8
    $(function () {
        if (!$.support.placeholder) {
            $("[placeholder]").focus(function () {
                if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
            }).blur(function () {
                if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
            }).blur();

            $("[placeholder]").parents("form").submit(function () {
                $(this).find('[placeholder]').each(function() {
                    if ($(this).val() == $(this).attr("placeholder")) {
                        $(this).val("");
                    }
                });
            });
        }
    });
});
