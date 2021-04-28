
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
    if($(this).scrollTop() > 100){
        $('.scroll-to-top').fadeIn();
        $('.back-to-top').fadeIn('slow');
    }
    else{
        $('.scroll-to-top').fadeOut();
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
    return false;
});