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



    var theater = theaterJS({maxSpeed:250});

    theater
    .on('type:start, erase:start', function () {
      var currentActor = theater.getCurrentActor();
      var currentActorElement = currentActor.$element;

      currentActorElement.classList.add('blinking-caret');
    })
    .on('type:end, erase:end', function () {
      var currentActor = theater.getCurrentActor();
      var currentActorElement = currentActor.$element;

      currentActorElement.classList.remove('blinking-caret');
    });

    theater
    .addActor('js-animate-hero', {accuracy:1})
    .addScene('js-animate-hero:create web applications')
    .addScene(1600)
    .addScene('js-animate-hero:automate growth hacks')
    .addScene(1600)
    .addScene('js-animate-hero:design user interfaces')
    .addScene(1600)
    .addScene('js-animate-hero:build corporate website')
    .addScene(1600)
    .addScene(theater.replay);


  });


