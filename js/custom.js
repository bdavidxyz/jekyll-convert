// When the DOM is ready,
$(function() {
  var hamburgertoggle = $('.hamburger--toggle');

    // Toggle
    hamburgertoggle.click(function(e) {
      var top  = window.pageYOffset || document.documentElement.scrollTop;
      console.log('top : ' + top);
      e.preventDefault();
      $(this).toggleClass('is-active');
      // $('.menu-content').css({ 'top' : top + 'px' });
      // $('.menu-content').css({ 'display' : '' });
      $('.menu-content').css({ 'visibility' : 'visible' });

$('#element').on('scroll touchmove mousewheel', function(e){
  e.preventDefault();
  e.stopPropagation();
  return false;
});

      // $('.overlay').toggleClass('is-active');
     //  if ($('.overlay.is-active').length > 0) {
     //    $('.overlay.is-active').css({ 'top' : top + 'px' });
     //  } else {
     //   $('.overlay').css({'top':''});
     // }
        // $('.overlay') = '';
      });
  });
