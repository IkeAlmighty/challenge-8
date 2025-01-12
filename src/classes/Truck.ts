// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

//  The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;


  // Create a constructor that accepts the properties of the Truck class
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
    super();
    this.color = color;
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;

    if (wheels.length < 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    }
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make an model of the vehicle if it exists
    const make = "make" in vehicle ? vehicle.make : undefined;
    const model = "model" in vehicle ? vehicle.model : undefined;

    // Check if the vehicle's weight is less than or equal to the truck's towing capacity
    const weight = "weight" in vehicle ? vehicle.weight : undefined;

    // If it is, log that the vehicle is being towed
    if (weight && (weight < this.weight)) console.log(`The ${make} ${model} is being towed!`)
    // If it is not, log that the vehicle is too heavy to be towed
    else console.log(`The ${make} ${model} is too heavy to be towed.`)
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();

    function createWheelString(wheels: Wheel[]) {
      let wheelString: String = 'Wheels: \n';
      wheels.forEach((w: Wheel, index: number) => {
        wheelString += `- Wheel ${index + 1} - \nDiameter: ${w.getDiameter}, Brand: ${w.getTireBrand}\n`;
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
towingCapacity: ${this.towingCapacity}
wheels: ${createWheelString(this.wheels)}
    `)
  }
}

// Export the Truck class as the default export
export default Truck;
