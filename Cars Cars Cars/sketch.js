// Cars Cars Cars
// Alyssa Maitland
// Mar.21, 2025

//Global Variables
let car;
let carWidth = 40;
let wE;
let eastbound = [];
let westbound = [];
let traffic;
const NUMCAR  = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i<=NUMCAR; i++){
    //make a new object and push to an array
    wE = floor(random(2)); // 1 = west, 0 = east
    car = floor(random(2));  // 0 = car, 1 = truck
    let westCar = new Vehicle(car,1);
    westbound.push(westCar);
    let eastCar = new Vehicle(car,0);
    eastbound.push(eastCar);
  }
  traffic = new TrafficLight();
}

function draw() {
  background(220);
  drawRoad();
  car = floor(random(2));
  for(let i=0; i<westbound.length; i++){
    // for the the length westbound create a vehicle
    let c = westbound[i]
    c.action();
  }
  for(let i=0; i<eastbound.length; i++){
    // for the the length eastbound create a vehicle
    let c = eastbound[i]
    c.action();
  } 
  traffic.run();
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

function mouseClicked(){
  // when the left mouse is clicked add a car
  if(mouseButton === LEFT){
    if(keyIsDown(SHIFT)){
      // vehicle going west when shift is held
      let wClickCar = new Vehicle(car, 1);
      westbound.push(wClickCar);
    }
    else{
      // vehicle going east when the left mouse is pressed
      let eClickCar = new Vehicle(car, 0);
      eastbound.push(eClickCar);
    }
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
      //if the car goes west stay in the top lane
      this.y = random((height*0.2)+30, (height*0.5)-40);
    }
    if(direction === 0){
      //if the car goes east stay in the bottom lane
      this.y = random((height*0.5)+30, (height*0.8)-40);
    }
  }
  //2. class methods
  display(){
    //draw a car/truck at the x,y of the direction
    fill(this.c);
    stroke(0);
    if(this.carType === 0){
      // draw a truck
      rect(this.x, this.y, carWidth);
      rect(this.x+carWidth, this.y, 10,carWidth);
    }
    if(this.carType === 1){
      // draw a car
      circle(this.x, this.y, carWidth);
      rect(this.x,this.y-carWidth/2,carWidth);
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
      //make top speed 15
      this.carSpeed += 1;
    }
  }

  speedDown(){
    if(this.carSpeed>0){
      //make minimum speed 0
      this.carSpeed -= 1;
    }
  }

  changeColor(){
    //changes the color of the car
    this.c = color(random(255), random(255), random(255));
  }

  action(){
    //call all class methods
    if(traffic.state === 'green'){
      // move when the light is green
      this.move();
    }
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

class TrafficLight{
  // 1.constructor
  constructor(){
    this.t = 0;
    this.state = 'green';
  }

  // 2.class methods
  run(){
    //draw a traffic light
    fill(0);
    rect(10,70,30,60);
    if(this.state === 'green'){
      // if the state is green draw a green light
      fill(0,255,0);
      circle(25,115,20);
      fill(255,0,0,100);
      circle(25,85,20);
    }
    else{
      //draw a red light
      fill(0,100,0);
      circle(25,115,20);
      fill(255,0,0,255);
      circle(25,85,20);
    }
    if(keyIsPressed && keyCode === 32){
      // when the space bar is pressed switch state to red
      this.t = 120;
      this.state = 'red';
    }
    this.t -= 1;
    if(this.t<1){
      // when 120 frames have passed switch state to green
      this.state = 'green';
    }
  }
}