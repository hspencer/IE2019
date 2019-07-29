/**

   Trama 2D ajustable al mouse

*/

var m = 20; // margen;
var inc = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  ellipseMode(CENTER);
}


function draw() {
  background(0);
  inc = map(mouseX, 0, width, 5, 35);
  for (var y = m; y < height - m; y += inc) {
    for (var x = m; x < width - m; x += inc) {
      ellipse(x, y, inc * .75, inc * .75);
    }
  }
}
