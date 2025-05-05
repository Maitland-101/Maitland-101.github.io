// Vector Visualization
// Alyssa M.
// May.5, 2025

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  objects.push(new Ball(width*0.1, height*0.5));
}

function draw() {
  background(220);

  if(mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }
  for(let o of objects){
    //if(keyIsPressed && key === " "){
      o.move();
    //}
    //o.calcMouse();
    o.display();
  }
}

class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.velo = createVector(random(5,-5),-5);
    this.grav = createVector(0,0.2);
    //this.grav = createVector(0,0); //mouse attractor
  }

  calcMouse(){
    //mouse vector calculations
    this.grav = createVector(mouseX,mouseY);
    this.grav.sub(this.pos);
    this.grav.normalize();
    this.grav.mult(4);
  }

  move(){
    //update velo and pois vectors
    this.velo.add(this.grav);
    this.velo.limit(10); 
    this.pos.add(this.velo);

    //wall-floor bounce
    if(this.pos.x<0 || this.pos.x>width){
      this.velo.x *= -1;
    }
    if(this.pos.y<height){
      this.velo.y *= -1;
    }
  }

  display(){
    //diaplay ball
    circle(this.pos.x, this.pos.y, 20);

    //display vectors
    stroke(2550,0,0);
    line(0,0,this.pos.x,this.pos.y);

    stroke(0,0,255);
    line(this.pos.x,this.pos.y, this.pos.x + this.velo.x, this.pos.y + this.velo.y);

    let endVX = this.pos.x+this.velo.x;
    let endVY = this.pos.y+this.velo.y;
    stroke(0,255,0);
    line(endVX, endVY, endVX + this.grav.x, endVY+this.grav.y);

  }
}