function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function addNumbers(number1, number2) {
  return number1 + number2;
}

function areaOfCircle(radius) {
  const PI = Math.PI;
  return PI * radius * radius;
}

function convertCelciusToFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
}

function bmi(weight, height) {
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "You are underweight.";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Your weight is normal.";
  } else if (bmi >= 25 && bmi < 30) {
    return "You are overweight.";
  } else if (bmi >= 30) {
    return "You are obese.";
  }
}

function checkSeason(month) {
  switch (month) {
    case "january":
      return("Winter");
      break;
    case "february":
        return("Winter");
      break;
    case "march":
        return("Spring");
      break;
    case "april":
      return("Spring");
      break;
    case "may":
      return("Spring");
      break;
    case "june":
      return("Summer");
      break;
    case "july":
      return("Summer");
      break;
    case "august":
      return("Summer");
      break;
    case "july":
      return("Autumn");
      break;
    case "september":
      return("Autumn");
      break;
    case "october":
      return("Autumn");
      break;
    case "december":
      return("Winter");
      break;
    default:
      return("It is not a month.");
  }
}
