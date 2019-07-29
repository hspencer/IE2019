/*

Control Sliders

*/


let photo;   // la variable que contiene la foto

let S1, S2, S3, diam, velx, vely; // Sliders & values
let x, y; // position
let px, py;

function setup() {

 createCanvas(500, 500);
 photo = createCanvas(width, height);
 
 x = width/2;
 y = height/2;

 px = py = 1;

 // createSlider(min, max, [value], [step])
 S1 = createSlider(1, 100, 10, 1);
 S2 = createSlider(-20, 20, 0, 0.1);
 S3 = createSlider(-20, 20, 0, 0.1);

 // define positions
 S1.position(10, 50);
 S2.position(10, 100);
 S3.position(10, 150);

 fill(255, 70);
 stroke(0, 90);
}


function draw() {
 checkSliders();
 ellipse(x, y, diam, diam);
 x += velx * px;
 y += vely * py;

 if(x < diam/2 || x > width  - diam/2){
   px *= -1;
 }
 if(y < diam/2 || y > height - diam/2){
   py *= -1;
 }
}

function checkSliders(){
  diam = S1.value();
  velx = S2.value();
  vely = S3.value();
}

function keyTyped() {
  /* esta es la función que graba al presionar S */
  if (key === 's' || key === 'S') {
    saveCanvas(photo, 'myCanvas', 'jpg');
  }
}
