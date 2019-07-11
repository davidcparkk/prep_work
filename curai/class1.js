class Bicycle {
  constructor(model, color){
    this.model = model;
    this.color = color;
  }

  action() {
    return 'rolls along';
  }

  ride() {
    console.log(`The ${this.color} ${this.model} goes woosh and ${this.action()}`);
  }

  static parade() {
    Bicycle.funBicycles.forEach(bike => bike.ride());
  }
  
}

const cruiser = new Bicycle("dog","cat");
const salsa = new Bicycle("tango", "flamenco");

Bicycle.funBicycles = [cruiser, salsa];

console.log(Bicycle.parade());