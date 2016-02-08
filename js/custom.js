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


    function SelectText(element) {
      var doc = document
      , text = doc.getElementById(element)
      , range, selection
      ;
      if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
      } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }

    var theater = theaterJS({maxSpeed:200});

    theater
    .on('type:start, erase:start', function () {
      var currentActor = theater.getCurrentActor();
      var currentActorElement = currentActor.$element;

      currentActorElement.classList.add('blinking-caret');
    })
    .on('type:end, erase:end', function () {
      var currentActor = theater.getCurrentActor();
      var currentActorElement = currentActor.$element;

      // currentActorElement.classList.remove('blinking-caret');
    });

    theater
    .addActor('js-animate-hero', {accuracy:1, speed: 0.6})

    .addScene('js-animate-hero:create web applications')
    // .addScene(-7, 'mother!')
    .addScene(2000)
    .addScene(function (done) {
      SelectText('js-animate-hero');
      done();
    })
    .addScene(1000)
    .addScene(function (done) {
      theater.getCurrentActor().displayValue = '';
      done();
    })
    .addScene(1000)

    .addScene('js-animate-hero:automate growth hacks')
    .addScene(2000)
    .addScene(function (done) {
      SelectText('js-animate-hero');
      done();
    })
    .addScene(1000)
    .addScene(function (done) {
      theater.getCurrentActor().displayValue = '';
      done();
    })
    .addScene(1000)

    .addScene('js-animate-hero:design user interfaces')
        .addScene(2000)
    .addScene(function (done) {
      SelectText('js-animate-hero');
      done();
    })
    .addScene(1000)
    .addScene(function (done) {
      theater.getCurrentActor().displayValue = '';
      done();
    })
    .addScene(1000)


    .addScene('js-animate-hero:build corporate website')
        .addScene(2000)
    .addScene(function (done) {
      SelectText('js-animate-hero');
      done();
    })
    .addScene(1000)
    .addScene(function (done) {
      theater.getCurrentActor().displayValue = '';
      done();
    })
    .addScene(1000)

    .addScene(theater.replay);


  });


