// Terrain Generation Project
// Alyssa Maitland
// Mar.4, 2025
//

let rectWidth = 30;
let noiseTime = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}

function generateTerrain(){
  //use a loop to generate and draw rectangles to look like 2D terrain
  rectMode(CORNERS);
  for(let x = 0; x<width; x+= rectWidth){
    //generate a random height change this from using random() to noise()
    let rectHeight = noise(noiseTime);
    rectHeight = map(rectHeight, 0, 1, 50, 500);
    rectHeight = round(rectHeight);
    //calculate the other corner of rectangle
    let x2 = x+rectWidth;
    let y2 = height - rectHeight;
    rect(x, height, x2, y2);
    noiseTime = noiseTime + 0.01;
  }
  rectMode(CORNER);
}

function keyPressed(){
  if(key === 39){
    rectWidth =+ 5;
  }
  if(key === 37){
    rectWidth = rectWidth-5;
  }
}

function drawFlag(x2,y2){
  let peak = 0;
  if(y2>peak){
    peak = y2;
  }
}

function draw() {
  //background(220);
}
