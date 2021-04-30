
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