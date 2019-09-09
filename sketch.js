let walls = [];
let particle;
let xoff = 0;
let yoff = 100000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; i++) {
    const x1 = random(width);
    const y1 = random(height);
    const x2 = random(width);
    const y2 = random(height);
    walls.push(new Boundary(x1, y1, x2, y2));
  }
  walls.push(new Boundary(0, 0, width, 0));
  walls.push(new Boundary(0, height, width, height));
  walls.push(new Boundary(0, 0, 0, height));
  walls.push(new Boundary(width, 0, width, height));

  particle = new Particle();
}

function draw() {
  background(0);
  for (let wall of walls) {
    wall.draw();
  }
  particle.move(noise(xoff) * width, noise(yoff) * height);
  particle.draw();
  particle.look(walls);

  xoff += 0.01;
  yoff += 0.01;
}
