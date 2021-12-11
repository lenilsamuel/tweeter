/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").append($tweet);
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
    <div class="timestamp">${tweet.created_at}</div>
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

  renderTweets(data);
  // const $tweet = createTweetElement(data);

   
});
