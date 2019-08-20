/*

Elemento que se mueve de forma azarosa

*/


class Element{

  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.nx = this.x;
    this.ny = this.y;
    this.t = random(TWO_PI);
    this.sw = 3; // strokeWeight
    this.ns = round(random(999999)); // noiseSeed
    this.c = color(random(100, 255), random(50, 100), random(0, 100), 100);
    this.step = random(2, 20);
  }

  move(){
    noiseSeed(this.ns);
    let zoom = 300;
    let n = noise(millis()/zoom) - .5;
    this.sw = map(n, -.5, .5, 1, 10);
    strokeWeight(this.sw);
    this.t += n;
    if(this.x > width || this.x < 0 || this.y < 0 || this.y > height){
      this.t += PI;
    }
    // identidad circular
    this.nx = this.x + cos(this.t) * this.step;
    this.ny = this.y + sin(this.t) * this.step;
  }

  paint(){
    this.move(); // función personalizada
    stroke(this.c);
    line(this.x, this.y, this.nx, this.ny); // línea desde la ubicación actual hasta la próxima
    this.x = this.nx;
    this.y = this.ny;
  }
}
