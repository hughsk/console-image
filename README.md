# console-image #

A [browserify](http://browserify.org/)-friendly port of
[dunxrion](https://github.com/dunxrion)'s
[console.image](https://github.com/dunxrion/console.image),
so you can render images straight to your Chrome console!

## Installation ##

``` bash
npm install console-image
```

## Usage ##

### `require('console-image')(image|url|canvas[, scale])` ###

Takes an image/canvas element, or an image URL, and logs it to the console.
Optionally, you can pass a scale argument to resize the image which defaults
to 1.

``` javascript
var logImage = require('console-image')

// Pass it a URL:
logImage('https://www.google.com.au/images/srpr/logo4w.png')

// Or an <img> element:
var image = document.querySelector('img')
logImage(image)

// Or...
var render = require('ndarray-canvas')
  , cave = require('cave-automata-2d')
  , fill = require('ndarray-fill')
  , zeros = require('zeros')

function amplify(array) {
  return fill(array, function(x, y) {
    return array.get(x, y) * 255
  })
}

var array = zeros([150, 80])
cave(array)(20)
amplify(array)

// A <canvas> element!
var canvas = render(null, array)
logImage(canvas)
```
