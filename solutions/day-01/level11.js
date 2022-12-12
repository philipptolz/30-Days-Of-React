function solveQuadEquation(param1, param2) {}

function printArray(arr) {
  arr.forEach((element) => {
    console.log(element);
  });
}

function showDateTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  return `${date}/${month}/${year} ${hours}:${minutes}`;
}

function swapValues(x, y) {
  return "x = " + y, "y = " + x;
}

function reversArray(arr) {
  return arr.reverse;
}

function anyNumberOfArguments() {
  return arguments.length;
}

function userIdGenerator() {
  return Math.random().toString(36).slice(2, 8);
}
