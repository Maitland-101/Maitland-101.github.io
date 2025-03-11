// Refactoring Problems
// Alyssa Maitland
// Mar.11, 2025

//refactoring problem 1

// //Global Variables
// let x = 200;
// let y = 300;
// let xMovement;
// let yMovement;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   xMovement=random(3,8); 
//   yMovement=random(3,8);
// }

// function draw() {
//   wallBounce();
//   background(80,80,80);
//   rect(x,y,250,75);
// }

// function wallBounce(){
//   //when the rectangle hits a wall it bounces off it
//   x += xMovement; 
//   y += yMovement;
//   if (y>=height-75||y<=0){
//     //heads in opposite vertical direction
//     yMovement = yMovement*-1;
//   }
//   if (x>=width-250||x<=0){
//     //heads in opposite horizontal direction
//     xMovement = xMovement*-1;
//   }
// }

//refactoring problem 2

function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw() {
  background(255);
  Quadrants();
}

function Quadrants(){
  //divides the canvas into four sections and fills the one with the mouse in it black
  fill(0);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  if (mouseX<width/2 && mouseY<height/2){
    //top left
    rect(0,0,width/2,height/2);
  }
  else if (mouseX>width/2 && mouseY<height/2){
    //top right
    rect(width/2,0,width/2,height/2);
  }
  else if (mouseX<width/2 && mouseY>height/2){
    //bottom left
    rect(0,height/2,width/2,height/2);
  }
  else if (mouseX>width/2 && mouseY>height/2){
    //bottom right
    rect(width/2,height/2,width/2,height/2);
  } 
}