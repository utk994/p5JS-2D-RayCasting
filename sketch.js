let walls = [];
let particle;

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

  particle.draw();
  particle.move(mouseX, mouseY);
  particle.look(walls);
}
