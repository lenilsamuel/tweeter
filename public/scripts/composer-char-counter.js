
$(document).ready(function() {
  let maxChars = 140;
  $('#tweet-text').on('input', function(event) {
    let remaining = maxChars - $(this).val().length;
    $(this).parent().find('.counter').html(remaining);
    if (remaining < 0) {
      $('.counter').addClass('remaining');
    } else $('.counter').removeClass('remaining');
  })
}); 