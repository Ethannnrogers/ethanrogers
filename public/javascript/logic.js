$(document).ready(function() {
    $("#one").addClass("text-focus-in");
    $("#scroll-icon").addClass("text-focus-in");
    $("nav").hide();
    // $("#t").hide();

    $(".project-details-content").hide();

    var countClick = 0;
    $(".project-btn").click(function () {
        console.log("click");
       countClick = countClick + 1;
        if (countClick % 2 === 0) {
            $(".project-details-content").slideUp();
            console.log("even");
        } else {
            $(".project-details-content").slideDown();
            console.log("odd");
        } 
    })




    // $('.faq_question').click(function() {
        
    //     if ($(this).parent().is('.open')) {
    //         $(this).closest('.faq').find('.faq_answer_container').animate({ 'height': '0' }, 500);
    //         $(this).closest('.faq').removeClass('open');
    
    //     } else {
    //         var newHeight = $(this).closest('.faq').find('.faq_answer').height() + 'px';
    //         $(this).closest('.faq').find('.faq_answer_container').animate({ 'height': newHeight }, 500);
    //         $(this).closest('.faq').addClass('open');
    //     }
    
    // });


    //NAV SCROLL

    $("#home-nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#one").offset().top
        }, 1400);
    });

    $("#home-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#bio").offset().top
        }, 1400);
    });

    $("#about-nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#bio").offset().top
        }, 1400);
    });

    $("#skills-nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#skills-landing").offset().top
        }, 1400);
    });

    $("#projects-nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#project-title").offset().top
        }, 1400);
    });
    
    
    $("#contact-nav").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact-title").offset().top
        }, 1400);
    });
    


    $(window).scroll(function() {
        var y = $(this).scrollTop();

        if (y > 2) {
            $("#one").removeClass("text-focus-in");
            $("#one").removeClass("text-focus-in");
            $("#scroll-icon").removeClass("text-focus-in"); 
            $("#one").addClass("text-blur-out");
            $("#scroll-icon").addClass("text-blur-out");
        } else {
            $("#one").removeClass("text-blur-out");
            $("#one").addClass("text-focus-in");
            $("#scroll-icon").removeClass("text-blur-out"); 
            $("#scroll-icon").addClass("text-focus-in");
        }

        if (y > 275) {
            $("nav").removeClass("slide-out-right");
            $("nav").show();
            $("nav").addClass("bounce-right");
        } else {
            $("nav").removeClass("bounce-right");
            $("nav").addClass("slide-out-right");
        }

        if (y > 600) {
            $("#bio-1").removeClass("slide-out-left");
            $("#bio-1").addClass("slide-in-left");
            $("#bio-2").removeClass("slide-out-right");
            $("#bio-2").addClass("slide-in-top");
        } 
        else {
            $("#bio-1").removeClass("slide-in-left");
            $("#bio-1").addClass("slide-out-left");
            $("#bio-2").removeClass("slide-in-top");
            $("#bio-2").addClass("slide-out-right");
           
        } 

        if (y > 800) {
            $("#name").removeClass("txt-wht");
            $("#name").addClass("txt-blk");
            $("#hoverrr").removeClass("txt-wht");
            $("#hoverrr").addClass("txt-blk");
        } else {
            $("#name").removeClass("txt-blk");
            $("#name").addClass("txt-wht");
            $("#hoverrr").removeClass("txt-blk");
            $("#hoverrr").addClass("txt-wht");
        }

        if (y > 1300) {
            // $("#t").removeClass("slide-out-bottom");
            // $("#t").show();
            $("#t").removeClass("slit-out-vertical");
            $("#t").addClass("slit-in-vertical");
            
        } else {
            $("#t").removeClass("slit-in-vertical");
            $("#t").addClass("slit-out-vertical");
            // $("#t").hide();
            // $("#t").addClass("slide-out-bottom");
        }
        if (y > 1500) {
            $("#s").removeClass("txt-wht");
            $("#s").addClass("txt-blk")
            $("#arrow").removeClass("txt-wht");
            $("#arrow").addClass("txt-blk")
        } else {
            $("#s").removeClass("txt-blk");
            $("#s").addClass("txt-wht");
            $("#arrow").removeClass("txt-blk");
            $("#arrow").addClass("txt-wht");

        }
        
         if (y > 1700) {
           $("#html-bar").addClass("html-bar-animation");
        } else {
            $("#html-bar").removeClass("html-bar-animation");
        }
        if (y > 1750) {
           $("#css-bar").addClass("css-bar-animation");
        } else {
            $("#css-bar").removeClass("css-bar-animation");
        }
        if (y > 1810) {
            $("#js-bar").addClass("js-bar-animation");
         } else {
             $("#js-bar").removeClass("js-bar-animation");
         }
         if (y > 1930) {
            $("#node-bar").addClass("node-bar-animation");
         } else {
             $("#node-bar").removeClass("node-bar-animation");
         }
         if (y > 2000) {
            $("#react-bar").addClass("react-bar-animation");
         } else {
             $("#react-bar").removeClass("react-bar-animation");
         }
         if (y > 2100) {
            $("#git-bar").addClass("git-bar-animation");
         } else {
             $("#git-bar").removeClass("git-bar-animation");
         }
         if (y > 2250) {
            $("#photo-bar").addClass("photo-bar-animation");
         } else {
             $("#photo-bar").removeClass("photo-bar-animation");
         }
         if (y > 2500) {
            $("#resp-bar").addClass("resp-bar-animation");
            $("#wix-bar").addClass("wix-bar-animation");
         } else {
             $("#resp-bar").removeClass("resp-bar-animation");
             $("#wix-bar").removeClass("wix-bar-animation");
         }
         if (y > 2600) {
            $("#seo-bar").addClass("seo-bar-animation");
            $("#shopify-bar").addClass("shopify-bar-animation");
         } else {
             $("#seo-bar").removeClass("seo-bar-animation");
             $("#shopify-bar").removeClass("shopify-bar-animation");
         }
         if (y > 1800) {
            $("#arrow").removeClass("slide-in-bottom");
           $("#arrow").addClass("slide-out-bottom");
         } else {
            $("#arrow").removeClass("slide-out-bottom");
            $("#arrow").addClass("slide-in-bottom");
         }

         if (y > 1750) {
            $('nav').removeClass("menu-change-wht");
            $('nav').addClass("menu-change");
         } else {
             $('nav').removeClass("menu-change");
             $('nav').addClass("menu-change-wht");
         }
         if (y > 3350) {
            $('nav').removeClass("menu-change");
            $('nav').addClass("menu-change-wht");
         } else {
            $('nav').removeClass("menu-change-wht");
            $('nav').addClass("menu-change");
         }
         if (y > 3700) {
            $("#contact-animation").removeClass("swing-out-top-bck");
           $("#contact-animation").addClass("swing-in-top-fwd");
         } else {
            $("#contact-animation").removeClass("swing-in-top-fwd");
            $("#contact-animation").addClass("swing-out-top-bck");
         }


         if (y < 1820) {
            $('nav').addClass("menu-change-wht");
         }


    })

    
})





//$(window).width() > 1200 &&