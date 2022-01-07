$(document).ready(function () {
  // function that, on user input, changes the tweet counter and displays the number of characters remaining
  let maxChars = 140;

  $("#tweet-text").on("input", function (event) {
    let remaining = maxChars - $(this).val().length;
    $(this).parent().find(".counter").html(remaining);

    // changes tweet counter to red if tweets go over max 140 limit
    if (remaining < 0) {
      $(".counter").addClass("remaining");
    } else $(".counter").removeClass("remaining");
  });
});
