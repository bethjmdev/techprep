


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

  

  
  