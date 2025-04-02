// Cars Cars Cars
// Alyssa Maitland
// Mar.21, 2025

//Global Variables
let car;
let carWidth = 50;
let wE;
let eastbound = [];
let westbound = [];
const numCar = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  wE = floor(random(2)); // 1 = west, 0 = east
  car = floor(random(2)); // 0 = car, 1 = truck
  for(let i = 0; i<=numCar; i++){
    let westCar = new Vehicle(car,1);
    westbound.push(westCar);
  }
  //car = new Vehicle(0,wE);
}

function draw() {
  background(220);
  drawRoad();
  //car.action();
  fill('red');
  text(wE,100,10);
  for(let i=0; i<westbound.length; i++){
    let c = westbound[i]
    c.action();
  }
}

function drawRoad(){
  //draws rectangles that make up the road
  fill(0);
  rect(0, height*0.2, width, height*0.6);
  for(i = 0; i < width; i+=40){
    // draws a dotted line in the road for the width of the screen
    fill("yellow");
    rect(i, height/2, 20, 5);
  }
}

class Vehicle{
  //1.consrutor
  constructor(type, direction){
    this.carType = type;
    this.c = color(random(255), random(255), random(255));
    this.x = random(width);
    this.direction = direction;
    this.carSpeed = 10;
    if(direction === 1){
      this.y = random(height*0.2, height*0.5);
    }
    if(direction === 0){
      this.y = random(height*0.5, height*0.8);
    }
  }
  //2. class methods
  display(){
    //draw a car/truck at the x,y of the direction
    fill(this.c);
    if(this.carType === 0){
      if(this.direction === 1){ // 1 = west
        //this.y = random(height*0.2, height*0.5);
        rect(this.x, this.y, carWidth);

      }
    }
    if(this.carType === 1){
      if(this.direction === 1){ // 1 = west
        //this.y = random(height*0.2, height*0.5);
        rect(this.x, this.y, carWidth);
      }
      if(this.direction === 0){
        //this.y = random(height*0.5, height*0.6);
        circle(this.x, this.y, carWidth);
      }
    }
  }

  move(){
    if(this.direction === 0){ //when direction === 0, travel west
      this.x += this.carSpeed;
      if(this.x>width){ //wrap around screen
        this.x = -carWidth;
      }
    }
    if(this.direction === 1){ //when direction === 1, travel east
      this.x -= this.carSpeed;
      if(this.x<0){ //wrap around screen
        this.x = width;
      }
    }
  }

  speedUp(){
    if(this.carSpeed<15){
      this.carSpeed += 1;
    }
  }

  speedDown(){
    if(this.carSpeed>1){
      this.carSpeed -= 1;
    }
  }

  changeColor(){
    this.c = color(random(255), random(255), random(255));
  }

  action(){
    this.move();
    this.chance = int(random(1,100)); //generates a new number evey tim the function is called
    if(this.chance === 66){
      //if chance = 66 increase the speed
      this.speedUp();
    }
    if(this.chance === 99){
      //if chance = 99 decrease the speed
      this.speedDown();
    }
    if(this.chance === 33){
      //if chance = 33 change the color
      this.changeColor();
    }
    this.display();
  }
}