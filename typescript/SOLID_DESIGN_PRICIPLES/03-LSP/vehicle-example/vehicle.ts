interface Refuelable {
  refuel(): void;
}

class Vehiclee {
  startEngine(): void {
    console.log("Engine started");
  }
}

class Carrr extends Vehiclee implements Refuelable {
  startEngine(): void {
    console.log("Car engine started");
  }
  refuel(): void {
    console.log("Car is refueling");
  }
}

class ElectricCarrr extends Vehiclee {
  startEngine(): void {
    console.log("Electric motor started");
  }
  // No refuel method needed, as electric cars do not refuel with gasoline
}

function start(vehicle: Vehiclee) {
  vehicle.startEngine();
}

function refuelVehicle(vehicle: Refuelable) {
  vehicle.refuel();
}

//usage
let myVehiclee = new Vehiclee();
let myCarrr = new Carrr();
let myElectricCarrr = new ElectricCarrr();
start(myVehiclee); // Output: Engine started
start(myCarrr); //LSP is maintained as Carrr can be used wherever Vehiclee is expected
start(myElectricCarrr); // Output: Electric motor started // LSP is maintained as ElectricCarrr can be used wherever Vehiclee is expected
refuelVehicle(myCarrr); // Output: Car is refueling
