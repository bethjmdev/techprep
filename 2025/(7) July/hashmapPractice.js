


inventory = {
    apple: true,
    banana: false,
}


    if (inventory["banana"] == true) {
    console.log("this is banananana's")
    } else {
    console.log("we're out of banananana's")
    }


//  ---------------------------------


inventory = {
    apple: true,
    banana: false,
}


//look in inventory for an item
for (let item in inventory) {

    //check for what items are true
    if (inventory[item] === true){
    //print the items that are true
    console.log(item)
    }
}


// ---------------------------------


animals = {
    cat: "mrow",
    dog: "bork",
    cow: "moo",
    horse: "nehhh",
}

for (let animal in animals) {
    if (animals[animal] !== "moo") {
    console.log(animal)
    }
}


// ---------------------------------

animals = {
    cat: "mrow",
    dog: "bork",
    cow: "moo",
    horse: "nehhh",
}


animals[goat] = "bahhh";

console.log(animals)


// ---------------------------------



animals = {
    cat: "mrow",
    dog: "bork",
    cow: "moo",
    horse: "nehhh",
}


for (let animal in animals) {
    if (animals[animal].length < 4) {
    console.log(animal)
    }
}



// ---------------------------------

animals = {
    cat: "mrow",
    dog: "bork",
    cow: "moooh",
    horse: "nehhh",
}

for (let animal in animals) {
    console.log(animals[animal].startsWith("m"))
}


// ---------------------------------


animals = {
    cat: "mrow",
    dog: "bork",
    cow: "moo",
    horse: "nehhh",
}


for (let animal in animals) {
    console.log(animals[animal].includes("h"))
}


// ---------------------------------


animals = {
    cat: "mrow",
    dog: "bork",
    cow: "moo",
    horse: "nehhh",
}


for (let animal in animals) {
   animals[animal] = animals[animal].swap("m", 'M')
}


// 
// ---------------------------------


animals = {
    cat: "mrow",
    dog: "bork",
    cow: "moo",
    horse: "nehhh",
}

console.log(animals.indexOf("cow"))


console.log(animals.indexOf(animals["cow"]))

// ---------------------------------
let animals = {
    cat: "mrow",
    dog: "bork",
    cow: "moo",
    horse: "nehhh",
    goat: "bahhh",
    chicken: "cluck"
  };
  
  
  
  for (let animal in animals) {
      if (animal.startsWith("b") || animal.includes("o")){
      console.log(animal)
      }
  }


//   corrected to
for (let animal in animals) {
    if (animals[animal].startsWith("b") || animals[animal].includes("o")){
    console.log(animal)
    }
}

// ---------------------------------

animals = {
    cat: "mrow",
    dog: "bork",
    cow: "moo",
    horse: "nehhh",
    goat: "bahhh",
    chicken: "cluck"
  };
  
  
  for (let animal in animals) {
    if (animals[animal].length > 4 && !animals[animal].includes("o")){
    console.log(animal)
    }
  }


  // ---------------------------------

  let favoriteFoods = {
    alice: "Spaghetti",
    ben: "Steak",
    carla: "Salad",
    david: "Sushi",
    emily: "Soup",
    frank: "Falafel"
  };
  
  
  
  for (let food in favoriteFoods) {
  if(
  (food.startsWith("c") || food.startsWith("f")) && favoriteFoods[food].toLowerCase().includes("s")) {
  
    console.log(food)
  }
  }
  
  

  // ---------------------------------

  let movies = {
    inception: "sci-fi",
    avatar: "fantasy",
    parasite: "thriller",
    soul: "animation",
    gravity: "sci-fi",
    frozen: "animation",
    dune: "sci-fi"
  };
  
  
  for (let movie in movies) {
    
    if((movie.startsWith('f') || movie.startsWith('g')) && movies[movie].includes('i')) {
    console.log(movie)
    }
  }


  // ---------------------------------

  let songs = {
    "stay": "Pop",
    "blindingLights": "Synthpop",
    "levitating": "Pop",
    "badGuy": "Electropop",
    "peaches": "R&B",
    "goosebumps": "Rap",
    "sunflower": "AltRock"
  };
  
  
  
  for (let music in songs) {
  let musica = music.toLowerCase()
    if ((musica.includes('g') || musica.includes('s')) && songs[music].startsWith("P")){
    console.log(music)
    }
  }

  // ---------------------------------
  let languages = {
    "JavaScript": "Web Development",
    "Python": "Data Science",
    "C++": "Systems",
    "Java": "App Development",
    "Ruby": "Web",
    "Go": "Microservices",
    "Swift": "iOS",
    "Kotlin": "Android"
  };
  
  
  
  for(let coding in languages){
    let code = coding.toLowerCase()
    if(code.includes('t') && languages[coding].length > 10){
    console.log(coding)
    }
  }

  // ---------------------------------

  let inventory = {
    "laptop": { brand: "Dell", specs: { ram: 16, storage: 512 }, price: 1200 },
    "smartphone": { brand: "Apple", specs: { ram: 4, storage: 256 }, price: 999 },
    "tablet": { brand: "Samsung", specs: { ram: 8, storage: 128 }, price: 600 },
    "desktop": { brand: "HP", specs: { ram: 32, storage: 1024 }, price: 1500 },
    "monitor": { brand: "Dell", specs: { ram: 0, storage: 0 }, price: 300 },
    "smartwatch": { brand: "Apple", specs: { ram: 1, storage: 32 }, price: 400 }
  };
  
  
  for (let tech in inventory) {
    if ((inventory[tech].brand === "Dell" || inventory[tech].brand === "HP") && inventory[tech].specs.ram >= 16 && inventory[tech].price <= 1300){
    console.log (tech)
    }
  }

  // ---------------------------------

  let orders = {
    order1: { customer: "Alice", total: 85.50, shipped: true, items: { count: 3, hasFragile: false } },
    order2: { customer: "Bob", total: 120.00, shipped: false, items: { count: 5, hasFragile: true } },
    order3: { customer: "Charlie", total: 45.99, shipped: true, items: { count: 2, hasFragile: true } },
    order4: { customer: "Diana", total: 200.25, shipped: true, items: { count: 6, hasFragile: false } },
    order5: { customer: "Evan", total: 105.75, shipped: false, items: { count: 4, hasFragile: false } }
  };
  
  
  for (let order in orders) {
  let theOrder = orders[order]
  
    if (theOrder.shipped === true && theOrder.total > 50 && theOrder.items.hasFRagile ===false){
    console.log(order)
    }
  }

  // ---------------------------------

  let courses = {
    math101: { title: "Calculus I", professor: { name: "Dr. Smith", tenured: true }, credits: 4 },
    hist202: { title: "World History", professor: { name: "Dr. Adams", tenured: false }, credits: 3 },
    cs105: { title: "Intro to Programming", professor: { name: "Dr. Lang", tenured: true }, credits: 5 },
    phys301: { title: "Quantum Mechanics", professor: { name: "Dr. Brown", tenured: true }, credits: 4 },
    eng210: { title: "Creative Writing", professor: { name: "Dr. Summers", tenured: false }, credits: 3 }
  };
  
  
  for (let classes in courses) {
    let theClass = courses[classes]
  
    if (theClass.professor.tenured === true && theClass.professor.name.toLowerCase().includes('a') && theClass.credits >= 4) {
    console.log(classes)
    }
  
  }


  // ---------------------------------



  
  
  // ---------------------------------

  let fruitCount = {}


for (let i = 0; i < fruitList.length; i++) {

let fruit = fruitList[i];
  
  if (fruitCount[fruit] === undefined) {
  fruitCount[fruit] = 1
  } else {
  fruitCount[fruit] +=1
  }

}


// ---------------------------------
let veggieCount = {};

for (let i = 0; i < veggieList.length; i++){
  let veg = veggieList[i];

  if (veggieCount[veg] === undefined) {
  veggieCount[veg] = 1;
  } else {
veggieCount[veg] += 1;
  }
}


// ---------------------------------


for (let i = 0; i < animalList.length; i++) {
    let animal = animalList[i];
  
    if (animal.length > 4 && animalCount[animal] == undefined) {
    animalCount[animal] = 1;
  
    } else if (animal.length > 4) {
    animalCount[animal] += 1;
    }
  
  }

  // ---------------------------------

  let bookList = [
    { title: "The Hobbit", author: "Tolkien" },
    { title: "1984", author: "Orwell" },
    { title: "Fahrenheit 451", author: "Bradbury" },
    { title: "Dune", author: "Herbert" },
    { title: "The Catcher in the Rye", author: "Salinger" },
    { title: "Moby Dick", author: "Melville" }
  ];
  
  
  const authorCount = {};
  
  
  for (let i= 0; i < bookList.length; i++){
    let book = bookList[i];
  
    if (book.title.length > 7 && book.author.includes('a') && authorCount[book.author] === undefined){
  
    authorCount[book] = 1;
  
    } else if (book.title.length > 7 && book.author.includes('a') ) {
  
    authorCount[book.author] += 1;
  
    }
  }

  // ---------------------------------

  const movieList = [
    { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
    { title: "Memento", director: "Christopher Nolan", rating: 8.4 },
    { title: "Tenet", director: "Christopher Nolan", rating: 7.3 },
    { title: "Dunkirk", director: "Christopher Nolan", rating: 7.0 },
    { title: "Titanic", director: "James Cameron", rating: 7.8 },
    { title: "Avatar", director: "James Cameron", rating: 7.9 },
    { title: "Aliens", director: "James Cameron", rating: 8.3 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", rating: 8.9 },
    { title: "Reservoir Dogs", director: "Quentin Tarantino", rating: 8.3 },
    { title: "Jackie Brown", director: "Quentin Tarantino", rating: 7.5 },
    { title: "The Room", director: "Tommy Wiseau", rating: 3.7 }
  ];
  
  
  
  let directorCount = {}
  
  for (let movie of movieList) {
    if (movie.rating > 7 && directorCount[movie.director] == undefined) {
    directorCount[movie.director] = 1 
    } else if (movie.rating > 7 && directorCount[movie.director] != undefined){
    directorCount[movie.director] += 1
    }
  }
  

  // ---------------------------------
  const productList = [
    { name: "Headphones", category: "electronics", price: 15 },
    { name: "Laptop", category: "electronics", price: 1200 },
    { name: "Book: JavaScript Basics", category: "books", price: 12 },
    { name: "Book: Advanced CSS", category: "books", price: 25 },
    { name: "T-shirt", category: "clothing", price: 18 },
    { name: "Jeans", category: "clothing", price: 40 },
    { name: "Smartphone", category: "electronics", price: 800 },
    { name: "Notebook", category: "books", price: 5 },
    { name: "Pen", category: "books", price: 2 }
  ];
  
  
  
  let overTwenty = {};
  
  for (let product of productList) {
    if (product.price < 20 && overTwenty[product.category] == undefined) {
    overTwenty[product.category] = 1;
    } else if (product.price < 20 && overTwenty[product.category] !== undefined) {
    overTwenty[product.category] += 1;
    }
  }

  // ---------------------------------

  const employeeList = [
    { name: "Alice", department: "Engineering", salary: 75000 },
    { name: "Bob", department: "Engineering", salary: 48000 },
    { name: "Charlie", department: "HR", salary: 52000 },
    { name: "Diana", department: "Marketing", salary: 47000 },
    { name: "Ethan", department: "Marketing", salary: 65000 },
    { name: "Fiona", department: "HR", salary: 49000 },
    { name: "George", department: "Engineering", salary: 55000 }
  ];
  
  let highEarners = {}
  
  
  for (let employee of employeeList) {
    if (employee.salary > 50000 && highEarners[employee.department] === undefined)  {
    highEarners[employee.department] = 1
    } else if (employee.salary > 50000 && highEarners[employee.department] !== undefined) {
    highEarners[employee.department] += 1
    }
  }



  // ---------------------------------

  const fruitList = [
    { name: "Apple", color: "red" },
    { name: "Strawberry", color: "red" },
    { name: "Banana", color: "yellow" },
    { name: "Lemon", color: "yellow" },
    { name: "Grape", color: "purple" },
    { name: "Blueberry", color: "blue" }
  ];
  
  
  //how many fruits of each color
  
  let colors = {};
  
  
  for(let fruit of fruitList) {
    if (colors[fruit.color] === undefined) {
    colors[fruit.color] = 1;
    } else {
    colors[fruit.color] += 1;
    }
  }

  // ---------------------------------
  
  const petList = [
    { name: "Buddy", type: "dog" },
    { name: "Mittens", type: "cat" },
    { name: "Rex", type: "dog" },
    { name: "Whiskers", type: "cat" },
    { name: "Hopper", type: "rabbit" },
    { name: "Fluffy", type: "rabbit" },
    { name: "Spot", type: "dog" }
  ];
  
  
  let animalz = {};
  
  
  for (let pet of petList) {
    if (animalz[pet.type] === undefined){
    animalz[pet.type] = 1;
    } else {
    animalz[pet.type] += 1;
    }
  }
  

  // ---------------------------------
  const numbers = [
    { value: 4, category: "A" },
    { value: 3, category: "A" },
    { value: 2, category: "B" },
    { value: 8, category: "B" },
    { value: 7, category: "A" }
  ];
  
  
  let evenNums = {};
  
  for (let number of numbers) {
    if (number.value % 2 === 0 && evenNums[number.category] == undefined){
    evenNums[number.category] = 1;
    }  else if (number.value % 2 === 0 && evenNums[number.category] !== undefined) {
    evenNums[number.category] += 1;
    }
  }

  // ---------------------------------

  
  









  // ---------------------------------



let classroom1 = {
  "Alice": 17,
  "Bob": 20,
  "Charlie": 22,
  "Diana": 16
};

let classroom2 = {
  "Eve": 18,
  "Frank": 21,
  "Grace": 15,
  "Hank": 17
};

let classroom3 = {
  "Ivy": 19,
  "Jack": 20,
  "Kara": 16,
  "Leo": 18
};



//make hashmaps of everyones ages
//then compares the hashmaps to see if the match


let adults = () => {

let class1 = { 
adult: 0,
child: 0
};

let class2 = { 
adult: 0,
child: 0
};

let class3 = { 
adult: 0,
child: 0
};
  

for (let name in classroom1) {
let age = classroom1[name]

if (age >= 18) {
  class1["adult"] += 1;
} else {
  class1["child"] += 1;
}

}

for (let name in classroom2) {
  let age = classroom2[name]

  if (age >= 18) {
  class2["adult"] += 1;
  } else {
  class2["child"] += 1;
  }
}


for (let name in classroom3) {
  let age = classroom3[name]

  if (age >= 18){
  class3["adult"] += 1;
  } else {
  class3['child'] += 1;
  }
}

//dont need to compare length

for (let key in class1) {
  if (class2[key] === undefined || class1[key] !== class2[key]) {
  return false;
  } else if (class3[key] === undefined || class1[key] !== class3[key]) {
  return false
  }
}


  return true
}

// ---------------------------------

let city1 = {
  "2025-07-01": 58,
  "2025-07-02": 62,
  "2025-07-03": 59,
  "2025-07-04": 65
};

let city2 = {
  "2025-07-01": 61,
  "2025-07-02": 57,
  "2025-07-03": 60,
  "2025-07-04": 66
};

let city3 = {
  "2025-07-01": 55,
  "2025-07-02": 70,
  "2025-07-03": 68,
  "2025-07-04": 56
};


// You are given three objects representing daily weather reports from three different cities. Each key is a date, and each value is the temperature recorded on that day.

// Your task:

// Count how many days were "cold" (< 60°F) and how many were "warm" (>= 60°F) in each city.

// Use separate hashmaps to track the "cold" and "warm" counts per city.

// Return true only if all three cities have the same count of "cold" and "warm" days.

// ---------------------------------

