/* $(document).ready(function () {

    AOS.init({
        disable: "mobile"
    });

    objectFitImages();

    window.addEventListener('load', AOS.refresh);

    AOS.init({
        disable: "mobile"
    });
}); */

$(window).on("load", function () {

    var loader = $("#loader-panel");
    if (loader.length) {
        loader.fadeOut(1000);
    }

});