/*

    Línea azarosa a partir de un "elemento merodeador"

*/


let x,y;   // la posición del elemento
let nx,ny; // la siguiente posición del elemento
let t;     // el ángulo de avance del elemento
let n = 0;     // noise

function setup() {
  // sketch a pantalla completa
  createCanvas(windowWidth, windowHeight);

  // inicializar valores necesarios
  x = width/2;
  y = height/2;
  t = -HALF_PI;
  noStroke();
  fill(0);
}

function draw() {
  moveElement(); // función personalizada
  achure(x, y, nx, ny, n); // línea desde la ubicación actual hasta la próxima
  x = nx;
  y = ny;
}


function moveElement(){
  n = noise(millis()/300) - .5;
  t += n;

  /* si se sale de los márgenes, rebota */
  if(x > width || x < 0 || y < 0 || y > height){
   t += PI; // rotar en 180º
  }

  let avance = 10;

  // identidad circular
  nx = x + cos(t) * avance;
  ny = y + sin(t) * avance;
}

function achure(x, y, nx, ny, n){
  quad(x - n*40, y + n*40, nx - n*40, ny + n*40, nx + n*40, ny - n*40, x + n*40, y - n*40);
}
