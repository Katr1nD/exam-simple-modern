$(document).ready(function () {
    $('.header-slider').slick({
        ["setting-name"]: "setting-value",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        dotsClass: "slick-dots",
        // autoplay: true,
        // autoplaySpeed: 10000,
        arrows: false,
    });
});