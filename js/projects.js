$(document).ready(function() {
    // Handle click event on the eye icon link
    $('[data-toggle="modal"]').click(function() {
        var description = $(this).data('description');
        $('#portfolio-description').text(description);
        var link = $(this).data('link')
        if (link) {
    $('#portfolio-link').text('Demo Video').attr('href', link).show();
        } else {
            $('#portfolio-link').hide();
        }
    });
    });