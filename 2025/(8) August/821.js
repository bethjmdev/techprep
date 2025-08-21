

//   41. Meal Orders with Delivery Fees and Discounts
//   Hashmap of meals and base prices: "pizza": 12, "burger": 8, "salad": 10
  
  
//   Hashmap of whether delivery is requested: "pizza": true, "burger": false, "salad": true
  
  
//   Loop over meals. Calculate final price:
  
//   Add $3 delivery fee if delivery is requested
  
//   Apply 5% discount if the total (base + delivery) is > $15
  
//   Print: "pizza order total: $X"
  
  
  const price = {
    "pizza": 12, 
    "burger": 8, 
    "salad": 10
  
  }
  
  const delivery ={
    "pizza": true, 
    "burger": false, 
    "salad": true
  }
  
  const totalCost = {
    
  }
  
  for (let order in price) {
  
    let newPrice;
    
    if (delivery[order] === true) {
      newPrice = price[order] + 3;
    } else {
    newPrice = price[order];
    }
  
    if (newPrice > 15) {
    newPrice = newPrice - (newPrice * .05)
    }
  
    totalCost[order] = newPrice;
  
    console.log(order + " order total: $" + newPrice.toFixed(2))
  
  }

  // --------------------------------