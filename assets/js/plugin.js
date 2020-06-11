$(function () {

    $(window).resize(function() {
        $('.header-content').css('padding-top', ($('header').height() - $('.header-content').height()) / 2 - $('.navbar').height() + 20);
    });

    $('.header-content').css('padding-top', ($('header').height() - $('.header-content').height()) / 2 - $('.navbar').height() + 20);

    // Next Section
    $('header .fa-chevron-down').click(function () {
        $('html, body').animate({
            scrollTop: $('.services').offset().top
        }, 800)
    });

    // Full Image Plugin
    $('fullBackground').fullClip({
        images : ['assets/imgs/header1.jpg', 'assets/imgs/header3.jpg', 'assets/imgs/header4.jpg']
    });


    // Fade Out Lodaing Page When Page Downloaded

     window.onload = function() {
        $('.spinner-box .spinner').fadeOut(500, function() {
            $(this).parent().fadeOut(600);
        });
    }

    // Prevents Links Navigation
    $('.links li a').click(function(e) {
        e.preventDefault();
    })

    // Adjust Event Links 

    $('.links li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });


});
