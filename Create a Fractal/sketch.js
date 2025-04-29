// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  triangleFractal(width/2,height/2,250);
}

function triangleFractal(x1,y1,triWidth){
  triWidth = triWidth/2;
  triangle(x1-triWidth,y1+triWidth,x1,y1-triWidth,x1+triWidth,y1+triWidth);
  if(triWidth>0){
    triangleFractal(x1-triWidth/2,y1+triWidth/2,x1,y1-triWidth/2,x1+triWidth/2,y1+triWidth/2);
    triangleFractal(x1+triWidth*2,y1+triWidth*2,x1,y1-triWidth*2,x1-triWidth*2,y1+triWidth*2);
  }
}