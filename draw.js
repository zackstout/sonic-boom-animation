
let waves = [];
let planes = [];
let i = 0;
let val = 0;

function setup() {
  createCanvas(800, 500);
  background(232);
  let slider = document.getElementById('myRange');
  let value = slider.value;
  slider.oninput = function() {
    console.log(slider.value);
    val = slider.value;
  };
  console.log(slider);
}

function draw() {
  background(232);
  waves.forEach(wave => {
    wave.expand();
  });
  planes.forEach(plane => {
    if (i % 20 == 0) {
      plane.makeWave();
    }
    i++;
    plane.move();
    plane.sketch();
  });
}

function mouseClicked() {
  if (mouseY > 0) {
    // const wave = new Wave(mouseX, mouseY);
    // waves.push(wave);
    const plane = new Plane(mouseX, mouseY);
    // plane.start();
    planes.push(plane);
  }
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
    // console.log(val);
    // console.log(parseFloat(val));
    this.x += parseFloat(val);
  }
}

class Wave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 0;
    // console.log(val);
  }

  expand() {
    this.r += 5;
    noFill();
    ellipse(this.x, this.y, this.r, this.r);
  }


}
