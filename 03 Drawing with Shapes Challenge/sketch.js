// Drawing with Shapes Practice
// Alyssa Maitland
// Feb. 10,2025

// Global Variable Declarations
let boxX =200, boxY = 100;
let x; //movement

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCharacter();
  //drawBox();
  if(keyIsDown(LEFT_ARROW)){ //movement
    boxX = boxX - 5;
    if(boxX < -100){ //off left edge
      boxX = width + 100; //(create a wrap aroung effect)
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    boxX = boxX + 5;
    if(boxX > width){ //off right edge
      boxX = -100; //(create a wrap aroung effect)
    }
  }
  if(keyIsDown(UP_ARROW)){
    boxY = boxY - 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    boxY = boxY + 5;
  }
}

function drawCharacter(){
  //to practice 
  //
  noStroke();
  fill(150,400,150);
  rectMode(CORNER);
  rect(boxX,boxY,100,100,50,50,0,0); //head
  rect(boxX,boxY+100,5,25); //left leg
  rect(boxX+95,boxY+100,5,25); //right leg
  fill(0,0,0);
  circle(boxX+20,boxY+50,10); //left eye
  circle(boxX+80,boxY+50,10); //right eye
  rectMode(CENTER);
  rect(boxX+50,boxY+70,50,3); //mouth
}

// function drawBox(){
//   //draw a box pn the screen
//   fill(255,155,55);
//   rect(boxX, boxY, 50, 30, 5, 5, 0, 0);
//   rect(boxX, boxY - 50, 30);
// }

// function keyPressed(){
//   if(key === 'a'){
//     boxX = 0;
//   }
//   if(key === 'b'){
//     boxY = 400;
//   }
//   if(keyCode === ESCAPE){
//     boxX = width * 0.85; //85% across the screen
//     boxY = height * 0.6; //60% down the screena
//   }
// }