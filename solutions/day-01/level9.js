const personAccount = {
  fistName: "Philipp",
  lastName: "Tolz",
  incomes: {
    salary: 1068,
    pocketMoney: 120,
  },
  expenses: {
    rent: 150,
    food: 60,
  },
  totalIncome: function () {
    let i = 0;
    for (const income of Object.values(this.incomes)) {
      i = i + income;
    }
    return i;
  },
  totalExpense: function () {
    let i = 0;
    for (const expense of Object.values(this.expenses)) {
      i = i + expense;
    }
    return i;
  },
  accountInfo: function () {
    const fullName = this.fistName + " " + this.lastName;

    return (
      fullName +
      " has an income of " +
      this.totalIncome() +
      "$ and expenses of " +
      this.totalExpense() +
      "$. The account balance is " +
      this.accountBalance() +
      "$."
    );
  },
  addIncome: function (obj) {
    Object.assign(this.incomes, obj);
  },
  addExpense: function (obj) {
    Object.assign(this.expenses, obj);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function likeProduct(userId, productId) {
  const productsValues = Object.values(products);
  
  productsValues.forEach(product => {
    if(product["_id"] === productId) {
      if (product.likes.includes(userId)) {
        const index = product.likes.indexOf(userId);
        product.likes.splice(index, 1);
        console.log(product.likes)
      } else {
        product.likes.push(userId);
        console.log(product.likes)
      }
    } 
  })
}

function rateProducts() {
  const productsValues = Object.values(products);
  const productsRatings = [];

  productsValues.forEach(product => {
    productsRatings.push({name: product.name, rating: product.ratings.length});
  })

  productsRatings.sort((a, b) => a.rating - b.rating);
  productsRatings.reverse();

  console.log("Ratings:", productsRatings);
}

function averageRating() {
  const productsValues = Object.values(products);
  const productsRatings = [];

  productsValues.forEach(product => {
    productsRatings.push(product.ratings.length);
  })

  console.log("average Rating:", (productsRatings.reduce((a, b) => a + b, 0)) / productsRatings.length);
}

function signIn(username, password) {
  const usersValues = Object.values(users);

  if (isExisting(username)) {
    const passwordData = getData(usersValues, username, password);

    if (passwordData === password) {
      console.log("Logged in as " + username);
    } else {
      console.log("Wrong password!");
    }
  } else {
    console.log("not existing");
  }
}

function signUp(username, email, password) {
  users.forEach((user) => {
    if (user.username === username) {
      alert("You already have an account!");
      return;
    }
  });
  const newUser = {
    _id: makeId(),
    username: username,
    email: email,
    password: password,
    createdAt: createdAt(),
    isLoggedIn: false,
  };

  users.push(newUser);
}

function getData(array, username, password) {
  let usernameData = "";
  let passwordData = "";
  array.forEach((user) => {
    if (user.username === username && user.password === password) {
      usernameData = user.username;
      passwordData = user.password;
    }
  });

  return passwordData;
}

function isExisting(username) {
  let isExisting = false;

  users.forEach((user) => {
    if (user.username != username) {
      isExisting = false;
    } else {
      isExisting = true;
    }
  });

  return isExisting;
}

function createdAt() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  let time = "";

  if (hours > 12) {
    hours = hours - 12;

    hours < 10 ? (hours = "0" + hours) : (hours = hours);
    minutes < 10 ? (minutes = "0" + minutes) : (minutes = minutes);

    time = JSON.stringify(hours) + ":" + minutes + " PM";
  } else {
    hours < 10 ? (hours = "0" + hours) : (hours = hours);
    minutes < 10 ? (minutes = "0" + minutes) : (minutes = minutes);

    time = JSON.stringify(hours) + ":" + minutes + " AM";
  }

  return date + "/" + month + "/" + year + " " + hours + ":" + minutes;
}

function makeId() {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
