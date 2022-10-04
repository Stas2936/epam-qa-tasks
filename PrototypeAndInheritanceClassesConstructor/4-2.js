class Animal {
  constructor(move) {
    this.move = move;
  }
}

class Cat extends Animal {
  constructor(move) {
    super(move);
  }
}
let cat = new Cat("run");
console.log(cat.move);
