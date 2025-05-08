// Puzzle Game
// Alyssa Maitland
// Apr.2, 2025
// Make a puzzle that can be solved by clicking the mouse button

//0 255
let grid =[[0, 0, 255, 255, 0],[255, 255, 0, 255, 0],[0, 0, 0, 255, 0]];
let squareSize = 60;
const NUM_ROWS = 3; 
const NUM_COLS = 5;
let sumOfColor;
let space = 0;

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
  randomizedBoard();
}

function renderGrid() {
  // interpret the information in the 2D array, and draw
  // a grid of colors on the screen to reflect it.
  for (let y = 0; y < NUM_ROWS; y++) {
    //cycle through columns
    for (let x = 0; x < NUM_COLS; x++) {
      //cycle through rows
      let fillColor = grid[y][x];
      sumOfColor =+ fillColor;
      fill(fillColor);
      square(x * squareSize, y * squareSize, squareSize);
    }
  }
}

function winCondition(){
  //when the grid is one color show you win text
  for (let y = 0; y < NUM_ROWS; y++) {
    //cycle through columns
    for (let x = 0; x < NUM_COLS; x++) {
      //cycle through rows
      sumOfColor += grid[y][x];
    }
  }
  fill(255,0,0);
  textSize(75);
  if(sumOfColor/15 === 0 || sumOfColor/15 === 272){
    //when the grid is all the same colour display you win!
    text('you win!', 15,100);
  }
}

function randomizedBoard(){
  //makes the board a random pattern to start
  for (let y = 0; y < NUM_ROWS; y++) {
    //cycle through columns
    for (let x = 0; x < NUM_COLS; x++) {
      //cycle through rows
      let ranColor = floor(random(2));
      if(ranColor === 1){
        //if the the ranColour returns a 1 then colour that square white
        fill(255)
        grid[y][x] = 255;
        square(x * squareSize, y * squareSize, squareSize);
      }
      else{
        //if the the ranColour returns something other than 1 then colour that square black
        fill(0);
        grid[y][x] = 0;
        square(x * squareSize, y * squareSize, squareSize);
      }
    }
  }
}

function getCurrentY() {
  //determine current row of the mouse position
  let constrainedY = constrain(mouseY, 0, height - 1);
  return floor(constrainedY / squareSize);
}

function getCurrentX() {
  //determine current col of the mouse position
  let constrainedX = constrain(mouseX, 0, width - 1);
  return floor(constrainedX / squareSize);
}

function mousePressed() {
  //flip current tile to a random greyscale value
  //only do something if mouseX/mouseY are on canvas
  let x = getCurrentX();
  let y = getCurrentY();
  //always: flip 'current' tile
  flip(x,y);

  //sometimes: (depending on position) flip the neightbours
  if(keyIsDown(ALT) === false && space === 0){
    // when space is 0 flip as a plus
    if(y > 0){
      flip(x, y-1) //North
    }
    if(y < NUM_ROWS-1){
     flip(x, y+1) //South
    }
    if(x > 0){
      flip(x-1, y) //West
    }
    if(x < NUM_COLS-1){
      flip(x+1, y) //East
    }
  }
  if(keyIsDown(ALT) === false && space === 1){
    // when space is 1 flip as a square
    if(y < NUM_ROWS-1){
     flip(x, y+1) //South
    }
    if(x > 0){
      flip(x-1, y) //West
    }
    if(x < NUM_COLS){
      flip(x-1, y+1) //Southwest
    }
  }
}

function flip(x,y){
  //take a tile and invert its value
  if(grid[y][x] === 0){
    //if the tile is black turn white
    grid[y][x] = 255;
  }
  else{
    //if the tile is white turn black
    grid[y][x] = 0;
  }
}

function overlay(){
  //make an overlay of the tile that will be turned
  let x = getCurrentX();
  let y = getCurrentY();

  fill(0,255,0,100); //transparent green
  if(space === 0){
    //overlay for the plus
    square(x * squareSize, y * squareSize, squareSize); //center
    square((x-1)*squareSize, y * squareSize, squareSize); //west
    square((x+1)*squareSize, y * squareSize, squareSize); //east
    square(x * squareSize, (y-1) * squareSize, squareSize); //south
    square(x * squareSize, (y+1) * squareSize, squareSize); //north
  }
  if(space === 1){
    //overlay for the square
    square(x * squareSize, y * squareSize, squareSize); //center
    square((x-1)*squareSize, y * squareSize, squareSize); //west
    square(x * squareSize, (y+1) * squareSize, squareSize); //south
    square((x-1) * squareSize, (y+1) * squareSize, squareSize); //southwest
  }
}

function draw() {
  renderGrid();
  winCondition();
  overlay();
}

function keyReleased() {
  //called when key is pressed
  if(key === ' ' && space === 0){
    //when the spacebar is pressed and space is 0 switch to the 1
    space = 1; 
  }
  else if(key === ' ' && space === 1){
    //when the spacebar is pressed and space is 1 switch to the 0
    space = 0;
  } 
} 