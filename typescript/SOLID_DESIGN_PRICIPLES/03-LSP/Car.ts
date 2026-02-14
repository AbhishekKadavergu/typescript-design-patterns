class Car {
  startEngine(): void {
    console.log("Engine started");
  }

  drive(): void {
    console.log("Car is driving");
  }
}

class ElectricCar extends Car {
  startEngine(): void {
    console.log("Electric motor started");
  }
}

function testDrive(car: Car) {
  car.startEngine();
  car.drive();
}

let myCar = new Car();
let myElectricCar = new ElectricCar();

testDrive(myCar); // Output: Engine started, Car is driving
testDrive(myElectricCar); // Output: Electric motor started, Car is driving
