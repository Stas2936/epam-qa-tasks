class Animal {
  constructor(move) {
      this.move = move;
      console.log(this.move)
  }
}

class Cat extends Animal {
 }
let cat = new Cat('run');
cat.move