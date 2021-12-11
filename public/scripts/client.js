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
  }

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
    <p>${tweet.content.text}</p>
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
</article> <br/>`
);
    return $tweet;
  };

  const loadTweets = () => {
    $.getJSON('/tweets', (data) => {
      renderTweets(data);
    })
  }

  loadTweets();

  $('#tweet-form').submit(function (event) {
    event.preventDefault();
    const tweetLength = $('#tweet-text').val().length;
    console.log(tweetLength);
    if (!tweetLength) {
      return alert('Tweet cannot be empty');
    } if (tweetLength > 140) {
      return alert('Only 140 characters allowed, sorry. Please shorten tweet');
    }
    const serializedData = $(this).serialize();
    $.post('/tweets', serializedData).then(()=> {
      loadTweets();
    })
  });

});
