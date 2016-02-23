// When the DOM is ready,
$(function() {

  var _$pageheadheight = '100px';
  var _$smallpageheadheight = '50px';

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



    //little cta appears when scroll down
    //Function to the css rule
    function checkSize(){
      var reset_to_big_height = false;
      if ($(".site-nav").css("height") === _$pageheadheight ){
        console.log("kboum");
        reset_to_big_height = true;
      }
      var sclog;
      var attempt = 0;
      window.onscroll = function() {scrollMove()};
      function scrollMove() {
        attempt += 1;
        var scrolledTop = window.pageYOffset;
        // console.log('scrolled ' + scrolledTop);
        if (scrolledTop > 250) {
          sclog = true;
          $(".site-nav").css("height", _$smallpageheadheight);
          document.getElementById("main-icon").className = "slide-out";
          $(".site-nav").addClass('slide-out');
          $(".site-nav").removeClass('slide-in');
        } else if (sclog == true && scrolledTop == 0) {
          if (reset_to_big_height) {
            $(".site-nav").css("height", _$pageheadheight);
          }
          document.getElementById("main-icon").className = "slide-in";
          $(".site-nav").addClass('slide-in');
          $(".site-nav").removeClass('slide-out');
          sclog = false;
        }
      }


    }

    checkSize();
































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

    //hack here
    if ($('.overlay-container.default').length > 0) {


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

      });

      theater
      .addActor('js-animate-hero', {accuracy:1, speed: 0.6})

      .addScene('js-animate-hero:create web applications')
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

    }
  });


