# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This app was built to develop HTML, CSS, JS, jQuery and AJAX front-end skills and Node/Express back-end skills.

- Tweeter employs AJAX to update itself as new tweets are posted, without having to refresh the entire page. 
- Tweeter uses responsive design. Screen widths above 1024px render the desktop view as shown below. Screen widths below 1024px render the tablet view instead
- Tweeter employs form validation to ensure a user cannot either post an empty tweet, or post a tweet above 140 characters

## Final Product
Tweeter on desktop
!["Tweeter page on desktop"](https://github.com/lenilsamuel/tweeter/blob/master/docs/tweeter-desktop-version-screenshot.png?raw=true)

Tweeter on tablet
!["Tweeter page on tablet"](https://github.com/lenilsamuel/tweeter/blob/master/docs/tweeter-tablet-version-screenshot.png?raw=true)

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
4. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
5. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- Body-parser
- Chance
- md5
