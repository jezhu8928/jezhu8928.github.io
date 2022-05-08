var hamburgerClickCount = 0;

$(document).ready(function(){
    $(".overlay-link").click(function() {
        $(".overlay-nav-menu").removeClass("expand");
        $(".hamburger-menu-icon").addClass("fa-bars");
        $(".hamburger-menu-icon").removeClass("fa-xmark");
        hamburgerClickCount++;
    })

    $(".page-link").click(function() {
        $('html').css("scrollBehavior", "smooth");
    })

    $('.scroll-top-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll >= 72) {
            $("nav").addClass("translucent");
        } else {
            $("nav").removeClass("translucent");
        }
    });

    $(".hamburger-menu-icon").click(function() {
        hamburgerClickCount++;
        if (hamburgerClickCount % 2 == 0) {
            $(".overlay-nav-menu").addClass("expand");
            $(".hamburger-menu-icon").addClass("fa-xmark");
            $(".hamburger-menu-icon").removeClass("fa-bars");
        } else {
            $(".overlay-nav-menu").removeClass("expand");
            $(".hamburger-menu-icon").addClass("fa-bars");
            $(".hamburger-menu-icon").removeClass("fa-xmark");
        }
    })
});
