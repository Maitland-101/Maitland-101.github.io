// User Events
// Alyssa MAitland
// Feb. 7, 2025

// Global Variable Declarations
// Define your globals here.
// You can only store simple/primative data
// at this point. (no system variables)
let tSize = 10;
let x; //declaration only

function setup() {
  //runs once, right at the start
  createCanvas(windowWidth, windowHeight);
  x = width/2; //initialization, do in setup()
  rectMode(CENTER);
}

function draw() {
  //runs over and over, targetting 60 fps
  background(220);
  // print("Current Frame: " + frameCount); //console.log()

  //----- Mouse Section -----
  fill("green"); //fill/stroke can use colour strings
  textSize(tSize);
  text(mouseX + ", " + mouseY + " " + mouseButton, mouseX, mouseY);

  //-------Keyboard Section-------
  fill(255,200,100);
  square(x, 200, 50, 5);

  if(keyIsDown(LEFT_ARROW)){
    x = x - 5;
    if(x < 0){ //off left edge
      x = width; //(create a wrap aroung effect)
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    x = x + 5;
    if(x > width){ //off right edge
      x = 0; //(create a wrap aroung effect)
    }
  }
}

function mousePressed(){
  //this is called automatically... do NOT call it yourself.
  //This is called ONCE PER OUSE BUTTON PRESS
  tSize = random(5,100);
}