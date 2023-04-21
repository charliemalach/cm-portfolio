$(document).ready(function() {
    // Check if device is mobile
    if (/Mobi/.test(navigator.userAgent)) {
      // Set the initial transparency of the image to 0
      $('#image-container img').css('opacity', 0);
      
      // Fade in the image when the user scrolls down
      $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var elementOffset = $('#image-container').offset().top;
        var distance = 1000;
  
        if (scrollTop > elementOffset - distance) {
          $('#image-container').animate({
            left: '15%'
          }, 500);
          
          // Fade in the image
          $('#image-container img').animate({ opacity: 1 }, 500);
        }
      });
    } else {
      // Execute the existing script for non-mobile devices
      $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var elementOffset = $('#image-container').offset().top;
        var distance = 1000;
  
        if (scrollTop > elementOffset - distance) {
          $('#image-container').animate({
            left: '15%'
          }, 500);
        }
      });
    }
  });
  