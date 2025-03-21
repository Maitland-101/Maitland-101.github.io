// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage; 
let bulletImage;
let bullets = [];

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.shipX = x;
    this.shipY = y;
    this.picture = theImage;
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here
    if(keyIsDown(RIGHT_ARROW) === true){
      this.shipX += 5;
    }
    else if(keyIsDown(LEFT_ARROW) === true){
      this.shipX -= 5;
    }
    else if(keyIsDown(DOWN_ARROW) === true){
      this.shipY += 5;
    }
    else if(keyIsDown(UP_ARROW) === true){
      this.shipY -= 5;
    }
    // if doing extra for experts, show bullet(s)
  }

  display() {
    // show the ship
    image(this.picture, this.shipX, this.shipY);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    if(keyIsDown(keyCode === 32)){
      bullets.push(new Bullet(this.shipX, this.shipY, -2, bulletImage))
    }  
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dy, theImage) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.bulletIMG = theImage; 
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.dy += -5; 
  }

  display() {
    // show the bullet
    image(this.bulletIMG, this.x, this.dy);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
  }
}

