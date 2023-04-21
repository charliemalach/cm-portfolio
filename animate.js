$(document).ready(function() {
    // Check if device is mobile
    if (!/Mobi/.test(navigator.userAgent)) {
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
    } else {
      // Center the image for mobile devices
      $('#image-container').css({
        'position': 'relative',
        'top': 'auto',
        'left': 'auto',
        'margin': '0 auto 20px'
      });
  
      $('img').hover(function() {
        $(this).css('transform', 'none');
      });
    }
  });