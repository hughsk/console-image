var element = document.createElement('div')
element.innerHTML = 'Open your console!'
document.body.appendChild(element)

var logImage = require('./')
  , render = require('ndarray-canvas')
  , cave = require('cave-automata-2d')
  , fill = require('ndarray-fill')
  , zeros = require('zeros')

function amplify(array) {
  return fill(array, function(x, y) {
    return array.get(x, y) * 255
  })
}

var array = amplify(cave(zeros([Math.floor(window.innerWidth * 0.8), 80]))(20))
var canvas = render(null, array)
logImage(canvas, 1)
