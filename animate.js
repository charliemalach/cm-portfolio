$(document).ready(function() {
    $(window).scroll(function() {
      // Get the position of the top of the window
      var scrollTop = $(window).scrollTop();

      // Get the position of the element you want to animate
      var elementOffset = $('#image-container').offset().top;

      // Set the distance you want the user to scroll before the animation triggers
      var distance = 1000;

      // Check if the user has scrolled past the element
      if (scrollTop > elementOffset - distance) {
        // Animate image to move from left to center of screen
        var screenWidth = $(window).width();
        if (screenWidth <= 768) { // center image only on mobile
          $('#image-container').animate({
            left: '50%', // center of screen
            marginLeft: -$('#image-container').width() / 2 // center image horizontally
          }, 500); // adjust speed as needed (in milliseconds)
        } else {
          $('#image-container').animate({
            left: '15%' // center of screen
          }, 500); // adjust speed as needed (in milliseconds)
        }
      }
    });
  });