# todoApp - vigour.js example app
The goal of this app is to introduce you to the vigour-js framework by creating a little multiscreen app.

## Get set up

### Node.js and npm
Make sure you have the following versions (or higher) installed:

|thing | version |
|---  | --- |
|node | `v0.12.4` |
|npm: | `2.11.0` |

### Gaston (javaScript bundler)
Clone [gaston](https://github.com/vigour-io/gaston) and run `npm link` while on `master` branch.

### The Hub (data sync)
Clone [vigour-hub](https://github.com/vigour-io/vigour-hub) and run `npm install`

### This app (using vigour-js)
Clone [this repo](https://github.com/vigour-io/todoApp) and run `npm install`

## Run the app
1. Start a Hub: Run `bin/hub` from the vigour-hub root directory.
2. Start Gaston: Run `gaston` from the todoApp root directory.
3. Open `http://localhost:8080` in your browser. (if something is already listening on `8080`, gaston will pick the next available port)

## Go wild
Create an amazing multiscreen todo app with vigour-js!

## Assignment
As part of the evaluation we're asking you to build part of a page, following a design, using the vigour-js framework. We're asking you to build a small part of the page, and use placeholders for the rest.

### End result
The page you will create should look as follows (in Chrome while emulating an iPhone 6):

![total](http://vigour.io/graphics/hiring/total.png)

### The poll

The part that should not be a placeholder is the poll:

![total](http://vigour.io/graphics/hiring/poll.png)

The parts above and below it have no requirements other than to look like the first picture.

##### Requirements

- use the Class system
- sync the votes by using cloud.data
- clicking on a team logo should give that team one vote
- the width of the bars should represent the relative scores
- pixel perfect replication of the design

##### Help
If you have any questions don't hesitate to contact me (Marcus) on Skype.

