// Terrain Generation Project
// Alyssa Maitland
// Mar.4, 2025
//

let rectWidth = 30;
let noiseTime = 5;
let noiseStart = 5;
let noiseSpeed = 0.01;
let peak = 0;
let tallX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
  drawFlag(tallX,peak);
}

function draw() {
  //background(220);
  noiseTime = noiseStart;
  noiseStart += noiseSpeed;
}

function generateTerrain(){
  //use a loop to generate and draw rectangles to look like 2D terrain
  rectMode(CORNERS);
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
    if(y2>peak){
      peak = y2;
      tallX = x1;
    }
  }
  rectMode(CORNER);
}

function keyPressed(){
  if(keyCode === 39){
    rectWidth = rectWidth+5;
  }
  if(keyCode === 37){
    rectWidth = rectWidth-5;
  }
}

function drawFlag(x,y){
  //draw a flag in the middle of the highest peak
  fill('red');
  circle(x+rectWidth/2,y,25);
}
