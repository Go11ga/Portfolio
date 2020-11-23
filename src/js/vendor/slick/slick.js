//= ../../../../node_modules/slick-carousel/slick/slick.js

$("#reviews-slider").slick({
    arrows: false,
});

$("#reviews-prev").click(function(){
    $("#reviews-slider").slick('slickPrev');
})

$("#reviews-next").click(function(){
    $("#reviews-slider").slick('slickNext');
})

$("#worksSlider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
});

$("#modal-workPrev").click(function(){
    $("#worksSlider").slick('slickPrev');
})

$("#modal-workNext").click(function(){
    $("#worksSlider").slick('slickNext');
})
