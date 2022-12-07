const score = prompt("Enter a students score:");
const season = prompt("Enter a month:");
const dayUserInput = prompt("Enter a day:");
const day = dayUserInput.toLowerCase();

if (score <= 100 && score >= 80) {
  alert("The students grade is A");
} else if (score <= 89 && score >= 70) {
  alert("The students grade is B");
} else if (score <= 69 && score >= 60) {
  alert("The students grade is C");
} else if (score <= 59 && score >= 50) {
  alert("The students grade is D");
} else if (score <= 49 && score >= 0) {
  alert("The students grade is F");
} else {
  alert("Please enter a valid score.");
}

if (season === "September" || season === "October" || season === "November") {
  alert("The season is Autumn.");
} else if (
  season === "December" ||
  season === "January" ||
  season === "February"
) {
  alert("The season is Winter.");
} else if (season === "March" || season === "April" || season === "May") {
  alert("The season is Spring.");
} else if (season === "June" || season === "July" || season === "August") {
  alert("The season is summer.");
} else {
  alert("Invalid month.");
}

switch (day) {
  case "monday":
    alert("Monday is a working day.");
    break;
  case "tuesday":
    alert("Tuesday is a working day.");
    break;
  case "wednesday":
    alert("Wednesday is a working day.");
    break;
  case "thursday":
    alert("Thursday is a working day.");
    break;
  case "friday":
    alert("Friday is a working day.");
    break;
  case "saturday":
    alert("Saturday is a weekend.");
    break;
  case "sunday":
    alert("Sunday is a weekend.");
    break;
  default:
    alert("It is not a week day.");
}
