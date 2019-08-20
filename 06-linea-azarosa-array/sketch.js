/*

Líneas azarosa a partir de un "elemento merodeador"

*/

const trazos = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 50; i++){
    trazos.push(new Element());
  }
}

function draw(){
for(let i = 0; i < trazos.length; i++){
      trazos[i].paint();
  }
}
