
var waves = [];


function setup() {
  createCanvas(800, 500);
  background(232);
}

function draw() {
  background(232);
  waves.forEach(wave => {
    wave.expand();
  });
}

function mouseClicked() {
  const wave = new Wave(mouseX, mouseY);
  waves.push(wave);
}

class Wave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 0;
  }

  expand() {
    this.r += 5;
    noFill();
    ellipse(this.x, this.y, this.r, this.r);
  }


}
