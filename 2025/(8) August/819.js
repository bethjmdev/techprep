

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
  