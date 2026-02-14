class Bulbb {
  turnOn() {
    console.log("Bulb is turned on");
  }
  turnOff() {
    console.log("Bulb is turned off");
  }
}

class Switchh {
  private isOn: boolean = false;
  constructor(private bulb: Bulbb) {}

  operate() {
    /*     DIP Violation: The Switch class is directly dependent on the Bulb class, 
which makes it difficult to change the implementation of the bulb without modifying the Switch class.    
 */ if (this.isOn) {
      this.bulb.turnOff();
    } else {
      this.bulb.turnOn();
    }
    this.isOn = !this.isOn;
  }
}

//usage
const bulbb = new Bulbb();
const switchForBulbb = new Switchh(bulbb);
switchForBulbb.operate();
switchForBulbb.operate();
