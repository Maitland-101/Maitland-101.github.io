// Create a Fractal
// Alyssa Maitland
// Apr.2, 2025
// create a triangle with with triangles inside that half their size and move to each corner generated recursivly

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  randomSeed(1);
  triangleFractal(250,250,250);
}

function triangleFractal(x1,y1,triWidth){
  noStroke();
  fill(random(255),random(255),random(255),random(200));
  triangle(x1-triWidth,y1+triWidth,x1,y1-triWidth,x1+triWidth,y1+triWidth);
  
  if(triWidth>10){
    triangleFractal(x1-triWidth/2,y1+triWidth/2,triWidth/2); //bottom left
    triangleFractal(x1+triWidth/2,y1+triWidth/2,triWidth/2); //bottom right
    triangleFractal(x1,y1-triWidth/2,triWidth/2); //top
  }
  //base case: if triWidth is <11 then do nothing
}