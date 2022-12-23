const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

products.forEach(product => {
    let price;
    if (typeof product.price != "number") {
        price = "unknown";
    } else {
        price = product.price;
    }

    console.log("The price of "  + product.product + " is " +  price + " euros.")
})


let sum = 0;

products.forEach(product => {
    if (!(typeof product.price != "number")) {
        sum += product.price;
    }
})

console.log("The sum of prices: " + sum + " euros.");

const priceArray = products.map(product => product.price)

const filteredPriceArray = priceArray.filter(prize => typeof prize === "number")

const priceArraySum = filteredPriceArray.reduce((prize, sum) =>  sum += prize)

const firstWithoutPrice = products.find(product => typeof product.price != "number")

const firstWithoutPriceIndex = products.findIndex(product => typeof product.price != "number")

console.log("The sum of prices: " + priceArraySum + " euros.")
console.log("The first without price: " + firstWithoutPrice.product)
console.log("The first without price(Index): " + firstWithoutPriceIndex)