// Find the Smallest Circle
// Alyssa Maitland
// Mar.5, 2025

const NUM_CIRCLES = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawCircles();
}

function drawCircles(){
  //draw NUM_CIRCLES with no fill smallest will be filled with a colour
  noFill();
  //variables to track smallest so far
  let smallestDiameter = Infinity;
  let smallX, smallY;

  for(let i = 0; i < NUM_CIRCLES; i++){
    //generates next circle
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20,80);
    circle (x,y,d);
    //check if smallest circle so far
    if(d < smallestDiameter){
      smallestDiameter = d;
      smallX = x; smallY = y;
    }
  }
  fill(255,255,0);
  circle(smallX, smallY, smallestDiameter);
}

function draw() {
  //background(220);
}
