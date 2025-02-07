// Coordinate System and User Events
// Alyssa Maitland
// Feb. 6th, 2025
// Not run-to-comletion, but interactive programs...



function setup() {
  // runs ONCE, at the very begining...
  createCanvas(500, 500);
  //                ?             ?
}

function draw() {
  // draw LOOP, repeats over and over forever...
  // - target of 60 frames per second
  // A new image is drawn at the bottom of the loop
  background(220);
  // twoCircles();
  fivecircles();
}

// function twoCircles(){
//   //draw two cicles, one at a fixed location
//   //and one at the mouse loation
//   fill(0,255,0); //green fill
//   stroke(0,0,255); //blue outline
//   strokeWeight(5); //thickness of line:5
//   circle(200,100,50);

//   noStroke(); //turns off outline
//   fill(255,0,0); //red fill
//   circle(mouseX, mouseY, 30);
//   //secret calculated delay()
//   //screen updates at end of loop
// }
function fivecircles(){
  // draw fivecircles at each corner and center
  circle(0,0,100); //top left
  circle(0,height,100); //bottom left
  circle(width,0,100); //top right
  circle(width,height,100); //bottom right
  circle(width/2,height/2,100); //center
}