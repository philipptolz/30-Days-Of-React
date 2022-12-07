const dog = {
  name: "Leo",
  legs: 4,
  color: "brown",
  age: 7,
  bark: function () {
    return "woof woof";
  },
};

const dogName = dog.name;
const dogLegs = dog.legs;
const dogColor = dog.color;
const dogAge = dog.age;
const dogBark = dog.bark();

(dog.breed = "Dalmatian"),
  (dog.getDogInfo = function () {
    const dogName = dog.name;
    const dogLegs = dog.legs;
    const dogColor = dog.color;
    const dogAge = dog.age;
    const dogBark = dog.bark();
    const dogBreed = dog.breed;

    return dogName + " is a " + dogBreed + ". He has " + dog.legs + " legs , is " + dogColor + " and " + dogAge + " years old. " + dogName + ": " + dogBark;
  });

console.log(dog.getDogInfo());
