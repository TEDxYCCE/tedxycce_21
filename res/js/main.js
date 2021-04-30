
/*------------------------------------*\
    Shrink navigation.
\*------------------------------------*/
$(window).scroll(function(){
    if ($(document).scrollTop() > 80){
        $('.navbar').addClass('shrink');
    }
    else{
        $('.navbar').removeClass('shrink');
    }
});

/*------------------------------------*\
  Scroll to top.
\*------------------------------------*/
$(window).scroll(function(){
    if ($(document).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    }
    else {
        $('.back-to-top').fadeOut('slow');
    }
});


$(document).ready( function () {

    // Add dark background on collapse
    $(".navbar").on("show.bs.collapse", function () {
        $(this).addClass("bg-dark-color");
    }).on("hide.bs.collapse", function () {
        $(this).removeClass("bg-dark-color");
    });

});