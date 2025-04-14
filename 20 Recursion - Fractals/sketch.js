// Fractals Demo
// Alyssa Maitland
// Apr.14, 2025
// Cantor Set, CircleFractal, RectangleFractal



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //reCircle(width/2,height/2,width);
  //cantor(width*0.1, height*0.3, width*0.8, 9);
  circleFractal(width/2, height/2, height*.75)
}

function reCircle(x,y,d){
  //recursively draw circles as long as diameter > 5
  circle(x,y,d);
  if(d >= 10){ //recursive call
    reCircle(x,y,d*0.9)
  }
  //implicit base case(if d<10)
}

function cantor(x,y,len,depth){
  if(depth>1){
    line(x,y, x+len,y);
    y += 20;
    cantor(x,y,len/3,depth-1); // left third
    cantor(x+len*2/3,y,len/3,depth-1); // right third
  }
  //else, base case
}

function circleFractal(x,y,d){
  noFill();
  if(d>1){
    circle(x,y,d);
    //recursice call
    circleFractal(x-d/2,y,d/2); //recursive circle to the left
    circleFractal(x+d/2,y,d/2); //recursive circle to the right
    circleFractal(x,y-d/2,d/2); //recursive circle to the top
    //circleFractal(x,y+d/2,d/2); //recursive circle to the bottom
  }

}