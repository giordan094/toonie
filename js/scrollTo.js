$(document).ready(function () {
    var $links = $(".navbar .navbar-collapse .navbar-nav .nav-link");
    var $childlinks = $(
        ".navbar .navbar-collapse .navbar-nav .dropdown-menu .dropdown-item"
    );
    var prova = "prova";

    $links.click(function (event) {

        event.preventDefault();

        var target = $(this).attr("href");
        var $clkonbtn = $(".navbar-toggler");

        if ($(target).length) {
            if ($(".navbar-collapse").hasClass("show")) {

                $($clkonbtn).click();

                var offset = $(target).offset().top - ($(".navbar").outerHeight() - $(".navbar-collapse").outerHeight() - 1);
                console.log($(".navbar").outerHeight() - 1);

                $("html, body").animate({
                        scrollTop: offset
                    },
                    1000,
                    function () {}
                );
            } else {


                var offset = $(target).offset().top - ($(".navbar").outerHeight() - 1);
                console.log($(".navbar").outerHeight() - 1);

                $("html, body").animate({
                        scrollTop: offset
                    },
                    1000,
                    function () {}
                );
            }


        }
    });

    $childlinks.click(function (event) {
        event.preventDefault();
        var $clkonbtn = $(".navbar-toggler");

        var targetchild = $(this).attr("href");

        if ($(targetchild).length) {
            if ($(".navbar-collapse").hasClass("show")) {
                $($clkonbtn).click();

                var offset =
                    $(targetchild).offset().top -
                    ($(".navbar").outerHeight() - $(".navbar-collapse").outerHeight() - 1);

                $("html, body").animate({
                        scrollTop: offset
                    },
                    1000,
                    function () {}
                );
            } else {
                var offset =
                    $(targetchild).offset().top -
                    ($(".navbar").outerHeight() - 1);

                $("html, body").animate({
                        scrollTop: offset
                    },
                    1000,
                    function () {}
                );
            }
        }
    });

    // la navbar sparisce quando si clicca fuori da essa, cliccando sul btntoggle

    var $clkonbtn = $(".navbar-toggler");
    var $navcoll = $(".navbar-collapse");

    $(document).on("click", function (e) {
        if ($navcoll.hasClass("show")) {
            if (!$(e.target).closest(".navbar").length) {
                if ($clkonbtn.hasClass("collapsed")) {
                    return;
                } else {
                    $($clkonbtn).click();
                }
            }
        } else {
            return;
        }
    });
});

function scrollToTop() {

    $("html, body").animate({
            scrollTop: 0
        },
        1000,
        function () {}
    );
  
}

function getNavbarHeight() {
    var navHeight = $(".navbar").outerHeight();
    return navHeight;
    console.log(navHeight);
}