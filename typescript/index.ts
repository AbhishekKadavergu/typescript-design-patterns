import { move } from "./never";

interface Shape {
  calculateArea(): number;
  calculatePerimeter(): number;
}

class Circle implements Shape {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.calculateArea();
}

let circle: Circle = new Circle(5);
console.log(calculateTotalArea(circle));
// move("LEFT");
