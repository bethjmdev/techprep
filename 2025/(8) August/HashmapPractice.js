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

