interface worker {
  work(): void;
  eat(): void;
}

class HumanWorker implements worker {
  work(): void {
    console.log("Working like a human");
  }
  eat(): void {
    console.log("Eating food");
  }
}

class RobotWorker implements worker {
  work(): void {
    console.log("Working like a robot");
  }
  eat(): void {
    throw new Error("Robots do not eat"); //❌ voilation of ISP as it forces the client to implement methods that they do not use.
  }
}
//Usage
const humanWorker = new HumanWorker();
humanWorker.work(); // Output: Working like a human humanWorker
