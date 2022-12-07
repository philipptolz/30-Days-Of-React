const age = prompt("Enter your age:");
const number = prompt("Enter a number:");

const myAge = 18;

if (parseInt(age) >= 18) {
  alert("You are old enough to drive.");
} else {
  const yearsLeft = 18 - parseInt(age);
  alert("You are left with " + yearsLeft + " years to drive.");
}

if (parseInt(age) === myAge) {
  alert("We are the same age.");
} else if (parseInt(age) > myAge) {
  const yearsDifference = parseInt(age) - myAge;
  alert("You are " + yearsDifference + " years older than me.");
} else {
  const yearsDifference = myAge - parseInt(age);
  alert("You are " + yearsDifference + " years younger than me.");
}

let a = 4;
let b = 3;

a > b
  ? console.log(a + " is greater than " + b)
  : console.log(a + " is not greater than " + b);

number % 2 == 0
? alert(number + " is an even number.")
: alert(number + " is an odd number.")
