
$(function () {

  // MENU
  $('.navbar-collapse a').on('click',function(){
    $(".navbar-collapse").collapse('hide');
  });

  // AOS ANIMATION
  AOS.init({
    // disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
  });


  // SMOOTHSCROLL NAVBAR
  $(function() {
    let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    $('.navbar a, .hero-text a, #book-my-seat, #claim-your-spot, .back-to-top')
        .on('click', function(event) {
      if (!window.location.hash) {
        let $anchor = $(this);
        if ( !isChrome ) {
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 100
          }, 1000);
        } else {
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 100
          }, 0);
          return false;
        }
        event.preventDefault();
      }
    });
  });

});


    

