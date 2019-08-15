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

// console.log(Bicycle.parade());


// Iterating through object in Javascript

let validation_message = {
  'key_1': {
    'you_name': 'jimmy',
    'you_msg': 'hello'
  },
  'key_2': {
    'you_name': 'billy',
    'you_msg': 'foo bar'
  }
}

for (let key in validation_message) {
  let obj = validation_message[key];
  for (let prop in obj) {
    console.log(prop + " " + obj[prop]);
  }
}

// for (let key in validation_message) {
//   let obj = validation_message[key];
//   for (let prop in obj) {
//     console.log(prop + obj[prop])
//   }
// }

// Object.keys(validation_message).forEach( key => console.log(key, validation_message[key]));