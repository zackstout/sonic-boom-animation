
class Plane {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  makeWave() {
    const wave = new Wave(this.x, this.y);
    waves.push(wave);
  }

  sketch() {
    ellipse(this.x, this.y, 3, 3);
  }

  move() {
    this.x += parseFloat(val);
  }
}
