/* Smooth scroll */
$(function(){

    let navLink = $(".nav__link");
    let header = $("#header");

    $("[data-scroll]").on("click",function(event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        navLink.removeClass("nav__link--active");
        $(this).addClass("nav__link--active");

        $("html, body").animate({
            scrollTop: elementOffset - header.outerHeight()
        }, 700);

    });

}());

/* Mobile nav */
$(function(){
    $('#navToggle').on('click', function(){
        $('#nav').toggleClass('nav--active');
    })

});
