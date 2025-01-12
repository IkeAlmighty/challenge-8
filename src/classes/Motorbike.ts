// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {

  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  vin: string;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.vin = vin;

    if (wheels.length != 2) {
      wheels = [new Wheel(), new Wheel()];
    }
  }

  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`)
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();

    function createWheelString(wheels: Wheel[]) {
      let wheelString: String = 'Wheels: \n';
      wheels.forEach((w: Wheel, index: Number) => {
        wheelString += `- Wheel ${index} - \nDiameter: ${w.getDiameter}, Brand: ${w.getTireBrand}\n`;
      })

      return wheelString;
    }

    console.log(`
vin: ${this.vin}
make: ${this.make}
model: ${this.model}
year: ${this.year}
weight: ${this.weight}
topSpeed: ${this.topSpeed}
color: ${this.color}
wheels: ${createWheelString(this.wheels)}
    `)
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
