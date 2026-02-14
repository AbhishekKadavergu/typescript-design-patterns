interface workable {
  work(): void;
}
interface eatable {
  eat(): void;
}

class HumannWorker implements workable, eatable {
  work(): void {
    console.log("Working like a human");
  }
  eat(): void {
    console.log("Eating food");
  }
}

class RobottWorker implements workable {
  work(): void {
    console.log("Working like a robot");
  }
}
//Usage
const humannWorker = new HumannWorker();
humannWorker.work(); // Output: Working like a human humanWorker
humannWorker.eat(); // Output: Eating food
const robotWorker = new RobottWorker();
robotWorker.work(); // Output: Working like a robot robotWorker
