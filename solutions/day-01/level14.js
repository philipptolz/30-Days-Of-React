class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getColor() {
    return this.color;
  }
  get getLegs() {
    return this.legs;
  }
  set setName(name) {
    this.name = name;
    return this.name;
  }
  set setAge(age) {
    this.age = age;
    return this.age;
  }
  set setColor(color) {
    this.color = color;
    return this.color;
  }
  set setLegs(legs) {
    this.legs = legs;
    return this.legs;
  }
}

class Cat extends Animal {
  getCatInfo() {
    return (
      this.name +
      " is " +
      this.age +
      " years old and a cat. Also he is " +
      this.color +
      " and has " +
      this.legs +
      " legs."
    );
  }
}

class Dog extends Animal {
  getDogInfo() {
    return (
      this.name +
      " is " +
      this.age +
      " years old and a dog. Also he is " +
      this.color +
      " and has " +
      this.legs +
      " legs."
    );
  }
}

const newAnimal = new Dog("Dog", "12", "black", "3");

console.log(newAnimal.getDogInfo());
