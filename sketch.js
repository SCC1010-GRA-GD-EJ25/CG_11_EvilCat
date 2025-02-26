let meowsi
let meowsi2
function preload() {
  meowsi = loadImage('./images/ramirez.jpg')
  meowsi2 = loadImage('./images/ramirez.jpg')
}

function setup() {
  // put setup code here
  createCanvas(meowsi.width,meowsi.height)
  noLoop()
}

function draw() {
  // put drawing code here
  background(255)
 image(meowsi,0,0)
}
