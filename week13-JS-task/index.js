class Rectangle {
  constructor(length, height, breadth) {
    this.length = length;
    this.height = height;
    this.breadth = breadth;
  }

  area() {
    return this.length * this.height * this.breadth;
  }

  perimeter() {
    return 2 * (this.length + this.height + this.breadth);
  }
}

const rectangle = new Rectangle(20, 10, 15);
console.log(rectangle.area()); // 3000
console.log(rectangle.perimeter()); // 90

