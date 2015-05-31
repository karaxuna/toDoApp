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
Create amazing multiscreen apps with vigour-js!



