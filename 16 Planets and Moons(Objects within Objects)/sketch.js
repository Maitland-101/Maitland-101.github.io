// Planets and Moons
// Alyssa Maitland
// Mar.19, 2025
// Storing objects IN objects, overwriting objects, basic

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(70);
  myPlanet.display();
}

function mousePressed(){
  //mosseClicked() -> behaves differently in certain browsers
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(mouseX, mouseY);
  }
  else{
    myPlanet.createMoon();
  }
}

function keyPressed(){
  //if any key(other than shift) is pressed...
  if(keyCode !== SHIFT){
    myPlanet.relocate(mouseX, mouseY);
  }
}

class Planet{
  //1. constructor
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 100;
    this.moons = [];
  }

  //2. class methods
  display(){
    //draw planet plus all the moons
    circle(this.x, this.y, this.s);
    for(let m of this.moons){
      m.update();
    }
  }

  relocate(x, y){
    //First, the planet:
    this.x = x;
    this.y = y;
    //then, the moons:
    for(let m of this.moons){
      m.x = x;
      m.y = y;
    }
  }

  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }
}

class Moon{
  //1. constructor
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.speed = 2;
    this.angle = 0;
    this.orbitRadius = 80;
    this.s = 25;
  }

  //2. class methods
  update(){
    //handles all internal class function calls
    this.move();
    this.display();
  }

  move(){
    this.angle += this.speed;
  }

  display(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }
}