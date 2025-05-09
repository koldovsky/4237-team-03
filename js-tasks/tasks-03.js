//www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

//www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
  const arr = [];
  for (var key in obj) {
    if (key.length == 5) arr.push(key);
    if (obj[key].length == 5) arr.push(obj[key]);
  }
  return arr;
}

//www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
  var res = [];

  for (var i = 0; i < n; i++) {
    const saved = i;
    res.push(function () {
      console.log(saved);
      return saved;
    });
  }
  return res;
}

//www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
