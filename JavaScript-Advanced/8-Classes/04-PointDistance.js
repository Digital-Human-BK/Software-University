class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    if (a instanceof Point == false || b instanceof Point == false) {
      throw new TypeError('Parameters must be of type Point');
    }
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }
}

const p1 = new Point(0,0)
const p2 = new Point(4,3)




console.log(p1,p2);
console.log(Point.distance(p2,p1));