// Interactive Scene
// Alyssa Maitland
// Feb.11, 2025

let x = 300;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  y = height*5/6;
}

function draw() {
  background(220);
  scene();
  character();
  fill("green");
  rect(width*0.8,height*0.9,width);
  invert();
  move();
}

function scene(){
  // makes the stagnant objetcs in the scene
  fill("grey");
  rect(width*5/6,0,width,height);
  rect(0,0,width/6,height);
  quad(x+100,y-100,x+150,y-150,x+200,y-100,x+150,y-50);
}

function character(){
  // makes the shapes for the character
  noStroke();
  fill("black");
  ellipse(x+25,y+25,100,60);
  triangle(x-10,y+5,x,y-10,x+10,y);
  triangle(x+40,y,x+50,y-10,x+60,y+5);
  stroke("yellow");
  circle(x+10,y+20,10);
  circle(x+40,y+20,10);
  stroke(40,40,40);
  ellipse(x+25,y+30,8,5);
  line(x,y+20,x-10,y+15);
  line(x,y+25,x-12,y+25);
  line(x,y+30,x-10,y+35);
  line(x+60,y+15,x+50,y+20);
  line(x+62,y+25,x+50,y+25);
  line(x+60,y+35,x+50,y+30);
  stroke(0,0,0);
}

function invert(){
  // if the mouse is on the box in the corner the colour of the cat is inverted
  if(mouseX > width*0.8 && mouseY>height*0.9){
    noStroke();
    fill("white");
    ellipse(x+25,y+25,100,60);
    triangle(x-10,y+5,x,y-10,x+10,y);
    triangle(x+40,y,x+50,y-10,x+60,y+5);
    stroke("purple");
    circle(x+10,y+20,10);
    circle(x+40,y+20,10);
    stroke(215,215,215);
    ellipse(x+25,y+30,8,5);
    line(x,y+20,x-10,y+15);
    line(x,y+25,x-12,y+25);
    line(x,y+30,x-10,y+35);
    line(x+60,y+15,x+50,y+20);
    line(x+62,y+25,x+50,y+25);
    line(x+60,y+35,x+50,y+30);
    stroke(0,0,0);
  }
}

function move(){
  // allows charcter to move when an arrow key is pressed
  if (keyIsDown(LEFT_ARROW)){
    x = x-5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    x = x+5;
  }
  if (keyIsDown(UP_ARROW)){
    y = y-5;
  }  
  if (keyIsDown(DOWN_ARROW)){
    y = y+5;
  }
}