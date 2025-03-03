// Warm Up Exercises:
// 1.Summing an array
// 2.Drawing with Loops Practice
// Mar.3, 2025

let a = [22,11,5,5,90,80,70,60];
//        0  1 2 3  4  5  6  7
// a.length is 8
let x =0; let y =400;

function setup() {
  createCanvas(400, 400);
  background(200);
  for(let p = 0; p<=10; p++){
    circle(x,x,20);
    circle(x,y,20);
    x = x+width*0.1;
    y = y-height*0.1;
  }
  //Task 1: add up all the values in our array and display the total in the console
  let total = 0;

  for(let currentNumber of a){
    total += currentNumber;
  }

  // for (let i = 0; i < a.length; i++){
  //   total = a[i] + total;
  //}

  print(total);
}

function draw() {
  
}
