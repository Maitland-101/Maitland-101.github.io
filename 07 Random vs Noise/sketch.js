// 07 Random vs Noise
// Alyssa Maitland
// Feb.28,2025
//extension: cs30-p5
// A look at different ways to use upredictability in our progrmas...

let mySeed;
let noiseStart = 5;
let noiseTime;
let noiseSpeed = 0.1;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  mySeed = random(1000);
  //randomNumbers();
}

function draw() {
  noisetime = noiseStart;
  randomSeed(mySeed);
  background(220);
  randomNumbers();
  noiseNumbers();
  noiseStart += noiseSpeed;
}

function noiseNumbers(){
  //display a line of several numbers generated with the noise() function 1-100
  let x = 100;
  while(x <= 500){
    let randomNum = noise(noiseTime); //0-1 (normalized)
    randomNum = map(randomNum,0,1,1,100);
    randomNum =round(randomNum);
    fill(140,220,140); noStroke();
    circle(x,400,randomNum); //y===height*0.66
    fill(0);
    text(randomNum, x, 400);
    x += 50;
    noiseTime += noiseSpeed;
  }
}

function randomNumbers(){
  //display a line of several numbers generated with the function 1-100
  // - these shouold be uniformly distributed
  let x = 100; //100, 150, 200, 250... 500
  while(x <= 500){
    let randomNum = round(random(1,100));
    fill(230,140,140); noStroke();
    circle(x,200,randomNum);
    fill(0);
    text(randomNum, x, 200); //y === height/3
    x+=50;
  }
}
