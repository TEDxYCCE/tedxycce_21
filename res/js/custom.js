
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
    $('.navbar a, .hero-text a, #book-my-seat, #claim-your-spot, .back-to-top, .read-more')
        .on('click', function(event) {
      let $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - 100
      }, 1500);
      event.preventDefault();
    });
  });

});


    

