$(function() {
    var showcase = $('.showcase').swiper({
        slidesPerView: 'auto',
        keyboardControl: true,
        centeredSlides: true,
        watchActiveIndex: true
    })
    
    $('.showcase .left').click(function() {
        showcase.swipePrev();
    })

    $('.showcase .right').click(function() {
        showcase.swipeNext();
    })

    $('.more-examples span').click(function() {
        showcase.swipeTo(1);
    })

    var mainDevice = $('.swiper-main-device .swiper-container').swiper({
        loop: true,
        grabCursor: true,
        paginationClickable: true,
        pagination: '.swiper-main-device .pagination'
    })

    $('.swiper-main-device .swiper-container').on('touchstart mousedown', function(e) {
        e.stopPropagation();
    })

    $('.arrow-left').click(function(e) {
        mainDevice.swipePrev();
    });

    $('.arrow-right').click(function(e) {
        mainDevice.swipeNext();
    });

    $('a.changelog').click(function(e) {
        e.preventDefault();
        $('div.changelog').slideDown(600)
    });

    $('.showcase').addClass('initialized')
})