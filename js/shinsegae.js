$(function () {
    $('.banner i').on('click', function () {
        $('.banner').addClass('on')
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
    $('.content_slide').slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
    })
    $('.mainContent .arrows .prev').on('click', function () {
        $('.content_slide').slick('slickPrev')
    })

    $('.mainContent .arrows .next').on('click', function () {
        $('.content_slide').slick('slickNext')
    })

    $('.main_pro_slide').slick({
        infinite: true,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        //dots: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
    });

    $('.tab_list li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.main_pro_slide').slick('slickGoTo', idx)
    })



    $(window).on('scroll', function () {
        console.log('스크롤 : ', $(window).scrollTop());
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        }

    })

    $('.tab_list li').on('click', function () {
        var idx = $(this).index();
        $('.main_pro_slide').slick('slickGoTo', idx)
    })

})


