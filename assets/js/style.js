$('.myslider_1').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    pouseonhover: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                speed: 2200,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                speed: 2100,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 2300,

            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 4000,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 5000,
            }
        }
    ]
});

$('.myslider_2').slick({
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
    ]
});


$(".vertical-slider-2").slick({
    slidesToShow: 5,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    vertical: true,
});

$('.myslider_3').slick({
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

// ************ AOS Animation ************
AOS.init();
once: true;