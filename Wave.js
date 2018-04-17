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
