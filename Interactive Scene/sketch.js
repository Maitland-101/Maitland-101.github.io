// Interactive Scene
// Alyssa Maitland
// Feb.11, 2025

let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height*5/6;
}

function draw() {
  background(220);
  alley();
  character();
  window();
  fill("green");
  rect(width*0.8,height*0.9,width);
  invert();
  move();
}

function swindow(){
  // makes the stagnant objetcs in the scene
  fill("lightgrey");
  noStroke();
  quad(0,y+80,width,y+80,width,height,0,y+200);
  quad(0,0,width,0,width,80,0,80);
  quad(0,0,80,0,80,height,0,height);
  quad(width,0,width-80,0,width-80,height,width,height);
  stroke();
}

function alley(){
  fill("grey");
  rect(width*5/6,0,width,height);
  rect(0,0,width/6,height);
  rect(x+147.5,y-80,5,100);
  rect(x-102.5,y-80,5,100);
  fill("black");
  quad(x-50,y-100,x-100,y-150,x-150,y-100,x-100,y-50);
  fill("yellow");
  quad(x-60,y-100,x-100,y-140,x-140,y-100,x-100,y-60);
  fill("red");
  triangle(x+100,y-100,x+200,y-100,x+150,y-50);
  fill("white");
  triangle(x+115,y-95,x+185,y-95,x+150,y-60);
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