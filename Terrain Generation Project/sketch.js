// Terrain Generation Project
// Alyssa Maitland
// Mar.4, 2025
// generate a terrain based off of the noise function

let noiseTime = 5;
let noiseStart = 5;
let noiseSpeed = 0.01;
let rectWidth = 30;
let peak;
let tallX;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  noiseTime = noiseStart;
  noiseStart += noiseSpeed; // count time from start of program
  generateTerrain();
  drawFlag(tallX,height-peak);
  averageLine(height-peak/2);
}

function generateTerrain(){
  //use a loop to generate and draw rectangles to look like 2D terrain
  rectMode(CORNERS);
  fill('grey');
  //resets x,y of flag each frame
  peak = 0;
  tallX = 0;
  for(x1 = 0; x1<width; x1+= rectWidth){
    //generate a random height change this from using random() to noise()
    let rectHeight = noise(noiseTime);
    rectHeight = map(rectHeight, 0, 1, 50, 500);
    rectHeight = round(rectHeight);
    //calculate the other corner of rectangle
    let x2 = x1+rectWidth;
    let y2 = height - rectHeight;
    rect(x1, height, x2, y2);
    noiseTime += noiseSpeed;
    // store the tallest height and its horizontal positon
    if(rectHeight>peak){
      peak = rectHeight;
      print("update");
      tallX = x1;
    }
  }
  rectMode(CORNER);
}

function keyPressed(){
  // when an arrow key is pressed change the width of the rectangle
  if(keyCode === 39 && rectWidth<=50){
    rectWidth = rectWidth+5;
  }
  if(keyCode === 37 && rectWidth>=6){
    rectWidth = rectWidth-5;
  }
}

function drawFlag(x,y){
  //draw a flag in the middle of the highest peak
  fill('grey');
  rect(x+rectWidth/2,y-25,5,25);
  triangle(x+rectWidth/2, y-35, x+rectWidth/2+15, y-25, x+rectWidth/2, y-15);
}

function averageLine(y){
  //draws a line at the average height of the rectangles
  fill('red');
  rect(0,y,width,5);
}