/*

Herramienta de Dibujo

*/

let photo;   // la variable que contiene la foto
let lightMode; // un booleano (o switch) para cambiar de claro a oscuro

function setup() {
 createCanvas(500, 500);
 photo = createCanvas(width, height);
 background(255);
 lightMode = true;
}


function draw() {

  if(lightMode){
      stroke(0);
    }else{
      stroke(255);
    }

  if (mouseIsPressed) {
  line(pmouseX, pmouseY, mouseX, mouseY);
  }
}


function keyTyped() {
  /* esta es la función que graba al presionar S */
  if (key === 's' || key === 'S') {
    saveCanvas(photo, 'myCanvas', 'jpg');
  }
  /* esta es la función que cambia de claro a oscuro */
  if (key === ' ') {
    lightMode = !lightMode;
    if(lightMode){
      background(255);
    }else{
      background(0);
    }
  }
}
