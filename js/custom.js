// When the DOM is ready,
$(function() {
  var hamburgertoggle = $('.hamburger--toggle');

    // Toggle
    hamburgertoggle.click(function(e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      if ( $('.menu-content').css('visibility') === 'hidden') {
        $('.menu-content').css('visibility','visible');
      }
      else{
        $('.menu-content').css('visibility','hidden');
      }
    });
  });
