$(document).ready(function () {

    $(".slider-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 500,
        fade: true
    });

    $(".slick-dots").find("button").text("");

});