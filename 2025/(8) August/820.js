
// --------------------------------

// 33. Online Orders with Discounts and Shipping Costs

// Hashmap of orders and their prices: "101": 120, "102": 75, "103": 200.

// Hashmap of whether the order is expedited: "101": true, "102": false, "103": true.

// Loop over all orders. Calculate total cost:

// Add $20 if expedited

// Apply 10% discount if price > $150

// Print: "Order 101 total: $X" with the calculated total.



const online = {
    "101": 120, 
    "102": 75, 
    "103": 200
  }
  
  
  const expedited = {
    "101": true, 
    "102": false, 
    "103": true
  }
  
  let postDiscount = {}
  
  for (let order in online) {
    
  
    if (online[order] > 150){
      let subtract = online[order] * .10
  
      let total = online[order] - subtract
      postDiscount[order] = total
      
    } else {
      postDiscount[order] = online[order]
    }
  
      if (expedited[order] === true) {
      postDiscount[order] += 20;
    }
  
  console.log("Order " + order + " total: $" + postDiscount[order])
  }
  
  // --------------------------------
  
  // 35. Flights with Seats and Upgrades
  
  // Hashmap of flights and number of empty seats: "AA101": 0, "BA202": 5, "DL303": 2
  
  // Hashmap of upgrades available: "AA101": true, "BA202": false, "DL303": true
  
  // Loop over flights. Print:
  
  // "DL303: seats available, upgrade possible" if seats > 0 and upgrade true
  
  // "BA202: seats available" if seats > 0 and upgrade false
  
  // "AA101: fully booked" if seats = 0
  
  
  const flight = {
    "AA101": 0, 
    "BA202": 5, 
    "DL303": 2
  }
  
  const upgrades = {
    "AA101": true, 
    "BA202": false, 
    "DL303": true
  }
  
  for (let seat in flight) {
    if (flight[seat] > 0 && upgrades[seat] === true) {
    console.log(seat + ": seats available, upgrade possible")
    } else if (flight[seat] == 0){
    console.log("fully booked")
    } else if (flight[seat] > 0 && upgrades[seat] === false) {
  console.log(seat + ": seats available")
    }
  }
  
  // --------------------------------
  
  
  // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the answer in english or in code. guide me in english to think about what the right answer might be
  
  
  // 6. Shopping Cart with Tax and Coupons
  
  // Hashmap of items and prices: "shirt": 40, "pants": 60, "jacket": 120
  
  // Hashmap of whether a coupon applies: "shirt": true, "pants": false, "jacket": true
  
  // Loop over all items. Calculate final price:
  
  // Apply 15% discount if coupon applies
  
  // Add 8% sales tax to the discounted price
  // Print: "shirt final price: $X"
  
  //all items get tax on final price
  
  const inventory = {
    "shirt": 40, 
    "pants": 60, 
    "jacket": 120
  }
  
  const coupon = {
    "shirt": true, 
    "pants": false, 
    "jacket": true
  }
  
  
  for (let item in inventory) {
  
  let needsTax;
  let taxTotal;
  
  //figure out if discount
    if (coupon[item] === true) {
    let discount = inventory[item] * .15;
  
    needsTax = inventory[item] - discount;
  
    } else {
    needsTax = inventory[item]
    }
  
    //calcuate tax
    let appliedTax = needsTax * .08
  
    taxTotal = needsTax + appliedTax
  
     console.log(item + " final price: $" + taxTotal.toFixed(2))
  
  }
  
  // --------------------------------
  
  
  // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the answer in english or in code. guide me in english to think about what the right answer might be
  
  
  
  // 37. Hotel Rooms with Extra Charges
  
  // Hashmap of rooms and base price: "101": 150, "102": 200, "103": 120
  
  // Hashmap of whether extra bed is needed: "101": true, "102": false, "103": true
  
  // Loop over rooms. Calculate total price:
  
  // Add $25 if extra bed is needed
  
  // Apply 5% discount if base price > $180
  
  // Print: "Room 102 total: $X"
  
  
  
  
  
  const basePrice ={
    "101": 150, 
    "102": 200, 
    "103": 120
  };
  
  const extraBed ={
    "101": true, 
    "102": false, 
    "103": true
  };
  
  
  let adjustedPrices = {};
  
  let discountTotal; 
  
  for (let room in basePrice) {
    if (basePrice[room] > 180) {
    let discount = basePrice[room] * .05
    discountTotal = basePrice[room] - discount
    } else {
    discountTotal = basePrice[room]
    }
  
    if (extraBed[room] === true) {
    discountTotal += 25
    }
  
    adjustedPrices[room] = discountTotal
  
    console.log("Room " + room + " total:$" + discountTotal.toFixed(2))
  
  }
  
  // --------------------------------
  
  
  // 38. Event Tickets with Upgrade
  
  // Hashmap of ticket types and base prices: "standard": 50, "premium": 100, "vip": 200
  
  // Hashmap of whether an upgrade is requested: "standard": false, "premium": true, "vip": false
  
  // Loop over tickets. Calculate final price:
  
  // Apply 10% discount if base price > $150
  
  // Add $30 if upgrade requested
  
  // Print: "ticket total: $X"
  
  // make new hashmap to store totals
  
  
  const price = {
    "standard": 50, 
    "premium": 100, 
    "vip": 200
  }
  
  const upgrade = {
    "standard": false, 
    "premium": true, 
    "vip": false
  }
  
  const finalPrice = {};
  
  
  for (let ticket in price) {
    
    let newTotal;
  
    if (price[ticket] > 150) {
  
    newTotal = price[ticket] - (price[ticket] * .1);
  
    } else {
  
    newTotal = price[ticket]
  
    }
  
    if (upgrade[ticket] === true) {
    newTotal += 30
    }
  
  finalPrice[ticket] = newTotal
  
  console.log("ticket total: $" + newTotal.toFixed(2))
  }
  
  // --------------------------------
  
  
  
  // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the answer in english or in code. guide me in english to think about what the right answer might be. if the question doesnt outline a constraint then don't bring it up
  
  // 39. Online Subscriptions with Add-ons
  
  // Hashmap of subscriptions and monthly cost: "basic": 10, "pro": 20, "enterprise": 50
  
  // Hashmap of whether add-on is selected: "basic": true, "pro": false, "enterprise": true
  
  // Loop over subscriptions. Calculate total monthly cost:
  
  // Add $5 if add-on is selected
  
  
  // Apply 20% discount if total (base + add-on) > $30
  
  
  // Print: "subscription total: $X"
  
  
  // --------------
  
  
  const cost = {
    "basic": 10, 
    "pro": 20, 
    "enterprise": 50
  }
  
  const addOn = {
    "basic": true, 
    "pro": false, 
    "enterprise": true
  }
  
  const finalCost = {};
  
  for (let sub in cost){
  
  let addTotal;
  let newTotal;
  
    if (addOn[sub] === true){
    addTotal = cost[sub] + 5
    } else {
    addTotal = cost[sub]
    }
  
    if (addTotal > 30) {
    newTotal = addTotal - (addTotal * .2);
    } else {
    newTotal = addTotal
    }
  
  
  finalCost[sub] = newTotal;
  
  console.log("subscription total: $" + newTotal.toFixed(2))
  }