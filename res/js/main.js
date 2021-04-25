
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
    }
    else{
        $('.scroll-to-top').fadeOut();
    }
});