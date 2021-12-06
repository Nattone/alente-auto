$(document).ready(function () {

    //play on video
    $(document).on('click', '.video__wrapper', function () {
        const video = $(this).children('video')[0];
        if ($(this).hasClass('play')) {
            video.pause();
        } else {
            video.play();
        }
        $(this).toggleClass('play');
    });

    //slick slider
    $('.choice-us-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });

    $('.details-slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        // autoplay: true,
        autoplaySpeed: 3000,
    });
});