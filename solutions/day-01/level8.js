const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const skillsAmount = [];
const usersKeys = Object.keys(users);
const usersValues = Object.values(users);

usersValues.forEach((user) => {
  skillsAmount.push(user.skills.length);
});

const max = Math.max(...skillsAmount);
const index = skillsAmount.indexOf(max);

console.log("max skills:", usersKeys[index]);

let usersLoggedIn = 0;

usersValues.forEach((user) => {
  if (user.isLoggedIn) {
    usersLoggedIn++;
  }
});

console.log("users logged in:", usersLoggedIn);

let usersOver50Points = 0;

usersValues.forEach((user) => {
  if (user.points >= 50) {
    usersOver50Points++;
  }
});

console.log("users over 50 points:", usersOver50Points);

let usersMernStack = 0;

usersValues.forEach((user) => {
  if (
    user.skills.includes("MongoDB") &&
    user.skills.includes("Express") &&
    user.skills.includes("React") &&
    user.skills.includes("Node")
  ) {
    usersMernStack++;
  }
});

console.log("MERN stack developers:", usersMernStack);

const copyUsers = Object.assign({}, users);
copyUsers.Philipp = {
    email: "philipp@philipp.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 18,
    isLoggedIn: true,
    points: 999,
};