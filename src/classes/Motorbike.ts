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
    console.log(`
       VIN: ${this.vin} \n
       make: ${this.make} \n
       model: ${this.model} \n
       year: ${this.year} \n
       weight: ${this.weight} \n
       top speed: ${this.topSpeed} \n
       color: ${this.color} \n
       wheels: ${this.wheels}
    `)
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
