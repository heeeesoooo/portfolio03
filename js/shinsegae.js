$(function () {
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    })
    $('.textSlide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    })

    $('.mainSlide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

})