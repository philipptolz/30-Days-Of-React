function userIdGeneratorByUser() {
  const characters = prompt("Please enter the number of characters:");
  const formattedCharacters = JSON.parse(characters) + 2;
  const numberOfIds = prompt("Please enter the number of ID's:");

  for (let i = 0; i < numberOfIds; i++) {
    console.log(Math.random().toString(36).slice(2, formattedCharacters));
  }
}

function generateColors(type, amount) {}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}

function isEmpty(param) {
  if (param == null) return true;
  else return false;
}

function average(arr) {
  if (!arr.some(isNaN)) {
    let sum = 0;
    arr.forEach(element => {
      sum = sum + element;
    });

    return sum / arr.length;
  } else {
    return "Array can only contain numbers!"
  }
}