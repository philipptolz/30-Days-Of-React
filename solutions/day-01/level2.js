const countriesArray = countries;
const webTechsArray = webTechs;

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = text.split(" ");

console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");

countriesArray.includes("Ethiopia")
  ? console.log("ETHIOPIA")
  : countriesArray.push("Ethiopia");

webTechsArray.includes("Sass")
  ? console.log("Sass is a CSS preprocess")
  : webTechsArray.push("Sass") && console.log(webTechsArray);

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
