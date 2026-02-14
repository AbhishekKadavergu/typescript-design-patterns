interface SwitchableDevice {
  turnOn(): void;
  turnOff(): void;
}

class Bulb implements SwitchableDevice {
  turnOn() {
    console.log("Bulb is turned on");
  }
  turnOff() {
    console.log("Bulb is turned off");
  }
}

class Fan implements SwitchableDevice {
  turnOn() {
    console.log("Fan is turned on");
  }
  turnOff() {
    console.log("Fan is turned off");
  }
}

class Switch {
  private isOn: boolean = false;
  constructor(private device: SwitchableDevice) {}

  operate() {
    if (this.isOn) {
      this.device.turnOff();
    } else {
      this.device.turnOn();
    }
    this.isOn = !this.isOn;
  }
}
//Usage
const bulb = new Bulb();
const switchForBulb = new Switch(bulb);
switchForBulb.operate(); // Output: Bulb is turned on
switchForBulb.operate(); // Output: Bulb is turned off
const fan = new Fan();
const switchForFan = new Switch(fan);
switchForFan.operate(); // Output: Fan is turned on
switchForFan.operate(); // Output: Fan is turned off
