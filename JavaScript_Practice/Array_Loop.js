let prices = [5, 10, 15, 20];

// /////for loops

// will iterate and display all element of the array
for (let i = 0; i < prices.length; i += 1) {
  console.log(prices[i]);
}

// will iterate and display in reverse
for (let i = prices.length; i < prices.length; i -= 1) {
  console.log(prices[i]);
}

////// for of statement

// will iterate and display all element of the array

for (let price of prices) {
  console.log(price);
}
