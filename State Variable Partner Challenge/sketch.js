// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;
let d = 0;
let size = 50;

// function preload(){
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  drawSquare();
}

function drawSquare(){
  square(x+25,y+25,size);
  if(d === 0){
    x = x+5;
    if(x>width-size){
      d = 1;
    }
  }
  else if(d === 1){
    y = y+5;
    if(y>height-size){
      d = 2;
    }
  }
  else if(d === 2){
    x = x-5;
    if(x===-size){
      d = 3;
    }
  }
  else if(d === 3){
    y = y-5;
    if(y===-size){
      d = 0;
    }
  }
}

function keyPressed(){
  if(key === 'a' && size>5){
    size = size-5;
  }
  if(key === 'd' && size<50){
    size = size+5;
  }
}