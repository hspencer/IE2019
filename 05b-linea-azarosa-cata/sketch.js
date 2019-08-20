/*

    Línea azarosa a partir de un "elemento merodeador"

*/


let x,y;   // la posición del elemento
let nx,ny; // la siguiente posición del elemento
let t;     // el ángulo de avance del elemento
let n = nn = 0;     // noise

function setup() {
  // sketch a pantalla completa
  createCanvas(windowWidth, windowHeight);

  // inicializar valores necesarios
  x = width/2;
  y = height/2;
  t = -HALF_PI;
  noStroke();
  fill(0, 150);
  background('beige');
}

function draw() {
  moveElement(); // función personalizada
  achure(x, y, nx, ny, n, nn); // línea desde la ubicación actual hasta la próxima
  x = nx;
  y = ny;
  nn = n;
}


function moveElement(){
  n = noise(millis()/800) - .5;
  t += n;

  /* si se sale de los márgenes, rebota */
  if(x > width || x < 0 || y < 0 || y > height){
   t += PI; // rotar en 180º
  }

  let avance = 7;

  // identidad circular
  nx = x + cos(t) * avance;
  ny = y + sin(t) * avance;
}

function achure(x, y, nx, ny, n, nn){
  /* x,y = currentPos; nx,ny = nextPos; n = noise; nn = nextNoise */
  let a = 40;
  quad(x-nn*a, y+nn*a, nx-n*a, ny+n*a, nx+n*a, ny-n*a, x+nn*a, y-nn*a);
}
