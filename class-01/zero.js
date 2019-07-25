// Ejemplo número 1: Este es un comentario

/*
comentario
multilínea
*/

let photo;
let lightMode;

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

/* esta es la función que grba al presionar S */
function keyTyped() {
  if (key === 's' || key === 'S') {
    saveCanvas(photo, 'myCanvas', 'jpg');
  }

  if (key === ' ') {
    lightMode = !lightMode;
    if(lightMode){
      background(255);
    }else{
      background(0);
    }
  }
}
