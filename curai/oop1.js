function Kitty(name, age) {
  this.name = name;
  this.age = age;

  this.meow = function() {
    console.log(this.name + ' meow');
  };
}

let kitty = new Kitty('Whiskers', 5);

// console.log(kitty.meow());

function Kitty2(name, age) {
  this.name = name;
  this.age = age;

 
}

// set instance methods to prototype
Kitty2.prototype.meow = function() {
  console.log(this.name + ' meow');
};

let k1 = new Kitty2('john', 5);
let k2 = new Kitty2('jeff', 2);

// console.log(k1.meow());
// console.log(k2.meow());

// Class methods, define attirubte on the consturctor itself


Kitty2.caboodle = [k1, k2, new Cat('Flying merk', 3)];

Kitty2.parade = function() {
  Kitty2.caboodle.forEach ( kitten => {
    kitten.meow();
  });
};

console.log(Kitten.parade());