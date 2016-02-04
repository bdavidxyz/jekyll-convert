// When the DOM is ready,
$(function() {
    var toggle = $('.hamburger--toggle');

    // Toggle
    toggle.click(function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
    });
});
