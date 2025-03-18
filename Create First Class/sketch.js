// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let racer1;
let racerCars = [];
const NUM_RACERS = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  racer1 = new RoundRacer(width/2, "green");
}

function draw() {
  background(255);
  racer1.display();
  racer1.move();
  //racers();
  // for(i=0; i<NUM_RACERS; i++){ 
  //   racer1.move();
  //   racer1.display();
  // }
  
}

class RoundRacer{
  //1. constructor
  constructor(yPostion, color){
    this.xPostion = 0;
    this.yPostion = yPostion;
    this.xSpeed = round(random(3,15));
    this.color = color;
  }
  //2. methods
  move(){
    this.xPostion += this.xSpeed;
    if (this.xPostion>width){
      this.xPostion = 0;
    }
  }
  display(){
    fill(this.color);
    circle(this.xPostion, this.yPostion,5);
  }
}