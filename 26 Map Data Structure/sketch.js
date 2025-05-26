// Map and Text Files JS split and spread syntax
// Alyssa Maitland
// May 26 2025

let textFile;
let img;
let rows;
let cols;
let grid;
let colorMap;

function preload(){
  textFile = loadStrings("assets/info.txt")
  img = loadStrings("assets/colorImage.txt")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //proccessText();

  //determine num of rows and columns
  rows = img.length;
  cols = img[0].length;

  //create the 2d array (grid)
  grid=[];
  for(let i = 0; i<rows; i++){
    grid.push([...img[i]]);
  }

  //create a map of colors
  colorMap = new Map([
    ['b', 'black'],
    ['w', 'white'],
    ['r', 'sienna'],
    ['l', 'peru'],
    ['p', color(150,150,255)]
  ]);

  renderGrid();
}

function renderGrid(){
  //calculate rectangle sizes
  let cellWidth = width/cols
  let cellHeight = height/rows

  //visit each spot in 2D array and vizualize
  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
      let currentKey = grid[y][x];
      fill(colorMap.get(currentKey));
      rect(x*cellWidth, y*cellHeight,cellWidth,cellHeight);
    }
  }
}

function draw() {
  //background(220);
}

function proccessText(){
  //split() spread syntax
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ")
  print(splitWords)

  print("SPLIT INTO CHARACTERS")
  let splitchars = textFile[1].split("")
  print(splitchars)
  
  print("SPREAD INTO CHARACTERS")
  let spreadChars = [...textFile[2]];
  print(spreadChars);
}