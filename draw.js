
let waves = [];
let planes = [];
let i = 0;
let val = 0;

function setup() {
  createCanvas(800, 500);
  background(232);
  let slider = document.getElementById('myRange');
  let value = slider.value;

  // Grab user's input:
  slider.oninput = function() {
    console.log(slider.value);
    val = slider.value;
  };
}

function draw() {
  background(232);
  waves.forEach(wave => {
    wave.expand();
  });
  planes.forEach(plane => {
    // Only do this once every 20 frames:
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
    const plane = new Plane(mouseX, mouseY);
    planes.push(plane);
  }
}
