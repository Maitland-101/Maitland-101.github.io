// Interactive Scene
// Alyssa Maitland
// Feb.11, 2025

let x = 200;
let y = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  character();
}

function character(){
  //the code that makes the shapes for the character
  noStroke();
  fill("yellow");
  triangle(x-50,y,x,y-100,x+50,y);
  stroke(0,0,0);
  fill("white");
  ellipse(x,y-35,50,25);
  fill("black");
  rectMode(CENTER);
  rect(x,y-85,30,5);
  rect(x,y-100,10,30);
}
