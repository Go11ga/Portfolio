/* Modal */
$(function(){
    let modalCall = $("[data-modal]");
    let modalClose = $("[data-close]");

    modalCall.on('click', function(event){
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('modal--show');
        $("body").addClass('no-scroll');

        setTimeout(function(){
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

        $("#worksSlider").slick("setPosition");
    });

    modalClose.on('click', function(event){
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function(){
            modalParent.removeClass('modal--show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal").on('click', function(){
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function(){
            $this.removeClass('modal--show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on('click', function(event){
        event.stopPropagation();
    });

});
