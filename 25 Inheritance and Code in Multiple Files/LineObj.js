//child class #2  - Line
class LineObj extends AnimatedObject{
    constructor(){
      super(random(width), random(height));
    }
  
    move(){
      //combo override + build on parent class version
      super.move(); //begins by running parent class move()
      this.x -= 5;
      if(this.x < 0){
        this.x = width;
      }
    }
  
    display(){
      //full overide
      if(mouseIsPressed){
        strokeWeight(12);
      }
      else{
        strokeWeight(2);
      }
      line(this.x, this.y, this.x+15, this.y);
    }
  }