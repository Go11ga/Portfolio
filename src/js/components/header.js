/* Header block */
$(function(){

    let headerNav = document.querySelector("#header");

    window.addEventListener("scroll", showHeader);

    function showHeader() {
        if (window.pageYOffset > 300) {
            headerNav.classList.add("header--fixed");
        }else{
            headerNav.classList.remove("header--fixed");
        }
    }

}());
