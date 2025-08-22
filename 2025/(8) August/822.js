  // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the answer in english or in code. guide me in english to think about what the right answer might be. if something is not lined out a a constraint then dont therorize if it is

//   53. Car Rentals with Insurance Packages and Late Fees

//   Hashmap of cars and daily rate: "sedan": 40, "suv": 60, "truck": 80
  
//   Hashmap of insurance type: "sedan": "basic", "suv": "premium", "truck": "none"
  
//   Hashmap of days late returned: "sedan": 0, "suv": 2, "truck": 1
  
//   Hashmap of insurance fees: "none": 0, "basic": 10, "premium": 20
  
//   Loop over rentals. Calculate total cost:
  
//   Add the appropriate insurance fee.
  
//   Add $15 per day late.
  
//   Apply 8% tax to subtotal.
  
//   Print: "suv rental total: $X"
  
  
  
  const rate = {
    "sedan": 40, 
    "suv": 60, 
    "truck": 80
  }
  
  
  const insurance = {
    "sedan": "basic", 
    "suv": "premium", 
    "truck": "none"
  }
  
  
  const late = {
    "sedan": 0, 
    "suv": 2, 
    "truck": 1
  }
  
  
  const fees = {
    "none": 0, 
    "basic": 10, 
    "premium": 20
  }
  
  const finalCost = {}
  
  
  for (let car in rate) {
    let newRate;
  
    newRate = rate[car]
  
      //add the insurance cost
  
      let insuranceType = insurance[car]
    
      newRate += fees[insuranceType]
  
  
  
    //late fee
  
    if (late[car] > 0) {
      newRate =  (late[car] * 15) + newRate;
    }
  
    newRate = newRate + (newRate * .08)
  
    finalCost[car] = newRate
  
    console.log(car + "rental total: $" + newRate)
  
  }
  
  // --------------------------------

  
    // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the answer in english or in code. guide me in english to think about what the right answer might be. if something is not lined out a a constraint then dont therorize if it is



// 55. Event Catering with Meal Choices and Service Staff Fees

// Hashmap of meal types and price per guest: "vegan": 15, "meat": 20, "mixed": 18

// Hashmap of number of guests: "vegan": 50, "meat": 40, "mixed": 60

// Hashmap of whether service staff is requested: "vegan": true, "meat": false, "mixed": true

// Hashmap of table setup fee (per event): "vegan": 50, "meat": 75, "mixed": 60

// Staff flat fee per event: $100

// Loop over meals. Calculate total catering cost:

// Multiply price per guest by number of guests.

// Add $100 staff fee for each meal type that requests staff

// Add the table setup fee.

// If total exceeds $1000, apply 10% bulk discount.

// Print: "total: $X"



const price = {
  "vegan": 15, 
  "meat": 20, 
  "mixed": 18
}

const number = {
  "vegan": 50, 
  "meat": 40, 
  "mixed": 60
}

const staff = {
  "vegan": true, 
  "meat": false, 
  "mixed": true
}

const tableFee = {
  "vegan": 50, 
  "meat": 75, 
  "mixed": 60
}

let newRate = {}

for (let guest in price) {

  let newTotal;

  //Multiply price per guest by number of guests.
  newTotal = price[guest] * number[guest];

  //Add staff fee if requested.
  if (staff[guest] === true) {
    newTotal += 100
  }

  newTotal += tableFee[guest]

  if (newTotal > 1000) {
  newTotal = newTotal - (newTotal * .1)
  }

  newRate[guest] = newTotal;

  console.log("total: $" + newTotal)

}