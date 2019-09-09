class Particle {
  constructor() {
    this.pos = createVector();
    this.pos.x = width / 2;
    this.pos.y = height / 2;
    this.rays = [];
    for (let a = 0; a < 360; a += 1) {
      const newRay = new Ray(this.pos, radians(a));
      this.rays.push(newRay);
    }
  }

  move(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  look(walls) {
    for (let ray of this.rays) {
      let closest = null;
      let record = Infinity;

      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const dist = p5.Vector.dist(this.pos, pt);
          if (dist < record) {
            record = dist;
            closest = pt;
          }
        }
      }
      if (closest) {
        stroke(255, 100);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  draw() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 4);
    for (let ray of this.rays) {
      ray.draw();
    }
  }
}
