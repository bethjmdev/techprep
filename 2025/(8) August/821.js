

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



// 42. Gym Memberships with Class Packages

// Hashmap of memberships and monthly fee: "basic": 20, "standard": 35, "premium": 60


// Hashmap of whether extra class package is purchased: "basic": false, "standard": true, "premium": true


// Loop over memberships. Calculate total monthly cost:

// Add $10 if class package is purchased

// Apply 10% discount if base fee + class > $50

// Print: "premium membership total: $X"




const packages = {
  "basic": 20, 
  "standard": 35, 
  "premium": 60
}

const upgrade = {
  "basic": false, 
  "standard": true, 
  "premium": true
}

let totalCosts = {}


for (let membership in packages) {
  let newCosts;

  if (upgrade[membership] === true){
    newCosts = packages[membership] + 10;
  } else {
  newCosts = packages[membership];
  }

  if (newCosts > 50) {
  newCosts = newCosts - (newCosts * .1);
  }

    totalCosts[membership] = newCosts;

    console.log(membership + " membership total: $" + newCosts)

}

// --------------------------------