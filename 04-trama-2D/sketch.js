/**

   Trama 2D ajustable al mouse

*/

let m = 40; // margen;
let inc = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  ellipseMode(CENTER);
  colorMode(HSB, width);
}


function draw() {
  background(0);
  inc = map(mouseX, 0, width, 5, 35);
  for (var y = m; y < height - m; y += inc) {
    for (var x = m; x < width - m; x += inc) {
      fill(x, y, width);
      ellipse(x, y, inc * .75, inc * .75);
    }
  }
}
