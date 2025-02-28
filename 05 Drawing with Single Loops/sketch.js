// Drawing with Single Loops
// Mr. Scott
// Feb 24th


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //gradientBackground();
  background(220);
  circleLine();

  //screen gets updated here.
}

function circleLine(){
  //use a loop (for or while) to draw a line
  //of circles side by side.
  let d = 30; //diameter of each circle
  let y = height;
  let xStart = 0;
  let xEnd = width;

  //use a loop to do the drawing
  //RESULTS IN A SINGLE IMAGE. NO ANIMATION!!!
  for(let x = xStart; x <= xEnd; x+= d*2){
    //x: 0  40  80  120  160   200  240
    circle(x, y, d);
  }
}


function gradientBackground(){
  //create a gradient to use as background
  let h = 10;

  //use a loop to draw vertical stack of rectangles
  for(let y = 0; y < height; y += h){
    noStroke();
    let mappedY = map(y,0,height,0,255);
    let reversedY = map(y,0,height,255,0);
    fill(mappedY, reversedY, mouseX/3);
    rect(0, y, width, h);
  }

}