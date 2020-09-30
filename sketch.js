let foods = [];
let bubbles = [];
let heart;
let smile;
let s;
let sentense = "FEED YUNYEONG!";

function preload() {
  for (let i = 0; i < 7; i++) {
    foods[i] = loadImage("chuseokFood" + (i + 1) + ".png");
  }
  smile = loadImage("smilingChipmunk-removebg.png");
  heart = loadImage("heart.png");
}

function setup() {
  // put setup code here
  createCanvas(displayWidth,displayHeight);
  for (let i = 0; i < 25; i++) {
    let x = random(displayWidth);
    let y = random(displayHeight);
    let r = random(50, 100);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
  s = new Smile();
}

function draw() {
  // put drawing code here
  background(179, 227, 252);
  textSize(100);
  textStyle(BOLD);
  stroke(252, 136, 3);
  strokeWeight(10);
  text(sentense,100,200);
  noStroke();
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }
  s.show(mouseX, mouseY);
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.food = random(foods);
  }
  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
  show() {
    image(this.food, this.x, this.y, this.r, this.r);
  }
  clicked(a, b) {
    if (a > this.x && a < this.x + this.r && b > this.y && b < this.y + this.r) {
      console.log("Yun ate chuseokFOod!");
      this.food = heart;
      s.bodysize(random(50, 300));
      sentense="HAPPY CHUSEOK!"
    }
  }
}
class Smile {
  constructor() {
    this.body = 100;
  }
  bodysize(a) {
    this.body = a;
  }
  show(a, b) {
    fill(245, 239, 66);
    noStroke();
    push();
    translate(a + 100, b + 200);
    ellipse(0, -70, 180, 180);
    ellipse(0, this.body, this.body * (3 / 2), this.body * 2);
    ellipse(0, this.body / 6, this.body * 2, this.body / 4);
    ellipse(this.body / 4, this.body * 2, this.body / 4, this.body);
    ellipse(-this.body / 4, this.body * 2, this.body / 4, this.body);
    pop();
    image(smile, a, b, 200, 200);
  }
}