/*

    Línea azarosa a partir de un "elemento merodeador"

*/


let x,y;   // la posición del elemento
let nx,ny; // la siguiente posición del elemento
let t;     // el ángulo de avance del elemento


function setup() {
  // sketch a pantalla completa
  createCanvas(windowWidth, windowHeight);

  // inicializar valores necesarios
  x = width/2;
  y = height/2;
  t = -HALF_PI;

  strokeWeight(3);
}

function draw() {
  moveElement(); // función personalizada
  line(x, y, nx, ny); // línea desde la ubicación actual hasta la próxima
  x = nx;
  y = ny;
}


function moveElement(){
  var n = noise(millis()/30) - .5;
  t += n;

  if(x > width || x < 0 || y < 0 || y > height){
   t += PI;
  }

  // identidad circular
  nx = x + cos(t) * 2;
  ny = y + sin(t) * 2;
}
