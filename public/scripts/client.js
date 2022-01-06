/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const renderTweets = (tweets) => {
    $("#tweets-container").empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").prepend($tweet);
    }
  };

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  createTweetElement = (tweet) => {
    const $tweet = $(`<article>
  <header>
    <div class="face-name">
      <img class="user-avatar" src="${tweet.user.avatars}" alt="" />
      <div class="user-name">${tweet.user.name}</div>
    </div>
    <div class="handle">${tweet.user.handle}</div>
  </header>
  <body>
    <p>${escape(tweet.content.text)}</p>
    <hr>
  </body>
  <footer>
    <div class="timestamp">${timeago.format(tweet.created_at)}</div>
    <div class="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
</article> <br/>`);
    return $tweet;
  };

  const loadTweets = () => {
    $.getJSON("/tweets", (data) => {
      renderTweets(data);
    });
  };

  loadTweets();

  $("#tweet-form").submit(function (event) {
    event.preventDefault();
    const tweetLength = $("#tweet-text").val().length;

    if (!tweetLength) {
      $(".error-box").empty();
      $(".error-box").text("❗️Tweet cannot be empty❗️").slideDown();
      return;
    }
    if (tweetLength > 140) {
      $(".error-box").empty();
      $(".error-box")
        .text("❗️Tweet exceeds maximum characters allowed❗️")
        .slideDown();
      return;
    }

    const serializedData = $(this).serialize();
    $.post("/tweets", serializedData).then(() => {
      $(".error-box").slideUp()
      loadTweets();
      $('#tweet-text').val('');
    });
  });
});
