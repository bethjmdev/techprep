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