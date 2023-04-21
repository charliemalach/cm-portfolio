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
        $('#image-container').animate({
          left: '15%' // center of screen
        }, 500); // adjust speed as needed (in milliseconds)
      }
    });
  });
  