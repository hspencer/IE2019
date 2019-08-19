/*

Ejemplificar la función NOISE

*/

let func = false;
let zoom;

function setup() {
  // sketch a pantalla completa
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textFont("Helvetica");
  textSize(148);
  fill(255);
}

function draw(){

  zoom = 1 + map(mouseX, 0, width, 30, 3000);
  background('gray');

  if(func){
    // random
    for(let i = 0; i < width; i++){
      line(i, 0, i, random(height));
    }
    text("random", width/2, height/2);

  }else{
    // noise
    for(let i = 0; i < width; i++){
      let n = noise(i/zoom + millis()/900) * height;
      line(i, 0, i, n);
    }
    text("noise", width/2, height/2);
  }
}

function keyTyped(){
  func = !func;
}
