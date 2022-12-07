const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
const medianAge = ages[(ages.length - 1) / 2] / 2;
const averageAge =
  ages.reduce((partialSum, a) => partialSum + a, 0) / ages.length;

const slicedCountries = countries.slice(countries.length - 1, countries.length);
const middleCountry = countries[ages.length / 2];
const firstPartCountries = countries.slice(0, (ages.length + 2) / 2);
const secondPartCountries = countries.slice(
  (ages.length + 2) / 2,
  ages.length + 1
);
