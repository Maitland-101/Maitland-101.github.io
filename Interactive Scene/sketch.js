// Interactive Scene
// Alyssa Maitland
// Feb.11, 2025

// x,y for background
let x;
let y;
// x,y for cat
let catX;
let catY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height*5/6;
  catX = width/2;
  catY = height*5/6;
}

function draw() {
  background(220);
  alley();
  character();
  invert();
  swindow();
  fill("green");
  rect(width*0.8,height*0.9,width);
  move();
  text('Alyssa.M', 10, height-10);
}


function swindow(){
  // makes the stagnant objetcs in the scene
  fill("lightgrey");
  noStroke();
  quad(0,y+80,width,y+80,width,height,0,y+200);
  quad(0,0,width,0,width,80,0,80);
  quad(0,0,80,0,80,height,0,height);
  quad(width,0,width-80,0,width-80,height,width,height);
}

function alley(){
  fill("grey");
  rect(width*5/6,0,width,height);
  rect(0,0,width/6,height);
  fill("darkgrey");
  rect(0,y+20,width);
  fill("grey");
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
  ellipse(catX+25,catY+25,100,60);
  triangle(catX-10,catY+5,catX,catY-10,catX+10,catY);
  triangle(catX+40,catY,catX+50,catY-10,catX+60,catY+5);
  stroke("yellow");
  circle(catX+10,catY+20,10);
  circle(catX+40,catY+20,10);
  stroke(40,40,40);
  ellipse(catX+25,catY+30,8,5);
  line(catX,catY+20,catX-10,catY+15);
  line(catX,catY+25,catX-12,catY+25);
  line(catX,catY+30,catX-10,catY+35);
  line(catX+60,catY+15,catX+50,catY+20);
  line(catX+62,catY+25,catX+50,catY+25);
  line(catX+60,catY+35,catX+50,catY+30);
  stroke(0,0,0);
}

function invert(){
  // if the mouse is on the box in the corner the colour of the cat is inverted
  if(mouseX > width*0.8 && mouseY>height*0.9){
    noStroke();
    fill("white");
    ellipse(catX+25,catY+25,100,60);
    triangle(catX-10,catY+5,catX,catY-10,catX+10,catY);
    triangle(catX+40,catY,catX+50,catY-10,catX+60,catY+5);
    stroke("purple");
    circle(catX+10,catY+20,10);
    circle(catX+40,catY+20,10);
    stroke(215,215,215);
    ellipse(catX+25,catY+30,8,5);
    line(catX,catY+20,catX-10,catY+15);
    line(catX,catY+25,catX-12,catY+25);
    line(catX,catY+30,catX-10,catY+35);
    line(catX+60,catY+15,catX+50,catY+20);
    line(catX+62,catY+25,catX+50,catY+25);
    line(catX+60,catY+35,catX+50,catY+30);
    stroke(0,0,0);
  }
}

function move(){
  // allows charcter to move when an arrow key is pressed
  if (keyIsDown(LEFT_ARROW)){
    catX = catX-5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    catX = catX+5;
  }
  if (keyIsDown(UP_ARROW)){
    catY = catY-5;
  }  
  if (keyIsDown(DOWN_ARROW)){
    catY = catY+5;
  }
}