

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


  // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the answer in english or in code. guide me in english to think about what the right answer might be

//   46. Streaming Subscriptions with Add-ons and Taxes

//   Hashmap of subscriptions and base fee: "basic": 8, "standard": 12, "premium": 18
  
//   //how many add on channels purchased
  
//   Hashmap of add-on channels: "basic": 2, "standard": 3, "premium": 5
  
//   Hashmap of whether add-ons are purchased: "basic": true, "standard": false, "premium": true
  
//   Loop over subscriptions. Calculate monthly bill:
  
//   Add $4 per add-on channel if purchased.
  
//   Apply a flat $2 processing fee for every subscription.
  
//   Add 8% state tax to the subtotal.
//   Print: "premium subscription total: $X"
  
  
  
  const baseFee = {
    "basic": 8, 
    "standard": 12, 
    "premium": 18
  }
  
  
  const addOn = {
    "basic": 2, 
    "standard": 3, 
    "premium": 5
  }
  
  const purchased = {
    "basic": true, 
    "standard": false, 
    "premium": true
  }
  
  let totalFee = {}
  
  for (let sub in baseFee) {
  
    let newCost;
    
    if (purchased[sub] === true) {
      newCost = baseFee[sub] + (addOn[sub] * 4) 
    } else {
    newCost = baseFee[sub] 
    }
  
    newCost = newCost + 2
  
    newCost =  newCost + (newCost * .08);
  
  
    totalFee[sub] = newCost
  
    console.log(sub + " subscription total: $" + newCost.toFixed(2))
  }
  
  
  // --------------------------------





  // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the answer in english or in code. guide me in english to think about what the right answer might be. if something is not lined out a a constraint then dont therorie if it is



//   47. Concert Tickets with VIP Perks and Service Fees


//   Hashmap of ticket types and base prices: "regular": 50, "gold": 100, "vip": 200
  
  
//   Hashmap of whether  perks are chosen: "regular": false, "gold": true, "vip": true
  
  
//   Loop over tickets. Calculate ticket cost:
  
  
//   Add 20% of base price if perks are chosen.
  
  
//   Always add a service fee equal to 10% of the current cost (after perks).
  
  
//   If final price exceeds $150, apply a $10 flat rebate.
  
//   Print: "vip ticket total: $X"
  
  
  
  const base = {
    "regular": 50, 
    "gold": 100, 
    "vip": 200
  }
  
  const perks = {
    "regular": false, 
    "gold": true, 
    "vip": true
  }
  
  const newBase = {}
  
  for (let ticket in base) {
  
    let newTotal;
    
    if (perks[ticket] === true){
      newTotal = base[ticket] + (base[ticket] * .2)
    } else {
      newTotal = base[ticket]
    }
  
  
    newTotal = newTotal + (newTotal * .1)
  
    if(newTotal > 150) {
      newTotal -= 10
    }
  
    newBase[ticket] = newTotal;
  
    console.log(ticket + " ticket total: $" + newTotal)
  }
  


  