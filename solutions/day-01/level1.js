const emptyArray = [];
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "NodeJS",
  "MongoDB",
];

const webTechs_length = webTechs.length;
const webTechs_firstItem = webTechs[0];
const webTechs_middleItem = webTechs[webTechs.length / 2];
const webTechs_lastItem = webTechs[webTechs.length - 1];

const mixedDataType = [
  12.3,
  10,
  true,
  "String",
  {
    username: "peter",
    password: "123",
  },
];

const mixedDataType_length = mixedDataType.length;

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log("IT companies:", itCompanies);
console.log("Number of IT companies:", itCompanies.length);
console.log("First IT company:", itCompanies[0]);
console.log("Middle IT company:", itCompanies[(itCompanies.length - 1) / 2]);
console.log("Last IT company:", itCompanies[itCompanies.length - 1]);

itCompanies.forEach((company) => {
  console.log("IT company:", company);
});

itCompanies.forEach((company) => {
  console.log("IT company UPPERCASE:", company.toUpperCase());
});

console.log(
  itCompanies.slice(0, 6).join(", ") +
    " and " +
    itCompanies[6] +
    " are big IT companies."
);

const certainCompany = "Apple";

itCompanies.includes(certainCompany)
  ? console.log("Certain company:", certainCompany)
  : console.log("Certain company:", "-not found");

  itCompanies.forEach(company => {
    if (company.indexOf("o") != company.lastIndexOf("o")) {
        console.log("IT companies that contain 2 O's:", company);
    }
});

itCompanies.sort();
itCompanies.reverse();

itCompanies.slice(3, 7);
itCompanies.slice(0, 4);

itCompanies.shift();
itCompanies.pop();

while (itCompanies.length > 0) {
    itCompanies.pop();
}