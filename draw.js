
let waves = [];
let planes = [];
let i = 0;

function setup() {
  createCanvas(800, 500);
  background(232);
}

function draw() {
  background(232);
  waves.forEach(wave => {
    wave.expand();
  });
  planes.forEach(plane => {
    if (i % 10 == 0) {
      plane.makeWave();
    }
    i++;
    plane.move();
    plane.sketch();
  });
}

function mouseClicked() {
  // const wave = new Wave(mouseX, mouseY);
  // waves.push(wave);
  const plane = new Plane(mouseX, mouseY);
  // plane.start();
  planes.push(plane);
}

class Plane {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  makeWave() {
    const wave = new Wave(this.x, this.y);
    waves.push(wave);
  }

  // start() {
  //   setInterval(this.makeWave, 300);
  // }

  sketch() {
    ellipse(this.x, this.y, 3, 3);
  }

  move() {
    this.x += 1;
  }
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
