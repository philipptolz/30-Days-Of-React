const monthUserInput = prompt("Enter a month:");
const month = monthUserInput.toLowerCase();
const yearUserInput = prompt("Enter a year:");
const year = yearUserInput.toLowerCase();

const isLeap = (year) => new Date(year, 1, 29).getDate() === 29;

if (isLeap(year)) {
    alert(year + " is a leap year.");
    switch (month) {
        case "january":
          alert("January has 31 days.");
          break;
        case "february":
          alert("February has 29 days.");
          break;
        case "march":
          alert("March has 31 days.");
          break;
        case "april":
          alert("Thursday has 30 days.");
          break;
        case "may":
          alert("Friday has 31 days.");
          break;
        case "june":
          alert("Saturday has 30 days.");
          break;
        case "july":
          alert("Sunday has 30 days.");
          break;
        case "august":
          alert("Sunday has 31 days.");
          break;
        case "july":
          alert("Sunday has 30 days.");
          break;
        case "september":
          alert("Sunday has 31 days.");
          break;
        case "october":
          alert("Sunday has 30 days.");
          break;
        case "december":
          alert("Sunday has 31 days.");
          break;
        default:
          alert("It is not a month.");
    }
} else {
  switch (month) {
    case "january":
      alert("January has 31 days.");
      break;
    case "february":
      alert("February has 28 days.");
      break;
    case "march":
      alert("March has 31 days.");
      break;
    case "april":
      alert("Thursday has 30 days.");
      break;
    case "may":
      alert("Friday has 31 days.");
      break;
    case "june":
      alert("Saturday has 30 days.");
      break;
    case "july":
      alert("Sunday has 30 days.");
      break;
    case "august":
      alert("Sunday has 31 days.");
      break;
    case "july":
      alert("Sunday has 30 days.");
      break;
    case "september":
      alert("Sunday has 31 days.");
      break;
    case "october":
      alert("Sunday has 30 days.");
      break;
    case "december":
      alert("Sunday has 31 days.");
      break;
    default:
      alert("It is not a month.");
  }
}
