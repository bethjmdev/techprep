// 1. Bookstore Inventory
// Make a hashmap of books. Add "harryPotter": 3 and "hobbit": 0.
// Check if "hobbit" is in stock (greater than 0). If yes, print how many. If no, print "sold out".



const books = {
  'harryPotter' : 3,
  'hobbit' : 0,
}

if (books["hobbit"] > 0) {
  console.log(books["hobbit"])
} else {
  console.log("sold out")
}

// --------------------------------


// 2. Student Grades
// Make a hashmap of students and their grades. Example: "alex": 90, "jordan": 75.


// Check if "alex" scored above 80. If yes, print "alex passed with high marks", otherwise print "alex needs improvement".


const grades = {
  "alex" : 90,
  "jordan" : 75
}


if (grades["alex"] > 80) {
  console.log("alex passed with high marks")
} else {
  console.log("alex needs improvement")
}

// --------------------------------



// 3. Grocery List
// Make a hashmap with grocery items: "milk": true, "eggs": false, "bread": true.

// Check if "eggs" is on the list. If yes, print "buy eggs". If no, print "no eggs needed".




const groceries = {
  'milk': true,
  "eggs": false,
  "bread": true
}


if (groceries["eggs"] === true) {
  console.log("buy eggs")
} else {
  console.log("no eggs needed")
}

// --------------------------------

// 4. Login System
// Make a hashmap of usernames and whether they are logged in: "sam": true, "maria": false.


// Check if "maria" is logged in. Print "welcome back" if true, otherwise "please log in".


const users = {
  'sam': true,
  'maria': false,

}

if (users["maria"] === false) {
  console.log("please log in")
} else {
  console.log("welcome back")
}

// --------------------------------


// 5. Toy Store
// Make a hashmap with toy counts: "lego": 5, "doll": 0, "car": 2.


// Check if "doll" is available. If not, print "restock dolls". If yes, print how many.


const toys = {
  "lego": 5,
  "doll": 0,
  "car": 2
}


if (toys["doll"] > 0) { 
console.log(toys["doll"]);
} else {
  console.log("restock dolls")
}

// --------------------------------

// is this correct? do not show me the code if i got it wrong only give me the english corrections


// 6. Movie Tickets
// Make a hashmap of movies and available tickets: "inception": 10, "frozen": 0, "avatar": 5.


// Check if "frozen" has tickets available. If yes, print how many tickets are left. If no, print "sold out".


const movies = {
  "inception" : 10,
  "frozen" : 0,
  "avatar" : 5
}


if (movies["frozen"] === 0) {
  console.log("sold out")
} else {
  console.log(movies["frozen"])
}

// --------------------------------



// is this correct? do not show me the code if i got it wrong only give me the english corrections


// 7. Classroom Attendance
// Make a hashmap of students and whether they are present: "lisa": true, "mark": false, "tina": true.

// Loop over all students. For each student, print "present" or "absent" next to their name.


const attendance = {
  "lisa" : true,
  "mark": false,
  "tina" : true
}

for (let student in attendance) {
  if (attendance[student] === true) {
  console.log(student + " present")
  } else if  (attendance[student] === false) {
  console.log(student + " absent")
  }
}

// --------------------------------


// is this correct? do not show me the code if i got it wrong only give me the english corrections

// 8. Library Books
// Make a hashmap of books and whether they are checked out: "1984": true, "dune": false, "hobbit": true.

// Loop over all books. For each book, print "checked out" if true, otherwise "available".


const library = {
  '1984' : true,
  "dune" : false,
  "hobbit": true
}

for (let book in library) {
  if (library[book] === true) {
  console.log(book + " checked out")
  } else {
  console.log(book + " available")
  }
}


// --------------------------------


// 9. Gym Equipment
// Make a hashmap of gym machines and whether they are in use: "treadmill": false, "bench": true, "elliptical": false.


// Loop over all machines. For each one, print "in use" or "free".

// true → the machine is in use
// false → the machine is free



const gym = {
  "treadmill" : false,
  "bench": true,
  "elliptical" : false
}

for (let equip in gym) {
  if (gym[equip] === true) {
  console.log("in use")
  } else if (gym[equip] === false) {
  console.log("free")
  }
} 

// --------------------------------

// 10. Light Switches
// Make a hashmap of rooms and whether the lights are on: "kitchen": true, "bedroom": false, "bathroom": true.


// Loop over all rooms. Print "lights on" or "lights off" next to each room name.


const house = {
  'kitchen' : true,
  'bedroom' : false,
  'bathroom' : true
}


for (let light in house) {
  if (house[light] === true) {
  console.log(light + " lights on")
  } else {
  console.log(light + " lights off")
  }
}

// --------------------------------


// 11. Car Parking Lot
// Make a hashmap of parking spots and whether they are occupied: "A1": true, "A2": false, "B1": true.

// Loop over all spots. Print "occupied" or "empty" next to the spot name.

const parking = {
  "A1": true,
  "A2": false,
  "B1" : true
}

for (let spot in parking) {
  if (parking[spot] === false) {
  console.log (spot + " empty")
  } else {
  console.log(spot + " occupied")
  }
}

// --------------------------------

// 12. Pet Feeding Schedule
// Make a hashmap of pets and whether they have been fed: "dog": true, "cat": false, "hamster": true.


// Loop over all pets. Print "fed" or "needs feeding" next to each pet’s name.



const pets = {
  'dog': true,
  'cat': false,
  'hamster': true
}


for (let fed in pets) {
  if (pets[fed] === true) {
  console.log( fed + " fed")
  } else {
  console.log(fed + " needs feeding")
  }
}

// --------------------------------

// 18. Library Books with Due Dates
// Make a hashmap of books and whether they are checked out: "1984": true, "dune": false, "hobbit": true.

// Also make a second hashmap of due dates: "1984": 3, "dune": 0, "hobbit": 1 (days until due).

// Loop over all books. If a book is checked out, print "checked out, due in X days". If not, print "available".



const libraree = {
  "1984": true,
  "dune": false,
  "hobbit": true
}

const due = {
   "1984": 3,
  "dune": 0,
  "hobbit": 1
}



for (let book in libraree) {
  if (libraree[book] === true) {

  console.log("checked out, due in " + due[book] + " days")
  } else {
  console.log("available")
  }
}

// --------------------------------
 

// 19. Gym Equipment with Maintenance

// Make a hashmap of gym machines and whether they are in use: "treadmill": false, "bench": true, "elliptical": false.


// Also make a second hashmap for maintenance: "treadmill": false, "bench": true, "elliptical": false.


// Loop over all machines. Print:

// "in use, needs maintenance" if in use and maintenance is true

// "in use" if only in use

// "free" if neither


const gyms = {
  "treadmill": false,
  "bench": true,
  "elliptical": false
}

const maintenance = {
    "treadmill": false,
  "bench": true,
  "elliptical": false
}


for (let equipment in gyms) {
  if (gyms[equipment] === true) {


  if (mainenance[equipment] === true) {
  console.log("in use, needs maintenance" )
  } else {
  console.log("neither")
  }
  } else {
  console.log("free")
  }
}


// --------------------------------


// 20. Light Switches with Alerts

// Make a hashmap of rooms and whether lights are on: "kitchen": true, "bedroom": false, "bathroom": true.

// Also make a second hashmap of alerts: "kitchen": false, "bedroom": true, "bathroom": false.

// Loop over all rooms. Print: "lights on, alert" if light is on and alert is true, 

// otherwise print "lights on" or "lights off" as appropriate.


const theHouse = {

  kitchen : true,
  bedroom : false,
  bathroom : true
}

const alerts = {
    kitchen : false,
  bedroom : true,
  bathroom : false
}

for (let room in theHouse) {
  if (theHouse[room] === true ){

  if (alerts[room] === true) {
  console.log("lights on, alert")
  } else {
  console.log("lights on")
  }
  } else if (theHouse[room] === false ){
  console.log("lights off")
  }
}





// --------------------------------

// 21. Parking Spots with Electric Charging

// Make a hashmap of parking spots and whether they are occupied: "A1": true, "A2": false, "B1": true.

// Also make a second hashmap indicating if the spot has a charger: "A1": true, "A2": false, "B1": true.


// Loop over all spots. Print "occupied, charging available" if occupied and has charger, otherwise just "occupied" or "empty" as appropriate.


const parkinng = {
  "A1" : true,
  "A2" : false,
  "B1" : true
}

const charger = {
  "A1" : true,
  "A2" : false,
  "B1" : true
}



for (let spot in parkinng) {
  if (parkinng[spot] === true) {

  if (charger[spot] === true) {
  console.log("occupied, charging available");
  } else {
  console.log("occupied")
  }
  } else {
  console.log("empty")
  }



}

// --------------------------------




// 22. Pet Feeding with Allergies

// Make a hashmap of pets and whether they have been fed: "dog": true, "cat": false, "hamster": true.

// Also make a second hashmap of whether each pet has special food requirements: "dog": false, "cat": true, "hamster": false.

// Loop over all pets. Print "fed, special diet" if fed and special diet is true, otherwise print "fed" or "needs feeding" as appropriate.



const animal = {
  "dog" : true,
  "cat": false,
  "hamster": true
}

const diet = {
  "dog": false,
  "cat": true,
  "hamster": false
}


for (let pet in animal) {
  if (animal[pet] === true) {
    if (diet[pet] === true){
    console.log("fed, special diet")
    } else {
    console.log("fed")
    }

  } else {
  console.log("needs feeding")
  }
}

// --------------------------------

// 34. Students with Attendance and Exam Scores

// Hashmap of students and attendance count: "Alice": 18, "Bob": 12, "Charlie": 20.

// Hashmap of exam scores: "Alice": 85, "Bob": 70, "Charlie": 92

// Loop over students. Print:


// "Alice: eligible for certificate" if attendance ≥ 15 and score ≥ 80

// "Alice: needs improvement" if either condition fails


const attendances = {
  "Alice": 18, 
  "Bob": 12, 
  "Charlie": 20
}

const scores = {
  "Alice": 85, 
  "Bob": 70, 
  "Charlie": 92
}


for (let student in attendances) {
  if (attendances[student] >= 15 && scores[student] >= 80){
  console.log(student + ": eligible for certificate")
  } else {
  console.log(student + ": needs improvement")
  }
}

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
