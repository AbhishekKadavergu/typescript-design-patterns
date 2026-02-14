class Vehicle {
  startEngine(): void {
    console.log("Engine started");
  }

  refuel(): void {
    console.log("Vehicle is refueling");
  }
}

class Carr extends Vehicle {
  startEngine(): void {
    console.log("Car engine started");
  }
}

class ElectricCarr extends Vehicle {
  startEngine(): void {
    console.log("Electric motor started");
  }

  // This method violates LSP because electric cars do not refuel with gasoline
  refuel(): void {
    throw new Error("Electric cars do not refuel with petrol/desel/gas");
    //❌ voilation of LSP as it forces the client to implement methods that they do not use.
  }
}

function serviceVehicle(vehicle: Vehicle) {
  vehicle.startEngine();
  vehicle.refuel();
}

//usage
let myVehicle = new Vehicle();
let myCarr = new Carr();
let myElectricCarr = new ElectricCarr();

serviceVehicle(myVehicle); // Output: Engine started, Vehicle is refueling
serviceVehicle(myCarr); // Output: Car engine started, Vehicle is refueling
serviceVehicle(myElectricCarr); // Output: Electric motor started, Throws error: Electric cars do not refuel with gasoline
