
module.exports = nicer
module.exports.plain = log

function nicer(image, scale) {
  if (typeof image === 'string') {
    var img = new Image
    img.onload = log.bind(null, img, scale)
    img.src = image
    return img
  }

  var element = image.nodeName || ''
  if (element.toLowerCase() === 'img') return log(image, scale)
  if (element.toLowerCase() === 'canvas') {
    var img = new Image
    img.onload = log.bind(null, img, scale)
    img.src = image.toDataURL()
  }
}

function log(image, scale) {
  scale = scale || 1

  var width = image.width * scale
    , height = image.height * scale

  console.log('%c+', [
      'font-size:1px;'
    , 'padding:'
    , Math.floor(height / 2) + 'px '
    , Math.floor(width / 2) + 'px;'
    , 'line-height:' + height + 'px;'
    , 'background:url('
    , image.src
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
    , ');'
    , 'background-size:'
    , width + 'px '
    , height + 'px;'
    , 'color:transparent;'
  ].join(''))

  return image
}

